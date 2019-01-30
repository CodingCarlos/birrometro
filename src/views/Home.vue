<template>
  <div class="page">
    <v-toolbar app fixed color="primary">
<!--         <v-btn icon @click="$router.back();">
          <v-icon>arrow_back</v-icon>
        </v-btn> -->
        <v-toolbar-title>Birrómetro</v-toolbar-title>
    </v-toolbar>

     <v-content class="text-xs-center">
      <h1 class="my-4">{{ liters }} L</h1>
      <v-btn @click="increase(0.20)">Caña</v-btn>
      <v-btn @click="increase(0.33)">Tercio</v-btn>
      <v-btn @click="increase(1)">Litro</v-btn>
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    liters() {
      return this.$store.state.quantity.toFixed(2);
    },
  },
  methods: {
    increase(quantity) {
      this.$store.dispatch('addQuantity', quantity);
    },
  },
};
</script>
