<template>
  <form
    @submit.prevent="AddReview"
    class="bg-white flex flex-col gap-4 p-8 rounded-lg w-3/5 text-center"
  >
    <p class="font-bold">How would you rate your service with us?</p>
    <Card @select="updateRating" :num="review.ratings" />
    <div class="border p-1 rounded-md w-full flex justify-between">
      <input
        v-model="review.text"
        type="text"
        placeholder="Write a review..."
        class="text-sm outline-none w-3/5"
      />
      <button
        class="w-20 p-2 bg-black rounded-lg text-sm text-white"
        :disabled="btnDisabled"
        type="submit"
      >
        {{ isEdit ? "Edit" : "Send" }}
      </button>
    </div>
    <p class="text-sm text-red-600" v-if="review.text.trim().length < 10">
      Text must be least 10 characters
    </p>
  </form>
  <div class="flex justify-between text-white font-bold w-3/5">
    <p>{{ store.Reviews.length }} Review</p>
    <p>Avarage Rating is {{ store.AverageRating }}</p>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Card from "./Card.vue";

import { usereviewStore } from "../stores/reviewStore";

const store = usereviewStore();

const reviewToEdit = computed(() => store.reviewToEdit);
const isEdit = ref(false);

const review = ref({
  text: "",
  id: "",
  ratings: "",
});

// const showreview = ref(false);
const btnDisabled = ref(false);

console.log(store.totalReview);

watch(reviewToEdit, () => {
  if (reviewToEdit.value) {
    review.value = { ...reviewToEdit.value };
    isEdit.value = true;
  }
});

const AddReview = () => {
  if (!review.value.ratings) {
    alert("Select rating");
    return;
  }

  if (review.value.text.trim().length < 10) {
    alert("Not up to 10 characters ");
    return;
  }

  const id = Math.floor(Math.random() * 1000);
  const payload = { ...review.value };

  if (isEdit.value) {
    //Edit review
    store.editReview(payload);
    //set isEdit back to false
    isEdit.value = false;
  } else {
    payload.id = id;
    //Add review
    store.addReview(payload);
  }

  review.value = {
    text: "",
    id: "",
    ratings: "",
  };
};

const updateRating = (rate) => {
  console.log(rate);
  review.value.ratings = rate;
};
</script>
