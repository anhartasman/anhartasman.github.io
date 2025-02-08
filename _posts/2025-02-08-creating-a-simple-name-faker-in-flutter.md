---
layout: post
title: "Creating a Simple Name Faker in Flutter"
summary: "Flutter Tutorial"
author: anhartasman
date: "2025-02-08 07:00:00 +0700"
categories: [mobile, flutter]
thumbnail: /assets/img/posts/flutterlogo.png
keywords: flutter
permalink: /blog/creating-a-simple-name-faker-in-flutter/
usemathjax: true
portfolio: false
---

In this tutorial, we will create a simple utility class in Dart to generate random Indonesian names. This can be useful for testing applications, generating dummy user data, or simulating user input in your Flutter project.

## Step 1: Creating the UtilFaker Class

Create a new Dart file named util_faker.dart inside the lib folder of your Flutter project. Then, define the class as follows:

<script src="https://gist.github.com/anhartasman/94ca0c0394853bd7123779b9de198921.js?file=util_faker.dart"></script>

### Explanation:

* We define a private list _indonesianNames containing sample Indonesian names.

* The randomName getter selects a random name from the list using the Random class from dart:math.

## Step 2: Using UtilFaker in Your Flutter Project

Now that we have our faker utility class, let's use it inside a Flutter widget.

### Example: Displaying a Random Name in a Flutter App

Open your main.dart file and update it with the following code:

<script src="https://gist.github.com/anhartasman/94ca0c0394853bd7123779b9de198921.js?file=main.dart"></script>

### What This Code Does:

* It displays a randomly generated Indonesian name when the app starts.

* When the button is pressed, a new name is generated and displayed.


### Where to Use This Faker Class

The UtilFaker class can be used in various scenarios, such as:

* Testing: Generate random names for UI testing without needing a real database.

* Prototyping: Fill in dummy user profiles while designing a UI.

* Game Development: Assign random character names in a game.

* Mock APIs: Simulate API responses with randomly generated names.

### Conclusion

In this tutorial, we created a simple name faker utility in Dart and integrated it into a Flutter application. You can expand this class by adding more names or generating full names instead of just first names.
