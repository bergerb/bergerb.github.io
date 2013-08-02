---
layout: post
title:  "Sane Database Warehousing"
date:   2013-08-01 22:30:00
categories: MSSQL TSQL SSIS Warehouse
---

Database warehousing is a critical tool in the skill set of a developer.  The ability to take `normalized` data and store it in a `non-normalized` dataset can increase loading times, reduce calculations and generate a large ROI.  Large datasets will benefit dramatically from a warehouse of commonly/frequently accessed `data facts`.

### ETL

Extract, Transform, Load `ETL` is the process to take normalized (usually) data into a faster data access view or tallied (summated) data view.  In the Microsoft world there are a few ways to achieve this goal.  T-SQL as a scheduled job can easy handle the simple data tasks.  SQL Server Integration Services `SSIS` is also a great tool for connecting SQL Servers and diverse data systems together.  `SSIS` is great when working with systems that are not SQL Server based.  Which one is better?  It depends on the need and the application.

### Simple T-SQL Warehousing

Using SQL 2005 or later allows the using of the `pivot` command when `querying` data.  [Pivot Tables] can simplify a lot of reporting and calculations (which take time).  A very simple example of would be the following SQL Statement:

Test 1 2 3
