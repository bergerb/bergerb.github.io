---
comments: true
title: Get Random Entity
subtitle: LINQ EFCore
description: Reusable Random Entity Method
date: 2023-04-07 08:30:50.000000000 -05:00
tags: [dotnet, csharp, efcore, iqueryable]
---

```csharp
    async static Task<T> GetRandomEntity<T>(IQueryable<T> query, CancellationToken token)
    {
        var max = query.Count();

        return await query.Select(x => x)
            .Skip(new Random().Next(0, max - 1))
            .Take(1)
            .FirstAsync(token);
    }
```

### Usage

```csharp
    var offense = await GetRandomEntity(_context.Offenses, token);
```
