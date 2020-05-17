---
layout: post
title: TFS, Git, Pull Requests and Code Reviews
date: 2016-12-21 17:19:50.000000000 -05:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- code reviews
- Git
- Pull Request
- software development
- TFS
tags: []
meta:
  _wpcom_is_markdown: '1'
  geo_public: '0'
  _edit_last: '14726552'
  _rest_api_published: '1'
  _rest_api_client_id: "-1"
  _publicize_job_id: '30234439600'
author: 
permalink: "/2016/12/21/tfs-git-pull-requests-and-code-reviews/"
---
> "Change is the only constant in life." - Heraclitus

I have been using Team Foundation Server for a few years now in my day job.  Side jobs have also used TFS from time to time.  Leveraging GIT and the pull requests to control code reviews has definitely improved my code and the code of my fellow developers.

_**Communication is hard.  Developing software is hard.  Communicating and developing software is harder.**_

The ability to feature branch and merge to different environments to kick off automated builds gives a developer such a deeper look in the happenings of their code base.  It improves the ability for multiple developers to work on a code base and have their code work and not wait on someone else to commit.  The merge is easily the best part of Git in the .NET developer world.  In the past I've used SVN and the merging was always complicated and clunky.  Feature branching is built-in to the core of Git and TFS shines with Git as the code management feature.

The gate keeping of pull requests to a production environment helps stop bad code from getting into the wild.  It is not a silver bullet, but having more eyes on code is always a good function.  Utilizing the code reviewer for basic QA services, is a time consuming activity, but the quality of code that is delivered is almost always better.  The ability to compare branches against staging, production or other environment ensures everyone is keeping up-to-date.

Speaking of code reviews; it is a function that I believe is critical to deliver software.  It is a safety net for a number of different areas:

*   Reliability
*   Maintainability
*   Quality
*   Communication
*   Usability

**Reliability** - Fix those easy bugs that get through code.  Simple bugs: order of operations bugs.  Typos.

**Maintainability** - Will someone else understand the code?  Is the developer making it too hard?

**Quality** - Does the developer have the latest version?  Has the developer pushed the code to testing / QA?

**Communication** - Setting up notifications on pull requests approvals or denials.  Automated push notifications to your master branch or testing environments.  These type of communications ensure teamwork.

**Usability** - Does the code mean UI usability / code standards?  Is the UI logically?  Are the orders of operation correct?  What happens when you run them incorrectly?