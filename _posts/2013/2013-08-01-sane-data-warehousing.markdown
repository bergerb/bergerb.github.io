---
layout: post
title: Sane Database Warehousing
date: 2013-08-01 12:30:52
categories: MSSQL TSQL SSIS Warehouse
published: true
---

Database warehousing is a critical tool in the skill set of a developer.  The ability to take `normalized` data and store it in a `non-normalized` dataset can increase loading times, reduce calculations and generate a large `ROI`.  Large datasets will benefit dramatically from a warehouse of commonly/frequently accessed data facts.

### ETL

Extract, Transform, Load `ETL` is the process to take normalized (usually) data into a faster data access view or tallied (summated) data view.  In the Microsoft world there are a few ways to achieve this goal.  `T-SQL` as a scheduled job can easy handle the simple data tasks.  SQL Server Integration Services `SSIS` is also a great tool for connecting SQL Servers and diverse data systems together.  `SSIS` is great when working with systems that are not SQL Server based.  Which one is better?  It depends on the need and the application.

### Simple T-SQL Warehousing

Using SQL 2005 or later allows the using of the pivot command when querying data.  Pivot Tables can simplify a lot of reporting and calculations (which take time).  A very simple example of would be the following SQL Statement:
 
{% highlight sql %}
-- Example Table
CREATE TABLE [dbo].[employee_items](
    [id] [int] IDENTITY(1,1) NOT NULL,
    [employee_id] [int] NOT NULL,
	[item] [varchar](10) NOT NULL,
	[count] [int] NOT NULL,
 CONSTRAINT [PK_employee_items] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]

-- Pivoted Data
SELECT Employee_id, [100], [200], [300] 
INTO employee_items_warehouse
    FROM (
        SELECT employee_id, item, count
            FROM Employee_items) AS SourceTable
        PIVOT
        (
        SUM(count)
        FOR item IN ([100], [200], [300])
        ) AS PivotTable
{% endhighlight %}

This is not the perfect example but should give you an idea of what you can do to manipulate the data to create a warehouse.  You wouldn't want to simply do an insert every time you run the process; you would want to do updates / inserts to get the best result.  The `data velocity` (how fast the data changes) or the need of the data updating of the pivot table data can be changed would have an effect on the process itself.  

### SQL Server Integration Services

SSIS is much more than Pivot (though it can pivot data easily) and is great for combining data from multiple system into one data warehouse.  The catch with SSIS and SQL Server is the versions of Business Intelligence Development Studio `BIDS` must match the SQL Server the SSIS Package is running on.  A `SSIS` Package for SQL Server 2005 must be created in `BIDS` 2005.  SQL Server 2008 must be created in `BIDS` 2008 and so on.

The amount of tasks/data manipulated/script tasks you can do in SSIS is quite staggering.  I only wanted to mention SSIS since in today's data warehousing world it is one of the best tools on the market.  

I will dive more deeply into the world of SSIS in a later post.