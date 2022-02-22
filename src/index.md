---
title: Julian Harrer
layout: "base.njk"
---

<img src="/assets/images/me.jpg" id="portrait">

## Who Am I (?)

Hey my name is Julian, I am a 20 year old student at the University of Passau, where I currently study Computer Science. Both computers and social interaction are just two things I love to surround myself with as I can be very passionat with everthing and everyone. Therefor I can say: I love you all! I created this blog for the simple reason, that I didn't want to have parts of my mind spread across conventional social media sites which are also not as customizable as this website. You can read more about my preferences and ideology in my [manifest](/manifest). Also, if you want to want to contact me for any reason, just look at the [contacts](/contact) section😉.

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
<img id="gh-stats" align="center" src="https://github-readme-stats.vercel.app/api?username=TheMrPixelDev&theme=dark&show_icons=true" alt="fabian9799" /><br><br>
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