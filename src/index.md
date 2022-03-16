---
title: Julian Harrer
layout: "base.njk"
---

<img src="/assets/images/me.jpg" id="portrait">

## Who Am I (?)

I am a 20 year old computer science student at the [University of Passau](https://uni-passau.de).

⚠️ Please excuse my spelling at some parts.

<br>

---

## Posts

{% for post in collections.posts %}

 - [{{ post.data.title }}]({{ post.url }})

{% endfor %}

<br>

---

## My Github Statistics

<p>
<img id="gh-stats" style="max-width: 90vw" align="center" src="https://github-readme-stats.vercel.app/api?username=TheMrPixelDev&theme=dark&show_icons=true" alt="fabian9799"/><br><br>
<img id="gh-top-langs" align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=TheMrPixelDev&theme=dark&layout=compact"/>
</p>

<script>
    {
        let darkmode = document.cookie.split("=")[1];
        if(darkmode == "true"){
            document.getElementById("gh-stats").src = "https://github-readme-stats.vercel.app/api?username=TheMrPixelDev&theme=dark&show_icons=true";
            document.getElementById("gh-top-langs").src = "https://github-readme-stats.vercel.app/api/top-langs/?username=TheMrPixelDev&theme=dark&layout=compact";
        }else if(darkmode == "false"){
            document.getElementById("gh-stats").src = "https://github-readme-stats.vercel.app/api?username=TheMrPixelDev&show_icons=true";
            document.getElementById("gh-top-langs").src = "https://github-readme-stats.vercel.app/api/top-langs/?username=TheMrPixelDev&layout=compact";
        }
    }
</script>

<style>

    #portrait {
        height: 15rem;
        border-radius: 100rem;
        border: 3px dashed grey;
        padding: 0.5rem;
        display:block;
        margin-left: auto;
        margin-right: auto;
    }

</style>