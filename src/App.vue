<template>
  <v-app>
    <router-view name="main"></router-view>

<!-- Prepare future secondary screens and modals -->
<!--     <v-dialog v-model="modal" transition="dialog-bottom-transition" persistent>
      <div class="modal">
        <router-view name="modal"></router-view>
      </div>
    </v-dialog>

    <v-dialog v-model="over" fullscreen hide-overlay transition="dialog-bottom-transition">
      <div class="over">
        <router-view name="over"></router-view>
      </div>
    </v-dialog>

    <v-snackbar
      v-model="$store.state.notification.show"
      bottom
      multi-line
      :color="$store.state.notification.color"
    >
      {{ $store.state.notification.message }}
      <v-btn
        color="white"
        flat
        @click="$store.dispatch('notification/hide')"
      >
        Close
      </v-btn>
    </v-snackbar> -->
  </v-app>
</template>

<style scoped>
/*.over, .modal {
  background: white;
  height: 100%;
  width: 100%;
}

.modal {
  z-index: 99999;
}

>>> .v-dialog:not(.v-dialog--fullscreen) {
  height: calc(100% - 32px);
  max-height: calc(100% - 32px);
  margin: 16px;
}*/
</style>

<style type="text/css">
/* Global common styles */
</style>

<script>
export default {
  name: 'App',
  /* Prepare future secondary screens and modals */
  // data: () => ({
  //   over: false,
  //   modal: false,
  // }),
  // watch: {
  //   $route() {
  //     this.over = this.$router.currentRoute.meta.isOver;
  //     this.modal = this.$router.currentRoute.meta.isModal;
  //   },
  //   modal() {
  //     if (this.modal === true) {
  //       document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden');
  //     } else if (this.modal === false) {
  //       document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden');
  //     }
  //   },
  // },
};
</script>
