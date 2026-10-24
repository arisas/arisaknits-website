---
title: 'ArisaMakes Row Counter Update 3.2: Haptic Feedback and Scrolling Fix'

description: "Info on what's in the latest 3.2 update for the ArisaMakes Row Counter"

publishedAt: '2026-10-27T12:12:53.055Z'
---

Hello! I've made some minor fixes to the [ArisaMakes Row Counter](https://arisamakes.com/rowcounter/watchos/) in this 3.2 update. It took a lot longer than I was planning as I was hoping 3.2 would also include the Progressive Web App update to add support for iPhone. But here we are with a smaller update :)

You can download on the app on the iPhone App Store [here](https://apps.apple.com/us/app/arisamakes-row-counter/id1598992914?itsct=apps_box_badge&itscg=30200)

## Haptic Feedback

The counter buttons now have haptic feedback where you'll feel a small vibration when pressing either the increase or decrease button on the counter!

I wrote a blog already about how I went about adding this so you can read that [here](https://arisamakes.com/blog/swiftui-sensoryfeedback/).

## Fixing scrolling on the counter history list

The screen to view the listed timestamps in the save history was way too small and hard to navigate, so we adjusted the screen to scroll further down so that the listed timestamps take up more space on the screen as you scroll.

We did this by using [SwiftUI's ScrollView](https://developer.apple.com/documentation/swiftui/scrollview) applied to the whole save history view so that the whole view is scrollable. The history timestamps are in a [List](https://developer.apple.com/documentation/swiftui/list) so this does mean that the List is nested in a ScrollView. Not sure if that's the best way to do this, but it's working well!

We tried making the whole view as a List but that ended up breaking the history timestamps where what you selected did not actually get selected.

## Other changes

- Counter history only lists up to 10 timestamps due to limited space on watch screen
- Fixed icon spacing on the save history view

As always let me know if there's any other ways I can improve the app!
