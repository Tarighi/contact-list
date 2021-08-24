<template>
  <div class="container" >
		<div class="list-group" v-for="contact in contacts" :key="contact.id">
			<a href="#" class="list-group-item list-group-item-action" aria-current="true">
				<div class="d-flex w-100 justify-content-between">
					<h5 class="mb-1">{{contact.name}}</h5>
				</div>
				<div class="d-flex w-100 justify-content-between" v-if='contact.phones.length>0' >
					<h6 class="mb-1" v-for="phone in contact.phones" :key="phone.id">{{phone.number}}</h6>
					<small > Phone(s):{{contact.phones.length}}</small>
				</div>
				<div class="d-flex w-100 justify-content-between" v-if='contact.emails.length>0'>
					<h6 class="mb-1" v-for="email in contact.emails" :key="email.id" >{{email.emailAddress}}</h6>
					<small >Email(s) {{contact.emails.length}}</small>
				</div>
				<div class="d-flex w-100 justify-content-between" v-if='contact.addresses.length>0'>
					<h6 class="mb-1" v-for="address in contact.addresses" :key="address.id">{{address.address}}</h6>
					<small >Address(es):{{contact.addresses.length}}</small>
				</div>
			</a>
		</div>
  </div>
</template>

<script>
import { contactService } from '../_services';
export default {
  name: 'ContactList',
  data() {
    	return {
    	    contacts: [],
    	    apiUrl: '',
    	    search: ''
    	}
   },
   beforeMount() {
        this.GetContacts()
   },
   created() {
		this.apiUrl = this.$store.state.apiUrl;
   },
   methods: {
        async GetContacts() {
            try {
				console.log(contactService);
				contactService.getContacts(1, 50).then(_contacts => {
					if (_contacts) {
						this.contacts = _contacts;
					}
					return this.contacts;
				});
				this.$store.dispatch('alert/success', 'Contacts List is loaded');
            } catch (error) {
                console.error(error)
            }
        }
   }
}
</script>

<style scoped>

</style>
