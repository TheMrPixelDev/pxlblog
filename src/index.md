---
title: Julian's Blog
layout: "base.njk"
---

## Whats that?

Hey my name is Julian, I am a young student at the University of Passau. The page you are currently looking at is my personal blog where I post all kinds of random stuff. As I am about to be a computer scientist there will be some tech related topics but also a lot of strange things I am thinking about the whole day. Hope you enjoy!

## Posts

{% for post in collections.posts %}

### + [{{ post.data.title }}]({{ post.url }})

{% endfor %}