---
layout: post
title:  "Vue JS Basic 25: Locking content with v-once"
author: anhartasman
categories: [ vuejs, tutorial, snippet ]
image: assets/images/16.jpg
---
Belajar v-once

## app.js


```js
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmedName:''
    };
  },
  methods:{
    add(){
      this.counter++;
    },
    reduce(){
      this.counter--;
    },
    setName(event,lastName){
      this.name=event.target.value+" "+lastName;
    },
    submitForm(){
      alert("Submitted!!");
    },
    confirmInput(){
      this.confirmedName=this.name;
    }
  }
});

app.mount('#events');
xt-decoration: underline;
}
```

#### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue Basics</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
    <script src="https://unpkg.com/vue@next" defer></script>
    <script src="app.js" defer></script>
  </head>
  <body>
    <header>
      <h1>Vue Events</h1>
    </header>
    <section id="events">
      <h2>Events in Action</h2>
      <button v-on:click="add">Add</button>
      <button v-on:click="reduce">Remove</button>
      <p v-once>Started Counter: {{ counter }}</p>
      <p>Result: {{ counter }}</p>
      <input type="text"  v-on:input="setName($event,'Tasman')" v-on:keyUp.enter="confirmInput">
      <p>Your Name: {{ confirmedName }}</p>
      <form v-on:submit.prevent="submitForm">
        <input type="text" name="" id="">
        <button>Sign Up</button>
      </form>
    </section>
  </body>
</html>


```

#### styles.css

```css
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #4fc08d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#events {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#events h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #4fc08d;
  margin: 0 0 1rem 0;
}

#events p {
  font-size: 1.25rem;
  font-weight: bold;
  border: 1px solid #4fc08d;
  background-color: #4fc08d;
  color: white;
  padding: 0.5rem;
  border-radius: 25px;
}

#events input {
  font: inherit;
  border: 1px solid #ccc;
}

#events input:focus {
  outline: none;
  border-color: #1b995e;
  background-color: #d7fdeb;
}

#events button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  border-radius: 20px;
  margin: 0 1rem;
}

#events button:hover,
#events button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

```

Semoga bermanfaat