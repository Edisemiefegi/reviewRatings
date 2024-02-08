<template>
  <div class="flex gap-4">
    <div
      class="rounded-full w-12 h-12 border flex flex-col justify-center"
      v-for="num in numbers"
      :key="num"
      :class="selected == num ? 'bg-green-700 text-white' : 'bg-white'"
    >
      <p @click="selectnumber(num)">{{ num }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { defineEmits, defineProps } from "vue";

const selected = ref("");

const props = defineProps({
  num: Number || String,
});
const emit = defineEmits(["select"]);

const watchNumber = computed(() => props.num);

watch(watchNumber, () => {
  selected.value = props.num;
});

const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const selectnumber = (num) => {
  selected.value = num;
  emit("select", num);
};
</script>
