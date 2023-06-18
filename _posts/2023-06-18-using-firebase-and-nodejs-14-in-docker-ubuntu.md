---
layout: post
title:  "Using Firebase And Node JS 14 In Docker Ubuntu"
summary: "Docker Tutorial"
author: anhartasman
date: '2023-06-18 02:00:23 +0530'
categories: [ nodejs,firebase,docker,ubuntu ]
thumbnail: /assets/img/posts/docker_black_logo.png
keywords: flutter,ecommerce,shopping
permalink: /blog/using-firebase-and-nodejs-14-in-docker-ubuntu/
usemathjax: true
portfolio: true 
---

I tried using firebase from my mac mini and it didn't work, so i decided to use docker, because i need ubuntu to run firebase cli, but the problem is firebase will give you link to authorize, i cant do that with the original ubuntu docker, i need to make my own image, so here is how i did that

<h3>1. Prepare the dockerfile</h3>

Make a dockerfile

<script src="https://gist.github.com/anhartasman/83b0cebb4d2b04937424f522939b73df.js"></script>

then build the image with the following command

<figure class="highlight"><pre>
<code>docker build --tag ubuntu-firebase:latest</code>
</pre></figure>

<h3>2. Run the container</h3>

Go to your firebase project folder and run the following command to start the docker container we just created

<figure class="highlight"><pre>
<code>docker run -it -v "$(pwd)":/data1 -p 9005:9005 ubuntu-firebase:latest</code>
</pre></figure>


<h3>3. Using Firebase CLI</h3>

As always, you need to login before you can start using firebase cli

<figure class="highlight"><pre>
<code>firebase login</code>
</pre></figure>

Dont forget to go to your project folder(data1)

<figure class="highlight"><pre>
<code>cd data1</code>
</pre></figure>

Type the following command to activate your firebase project

<figure class="highlight"><pre>
<code>firebase use --add</code>
</pre></figure>


<h3>4. Enjoy the Firebase CLI</h3>

That's it, now you can do whatever you want with the firebase project, for me i want to use my firebase functions, so first i go to functions folder and install the necessary package


<figure class="highlight"><pre>
<code>npm install</code>
</pre></figure>

After that, i go back and test the functions locally

<figure class="highlight"><pre>
<code>firebase serve --only functions -o 0.0.0.0 --port=9005</code>
</pre></figure>

I hope that helps you guys, have a nice day!