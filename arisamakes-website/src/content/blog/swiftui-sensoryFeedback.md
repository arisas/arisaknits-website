---
title: 'Adding haptic feedback support with SwiftUI'

description: 'Adding haptic feedback support for the ArisaMakes Row Counter and learning about sensoryFeedback for SwiftUI'

publishedAt: '2026-09-04T20:30:53.055Z'
---

Someone requested that we add tactile/haptic feedback support to the [ArisaMakes Row Counter](https://arisamakes.com/rowcounter/) for the buttons and it was such a great suggestion! I don't know why I didn't even think to add it, so here I am this week learning how to support it using [sensoryFeedback](<https://developer.apple.com/documentation/swiftui/view/sensoryfeedback(_:trigger:)>) for SwiftUI.

This update is planned for the 3.2 update which will include Burton's Progressive Web App work so that the row counter can also work on the iPhone, web, iPad. (And maybe Android?!)

I'm still very new to coding especially with SwiftUI, so I may have some incorrect info here because of this!

## SwiftUI's .sensoryFeedback

I added _.sensoryFeedback(.selection, trigger: rowCounter.currentRow)_ to the view the button is in.

There are multiple haptic feedback types and [this blog post "SwiftUI Haptics in iOS 26..."](https://swiftcrafted.dev/article/swiftui-haptics-ios-26-sensoryfeedback-core-haptics-ahap) has a great table of all the different cases and what they feel like. I used the feedback case _.selection_ which gives a "single light tick" feel.

_trigger_ monitors changes to a value to determine when to play the haptic feedback. So I used _rowCounter.currentRow_, the row counter value that we've already defined elsewhere, so that _trigger_ happens when the row counter value changes when increasing or decreasing the value.

I originally used _.sensoryFeedback(trigger: rowCounter.canIncrementRow() == True)_ but realized after talking to Burton that it wouldn't work because that statement will generally remain true and the value won't change. Basically, if the trigger doesn't change then the haptic feedback won't happen. The section "Why is .sensoryFeedback not working?" of [this blog post](https://swiftcrafted.dev/article/swiftui-haptics-ios-26-sensoryfeedback-core-haptics-ahap) helped me better understand this!

## Testing haptic feedback

The simulator can't test for haptic feedback so I had to test the code directly on my watch. Apple has [some instructions](https://developer.apple.com/documentation/Xcode/running-your-app-on-simulated-or-physical-devices) on how to do this, but I recommend also reading [this blog post "How I got Developer Mode to Show Up on watchOS..."](https://danielraffel.me/til/2025/02/01/how-i-got-developer-mode-to-appear-on-watchos-when-it-was-missing/).

I basically had to connect my iPhone to my MacBook via USB. Xcode should detect your Apple Watch and you should be able to select your watch from the selection of devices to Run your build. My watch didn't show up at first so I had to disconnect and reconnect my iPhone to reset it.

Once Xcode detects your watch, you'll need to select "Trust" on your watch and go to Settings > Privacy & Security on your watch to allow Developer Mode. Developer Mode setting didn't show up for me at first in Privacy & Security, but leaving Settings and going back into Settings worked!

Well, I got haptic feedback all working on and was able to test it on my watch directly. Hopefully we can ship this change soon!!!
