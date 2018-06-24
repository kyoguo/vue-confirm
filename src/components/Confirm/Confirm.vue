<template>
  <div class="vue-confrim" v-if="this.isDisplay">
    <div class="box">
      <div class="title">{{title}}</div>
      <div class="content">{{content}}</div>
      <div class="footer">
        <button @click="onClose">取消</button>
        <button @click="onSure">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDisplay: true
    }
  },
  name: 'HelloWorld',
  props: {
    title: String,
    content: String
  },
  methods:{
    onClose () {
      this.isDisplay = false
      this.$emit('no')
    },
    onSure () {
      this.isDisplay = false
      this.$emit('yes')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue-confrim{
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0, 0.4);
}
.box{
  border: 1px solid #ccc;
  background: #fff;
}
</style>
