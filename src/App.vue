<template>
  <div id='alert' v-if="alert.visible" :class="`alert ${alert.type}`">{{alert.message}}</div>
  <img alt="logo" src="./assets/contact.png" height="120" >
  <router-view></router-view>
</template>

<script>

export default {
	computed: {
        alert () {
            return this.$store.state.alert
        }
    },
	created() {
            setTimeout(() => this.$store.dispatch('alert/clear'), 10000)
    },
	watch: {
        $route (to, from){
            // clear alert on location change
            this.$store.dispatch('alert/clear');
        }
    } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
