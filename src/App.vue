<template>
  <div id="q-app">

    <q-layout
      ref="layout"
      view="hHh Lpr fff"
      :left-class="{'bg-grey-2': true}"
    >
      <q-toolbar slot="header">
        <q-btn
          flat
          @click="$refs.layout.toggleLeft()"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Vue-commerce
          <div slot="subtitle">Ecommerce solution built with Vue</div>
        </q-toolbar-title>
      </q-toolbar>



      <div slot="left">

        <q-list no-border link inset-delimiter>
          <q-list-header>Essential Links</q-list-header>

          <q-side-link item to="/customer/new" exact>
            <q-item-side icon="people" />
            <q-item-main label="New Customer" />
          </q-side-link>

          <q-side-link item to="/prueba" exact>
            <q-item-side icon="wifi" />
            <q-item-main label="Prueba" />
          </q-side-link>

        </q-list>
      </div>

      <div class="layout-padding">
        <div class="row">
          <div class="col-xs-12 col-sm-6">

            <router-view />

          </div>
        </div>
      </div>

    </q-layout>
      
  </div>
</template>

<script>

import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QSideLink
} from 'quasar'

export default {

  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QSideLink
  },

  data () {
    return {

    }
  }

}
</script>

<style></style>
