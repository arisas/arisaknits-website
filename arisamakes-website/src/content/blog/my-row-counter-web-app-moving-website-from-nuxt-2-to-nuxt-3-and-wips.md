---
title: 'My row counter web app, moving to Nuxt 3, and WIPs'
description: "I've been programming more regularly working on my row counter and finally moving my website from Nuxt 2 to Nuxt 3. Also, some Work-In-Progress fiber projects that I'm currently working on at the end :)"
publishedAt: '2023-08-07T04:12:28.930Z'
---

W﻿ow, it's been over a year since my last blog post! I﻿t was a busy year for me being a guardian for my cousin for two years while they finished high school. I now have time and I'm excited to get back at learning to program and continue working on my row counter app!

## Row Counter Web App

I released an app on watchOS last year with lots of help from my husband that you can find on the [App Store](https://apps.apple.com/us/app/arisaknits-row-counter/id1598992914). I'm back working on the app to get it to the point where it has all the features I want to solve my own needs while I knit or crochet! I wanted my friends that don't have an Apple Watch to test it out, though, so I've pivoted for now to work on a free web app version that I'll host on my website to include features that I plan to include on my watchOS app.

### What I've learned this week

T﻿his week's focus was on getting the page to save the current row "value" to localStorage. If someone leaves the page and comes back later to see what row they're on, they'll have that info all saved instead of it resetting back to zero.

- I﻿ was reminded that = is to assign the variable to the value while == is for comparing.
- I learned about how to pull data from localStorage if it’s “valid” to avoid bugs.
- N﻿aN stands for "Not a Number" and we're using NaN to avoid bugs by making sure the row value isn't saved if the value is NaN.
- I﻿ learned how to test localStorage in the browser!
- I'm understanding more on when I need to create variables. This week, I﻿ created a variable to get the value from localStorage, a﻿nd change the variable type to an integer.

H﻿ere's a photo of us testing localStorage in the browser:

![Macbook with the row counter web app up on the browser while we test localStorage](/img/img_1238.jpeg)

T﻿his is what the web app currently looks like, but I hope to get it roughly to what I designed on Figma:

![Screenshot of the row counter figma design. Main counter in the middle, secondary counter on the bottom left, and undo button on the top left.](/img/img_1314.png)

Y﻿ou can find my code from this week below. The comments has been so helpful in remembering and really understanding what I did and why.

```
// setting counter to value in localStorage once component has mounted
  mounted() {
    // 1. get data from localStorage, created variable "persistedCounter"
    const persistedCounter = localStorage.getItem(COUNTER_STORAGE_KEY);
    // 2. validate counter data is a valid integer
      // 2.1 convert string to integer and create new variable "pesistedCounterIn"
      const persistedCounterInt = parseInt(persistedCounter, 10);
      // 2.2 if persistedCounterInt is NaN, do nothing
      if (isNaN(persistedCounterInt)) {
        return;
      }
      // 2.3 check if integer is inside range 0 and 999
      if (persistedCounterInt > COUNTER_VALUE_MAX || persistedCounterInt < COUNTER_VALUE_MIN) {
        return;
      }
    // 3. if data is valid, set counter to localStorage value
      this.counter = persistedCounterInt;
    // 4. else do nothing, counter is already initialized to 0

  }
```

### W﻿hat I'll work on next

I﻿'d like to work on the undo button where there's an option to pull from multiple "saves" with some timestamp in case someone accidentally increase the row.

## M﻿oving website from Nuxt 2 to Nuxt 3 (and to Vue 3)

I﻿'ve been following Debbie O'Brien's [Migrating from Nuxt 2 to Nuxt 3 article](https://debbie.codes/blog/migrating-nuxt2-nuxt3/) and getting help from my husband when I get stuck. The article has been super helpful and I actually understand most of what I'm supposed to do!

## Current Work In Progress

I﻿ finished up my [Cleo Cardigan by RachelKnitThings](https://www.ravelry.com/patterns/library/cleo-cardigan) and [Beret My Way by Gingko B](https://gingkob.com/b/8lhUF) a few days before the Taylor Swift concert. I've been working on the cardigan for a few months now and it just happen to be the perfect colors for the concert! I had left over mohair from the cardigan, so I ended up making a beret!

![Arisa from behind with her face smiling at the camera. She's where a beret and cardigan in pink, purple, and white at the Taylor Swift concert](/img/img_1066.jpeg)

My grandma took my shawl that I made so now I'm working on a new shawl [Waves of Tory by Red Earth Designs](https://www.ravelry.com/patterns/library/waves-of-tory). I also recently bought a Rigid Heddle Loom and I'm learning how to weave! I've been wanting to learn since I got back from Thailand and Laos -- it's another way I want to connect and learn more about my Thai and Isan-Lao roots.

![Arisa holding her work in progress knit progress of the shawl while on the airplane](/img/img_1223.jpeg)

![Arisa outside on a sunny day with her Ashford Knitter's Loom on her lap. There's green-blue weft yarn, gray-blue warp yarn, and orange scrap yarn.](/img/img_0998.jpeg)
