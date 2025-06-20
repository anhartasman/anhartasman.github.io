---
layout: post
title: "Setting Up Laravel with Docker, Nginx, and MySQL"
summary: "Laravel Tutorial"
author: anhartasman
date: "2025-05-29 09:00:00 +0700"
categories: [docker, laravel]
thumbnail: /assets/img/posts/laravellogo.png
keywords: laravel
permalink: /blog/setting-up-laravel-with-docker-nginx-and-mysql/
usemathjax: true
portfolio: false
---

Deploying Laravel applications in a consistent and isolated environment is crucial for modern development workflows. Docker offers a reliable solution by allowing developers to containerize applications along with their dependencies. In this guide, we’ll walk through the process of setting up a new or existing Laravel project using Nginx in a Docker container, and connecting it to an existing MySQL container. Whether you're starting from scratch or integrating with an existing setup, this tutorial aims to provide a clear and practical approach to streamline your Laravel development environment.

## Step 1: Create a New Laravel Project

Or you can use existing laravel project, but if you want to create new one, use this command

```bash
composer create-project laravel/laravel laravel-app
cd laravel-app
```

## Step 2: Set Up Docker for Laravel

Create a file named docker-compose.yml in the root of your project with the following content:

<figure class="highlight">
<pre>
<code>
version: '3.8'

services:
app:
build:
context: .
dockerfile: Dockerfile
container_name: laravel-app
working_dir: /var/www/html
volumes: - ./:/var/www/html
networks: - my-network

nginx:
image: nginx:alpine
container_name: laravel-nginx
ports: - "8080:80"
volumes: - ./:/var/www/html - ./docker/nginx/conf.d:/etc/nginx/conf.d
depends_on: - app
networks: - my-network

networks:
my-network:
driver: bridge

</code>

</pre>
</figure>

## Step 3: Create Nginx Configuration

Create a folder and file: docker/nginx/conf.d/default.conf

<figure class="highlight">
<pre>
<code>
server {
    listen 80;
    index index.php index.html;
    root /var/www/html/public;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        include fastcgi_params;
        fastcgi_pass app:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }

    location ~ /\.ht {
        deny all;
    }

}

</code>

</pre>
</figure>

## Step 4: Configure .env for Existing MySQL

because im using different container for my mysql databse then i put "my-mysql" in DB_HOST variable because "my-mysql" is the container name

<figure class="highlight">
<pre>
<code>
DB_CONNECTION=mysql
DB_HOST=my-mysql
DB_PORT=3306
DB_DATABASE=your_db_name
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password

</code>

</pre>
</figure>

## Step 5: Start the Laravel Application

```bash
docker compose up -d
```

## Step 6: Connect your existing MySql container to your laravel container network

### Check Available Networks

```bash
docker network ls
```

To inspect a specific network:

```bash
docker network inspect my-network
```

This will list all containers attached to it.

### Connect the MySql Container

after you know which network that attached by your laravel container(for example : my-network) then run this command

```bash
docker network connect my-network my-mysql
```

Then check:

```bash
docker inspect my-mysql
```

Under "Networks", you should now see my-network.

## Step 7: Run Laravel Commands

because im using nginx then i dont have to run "php artisan serve" command, i only need to run "php artisan migrate" and maybe you also need run other commands depend on your needs

```bash
docker exec -it laravel-app bash
php artisan migrate
```

## Conclusion

By containerizing your Laravel application with Docker and configuring Nginx as the web server, you've built a flexible and reproducible environment that mimics a production-like setup. Connecting it to an existing MySQL container ensures your database stays centralized and consistent across different services. This modular architecture not only improves portability but also makes collaboration and deployment easier. Now you’re ready to scale, test, and build your Laravel apps with confidence in a modern Docker-based workflow.
