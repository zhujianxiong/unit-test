<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="num">{{number}}</div>
    <h3>{{btn}}</h3>
    <button class="clickBtn" @click="handleClick">点击</button>
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      number:'123',
      btn:'不要点击我'
    }
  },
  methods: {
    changeNumber(){
      return this.number + '9999'
    },
    handleClick(){
      this.btn = '我被点击了'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
