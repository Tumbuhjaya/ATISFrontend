<template>
  <div id="ThisIsHeader">
    <header>
      <b-container>
        <b-row>
          <b-col md="4">
            <div class="indentity">
              <img src="https://via.placeholder.com/80" alt="" />
              <div class="indentity-name">
                <h3 class="mt-0 mb-0"><strong>S T I S</strong></h3>
                <h6 style="font-size: 16px; font-weight: 400">
                  Salatiga Tranning Integartion System
                </h6>
              </div>
            </div>
          </b-col>

          <b-col md="7" offset-md="1">
            <div class="daftar-login">
              <router-link :to="'/login'">
                <b-button
                  variant="outline-primary"
                  style="margin-right: 15px"
                  size="sm"
                  >Masuk</b-button
                >
              </router-link>
              <router-link :to="'/daftar'">
                <b-button
                  variant="outline-primary"
                  size="sm"
                  style="margin-right: 15px"
                  >Daftar</b-button
                >
              </router-link>

              <b-dropdown
                id="dropdown-1"
                text="Halo, Username Login"
                variant="outline-primary"
                size="sm"
                right
              >
                <b-dropdown-item>Logout</b-dropdown-item>
              </b-dropdown>
            </div>

            <div class="menu">
              <router-link :to="'/'">
                <h6 class="mt-0 mb-0">Beranda</h6>
              </router-link>
              <b-dropdown
                id="dropdown-1"
                text="Pelatihan"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <b-dropdown-item
                  ><router-link :to="'/pelatihan'"
                    >Menjahit</router-link
                  ></b-dropdown-item
                >
                <b-dropdown-item>Memasak</b-dropdown-item>
                <b-dropdown-item>Menari</b-dropdown-item>
              </b-dropdown>
              <router-link :to="'/galeri'">
                <h6 class="mt-0 mb-0">Galeri</h6>
              </router-link>
              <h6 class="mt-0 mb-0">Cari Peserta</h6>
              <router-link :to="'/publikasi'">
                <h6 class="mt-0 mb-0">Publikasi</h6>
              </router-link>

              <router-link :to="'/statistik'">
                <h6 class="mt-0 mb-0">Statistik</h6>
              </router-link>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>
  </div>
</template>

<script>
export default {
  name: "ThisIsHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
