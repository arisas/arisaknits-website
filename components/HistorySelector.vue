<template>
    <div>
        <!-- telling parent component index.vue to listen for "historySelected" see: https://vuejs.org/guide/components/events.html & https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events-->
        <select title="return counter to a particular point in" @change="onChange" class="w-44 m-2">
            <option value="">Row Counter History</option>
            <!-- 
            for loop 
            value for each item is index
        -->
            <option v-for="(historyItem, index) in counterHistory" :value="index">
                {{ historyItem.timeString }} - Row: {{ historyItem.counterData }}
            </option>
        </select>
    </div>
</template>

<script>
const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

export default {
    props: {
        historyList: {
            type: Array,
        }
    },
    computed: {
        // a computed getter
        counterHistory() {
            // `this` points to the component instance
            return this.historyList.map(record => {
                const timeString = (new Date(record.timestamp)).toLocaleString('en-US', options);
                return {
                    // spread syntax https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
                    // easier way to do 
                    // key record.timestamp: timestamp and record.counterData: counterData
                    // "timeString" is actually timeString: timeString but you don't need to write that all out if it's the same name
                    ...record,
                    timeString
                }
            })
        }
    },

    methods: {
        onChange(event) {
            // selection confirmation
            if (confirm('Are you sure you want to go back to a previous save?'))
                this.$emit('historySelected', event.target.value);
            event.target.value = '';
        },


    },

};
</script>