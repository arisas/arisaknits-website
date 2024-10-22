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

  <p class="text-wrap mx-2 mb-2 text-center text-gray-500">
    The counter will save to the browser you're using. You can leave and come
    back later!
  </p>

  <p class="text-wrap mx-2 mb-10 text-center text-gray-500">
    <span class="font-bold">If you're on iOS, iPadOS, or Safari:</span> make
    sure to come back to this page within 7 days! Apple will erase this data
    after a week.
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
      <!-- Enable Repeat Row -->
      <p class="text-center">
        Reset after row:
        <input
          v-model="activeCounter.settings.repeatRow"
          type="number"
          class="w-12 touch-manipulation rounded bg-slate-200 pl-2"
          @change="saveSettings"
        />
      </p>

      <!-- Reset Button -->
      <div class="m-4 flex items-center justify-evenly">
        <button
          type="button"
          class="text-l h-10 w-52 touch-manipulation rounded-lg bg-rose-700 p-1 font-medium text-white hover:bg-rose-900 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500"
          :disabled="disableButton"
          @click="resetCounter"
        >
          Reset Counter
        </button>
      </div>

      <!-- Row Counter History Selector -->
      <div class="flex items-center justify-center">
        <!-- child compontent HistorySelector.vue 
  js historyList from child component respond with activeCounter.counterHistory from parent compontent
  listen for historySelected from child compontent 
  and respond with historySelected defined in parent component -->
        <HistorySelector
          :historyList="activeCounter.counterHistory"
          @historySelected="historySelected"
        />
      </div>
    </div>
  </div>

  <!-- create new counter array in local storage when button is pressed-->
  <div>
    <CreateCounter />
  </div>

  <div class="mb-16 mt-10 flex w-80 items-center justify-evenly">
    <button
      type="button"
      class="mx-8 h-14 w-14 touch-manipulation rounded-full border-4 border-gray-200 fill-gray-700 hover:border-gray-300 hover:fill-gray-900 disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-100 disabled:fill-slate-300"
      :disabled="disableButton"
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
      {{ activeCounter.currentRow }}
    </button>
  </div>

  <p
    v-if="activeCounter.settings.repeatRow"
    class="text-xl font-bold text-gray-700"
  >
    Repeats:
    {{ activeCounter.linkedCounter }}
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
const COUNTER_STORAGE_KEY = 'activeCounter.currentRow';
const COUNTER_STORAGE_KEY_LINKED = 'activeCounter.linkedCounter';

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
   * Holds the currentRow value from a point in time
   * @typedef {Object} CounterHistoryEntry
   * @property {Number} timestamp - Indicates when the entry was recorded.
   * @property {Number} counterData - The counter value.
   * @property {Number?} linkedCounterData - The activeCounter.linkedCounter value.
   */
  data() {
    return {
      selected: '',
      toggleValue: false,
      //save activeCounter to localStorage
      activeCounter: {
        currentRow: 0,
        linkedCounter: 0,
        /**
         * @type Array<CounterHistoryEntry>
         */
        counterHistory: [],
        settings: {
          repeatRow: 0,
        },
      },

      disabled: false,
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
  computed: {
    disableButton() {
      return this.activeCounter.currentRow == COUNTER_VALUE_MIN;
    },
  },

  methods: {
    /**
     * Save array activeCounter.counterHistory in localStorage
     */
    persistCounterHistory() {
      //use same key 'activeCounter.counterHistory' as localStorage.getItem
      localStorage.setItem(
        'activeCounter.counterHistory',
        JSON.stringify(this.activeCounter.counterHistory),
      );
    },

    saveSettings() {
      // repeatRow can't be greater than 999 or lower than 1
      if (
        this.activeCounter.settings.repeatRow > 999 ||
        this.activeCounter.settings.repeatRow < 1
      ) {
        this.activeCounter.settings.repeatRow = null;
      }
      // Changing repeatRow also sets activeCounter.linkedCounter to 0
      this.activeCounter.linkedCounter = 0;
      this.currentRow = 0;

      //save settings everytime repeatRow is updated
      localStorage.setItem(
        'settings',
        JSON.stringify(this.activeCounter.settings),
      );
    },
    /**
     * @returns true if repeat row setting is enabled AND increasing the counter would exceed the configured value;
     *  false if repeat row setting is disabled (`null`,`undefined`, or `0`) or the counter would still be below the configured value if incremented;
     */
    shouldRepeatRow() {
      if (
        this.activeCounter.settings.repeatRow > 0 &&
        this.activeCounter.currentRow + 1 >
          this.activeCounter.settings.repeatRow
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
        // set activeCounter.currentRow to 1
        this.activeCounter.currentRow = 1;
        //increase activeCounter.linkedCounter ++
        this.activeCounter.linkedCounter++;
        localStorage.setItem(
          COUNTER_STORAGE_KEY_LINKED,
          this.activeCounter.linkedCounter,
        );
      } else if (this.activeCounter.currentRow < COUNTER_VALUE_MAX) {
        // increase the row count
        this.activeCounter.currentRow++;
      }
      // save the row count to local storage when increased
      localStorage.setItem(COUNTER_STORAGE_KEY, this.activeCounter.currentRow);
      this.updateHistory();
    },
    /**
     * Decrease the row count by 1
     */
    decreaseNumber() {
      if (this.activeCounter.currentRow > COUNTER_VALUE_MIN) {
        // decrease the row count
        this.activeCounter.currentRow--;
        // save the row count to local storage when decreased
        localStorage.setItem(
          COUNTER_STORAGE_KEY,
          this.activeCounter.currentRow,
        );
        this.updateHistory();
      }
    },
    /**
     * Save current state to activeCounter.counterHistory
     */
    updateHistory() {
      // const counter1 = {timestamp: '2024-10-03 09:00:00', counterData: '5', activeCounter.linkedCounter: }
      /**
       * @type {CounterHistoryEntry}
       */
      const counter1 = {
        timestamp: Date.now(),
        counterData: this.activeCounter.currentRow,
        linkedCounterData:
          this.activeCounter.settings.repeatRow ?
            this.activeCounter.linkedCounter
          : null,
      };

      this.activeCounter.counterHistory.unshift(counter1);

      // remove oldest item once maxLength is reached
      if (this.activeCounter.counterHistory.length > this.maxLength) {
        this.activeCounter.counterHistory.pop();
        console.assert(
          this.activeCounter.counterHistory.length === this.maxLength,
          'activeCounter.counterHistory should be at max capacity',
          this.maxLength,
        );
      }
      this.persistCounterHistory();
    },
    /**
     * Undo the row count increase to previous save in activeCounter.counterHistory
     */
    undoCounter() {
      //make sure there's at least one data in activeCounter.counterHistory
      //TODO: gray out icon when there is 1 or less data on localStorage
      if (this.activeCounter.counterHistory.length < 2) {
        return;
      }
      //choose previous save from current selected by shift (remove from the front)
      this.activeCounter.counterHistory.shift();
      //show counterData on counter
      this.activeCounter.currentRow =
        this.activeCounter.counterHistory[0].counterData;
      //keeping the lines below will duplicate the save data that we pulled from activeCounter.counterHistory
      // this.updateHistory();
      // this.updateLocalStorage();
    },
    resetCounter() {
      // setting counter to 0 while keeping activeCounter.counterHistory data
      if (
        this.activeCounter.currentRow > COUNTER_VALUE_MIN ||
        this.activeCounter.linkedCounter > COUNTER_VALUE_MIN
      ) {
        this.activeCounter.currentRow = 0;
        this.activeCounter.linkedCounter = 0;

        // save to local storage
        localStorage.setItem(
          COUNTER_STORAGE_KEY,
          this.activeCounter.currentRow,
        );
        localStorage.setItem(
          COUNTER_STORAGE_KEY_LINKED,
          this.activeCounter.linkedCounter,
        );
        this.updateHistory();
      }
    },
    //update counter to the selected history item
    historySelected(historyIndex) {
      // remove entries before the selected item in array
      this.activeCounter.counterHistory.splice(0, historyIndex);

      // update this.activeCounter.currentRow and this.activeCounter.linkedCounter to selected counterData and linkedCounterData using the index value
      this.activeCounter.currentRow =
        this.activeCounter.counterHistory[0].counterData;
      this.activeCounter.linkedCounter =
        this.activeCounter.counterHistory[0].linkedCounterData;
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

  /**
   * Each Vue component instance goes through a series of initialization steps when it's created -
   * for example, it needs to set up data observation, compile the template, mount the instance to the DOM, and update the DOM when data changes.
   * Along the way, it also runs functions called __lifecycle hooks__, giving users the opportunity to add their own code at specific stages.
   *
   * The `mounted` hook can be used to run code after the component has finished the initial rendering and created the DOM nodes.
   *
   * A component is considered mounted after:
   * - All of its synchronous child components have been mounted (does not include async components or components inside <Suspense> trees).
   * - Its own DOM tree has been created and inserted into the parent container. Note it only guarantees that the component's DOM tree is in-document if the application's root container is also in-document.
   *
   * This hook is typically used for performing side effects that need access to the component's rendered DOM, or for limiting DOM-related code to the client in a [server-rendered application](https://vuejs.org/guide/scaling-up/ssr.html).
   *
   * __This hook is not called during server-side rendering.__
   *
   * @see https://vuejs.org/guide/essentials/lifecycle
   * @see https://vuejs.org/api/options-lifecycle.html#mounted
   * @see https://dev.to/firstclown/should-you-use-created-or-mounted-in-vue-2m5l
   */
  mounted() {
    console.error(
      `Mounted start. activeCounter.currentRow=${this.activeCounter.currentRow}, activeCounter.linkedCounter=${this.activeCounter.linkedCounter}, activeCounter.settings.repeatRow=${this.activeCounter.settings.repeatRow}, activeCounter.counterHistory[0]=${this.activeCounter.counterHistory[0]}`,
    );
    // setting counter to value in localStorage once component has mounted
    this.activeCounter.counterHistory =
      JSON.parse(localStorage.getItem('activeCounter.counterHistory')) ||
      this.activeCounter.counterHistory;

    //setting repeatRow to value in localStorage once component is mounted
    this.activeCounter.settings =
      JSON.parse(localStorage.getItem('activeCounter.settings')) ||
      this.activeCounter.settings;

    // set value in this.activeCounter.counterHistory to localStorage
    // persistedCounterInt = a function
    this.activeCounter.currentRow = this.getValidCounter();
    this.activeCounter.linkedCounter = this.getValidLinkedCounter();
    console.error(
      `Mounted end. currentRow=${this.activeCounter.currentRow}, activeCounter.linkedCounter=${this.activeCounter.linkedCounter}, activeCounter.settings.repeatRow=${this.activeCounter.settings.repeatRow}, activeCounter.counterHistory[0]=`,
      this.activeCounter.counterHistory[0],
    );
  },
};
</script>
