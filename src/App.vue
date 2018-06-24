<template>
  <div id="app">
    <button @click="onClick">Click</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  created() {
    
  },
  methods:{
    onClick () {
      this.$confirm().then(e =>{
        console.log('sure')
      })
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
