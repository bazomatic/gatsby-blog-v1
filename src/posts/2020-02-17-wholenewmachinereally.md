---
layout: post
title: experiments sometimes go awry
date: 2020-02-17
comments: false
published: true
---

Took me a while to realize that my [bazomaticlabs.com](https://bazomaticlabs.com) pipeline was failing because as warned in the original guide I followed, when selecting your S3 bucket as a cloudfront origin, you cannot actually trust the auto-populated cloudfront distribution endpoint and must manually enter the S3 bucket's endpoint as an origin. Bad form, Amazon, bad form. *Unlike* the guide's advice, you can use a single cloudfront distro with all necessary cnames (i.e. I'm using one distro for both abazly.com and www.abazly.com now, and another single distro for bazomaticlabs.com and www.bazomaticlabs.com). I'm glad that I otherwise remembered how to set up the distro, less glad that it takes 20-30+ minutes between distribution actions, so this was a very tedious issue to troubleshoot before I caved and re-read the guide.

Since I was redoing my distros anyway, I took the chance to set them all to use NorthAm/Canada/Europe anyway, though it turns out this entire site has cost me $0.00 this whole time. My free period is long over, so I thought I would incur charges for the cloudfront distro and S3 buckets, but unless my credits aren't ticking down, I'm not getting charged *at all* for any of this! Awesome!

(for the record, I would never kill an entire cloudfront distro like I did for any actual service, since it would've been an outage for a good couple of hours, which makes me wonder what a cutover plan would look like to keep distros up while switching them over, since I found out that I couldn't make a *new* distro in advance for the same cnames.)