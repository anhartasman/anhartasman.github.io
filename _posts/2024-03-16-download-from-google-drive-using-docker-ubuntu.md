---
layout: post
title:  "Download From Google Drive using Docker Ubuntu"
summary: "Docker Tutorial"
author: anhartasman
date: '2024-03-16 13:00:23 +0530'
categories: [ jekyll,docker,ubuntu ]
thumbnail: /assets/img/posts/docker_black_logo.png
keywords: docker,jekyll
permalink: /blog/download-from-google-drive-using-docker-ubuntu/
usemathjax: true
portfolio: true 
---

Sometime i failed to download from google drive by using browser, so i use terminal to do the job, with gdown in ubuntu, but what if you not using ubuntu, what if you use mac, can you use gdown in mac? Yes you can but for me the steps is too long so i prefer to use docker, then make an ubuntu container and run gdown from that container, maybe this tutorial can help you to do that

<h3>1. Prepare The File ID</h3>

You can get the file id from the file link

<figure class="highlight"><pre>
<code>https://drive.google.com/file/d/{fileId}/view?usp=drive_link</code>
</pre></figure>

<h3>2. Prepare your container</h3>

Go to your download folder and run the following command

<figure class="highlight"><pre>
<code>docker run --name udownload -it -v "$(pwd)":/myDownload  -p 80:80 ubuntu</code>
</pre></figure>


<h3>3. Prepare the libraries</h3>

Run the following commands to install the necessary libraries

<figure class="highlight"><pre>
<code>apt update</code>

<code>apt install python3-pip -y</code>

<code>pip3 install gdown</code>
</pre></figure>


<h3>4. Run the container</h3>

After that, you can run the container with the following command

<figure class="highlight"><pre>
<code>docker exec -i udownload gdown {fileId} -O /myDownload/myCV.pdf</code>
</pre></figure>

you can change {fileId} with your File ID and myCV.pdf with your File Name

I hope that helps you guys, have a nice day!