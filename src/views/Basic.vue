<template>
  <div id="daftar">
    <ThisIsHeader></ThisIsHeader>
    
    <ThisIsFooter></ThisIsFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import ThisIsHeader from "../components/ThisIsHeader";
import ThisIsFooter from "../components/ThisIsFooter";

export default {
  name: 'Daftar',
  components: {
      ThisIsHeader,
      ThisIsFooter
  }
}
</script>

<style scoped>

</style>
