---
layout: post
title: "Create Node Js App In Docker Ubuntu"
summary: "Node Js App Tutorial"
author: anhartasman
date: "2024-07-10 01:00:23 +0530"
categories: [terminal, nodejs]
thumbnail: /assets/img/posts/nodejslogoblack.png
keywords: nodejs
permalink: /blog/create-node-js-app-in-docker-ubuntu/
usemathjax: true
portfolio: true
---

Creating a Node.js app inside a Docker container running Ubuntu is a straightforward way to ensure a consistent development environment. This guide will take you through the essential steps to set up and run your Node.js application within a Docker container.

<h3>1. Open terminal then go to folder where you will put your node js apps, then type this command</h3>

<figure class="highlight"><pre>
<code>docker run --name proyekNode -it -v "$(pwd)":/proyekNode -p 80:80 ubuntu</code>
</pre></figure>

That command will create a container with ubuntu OS, where you can start install necessary packages to build node js applications

<h3>2. Install node js</h3>

Type these commands to install node js

<figure class="highlight"><pre>
<code>apt update

apt install nodejs npm</code>

</pre></figure>

<h3>3. Open your work folder</h3>

Type this command to open your work folder

<figure class="highlight"><pre>
<code>cd proyekNode</code>

</pre></figure>

<h3>4. Create your first app</h3>

You can create new file with "app.js" as the file name and copy paste this code

<figure class="highlight"><pre>
<code>const http = require("http");

const hostname = "0.0.0.0";
const port = 80;

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader("Content-Type", "text/plain");
res.end("Hello, World!\n");
});

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});
</code>

</pre></figure>

<h3>5. Run your app</h3>

Now you can run your above code with the following command

<figure class="highlight"><pre>
<code>node app.js</code>

</pre></figure>

<h3>6. Open your app in browser</h3>

Now you can see the hello world message in your browser by open this URL

<figure class="highlight"><pre>
<code>http://0.0.0.0:80/</code>

</pre></figure>

By following these steps, you've successfully created and deployed a simple Node.js app in an Ubuntu Docker container. This setup ensures a consistent development environment and simplifies deployment, paving the way for more efficient and scalable applications. Happy coding!
