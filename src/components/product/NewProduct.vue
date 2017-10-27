<template>
  <div>
    <h5>New Product</h5>
    <form-product @save="onSave($event)" @cancel="onCancel"></form-product>
  </div>
</template>

<script>

import FormProduct from './FormProduct'
import { Toast } from 'quasar'
import { mapActions } from 'vuex'

export default {
  components: {
    FormProduct,
    Toast
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions({
      insert: 'product/insert',
      findAll: 'product/findAll'
    }),
    onSave (product) {
      this.insert(product).then(() => {
        Toast.create['positive']('Product has been saved')
        this.findAll()
        this.$router.push('/products')
      })
    },
    onCancel () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
</style>
