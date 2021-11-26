<template>
  <nav class="container">
    <button
      class="pagination__button pagination__button--priv"
      :disabled="page <= 1"
      @click.prevent="prev"
    ></button>

    <ul class="pagination">
      <li v-if="lastRange || (totalPages === 4 && page !== 1)" class="pageItem">
        <a class="pageLink" href="1" @click.prevent="$emit('updatePage', 1)"
          >1</a
        >
      </li>
      <button
        v-if="lastRange"
        class="pageLink button"
        type="button"
        @click.prevent="firstThreePages"
      >
        ...
      </button>
      <li v-for="n in pages" :key="n" class="pageItem">
        <a
          class="pageLink"
          :class="{ isActive: n === page }"
          :href="'#page-' + n"
          @click.prevent="$emit('updatePage', n)"
          >{{ n }}</a
        >
      </li>
      <li class="pageItem">
        <button
          v-if="beforeLastPage && !firstOrLastRangePages"
          class="pageLink button"
          type="button"
          @click.prevent="nextThreePages"
        >
          ...
        </button>
      </li>
      <li class="pageItem">
        <a
          v-if="!firstOrLastRangePages"
          class="pageLink"
          :class="{ isActive: totalPages === page }"
          :href="'#page-' + totalPages"
          @click.prevent="$emit('updatePage', totalPages)"
          >{{ totalPages }}</a
        >
      </li>
    </ul>
    <button
      class="pagination__button pagination__button--next"
      :disabled="page >= totalPages"
      @click.prevent="next"
    />
  </nav>
</template>

<script>
function* range(start, length) {
  for (let i = 0; i < length; i += 1) {
    yield start + i;
  }
}

export default {
  name: "UiPagination",

  props: {
    totalPages: {
      type: Number,
      default: null,
    },
    page: {
      type: Number,
      default: null,
    },
  },

  computed: {
    pages() {
      if (this.page > this.totalPages - 3 && this.totalPages > 6) {
        return [
          ...range(
            Math.max(Math.min(this.page, this.totalPages - 2), 3),
            Math.min(this.totalPages, 3)
          ),
        ];
      }
      if (this.page > this.totalPages - 3) {
        if (this.totalPages === 5) {
          return [...range(1, 5)];
        }
        return [
          ...range(
            Math.max(Math.min(this.page, this.totalPages - 2), 1),
            Math.min(this.totalPages, 3)
          ),
        ];
      }
      return [
        ...range(
          this.totalPages < 6
            ? Math.max(Math.min(this.page, this.totalPages - 2), 3) - 2
            : Math.max(Math.min(this.page, this.totalPages), 3) - 2,
          this.totalPages < 6
            ? Math.min(this.totalPages, 5)
            : Math.min(this.totalPages, 3)
        ),
      ];
    },
    beforeLastPage() {
      return this.page < this.totalPages - 1;
    },
    firstOrLastRangePages() {
      return this.totalPages < 6 || this.page > this.totalPages - 3;
    },
    lastRange() {
      return this.page > this.totalPages - 3 && this.totalPages > 5;
    },
  },

  methods: {
    next() {
      this.$emit("updatePage", Math.min(this.page + 1, this.totalPages));
    },

    prev() {
      this.$emit("updatePage", Math.max(this.page - 1, 1));
    },

    nextThreePages() {
      this.$emit(
        "updatePage",
        this.page > this.totalPages - 6 && this.totalPages % 3 !== 0
          ? Math.min(this.page + 1, this.totalPages)
          : Math.min(this.page + 3, this.totalPages)
      );
    },

    firstThreePages() {
      this.$emit("updatePage", Math.min(1, 3));
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
}

.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  margin: 0 10px;
}

.pageLink {
  position: relative;
  display: block;
  border-bottom: 3px solid transparent;
  color: var(--green-color);
  opacity: 0.6;
  text-decoration: none;
  text-align: center;
  min-width: 32px;
  height: 32px;
  padding: 6px 5px;
}
.isActive {
  color: var(--green-color);
  border-color: var(--navy-color);
  opacity: 1;
}

.leftIcon {
  transform: rotate(90deg);
}

.rightIcon {
  transform: rotate(-90deg);
}

.button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.pagination__button {
  background-color: transparent;
  outline: none;
  border: none;
  position: relative;
  height: 30px;
  width: 20px;
  font-size: 24px;
  color: var(--green-color);
}
.pagination__button--priv:after {
  position: absolute;
  content: "<";
  top: 0;
  left: 0;
}
.pagination__button--next:after {
  position: absolute;
  content: ">";
  top: 0;
  left: 0;
}
</style>
