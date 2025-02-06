---
layout: post
title: "How to Create and Use a Bash Script to Build and Rename Flutter APKs"
summary: "Flutter Tutorial"
author: anhartasman
date: "2025-02-06 17:00:00 +0700"
categories: [mobile, flutter]
thumbnail: /assets/img/posts/flutterlogo.png
keywords: flutter
permalink: /blog/how-to-create-and-use-a-bash-script-to-build-and-rename-flutter-apks/
usemathjax: true
portfolio: false
---

When building Flutter apps, automating repetitive tasks can save a lot of time. One such task is building an APK and renaming it with a timestamp to track different builds easily. In this tutorial, we will create a Bash script that automates this process by:

Deleting previous APKs with the same prefix.

Running the Flutter build command.

Renaming the generated APK with a timestamp.

This is especially useful for version management and organizing build artifacts efficiently.

### **Bash Script to Build and Rename Flutter APK**

Here’s the full Bash script:

<script src="https://gist.github.com/anhartasman/5a6d4d6dde839c26844e9fd5e721d733.js"></script>

## Code Explanation

### 1. Define Directories and Prefix

 
<figure class="highlight">
<pre>
<code>
APK_DIR="build/app/outputs/apk/release/"
APK_PREFIX="makanmakan"
</code>

</pre>
</figure>

This sets the directory where the APK will be saved and defines a prefix (makanmakan) that will be used in the APK filename.

### 2. Generate a Timestamp

<figure class="highlight">
<pre>
<code>
TIMESTAMP=$(date +"%y_%m_%d_%H_%M")
NEW_APK="${APK_PREFIX}_${TIMESTAMP}.apk"
FILE_PATH="${APK_DIR}${NEW_APK}"
</code>

</pre>
</figure>

A timestamp in the format yy_MM_dd_hh_mm is generated and appended to the APK filename.

### 3. Delete Previous APKs

<figure class="highlight">
<pre>
<code>

echo "Deleting previous APKs matching prefix '${APK_PREFIX}'..."
find "$APK_DIR" -name "${APK_PREFIX}_*.apk" -exec rm -f {} \;

</code>
</pre>
</figure>

This finds and removes old APKs that match the prefix to keep the directory clean.

### 4. Build the Flutter APK

<figure class="highlight">
<pre>
<code>

flutter build apk --release --no-tree-shake-icons

</code>
</pre>
</figure>

This runs the Flutter build command in release mode, excluding tree-shaking for icons to prevent missing assets.

### 5. Rename and Move the APK

<figure class="highlight">
<pre>
<code>

if [ -f "${APK_DIR}app-release.apk" ]; then
  mv "${APK_DIR}app-release.apk" "$FILE_PATH"
  echo "APK built and saved as $NEW_APK"
else
  echo "Error: Flutter build did not generate an APK."
  exit 1
fi

</code>
</pre>
</figure>

After building, the script checks if the APK exists. If so, it renames it using the timestamp. If not, an error message is displayed.
 
## How to Use the Script
### 1. Create the Script File

Save the script as build_apk.sh in your Flutter project root.

### 2. Give Execution Permission

Run the following command to make the script executable:

<figure class="highlight">
<pre>
<code>

chmod +x build_apk.sh

</code>
</pre>
</figure>


### 3. Run the Script

Execute the script by running:

<figure class="highlight">
<pre>
<code>

./build_apk.sh

</code>
</pre>
</figure>

## Conclusion

This Bash script streamlines the APK build process by automating renaming and cleanup tasks. It helps keep track of builds efficiently without manual intervention. By following this tutorial, you can enhance your Flutter development workflow with a simple yet powerful automation script.

Happy coding!

