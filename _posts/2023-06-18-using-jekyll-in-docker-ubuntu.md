---
layout: post
title: "Using Jekyll In Docker Ubuntu"
summary: "Docker Tutorial"
author: anhartasman
date: "2023-06-18 13:00:23 +0530"
categories: [jekyll, docker, ubuntu]
thumbnail: /assets/img/posts/docker_black_logo.png
keywords: docker,jekyll
permalink: /blog/using-jekyll-in-docker-ubuntu/
usemathjax: true
portfolio: true
---

Jekyll is static web generator which can be used to generate blog, company profile and etc. Now im gonna show you how to use it in ubuntu inside docker container

<h3>1. Prepare the dockerfile</h3>

Make a dockerfile

<script src="https://gist.github.com/anhartasman/04c2c878b2097125bc99fee390184f3b.js"></script>

then build the image with the following command

<figure class="highlight"><pre>
<code>docker build -t myjekyll .</code>
</pre></figure>

<h3>2. Run the container</h3>

Go to your jekyll folder and run the following command to start the docker container we just created

<figure class="highlight"><pre>
<code>docker run --name myblog -it -v "$(pwd)":/data1 -p 80:80 myjekyll</code>
</pre></figure>

<h3>3. Using Jekyll</h3>

Dont forget to go to your project folder(data1)

<figure class="highlight"><pre>
<code>cd data1</code>
</pre></figure>

First you need to install the necessary dependencies by running the following command

<figure class="highlight"><pre>
<code>bundle install</code>
</pre></figure>

After that, you can run it locally using this command

<figure class="highlight"><pre>
<code>bundle exec jekyll serve --host=0.0.0.0 --port=80</code>
</pre></figure>

to open your web, you can go to 0.0.0.0 or localhost in your browser

I hope that helps you guys, have a nice day!
