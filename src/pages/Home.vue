<template >    
<div id="app">
    <div class="card">
        <div class="card-header">
            <h4>Contact List</h4>
        </div>
        <ContactList />
    </div>
</div>
    
</template>

<script>
import ContactList from '../components/ContactList.vue'
export default {
  name: 'Home',
  created() {
	this.$store.dispatch('alert/success', 'wellcome to contact List');
  },
  components: {
    ContactList
  }
}
</script>

<style scoped >

</style>
