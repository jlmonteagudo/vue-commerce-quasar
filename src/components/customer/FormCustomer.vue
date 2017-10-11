<template>

  <div>

    <div class="row">

      <div class="col-xs-12">
        <q-field icon="person" :error="$v.customer.name.$error" :error-label="nameErrorMessage">
          <q-input v-model="customer.name" float-label="Name" @blur="$v.customer.name.$touch" required/>
        </q-field>        
      </div>

      <div class="col-xs-12">
        <q-field icon="place" :error="$v.customer.address.$error" :error-label="addressErrorMessage">
          <q-input v-model="customer.address" float-label="Address" @blur="$v.customer.address.$touch" />
        </q-field>        
      </div>

      <div class="col-xs-12">
        <q-field icon="phone" :error="$v.customer.phone.$error" :error-label="phoneErrorMessage">
          <q-input v-model="customer.phone" float-label="Phone" @blur="$v.customer.phone.$touch" />
        </q-field>
      </div>

      <div class="col-xs-12 actions">
        <q-btn icon="add" color="negative" @click="onCancel" >Cancel</q-btn>
        <q-btn icon="add" color="primary" @click="onSubmit" :disabled="$v.customer.$invalid">Save</q-btn>
      </div>

    </div>

  </div>

</template>

<script>

import { required } from 'vuelidate/lib/validators'

export default {
  props: {
    customer: {
      type: Object,
      default: function () {
        return {
          name: '',
          address: '',
          phone: ''
        }
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
    nameErrorMessage () {
      if (!this.$v.customer.name.required) return 'Name is required'
    },
    addressErrorMessage () {
      if (!this.$v.customer.address.required) return 'Address is required'
    },
    phoneErrorMessage () {
      if (!this.$v.customer.phone.required) return 'Phone is required'
    }
  },
  validations: {
    customer: {
      name: { required },
      address: { required },
      phone: { required }
    }
  },
  methods: {
    onSubmit () {
      this.$emit('save', this.customer)
    },
    onCancel () {
      this.$emit('cancel')
    }
  }
}
</script>

<style scoped>
  .actions {
    margin-top: 30px;
  }
</style>
