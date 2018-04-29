<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
    <div class="mb-5"></div> <!-- Du padding moche -->
    <FooterKYT></FooterKYT>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import FooterKYT from '@/components/FooterKYT'

export default {
  name: 'App',
  components: {Nav, FooterKYT}
}
</script>

<style>

</style>
