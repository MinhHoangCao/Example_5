<template>
  <div class="hello">
    <h1>Hoag {{ msg }}</h1>
    <h2>{{id}}</h2>
    <p style="color: red">{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: () => {
        return 'abcsessw';
      }
    },
    id: {
        type: String,
        default: function () {
          return 'abc';
        }
    },
  },
  computed: {
    message: function () {
      return this.msg;
    }
  },
  mounted() {
    console.log(this.message);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
