<template>
  <button
    class="transition-color flex h-8 w-14 cursor-pointer items-center rounded-full bg-gray-300 p-1 duration-300"
    :class="{ 'bg-gray-300': modelValue }"
    :aria-checked="modelValue.toString()"
    @click="toggle()"
  >
    <div
      class="h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300"
      :class="{ 'translate-x-6': modelValue }"
    ></div>
  </button>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    toggle() {
      console.error('button was clicked', this.modelValue);
      this.$emit('update:modelValue', !this.modelValue);
    },
  },
};
</script>
