<!-- <template>
  <v-app>
    <Header />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
    import Header from './components/Layout/Header';
    import Footer from './components/Layout/Footer';
    export default {
        name: 'App',
        components: {
            Header,
            Footer
        },

        data: () => ({
            //
        }),
    };
</script> -->


<template>
  <div id="app">
    <v-app>
      <Sigin />
      <v-main>
        <Header />
        <router-view></router-view>
        <Footer />
      </v-main>
    </v-app>
  </div>
</template>

<script>
    import Header from './components/Layout/Header';
    import Sigin from './views/Auth/Sigin/index.vue';
    // import Header from './components/Layout/Header';
    import Footer from './components/Layout/Footer';
    export default {
        name: 'App',

        components: {
            Header,
            Sigin,
            Footer
        },

        data: () => ({
            //
        }),
    };
</script>