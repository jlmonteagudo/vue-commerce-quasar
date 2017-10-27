<template>
  <div>
    <h4>List Products</h4>

    <q-btn color="primary" @click="findAllProducts">
      Find All Products
    </q-btn>
    <q-btn icon="add" color="primary" @click="newProduct">
      New Product
    </q-btn>

    <table class="q-table">
      <thead>
        <tr>
          <th class="text-left">Title</th>
          <th class="text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in products">
          <td class="text-left">{{ p.title }}</td>
          <td class="text-left">{{ p.description }}</td>
        </tr>
      </tbody>
    </table>

    <q-pagination v-model="pagination.page" :max="pagination.max"/>

  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import { QPagination } from 'quasar'

export default {
  components: {
    QPagination
  },
  data () {
    return {
      pagination: {
        page: 3,
        max: 10
      }
    }
  },
  methods: {
    ...mapActions({
      findAllProducts: 'product/findAll'
    }),
    newProduct () {
      this.$router.push({ path: '/products/new' })
    }
  },
  computed: {
    ...mapGetters({
      products: 'product/products'
    })
  }
}
</script>

<style>
</style>
