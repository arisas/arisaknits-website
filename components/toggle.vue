<template>
  <button
    class="w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 duration-300 cursor-pointer transition-color"
    :class="{ 'bg-gray-300': modelValue }"
    :aria-checked="modelValue.toString()"
    @click="toggle()"
  >
    <div
      class="bg-white w-6 h-6 rounded-full shadow-md transition-transform duration-300"
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
