---
layout: post
title: ...and we're live!
date: 2020-01-25
comments: false
---

Hey hey! I'm proud to finally host a page for sharing what I learn, and generally keeping a record of my side projects and hobbies. A handy side effect is now I feel obligated to have some kind of regular cadence for updates, so perhaps I'll actually deliver at least a single independent application this year 😄

## Alright!

Here's a summary of the tech I chose, along with some lessons learned:

- The page is built with a [Gatsby](https://www.gatsbyjs.org/) starter project.
  - I chose Gatsby to experiment with [GraphQL](https://graphql.org/), along with the magically-optimized serverside rendering that it provides.
  - Posts are currently generated from Markdown files via [Gatsby's MDX plugin](https://www.gatsbyjs.org/docs/mdx/) as I already prefer Markdown for writing in general; embedding React inside of it is a huge bonus.
- Hosting is handled via an [S3 bucket](https://aws.amazon.com/s3/) with SSL certificates applied via [Cloudfront](https://aws.amazon.com/cloudfront/).
  - Cloudfront is actually necessary because AWS doesn't let you use HTTPS with custom domains for S3 hosted sites. The speed bonus of a CDN is a nice plus.
- Setting up TLS/HTTPS redirects for abazly.com was pretty painless using AWS:
  - Request SSL via [ACM](https://aws.amazon.com/certificate-manager/)
  - Set up Cloudfront distributions for each site hosting bucket
  - Update domain DNS aliases to point at the Cloudfront endpoints in [Route 53](https://aws.amazon.com/route53/)
- Cost-wise, I'm paying a few pennies a month, unless this blows the hell up and I get enough traffic to incur terabytes of traffic.

Source for this page is on [Github](https://github.com/bazomatic/gatsby-blog-v1).

## Shoutouts 🎉

🔧 [freecodecamp.org](https://www.freecodecamp.org/news/simple-site-hosting-with-amazon-s3-and-https-5e78017f482a/) for a very handy tutorial on setting up hosting and HTTPS on AWS

👨‍🔬 [Nick Klepinger](https://klepinger.dev/) for being an awesome coworker and friend who told me about how awesome Gatsby is for getting a blog up and running, and also being a React guru with a ton of patience

💻 [David Saltares](https://saltares.com/) for creating the incredible [Ashley]() ECS framework for [libGDX](https://libgdx.badlogicgames.com/) and having a great blog to steal styles from 😅
