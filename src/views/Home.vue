<template>
  <div class="bg-gray-500 max-h-full">
    <Header />
    <main class="flex flex-col gap-5 justify-center items-center py-10">
      <ReviewsForm />
      <div class="w-3/5">
        <ReviewCard />
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import Header from "../components/Header.vue";
import ReviewsForm from "../components/ReviewsForm.vue";
import ReviewCard from "../components/ReviewCard.vue";

const router = useRouter();
</script>

<style scoped></style>
