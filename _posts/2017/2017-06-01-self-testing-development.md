---
layout: post
title: Self-Testing Development
date: 2017-06-01 16:54:40.000000000 -04:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Development
- software development
- tips
tags: []
meta:
  _wpcom_is_markdown: '1'
  _edit_last: '14726552'
  geo_public: '0'
  _publicize_job_id: '5673874493'
author:
permalink: "/2017/06/01/self-testing-development/"
---
Testing is a hard part of software development. One of the hardest aspects of development is testing code/features that you have created. It is easy to put the blinders up and write to the spec. Insider knowledge of the system probably plays a role in this difficulty. Seeing a system through user eyes is nearly impossible, but to get close you need to decouple yourself from the code.

Discipling yourself to test your own code and finding your own bugs is a difficult task. It is possible. Being a part of a code review process in which the code reviewer(s) look at code and possible bugs has made me a better developer. You will never find all of the bugs in an application; it takes a team, users, and time. The more bugs you find earlier the more reliable and usable the code will be.

Testing while you go helps too. Think of a fringe case? Go ahead write it down. Write a test for it. Do something.

The ability to look at your own code objectively is something I am continually trying to improve at. Catch bugs sooner. Make your code better sooner.

> _You are not your code_

Refine.

> _You are not your code_

_Why would the user do x / y ?_

They will. Many many many times.

Sometimes I click randomly on everything multiple times just to see what will happen. Curiosity. Users have curiosity with new features and will push them to their limits. An in-depth UAT will definitely find a number of bugs / issues. UAT is important because _users_ will more easily _accept_ _tested_ code versus bug filled applications.

Here is the typical development process that I have had success with.

*   Development / Self-Test
*   Self-Test
*   QA
*   Code Review
*   If Large Changes? QA Again
*   UAT
*   Deployment