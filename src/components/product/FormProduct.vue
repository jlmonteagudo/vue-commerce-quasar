<template>

  <div class="container">

    <q-card>

      <q-card-title>
        General
        <span slot="subtitle">General product information</span>
        <q-icon slot="right" name="description" />
      </q-card-title>

      <q-card-main>

        <q-field :error="$v.product.title.$error" :error-label="titleErrorMessage">
          <q-input v-model="product.title" float-label="Title" @blur="$v.product.title.$touch" required/>
        </q-field>

        <q-field :error="$v.product.description.$error" :error-label="descriptionErrorMessage">
          <q-input type="textarea" v-model="product.description" float-label="Description" @blur="$v.product.description.$touch" required :min-rows="4" :max-height="100" />
        </q-field>

        <q-field :error="$v.product.shortDescription.$error" :error-label="shortDescriptionErrorMessage">
          <q-input v-model="product.shortDescription" float-label="Short description" @blur="$v.product.shortDescription.$touch" required />
        </q-field>

        <q-field :error="$v.product.price.$error" :error-label="priceErrorMessage">
          <q-input type="number" v-model="product.price" prefix="$" float-label="Price" @blur="$v.product.price.$touch" required :max="10" />
        </q-field>


      </q-card-main>

    </q-card>


    <div class="col-xs-12 actions">
      <q-btn icon="add" color="primary" @click="onSubmit" :disabled="$v.product.$invalid">Save</q-btn>
      <q-btn icon="clear" color="negative" @click="onCancel" >Cancel</q-btn>
    </div>


  </div>

</template>

<script>

import { QBtn, QCard, QCardTitle, QCardMain } from 'quasar'
import { required, maxLength, between } from 'vuelidate/lib/validators'

export default {
  components: {
    QBtn,
    QCard,
    QCardTitle,
    QCardMain
  },
  props: {
    product: {
      type: Object,
      default: function () {
        return {
          title: '',
          description: '',
          shortDescription: '',
          price: ''
        }
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
    titleErrorMessage () {
      if (!this.$v.product.title.required) return 'Title is required'
    },
    descriptionErrorMessage () {
      if (!this.$v.product.description.required) return 'Description is required'
    },
    shortDescriptionErrorMessage () {
      if (!this.$v.product.shortDescription.required) return 'Short description is required'
    },
    priceErrorMessage () {
      if (!this.$v.product.price.required) return 'Price is required'
      if (!this.$v.product.price.maxLength) return 'Maximum number of chars allowed is 10'
      if (!this.$v.product.price.between) return 'Price must range between 0 and 9999999999'
    }
  },
  validations: {
    product: {
      title: { required },
      description: { required },
      shortDescription: { required },
      price: {
        required,
        maxLength: maxLength(10),
        between: between(0, 9999999999)
      }
    }
  },
  methods: {
    onSubmit () {
      this.$emit('save', this.product)
    },
    onCancel () {
      this.$emit('cancel')
    }
  }
}
</script>

<style scoped>
  .container {
    width: 800px;
    max-width: 90vw;
  }

  .actions {
    margin-top: 30px;
  }
</style>
