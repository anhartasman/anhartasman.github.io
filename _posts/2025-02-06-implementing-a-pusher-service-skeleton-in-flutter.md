---
layout: post
title: "Implementing a Pusher Service Skeleton in Flutter"
summary: "Flutter Tutorial"
author: anhartasman
date: "2025-02-06 01:00:23 +0700"
categories: [mobile, flutter]
thumbnail: /assets/img/posts/flutterlogo.jpg
keywords: flutter
permalink: /blog/implementing-a-pusher-service-skeleton-in-flutter/
usemathjax: true
portfolio: false
---

Pusher is a real-time communication service that allows Flutter applications to receive and send updates instantly. In this article, we will explore a reusable Pusher service skeleton in Flutter that facilitates channel subscriptions, event bindings, and efficient resource management.

This service ensures that channels are managed correctly using reference counting, preventing unnecessary subscriptions and allowing clean disconnections when they are no longer needed.

im using **_pusher_client_fixed_** for this tutorial

### **Singleton Pattern for Service Management**

The `PusherService` class follows the singleton pattern, ensuring only one instance exists throughout the application lifecycle.

<figure class="highlight">
<pre>
<code>
class PusherService {
  static final PusherService _instance = PusherService._internal();
  PusherClient? pusher;
  final Map<String, Channel> channels = {};
  final Map<String, int> channelRefCount = {};
  bool isInitialized = false;
factory PusherService() => _instance;
PusherService._internal();

}

</code>
</pre>
</figure>

This pattern provides a global access point for Pusher functionality and ensures efficient resource management.

### Initializing Pusher

The initializePusher function initializes the Pusher client with authentication tokens.

<figure class="highlight">
<pre>
<code>
 void initializePusher(String idToken, String chatToken) {
    if (!isInitialized) {
      pusher = PusherClient(
        'app-key',
        PusherOptions(
          host: host_pusher,
          wsPort: 6001,
          encrypted: false,
          auth: PusherAuth(
            "${baseUrl}broadcasting/auth",
            headers: {
              'Authorization': "Bearer ${idToken}.${chatToken}",
            },
          ),
        ),
        autoConnect: true,
      );

      pusher?.onConnectionStateChange((state) {
        print("Connection state chat changed to: ${state!.currentState}");
      });

      pusher?.onConnectionError((error) {
        print("Connection error: ${error!.message}");
      });

      pusher?.connect();
      isInitialized = true;
    }

}
</code>

</pre>
</figure>

This method ensures that Pusher is initialized only once, avoiding unnecessary connections.

### Subscribing to Channels

<figure class="highlight">
<pre>
<code>
 void subscribeToChannel(String channelName) {
    if (pusher == null) {
      throw Exception(
          'PusherClient is not initialized. Call initializePusher first.');
    }

    // Increment reference count
    channelRefCount[channelName] = (channelRefCount[channelName] ?? 0) + 1;

    // Check if already subscribed
    if (channels.containsKey(channelName)) {
      print('Already subscribed to channel: $channelName');
      return;
    }

    // Subscribe and store the channel
    final newChannel = pusher!.subscribe(channelName);
    channels[channelName] = newChannel;
    print('Subscribed to channel: $channelName');

}
</code>

</pre>
</figure>

This method ensures that multiple parts of the app can subscribe to the same channel without creating duplicate subscriptions.

### Binding Events to Channels

<figure class="highlight">
<pre>
<code>

void bindEvent(
String channelName, String eventName, Function(dynamic) callback) {
final channel = channels[channelName];
if (channel == null) {
throw Exception(
'Channel $channelName is not subscribed. Call subscribeToChannel first.');
}

    debugPrint("binded channelName: $channelName to eventName: $eventName");
    channel.bind(eventName, callback);

}

void unbindEvent(String channelName, String eventName) {
final channel = channels[channelName];
if (channel != null) {
channel.unbind(eventName);
}
}

</code>
</pre>
</figure>

This method allows event handling for a specific channel by binding an event listener to it. You should call unbindEvent when the event is no longer needed, such as when leaving a page.

### Unsubscribing and Disconnecting

<figure class="highlight">
<pre>
<code>

void unsubscribeFromChannel(String channelName) {
if (pusher == null || !channels.containsKey(channelName)) {
return;
}

    // Decrement reference count
    if (channelRefCount.containsKey(channelName)) {
      channelRefCount[channelName] = channelRefCount[channelName]! - 1;

      // Only unsubscribe if no references remain
      if (channelRefCount[channelName]! <= 0) {
        pusher!.unsubscribe(channelName);
        channels.remove(channelName);
        channelRefCount.remove(channelName);
        print('Unsubscribed from channel: $channelName');
      }
    }

}

void disconnect() {
if (pusher != null) {
for (var channelName in channels.keys) {
pusher!.unsubscribe(channelName);
}
channels.clear();
channelRefCount.clear();
pusher!.disconnect();
pusher = null;
isInitialized = false;
print('Pusher disconnected and all channels unsubscribed.');
}
}

</code>
</pre>
</figure>

The unsubscribeFromChannel method ensures that channels are unsubscribed only when all references to them are removed. The disconnect method completely cleans up Pusher resources when the service is no longer needed.

### Full Source Code

<script src="https://gist.github.com/anhartasman/41c691d6417c70b96e3799df5cf2a42d.js"></script>

### Conclusion

This Pusher service skeleton provides a structured way to handle real-time communication in Flutter applications. By implementing a singleton pattern, reference counting, and event binding, it ensures efficient resource utilization while making it easy to manage subscriptions. This approach is ideal for applications that require real-time updates, such as chat applications, notifications, or live collaboration tools.

Would you like to extend this functionality with additional features like automatic reconnection or background service support? Let me know in the comments!
