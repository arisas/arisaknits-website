<template>
  <div class="my-8 text-center">
    <img
      alt="ArisaKnits Row Counter App Icon of Skeins and a Cake of Yarn"
      title="ArisaKnits Row Counter App Icon of Skeins and a Cake of Yarn"
      class="relative mx-auto max-h-20 rounded-full object-cover"
      decoding="auto"
      src="~assets/img/icon_234.png"
      loading="lazy"
    />

    <h1 class="my-2 text-xl font-extrabold lg:text-3xl">
      ArisaKnits Row Counter (beta)
    </h1>
  </div>

  <p class="mb-10 text-center text-gray-500">
    The counter will save to the browser you're using! You can leave and come
    back later.
  </p>

  <!-- settings section -->
  <div class="mb-10 w-64 rounded-lg bg-gray-100 p-2">
    <button
      class="touch-manipulation fill-gray-600 text-center text-xl text-gray-600 hover:fill-gray-800 hover:text-gray-800"
      @click="visible = !visible"
    >
      <svg
        class="inline-block h-10 w-10"
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        viewBox="0 0 24 24"
      >
        <g>
          <path d="M0,0h24v24H0V0z" fill="none" />
          <path
            d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"
          />
        </g>
      </svg>
      Settings
    </button>

    <div v-if="visible">
      <!-- Reset Button -->
      <p class="text-center">
        Reset after row:
        <input
          v-model="settings.repeatRow"
          type="number"
          @input="
            () => {
              if (settings.repeatRow > 999 || settings.repeatRow < 1) {
                settings.repeatRow = null;
              }
              linkedCounter = 0;
            }
          "
          class="w-12 touch-manipulation rounded bg-slate-200 pl-2"
          @change="saveSettings"
        />
      </p>
      <div class="m-4 flex items-center justify-evenly">
        <button
          type="button"
          class="text-l h-10 w-52 touch-manipulation rounded-lg bg-indigo-600 p-1 font-medium text-white hover:bg-indigo-700"
          @click="resetCounter"
        >
          Reset All Counters
        </button>
      </div>

      <!-- Row Counter History Selector -->
      <div class="flex items-center justify-center">
        <!-- child compontent HistorySelector.vue 
  js historyList from child component respond with counterHistory from parent compontent
  listen for historySelected from child compontent 
  and respond with historySelected defined in parent component -->
        <HistorySelector
          :historyList="counterHistory"
          @historySelected="historySelected"
        />
      </div>
    </div>
  </div>

  <!-- Toggle button -->
  <!-- <div class="flex items-center justify-center">
        <toggle v-model="toggleValue" />
    </div> -->

  <!-- Style 1: increase and undo button style counter -->
  <!-- 
    <div v-if="!toggleValue" class="items-center justify-evenly">

        <h2 class="text-gray-500 text-xl text-center">Style 1</h2>
        <div class="flex items-center w-72 mt-5 justify-evenly m-auto pb-10"> -->

  <!-- Undo to previous saved data -- connect to localstorage, data structure, array of objects with timestamp and data -->
  <!-- <button type="button"
                class="rounded-full hover:border-gray-300 border-gray-200 border-4 h-10 w-10 hover:fill-gray-900 fill-gray-700 mx-8 touch-manipulation"
                @click="undoCounter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M20 13.5C20 17.09 17.09 20 13.5 20H6V18H13.5C16 18 18 16 18 13.5S16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5C17.09 7 20 9.91 20 13.5Z" />
                </svg>
            </button>

            <button type="button"
                class="text-7xl rounded-full h-40 w-40 hover:border-gray-300 border-gray-200 border-8 hover:text-gray-900 text-gray-700 touch-manipulation"
                @click="increaseNumber">

                {{ counter }}

            </button>


        </div>
    </div> -->

  <!-- Style 2: increase and decrease button style counter -->

  <!-- <div v-else="toggleValue" class="items-center justify-evenly"> -->

  <!-- <h2 class="text-gray-500 text-xl text-center">Style 2</h2> -->

  <div class="mb-16 mt-10 flex w-80 items-center justify-evenly">
    <button
      type="button"
      class="mx-8 h-14 w-14 touch-manipulation rounded-full border-4 border-gray-200 fill-gray-700 hover:border-gray-300 hover:fill-gray-900"
      @click="decreaseNumber"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 13H5v-2h14v2z" />
      </svg>
    </button>

    <button
      type="button"
      class="h-48 w-48 touch-manipulation rounded-full border-8 border-gray-200 text-7xl text-gray-700 hover:border-gray-300 hover:text-gray-900"
      @click="onRowIncrease"
    >
      {{ counter }}
    </button>

    <!-- <p class="text-7xl rounded-full h-28 w-28 text-gray-700 text-center">

                {{ counter }}

            </p> -->
    <!-- 
            <button type="button"
                class="rounded-full hover:border-gray-300 border-gray-200 border-4 h-10 w-10 hover:fill-gray-900 fill-gray-700 touch-manipulation"
                @click="increaseNumber">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
            </button> -->
  </div>
  <!-- </div> -->

  <p v-if="settings.repeatRow" class="text-xl font-bold text-gray-700">
    Repeats:
    {{ linkedCounter }}
  </p>
</template>

<script>
/**
 * Slight optimization for our constants.
 * Since these are constants that are not reactive nor are they used in the template,
 * there is no need for them to be in the data section.
 */
const COUNTER_VALUE_MAX = 999;
const COUNTER_VALUE_MIN = 0;
/**
 * The localStorage key that the row counter is saved under.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 * @see https://www.w3schools.com/jsref/prop_win_localstorage.asp
 */
const COUNTER_STORAGE_KEY = 'counter';
const COUNTER_STORAGE_KEY_LINKED = 'linkedCounter';

/**
 * Set length limit to data stored in array -- it will delete data at the end of array
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
 * Unshift to save data at the beginning of the array
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
 */

export default {
  setup() {
    useHead({
      title: 'Row Counter',
    });
  },

  /**
   * Holds the counter value from a point in time
   * @typedef {Object} CounterHistoryEntry
   * @property {Number} timestamp - Indicates when the entry was recorded.
   * @property {Number} counterData - The counter value.
   * @property {Number} linkedCounterData - The linkedCounter value.
   */
  data() {
    return {
      selected: '',
      toggleValue: false,
      counter: 0, // load from localStorage when component mounts in methods.
      linkedCounter: 0,

      /**
       * @type Array<CounterHistoryEntry>
       */
      counterHistory: [],
      settings: {
        repeatRow: 0,
      },
      maxLength: 10,
      historyItem: '',
      visible: false,
    };
  },

  // computed: {
  //   computedVisibility: function () {
  //     return this.visibility;
  //   }
  // },

  methods: {
    /**
     * Save array counterHistory in localStorage
     */
    persistCounterHistory() {
      //use same key 'counterHistory' as localStorage.getItem
      localStorage.setItem(
        'counterHistory',
        JSON.stringify(this.counterHistory),
      );
    },

    saveSettings() {
      localStorage.setItem('settings', JSON.stringify(this.settings));
      //save settings everytime repeatRow is updated
      // this.linkedCounter = 0;
    },
    /**
     * @returns true if repeat row setting is enabled AND increasing the counter would exceed the configured value;
     *  false if repeat row setting is disabled (`null`,`undefined`, or `0`) or the counter would still be below the configured value if incremented;
     */
    shouldRepeatRow() {
      if (
        this.settings.repeatRow > 0 &&
        this.counter + 1 > this.settings.repeatRow
      ) {
        return true;
      }

      return false;
    },
    /**
     * Increase the row count by 1
     */
    onRowIncrease() {
      if (this.shouldRepeatRow()) {
        // set counter to 1
        this.counter = 1;
        //increase linkedCounter ++
        this.linkedCounter++;
        localStorage.setItem(COUNTER_STORAGE_KEY_LINKED, this.linkedCounter);
      } else if (this.counter < COUNTER_VALUE_MAX) {
        // increase the row count
        this.counter++;
      }
      // save the row count to local storage when increased
      localStorage.setItem(COUNTER_STORAGE_KEY, this.counter);
      this.updateHistory();
    },
    /**
     * Decrease the row count by 1
     */
    decreaseNumber() {
      if (this.counter > COUNTER_VALUE_MIN) {
        // decrease the row count
        this.counter--;
        // save the row count to local storage when decreased
        localStorage.setItem(COUNTER_STORAGE_KEY, this.counter);
        this.updateHistory();
      }
    },
    /**
     * Save current state to counterHistory
     */
    updateHistory() {
      // const counter1 = {timestamp: '2024-10-03 09:00:00', counterData: '5', linkedCounter: }
      /**
       * @type {CounterHistoryEntry}
       */
      const counter1 = {
        timestamp: Date.now(),
        counterData: this.counter,
        linkedCounterData: this.linkedCounter,
      };

      this.counterHistory.unshift(counter1);

      // remove oldest item once maxLength is reached
      if (this.counterHistory.length > this.maxLength) {
        this.counterHistory.pop();
        console.assert(
          this.counterHistory.length === this.maxLength,
          'counterHistory should be at max capacity',
          this.maxLength,
        );
      }
      this.persistCounterHistory();
    },
    /**
     * Undo the row count increase to previous save in counterHistory
     */
    undoCounter() {
      //make sure there's at least one data in counterHistory
      //TODO: gray out icon when there is 1 or less data on localStorage
      if (this.counterHistory.length < 2) {
        return;
      }
      //choose previous save from current selected by shift (remove from the front)
      this.counterHistory.shift();
      //show counterData on counter
      this.counter = this.counterHistory[0].counterData;
      //keeping the lines below will duplicate the save data that we pulled from counterHistory
      // this.updateHistory();
      // this.updateLocalStorage();
    },
    resetCounter() {
      // setting counter to 0 while keeping counterHistory data
      this.counter = 0;
      this.linkedCounter = 0;
    },
    //update counter to the selected history item
    historySelected(historyIndex) {
      // remove entries before the selected item in array
      this.counterHistory.splice(0, historyIndex);

      // update this.counter and this.linkedCounter to selected counterData and linkedCounterData using the index value
      this.counter = this.counterHistory[0].counterData;
      this.linkedCounter = this.counterHistory[0].linkedCounterData;
      // update
    },
    // showSettings: function (event) {
    //   this.visibility = 'visible';
    // }

    getValidCounter() {
      // 1. get data from localStorage, created variable "persistedCounter"
      const persistedCounter = localStorage.getItem(COUNTER_STORAGE_KEY);
      // 2. validate counter data is a valid integer
      // 2.1 convert string to integer and create new variable "persistedCounterInt"
      const persistedCounterInt = parseInt(persistedCounter, 10);
      // 2.2 if persistedCounterInt is NaN, do nothing

      if (isNaN(persistedCounterInt)) {
        return 0;
      }
      // 2.3 check if integer is inside range 0 and 999
      if (
        persistedCounterInt > COUNTER_VALUE_MAX ||
        persistedCounterInt < COUNTER_VALUE_MIN
      ) {
        return 0;
      }

      return persistedCounterInt;
    },

    getValidLinkedCounter() {
      const persistedLinkedCounter = localStorage.getItem(
        COUNTER_STORAGE_KEY_LINKED,
      );
      const persistedLinkedCounterInt = parseInt(persistedLinkedCounter, 10);
      if (isNaN(persistedLinkedCounterInt)) {
        return 0;
      }

      if (
        persistedLinkedCounterInt > COUNTER_VALUE_MAX ||
        persistedLinkedCounterInt < COUNTER_VALUE_MIN
      ) {
        return 0;
      }

      return persistedLinkedCounterInt;
    },
  },
  // 3. if data is valid, set counter to localStorage value

  // 4. else do nothing, counter is already initialized to 0

  mounted() {
    console.error(
      `Mounted start. counter=${this.counter}, linkedCounter=${this.linkedCounter}, settings.repeatRow=${this.settings.repeatRow}, counterHistory[0]=${this.counterHistory[0]}`,
    );
    // setting counter to value in localStorage once component has mounted
    this.counterHistory =
      JSON.parse(localStorage.getItem('counterHistory')) || this.counterHistory;

    //setting repeatRow to value in localStorage once component is mounted
    this.settings =
      JSON.parse(localStorage.getItem('settings')) || this.settings;

    // set value in this.counterHistory to localStorage
    // persistedCounterInt = a function
    this.counter = this.getValidCounter();
    this.linkedCounter = this.getValidLinkedCounter();
    console.error(
      `Mounted end. counter=${this.counter}, linkedCounter=${this.linkedCounter}, settings.repeatRow=${this.settings.repeatRow}, counterHistory[0]=`,
      this.counterHistory[0],
    );
  },
};
</script>
