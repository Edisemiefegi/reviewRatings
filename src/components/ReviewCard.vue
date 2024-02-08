<template>
  <div class="flex flex-col gap-8">
    <div
      class="bg-white p-6 rounded-lg relative"
      v-for="(review, i) in store.Reviews"
      :key="i"
    >
      <div
        class="rounded-full text-center bg-green-600 w-12 h-12 border flex flex-col justify-center absolute -left-4 -top-4"
      >
        <p>{{ review.ratings }}</p>
      </div>
      <p>{{ review.text }}</p>
      <div class="absolute right-2 top-1 flex gap-2">
        <i class="pi pi-circle text-sm" @click="EditReview(review)"></i>
        <i
          class="pi pi-times text-sm"
          @click="store.DeleteReview(review.id)"
        ></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usereviewStore } from "../stores/reviewStore";

const store = usereviewStore();

console.log(store.Reviews);

const EditReview = (review) => {
  store.$patch({
    reviewToEdit: review,
  });
};
</script>
