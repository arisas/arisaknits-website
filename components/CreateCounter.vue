<template>
  <div>
    <button
      type="button"
      class="text-l h-10 w-44 touch-manipulation rounded-lg bg-indigo-600 p-1 font-medium text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500"
    >
      + New Counter
    </button>
    <!-- 
            for loop 
            value for each item is index
        -->
    <!-- <option v-for="(historyItem, index) in counterHistory" :value="index">
        {{ historyItem.timeString }} - Row: {{ historyItem.counterData
        }}{{
          historyItem.linkedCounterData === null ?
            ''
          : ` (x${historyItem.linkedCounterData})`
        }}
      </option> -->
  </div>
</template>

<script>
// export default {
//   props: {
//     counterList: {
//       type: Array,
//     },
//   },
//   computed: {
//     // a computed getter
//     counterList() {
//       // `this` points to the component instance
//       return this.historyList.map((record) => {
//         const timeString = new Date(record.timestamp).toLocaleString(
//           'en-US',
//           options,
//         );
//         return {
//           // spread syntax https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//           // easier way to do
//           // key record.timestamp: timestamp and record.counterData: counterData
//           // "timeString" is actually timeString: timeString but you don't need to write that all out if it's the same name
//           ...record,
//           timeString,
//         };
//       });
//     },
//   },

//   methods: {
//     onChange(event) {
//       // selection confirmation
//       if (confirm('Are you sure you want to go back to a previous save?'))
//         this.$emit('historySelected', event.target.value);
//       event.target.value = '';
//     },
//   },
// };
</script>
