<template>
  <div>
    <h4>New Customer</h4>
    <form-customer @save="onSave($event)" @cancel="onCancel"></form-customer>
  </div>
</template>

<script>

import FormCustomer from './FormCustomer'

export default {
  components: {
    FormCustomer
  },
  data () {
    return {
      customer: {
        name: 'Kiko',
        address: 'Su Calle',
        phone: '987 321 654'
      }
    }
  },
  methods: {
    onSave (customer) {
      console.log('saving...', customer)
    },
    onCancel () {
      console.log('canceling...')
    }
  }
}
</script>

<style>
</style>
