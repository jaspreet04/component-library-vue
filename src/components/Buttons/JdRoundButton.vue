<template>
  <button type="button" class="rounded" :class="props.className"> <slot/></button>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  className: String
})
</script>