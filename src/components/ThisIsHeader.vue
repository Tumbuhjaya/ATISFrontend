<template>
  <div id="ThisIsHeader">
    <header class="header-small">
      <b-container>
        <b-row>
          <b-col md="12">
            <div class="running-text">
              <marquee-text>
                Selamat Datang pada Sistem Informasi Pelatihan Masyarakat
                (SIMPEL MAS) Kota Salatiga -
              </marquee-text>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>
    <header>
      <b-container>
        <b-row>
          <b-col md="4">
            <div class="indentity">
              <img src="../assets/logo kota salatiga.png" />
              <div class="indentity-name">
                <h3 class="mt-0 mb-0"><strong>SIMPEL MAS</strong></h3>
                <h6 style="font-size: 16px; font-weight: 400">
                  Sistem Informasi Pelatihan Masyarakat
                </h6>

                <!-- <h6 style="font-size: 16px; font-weight: 400">Kota Salatiga</h6> -->
              </div>
            </div>
          </b-col>

          <b-col md="5">
            <div class="menu">
              <!-- <router-link
                :to="'/'"
                style="color: black; text-decoration: none"
              >
                <h6 class="mt-0 mb-0">Beranda</h6>
              </router-link> -->
              <!-- <b-dropdown
                class="njim"
                id="dropdown-1"
                text="Pelatihan"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
                style="color: black"
              >
                <div style="height: 160px; overflow-y: auto">
                  <b-dropdown-item v-for="(item, idx) in kejuruan" :key="idx">
                    <router-link
                      v-if="item.namaKejuruan == 'Semua'"
                      :to="'/pelatihan/all'"
                      style="color: black"
                      >{{ item.namaKejuruan }}&nbsp;&nbsp;<b-badge
                        variant="primary"
                        >{{ item.count }}</b-badge
                      ></router-link
                    >

                    <router-link
                      v-else
                      :to="'/pelatihan/' + item.namaKejuruan"
                      style="color: black"
                      >{{ item.namaKejuruan }}&nbsp;&nbsp;<b-badge
                        variant="primary"
                        >{{ item.count }}</b-badge
                      ></router-link
                    ></b-dropdown-item
                  >
                </div>
              </b-dropdown> -->
              <router-link
                :to="'/pelatihan/all'"
                style="color: black; text-decoration: none"
              >
                <h6 class="mt-0 mb-0">Pelatihan</h6>
              </router-link>
              <router-link
                :to="'/galeri'"
                style="color: black; text-decoration: none"
              >
                <h6 class="mt-0 mb-0">Galeri</h6>
              </router-link>
              <router-link
                :to="'/perangkat_daerah'"
                style="color: black; text-decoration: none"
              >
                <h6 class="mt-0 mb-0">Perangkat Daerah</h6>
              </router-link>
              <!-- <router-link :to="'/publikasi'">
                <h6 class="mt-0 mb-0">Publikasi</h6>
              </router-link> -->

              <router-link
                :to="'/statistik'"
                style="color: black; text-decoration: none"
              >
                <h6 class="mt-0 mb-0">Statistik</h6>
              </router-link>
            </div>
          </b-col>

          <b-col md="3">
            <div class="daftar-login">
              <router-link v-if="user.length == 0" :to="'/login'">
                <b-button
                  variant="outline-primary"
                  style="margin-right: 15px"
                  size="sm"
                  >Masuk</b-button
                >
              </router-link>
              <router-link v-if="user.length == 0" :to="'/daftar'">
                <b-button
                  variant="outline-primary"
                  size="sm"
                  style="margin-right: 15px"
                  >Daftar</b-button
                >
              </router-link>

              <b-dropdown
                v-if="user.length > 0"
                id="dropdown-1"
                :text="user[0].nama"
                variant="outline-primary"
                size="sm"
                right
                block
              >
                <b-dropdown-item
                  v-if="user[0].role == 'peserta'"
                  @click="$router.push('/dashboard_masyarakat')"
                  >Dashboard</b-dropdown-item
                >
                <b-dropdown-item v-else @click="$router.push('/dashboard_opd')"
                  >Dashboard</b-dropdown-item
                >
                <b-dropdown-item v-b-modal.modal-profil>Profil</b-dropdown-item>
                <b-dropdown-item @click="logout">Logout</b-dropdown-item>
              </b-dropdown>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>
  </div>
</template>

<script>
import axios from "axios";
import ipbackend from "../ipbackend";

import MarqueeText from "vue-marquee-text-component";

export default {
  name: "ThisIsHeader",
  data() {
    return {
      kejuruan: [],
      ret: "",
      user: [],
    };
  },

  components: {
    MarqueeText,
  },
  async mounted() {
    this.ambilKejuruan();
    let ret = localStorage.getItem("user");
    ret = JSON.parse(ret);
    this.ret = ret;
    if (this.ret) {
      let user = await axios.get(ipbackend + "users/listbyid/" + ret.id, {
        headers: {
          token: ret.token,
        },
      });
      console.log(user);
      this.user = user.data.data;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      this.ret = false;
      this.user = [];
      this.$router.push("/");
    },
    async ambilKejuruan() {
      let kejuruan = await axios.get(
        ipbackend + "pelatihan/allListPelByKejuruanBelumTerlaksana/"
      );
      // console.log(kejuruan);
      let jml = 0;
      for (let i = 0; i < kejuruan.data.data.length; i++) {
        jml += Number(kejuruan.data.data[i].count);
      }

      kejuruan.data.data.unshift({ namaKejuruan: "Semua", count: jml });
      this.kejuruan = kejuruan.data.data;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-small {
  background-color: #e0e0e0;
}
</style>
