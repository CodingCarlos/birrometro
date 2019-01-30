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
      <div>
        <v-btn @click="increase(0.20)">Caña</v-btn>
        <v-btn @click="increase(0.33)">Tercio</v-btn>
        <v-btn @click="increase(1)">Litro</v-btn>
      </div>
      <div class="py-4">
        <v-btn color="error" @click="reset()">Reset</v-btn>
      </div>
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
    reset() {
      /* ToDo @CodingCarlos: Use vuetify confirm instead of native one */
      /* eslint-disable-next-line */
      if (confirm('¡Ojo! Se va a resetear el contador para siempre. ¿Estás seguro?')) {
        this.$store.dispatch('reset');
      }
    },
  },
};
</script>
