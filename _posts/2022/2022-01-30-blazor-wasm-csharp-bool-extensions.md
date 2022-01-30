---
comments: true
title: "Blazor WASM/C# bool extension toggle!"
description: ""
date: 2022-01-22 08:30:50.000000000 -05:00
tags: [blazor, C#, bool, extensions, testing]
---

I have been using Blazor WASM (WebAssembly) for some personal projects.  The ability to use C# up-and-down the stack has been quite pleasant.  Blazor utilizes C# on both the back-end (WebAPI) and front-end matters using WebAssembly/Razor to deliver the SPA experience.

**My Blazor Project Stats:**

![Blazor Stats](/assets/blazor-stats.png)

A benefit of using Blazor is taking advantage of all of the great features of C#.  [Extension Methods](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods){:target="_blank"} can help us clean up our code and make it more readable.  

```csharp
public static class BoolExtensions
{
    public static bool Toggle(this ref bool val)
    {
        val = !val;
        return val;
    }
}
```

<!--more-->

Now we can use the extension method to clean up a lot of front-end matters that can get littered with bool declarations.

```csharp
    isProcessing = true;
    
    // CALL ASYNC PROCESS or PROCESS

    isProcessing = false;
```

Working with Blazor client-side you end up with a number of processing/loading/doingSomeAction where we want to hide/show actions in the User Interface (UI).  Here is where we can take advantage of our new bool extension method.

```csharp
    isProcessing.Toggle();
    
    // CALL ASYNC PROCESS or PROCESS

    isProcessing.Toggle();
```

I have been mainly been using this on the front-end and I think it helps in a couple of areas:

- To separate the UI calls from regular boolean calls
  - val = !val would suffice
- Reduce the number of = signs in front-end calls

## NUnit Testing

I think this looks pretty good, but we can ensure that it is working how we expect to with some *Unit Tests*.

```csharp
using NUnit.Framework;

namespace UnitTests.Extensions
{
    public class TestBoolToggle
    {
        [Test]
        public void TestBoolFalseToggleIsTrue()
        {
            bool val = false;
            val.Toggle();
            Assert.IsTrue(val);
        }

        [Test]
        public void TestBoolTrueToggleIsFalse()
        {
            bool val = true;
            val.Toggle();
            Assert.IsFalse(val);
        }
    }
}
```
