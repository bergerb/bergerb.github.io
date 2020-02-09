---
title: "TFS 2018 On-Prem Build Badges"
description: "Build Badges are a great way to communicate the build status of a given build for a project. "
tags: [software,dev,tfs]
---

**Build Badges** are a great way to communicate the build status of a given build for a project.  Having this information quickly available to developers and project related staff is priceless.  This can be stuffed in your README.md and displayed on the project home in TFS.

<!--more-->

## How to Enable

Enable Build Badge for your build in the options for the build

Build Definition > Edit > Options

<a href="/assets/buildbadges.png"><img src="https://cyroot.files.wordpress.com/2019/11/buildbadges.png?w=300" alt="" width="600" height="98" class="alignnone size-medium wp-image-402" /></a>

TFS also provides the URL for the build badge once it is enabled.

I also wanted to include some steps for traversing the REST API in TFS to get this information.  It is always good to know what is going on under the hood.

## Finding the URL via REST

### Find Project ID Guid

https://`{Instance`}/`{Collection`}/_apis/projects/

https://`{Instance`}/`{Collection`}/_apis/projects/`{Project GUID`}

Ex. Project GUID 548E7A15-CFD4-49FA-893C-84C2EC0E3116

### Find Build Definition ID

On the result look for definition id parameter

definitionId=1

Take a look at the perma link

http://`{Instance`}/_permalink/_build/index?collectionId=`{Collection GUID`}&projectId=`{Project GUID`}&definitionId=`{Build Definition ID`}

This way you can verify all the information is correct.

### Putting it all together

http://`{Instance`}/`{Collection`}/_apis/public/build/definitions/`{Project GUID`}/`{Build Definition ID`}/badge?api-version=4.1

Now we can see our build status!

<a href="https://cyroot.files.wordpress.com/2019/11/buildfailed.png"><img src="https://cyroot.files.wordpress.com/2019/11/buildfailed.png" alt="" width="102" height="40" class="alignnone size-full wp-image-415" /></a>

Oh no!  Time to fix the build!

For more information: https://docs.microsoft.com/en-us/rest/api/azure/devops/build/badge/get?view=vsts-rest-tfs-4.1#uri-parameters

I believe since these RESTful API is in the _public directory it could be reached outside of TFS.  I have only used it internally within README.md files.  I will have to check.