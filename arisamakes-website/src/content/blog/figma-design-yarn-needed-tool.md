---
title: 'Designing in Figma - Tool for How Much Yarn is Needed'

description: 'New video of me designing in Figma a new tool for how to calculate how much yarn is needed for a pattern'

publishedAt: '2026-09-18T13:42:53.055Z'
---

I'm experimenting with designing a tool that you can use to calculate how much yarn you need. For example, you're looking at a pattern and you're at the yarn store and you need help figuring out what yarn to buy. It can be confusing, especially as a beginner crocheter or knitter, to navigate what yarn you need for a pattern with all the different names for the yarn weights/yarn thickness. So, I'm hoping this tool would be helpful for that!

I have a new video out on YouTube on [Designing in Figma - Tool for How Much Yarn is Needed](https://www.youtube.com/watch?v=aVwv2JKlJxk)!

I've been noodling on this tool idea for a while, and I'm not sure if anyone would use a tool like this, so I thought I'd spend some time designing it out on Figma to experiment! This feature/tool isn't set in stone so things may change drastically and I might decide to not add this feature in the app at all!

Of course, I've already thought of other scenarios I didn't consider during this recording. I may record another video the next time I work on this!

## My thought process around the design

![My written notes on my thought process for designing the yarn needed tool](../../assets/blog/img/YarnNeededThoughtProcess.jpeg 'My written notes on my thought process for designing the yarn needed tool')

Since people seem to like the simplicity and ease of use of the [ArisaMakes Row Counter](http://localhost:4321/rowcounter) I want to make sure that experience remains as I consider adding more tools to the app. So, some things I'm considering:

- Minimizing the amount of info on screen
- Save preferences on units so that people don't have to reselect every time
- How to avoid potential incorrect calculations from using the tool incorrectly (provide clarity on screen)

## Design scenarios

In this video, I talked about the different scenarios I'm designing this tool for, so I'll also write them out below

### Scenario 1 - Same yarn weight as pattern

![Screenshot of Figma design of scenario 1](../../assets/blog/img/Scenario1.png 'Screenshot of Figma design of scenario 1')

Example: Pattern asks for **870 yards** of yarn in DK (yarn thickness) and yarn is **225 meters per skein** (at 100 grams) in DK. How to calculate the number of skeins needed?

1. Total yards converted to meters (870 yards or 800 meters)
2. Formula: Total meters for pattern / total meters for yarn = number of skeins needed
3. 800 meters / 225 meters = 3.5 skeins total. Round up to 4 to buy 4 skeins of yarn.

### Scenario 2 - Different yarn held together

![Screenshot of Figma design of scenario 2](../../assets/blog/img/Scenario2.png 'Screenshot of Figma design of scenario 2')

_Update: I realized as I'm writing this blog the results here will need to be an even number since you're using two weights of yarn held together, so it'll actually have to be 8 skeins. My Figma design is showing the results page with total yarn combined but we'll need to have the results show how many skeins for each yarn instead._

If someone wants to buy two different yarns, a fingering weight and a sport weight, but the pattern asks for DK they can use both yarns by crocheting or knitting the pattern with one strand of fingering weight yarn and one strand of sport weight yarn to create a slightly thicker DK weight.

Example:  
Pattern asks for **800 meters** of yarn in DK and yarn 1 is **250 meters per skein** in Fingering weight and yarn 2 is **250 meters per skein** in Sport weight. How to calculate the number of skeins needed?

1. You'll be calculating the total length for yarn 1 and yarn 2 separately.
2. Use same formula twice
   - Total meters for pattern / total meters for yarn 1 = number of skeins needed for yarn 1
   - Total meters for pattern / total meters for yarn 2 = number of skeins needed for yarn 2

3. Yarn 1: 800 meters / 250 meters = 3.2 skeins and Yarn 2: 800 meters / 250 meters = 3.2 skeins.
   Yarn 1 + Yarn 2 = 6.4 skeins. Round up to next even number to buy 8 skeins, 4 skeiuns for yarn 1 and 4 for yarn 2.

### Scenario 3 - Same yarn held together

![Screenshot of Figma design of scenario 3](../../assets/blog/img/Scenario3.png 'Screenshot of Figma design of scenario 3')

If someone wants to buy fingering weight but the pattern asks for DK they can use fingering weight yarn by crocheting or knitting the pattern with two strands of fingering weight yarn to create a DK weight.

Example:  
Pattern asks for **800 meters** of yarn in DK and yarn is **250 meters per skein** (at 50 grams) in Fingering weight. How to calculate the number of skeins needed?

1. Divide length of fingering yarn per skein in half as you'll be using the yarn held together and using up more length of the yarn (250 meters / 2 = 125 meters)
2. Use same formula - Total meters for pattern / total meters for yarn = number of skeins needed
3. 800 meters / 125 meters = 6.4 skeins total. Round up to 7 to buy 7 skeins

Anyway I talk way more about this in the video so check it out on [YouTube](https://www.youtube.com/watch?v=aVwv2JKlJxk)! Let me know your thoughts and if this tool is something that you would use.
