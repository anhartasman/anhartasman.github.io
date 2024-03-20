---
layout: post
title:  "Create SSH Key"
summary: "SSH Tutorial"
author: anhartasman
date: '2024-03-18 08:00:23 +0530'
categories: [ terminal,ssh ]
thumbnail: /assets/img/posts/cloudencrypt.jpg
keywords: ssh
permalink: /blog/create-ssh-key/
usemathjax: true
portfolio: true 
---

SSH key is needed in some secure connections like when you want to upload your codes to a repository or when you want to encrypt a message before send it to an API, here how to make one

<h3>1. Open your terminal</h3>

And type this command

<figure class="highlight"><pre>
<code>ssh-keygen</code>
</pre></figure>

![SSH Keygen Step 1](/assets/img/posts/ssh_keygen_1.png "SSH Keygen Step 1")

<h3>2. Type your SSH Key Path</h3>

Because i want to use cobakuncissh as the name so i will type this

<figure class="highlight"><pre>
<code>/Users/anhartasman/.ssh/cobakuncissh</code>
</pre></figure>


<h3>3. Enter your password</h3>

You will asked for a password, type it twice, you can leave it blank

![SSH Keygen Step 2](/assets/img/posts/ssh_keygen_2.png "SSH Keygen Step 2")

<h3>4. The key is ready to use</h3>

Now you can use the ssh key you just created, dont forget the file path

<h3>How to copy the public key</h3>

The public key is the key you can share to public, for exampe if you want to register the public key in a repository website, you can copy the public key using the following command if you use mac

<figure class="highlight"><pre>
<code>cat /Users/anhartasman/.ssh/cobakuncissh.pub  | pbcopy</code>
</pre></figure>


I hope that helps you guys, have a nice day!