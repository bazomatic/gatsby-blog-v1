---
layout: post
title: c-c-c-code block breakerrr
date: 2020-02-10
comments: false
published: true
---

Just about a week and a half of sickness, though not without progress!

# AT LONG LAST. phaser in gatsby. I wield the powwaaa

Pipeline is going up shortly for bazomaticlabs.com which I **FINALLY** got building right. The reason I'm so psyched is because my labs are running on Gatsby for server side rendering (SSR) to load super fast, but also deploy Phaser on the client only where needed for dynamic content!

This was annoying me to no end since I spent hours trying to get this to work yesterday. At first, when I dropped in Phaser and an old poc/lab project, everything was fine. I did some minor tweaks to get things to look slightly less blindingly ugly (it's still blindingly ugly) and started to build out the pipeline.

## what's your point?

tl;dr: `react-loadable` lets you bundle dynamic content along with Gatsby's otherwise awesome SSR. [example here.](https://github.com/bazomatic/bazomatic-labs)

Coincidentally, what an extremely lucky night for me! Slaughtered in Apex with some pickup groups and got a win on the last game of the night, then won my Clash Royale war battle, and finally realized that codesplitting out my dynamic content in webpack would solve my issue outright.

## alright, bore me with the details

I started to think how damn smart and awesome I am for having a really slick platform to quickly deploy browser games. "Wow, I got this running so fast! Why are people all _SSR optimization is hard, I want my dynamic content,_ when Gatsby makes it this easy?!" Man, I thought I was _so smart_.

Just in case, I figured I'd wait to give the AWS pipeline any permissions. _Surely_ nothing would go wrong when I triggered the pipeline, the project would build, and then CodeBuild will harmlessly bounce off of S3 with no permissions. I would finish the pipeline after that, and be able to shift focus to an awesome layout for the lab (or at least something better than some naked `<a>` tags) and hammering out cool little Phaser/PixiJS/threejs/awesome dynamic content projects, firing them out into the web like so many convoluted posts.

I went to CodeBuild, and it hit the error on the build as I expected. "Wow! So fast!" In fact, a lot faster than the build should've gone.

I looked in the logs for verification, found my S3 permissions failure, and also saw this little gem:

```
failed Building static HTML for pages - 9.790s
error "window" is not available during server side rendering.
```

...welp. an actual build failure. no speedily-SSR'd bundle for me ☹️

Cut to 4 or 5 hours later, it's Sunday night, I'm cursing Gatsby documentation because I swear the docs for `gatsby-plugin-create-client-paths` are incorrect since Gatsby is still trying to render my Phaser app despite me _very goddamn clearly_ telling my `gatsby-config` to ignore my Phaser app.

It should be noted here, that I am _an extreme noob to the frontend world_. Yes, technically I have shipped a React app plugged into an API that I also wrote (all with a small team) and deployed it, to be used at thousands of physical sites by several people at each site, but I mean, I'm mostly a Java guy in terms of the ecosystems I actually know. So like, absolutely none of this hubris is warranted, and I lack some fundamental frontend concepts that JavaScript people probably take for granted.

Like code splitting.

I mean, I knew I wanted Gatsby to ignore a part of my site and pack it up like any other React app, but I wanted to make sure Gatsby still applied SSR everywhere else. And tbh I only learned SSR by troubleshooting this, I was like, "soooo what _is_ SSR" for a good thirty minutes yesterday before I put two and two together.

I found [react-loadable](https://www.npmjs.com/package/react-loadable) last night but was extremely reluctant to implement it because I was so fried that I didn't really want to start reading the documentation, and gamed a bit before getting some decent sleep for work the next day.

Today, I just wanted to make everything work, so I read the react-loadable npm readme, and damn, everything clicked. react-loadable saved my sanity and taught me the valuable concept of code splitting during bundle packing.

## lessons learned, and also things I swore at

Here are a sampling of things I tried that _didn't_ solve my issue:

- using only `gatsby-plugin-create-client-paths` to avoid SSR being applied to the paths I want to use for dynamic content. I would find out this failed why only later. I left it in JUST IN CASE I WAS MAKING A MISTAKE WITH IT. (i was. sorta. but it neither interfered nor helped so I removed it after confirming it did not apply to my situation.)
- using `componentDidMount` to fire `import(phaser)` out of order so that it would only attempt to import the offending library on client render. I was able to get past the component causing the issue, but didn't prevent the same issue on my other Phaser-related modules, and I didn't want to do that on every damn module.
- general googling pointed out that `gatsby-plugin-create-client-paths` will not apply to imported modules, and that was like, "oh duh" for me, since I didn't think about that/still don't really know how the magic of JS `import` and webpack all comes together (except for `import()`! I know that one now! and some other stuff!). they pointed out that adding a `gatsby-node` file solely to provide `onCreateWebpackConfig` will let me tell webpack that when Phaser tries to load during `build-html`, fire a null loader. this worked everywhere _except_ the fairly critical need to extend `Phaser.Scene` which I couldn't figure out a workaround for, since webpack was still like "DUDE WHAT IS PHASER."
- eventually I came across/went back to some article talking about how you can use `react-loadable` as a last-ditch, but was so frustrated by this point that I figured I'd try it tomorrow. as in today. but like, not today when you're reading this, probably.

anyway. PHEW. so glad that all works! pipeline may go up tonight, probably tomorrow. (I technically finished the pipeline tonight but my cloudfront distro is taking so long to start that I just need to sleep, so I can't route to it yet, so only http://bazomaticlabs.com works for now until I can serve that SSL out of my distro.)

## Shoutouts 🎉

👼 [react-loadable](https://www.npmjs.com/package/react-loadable) for making me see the light of component-based code splitting
