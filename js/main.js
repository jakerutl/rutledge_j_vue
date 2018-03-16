const vm = new Vue({
  el : "#app",

  data : {
    welcomeMessage : "Welcome to my first Vue app!",

    deliciousFruit : [
      { name: "apple", flavour: "tasty!"},
       { name: "oranges", flavour: "yum!"},
        { name: "banana", flavour: "tasteful!"}
    ],

    hasVue : true,

    vuemessage : "hey, you can haz vue!"
  },

  methods : { //methods are just a function inside of vue
    logClicked(e){

      console.log(e.currentTarget, this);
    }
  }
});
