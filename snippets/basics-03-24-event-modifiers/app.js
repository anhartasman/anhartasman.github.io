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
