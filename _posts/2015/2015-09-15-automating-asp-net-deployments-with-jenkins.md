---
layout: post
title: Automating ASP.NET Deployments with Jenkins
date: 2015-09-15 14:29:36.000000000 -04:00
type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- ASP.NET
- Deployments
- Jenkins
tags: []
meta:
  _wpcom_is_markdown: '1'
  _edit_last: '14726552'
  geo_public: '0'
  _publicize_job_id: '14813336508'
author: 
permalink: "/2015/09/15/automating-asp-net-deployments-with-jenkins/"
---
Deploying ASP.NET web applications is a breeze with Jenkins and can really improve continuous integration/testing environment for UAT.  It is also possible to do production deployments with scheduled builds.

In your ASP.NET setup > manage your publish profiles.

[![2015-09-15 10_13_11-Publish Web]({{ site.baseurl }}/assets/2015-09-15-10_13_11-publish-web.png?w=300)](https://cyroot.files.wordpress.com/2015/09/2015-09-15-10_13_11-publish-web.png)

Here we have two profile Production and Staging.  This gives us a Development environment (localhost), Staging Test (UAT environment), and Production environment.  The profiles both point to shares where our web applications are stored.

From the Visual Studio aspect this is the only piece we will need - except for the entire project.

Jenkins will need to hook into your Version Control Management system to know when to do builds.

Here's a typical CI staging hook:

[![2015-09-15 10_18_36-Helpdesk_Staging Config [Jenkins] - Internet Explorer]({{ site.baseurl }}/assets/2015-09-15-10_18_36-helpdesk_staging-config-jenkins-internet-explorer.png?w=300)](https://cyroot.files.wordpress.com/2015/09/2015-09-15-10_18_36-helpdesk_staging-config-jenkins-internet-explorer.png)

In this scenario we are using SVN (SubVersioN) to know when to kick off our build.

[![2015-09-15 10_19_32-Helpdesk_Staging Config [Jenkins] - Internet Explorer]({{ site.baseurl }}/assets/2015-09-15-10_19_32-helpdesk_staging-config-jenkins-internet-explorer.png?w=300)](https://cyroot.files.wordpress.com/2015/09/2015-09-15-10_19_32-helpdesk_staging-config-jenkins-internet-explorer.png)

We will poll for any new changes every 5 minutes.

[![2015-09-15 10_22_30-Helpdesk_Staging Config [Jenkins] - Internet Explorer]({{ site.baseurl }}/assets/2015-09-15-10_22_30-helpdesk_staging-config-jenkins-internet-explorer2.png?w=300)](https://cyroot.files.wordpress.com/2015/09/2015-09-15-10_22_30-helpdesk_staging-config-jenkins-internet-explorer2.png)

With our staging profile built and in our VCS we can build with that configuration with MS Build.

This is a simple scenario with Jenkins to build your ASP.NET web applications quickly.
