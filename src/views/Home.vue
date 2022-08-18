<template>
  <div id="pelatihan">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row class="mb-1">
          <b-col md="12">
            <h2>
              <span>Pelatihan</span>
              <strong> {{ getKate($route.params.kejuruan) }}</strong>
            </h2>
          </b-col>
        </b-row>

        <b-row class="mt-4">
          <b-col md="12">
            <b-alert show variant="primary">
              <h5 class="alert-heading">Filter Berdasarkan Kategori :</h5>
              <span
                v-for="item in kejuruan"
                :key="item.no"
                @click="filter(item)"
              >
                <b-button
                  v-if="item.count != 0"
                  variant="primary"
                  size="sm"
                  class="mr-1 ml-1 mt-3"
                  >{{ item.namaKejuruan }}
                  <b-badge variant="warning">{{
                    item.count
                  }}</b-badge></b-button
                >
              </span>

              <!-- <b-button variant="primary" size="sm" class="mr-1 ml-1 mt-3"
                >Kategori <b-badge variant="warning">4</b-badge></b-button
              >

              <b-button variant="primary" size="sm" class="mr-1 ml-1 mt-3"
                >Kategori <b-badge variant="warning">4</b-badge></b-button
              >

              <b-button variant="primary" size="sm" class="mr-1 ml-1 mt-3"
                >Kategori <b-badge variant="warning">4</b-badge></b-button
              >

              <b-button variant="primary" size="sm" class="mr-1 ml-1 mt-3"
                >Kategori <b-badge variant="warning">4</b-badge></b-button
              >

              <b-button variant="primary" size="sm" class="mr-1 ml-1 mt-3"
                >Kategori <b-badge variant="warning">4</b-badge></b-button
              > -->
            </b-alert>
            <h4></h4>
          </b-col>
          <b-col md="12"> </b-col>
        </b-row>
        <b-row>
          <b-col
            md="4"
            class="mt-4"
            v-for="(item, idx) in pelatihan"
            :key="idx"
          >
            <div class="box">
              <img
                v-if="item.bannerPelatihan"
                :src="ipbackend + item.bannerPelatihan"
                alt=""
                style="
                  border-top-left-radius: 10px;
                  border-top-right-radius: 10px;
                  width: 100%;
                  height: 240px;
                "
              />
              <img
                v-else
                src="https://via.placeholder.com/360x260?text=Tidak Ada Foto"
                alt=""
                style="
                  border-top-left-radius: 10px;
                  border-top-right-radius: 10px;
                  width: 100%;
                "
              />

              <div class="content">
                <h4 class="title">{{ item.judulPelatihan }}</h4>
                <b-row class="mt-2">
                  <b-col md="12">
                    <b-badge variant="success" style="padding: 5px">{{
                      item.namaOPD
                    }}</b-badge>
                  </b-col>
                </b-row>
                <hr class="mb-10" />

                <b-row class="mt-3">
                  <b-col md="12">
                    <b-table-simple small borderless class="mb-0">
                      <b-tbody>
                        <b-tr v-b-tooltip.hover title="Tanggal Pelaksanaan">
                          <b-td style="width: 35px"
                            ><img
                              src="../assets/pelaksanaan.png"
                              alt=""
                              style="width: 25px"
                          /></b-td>
                          <b-td class="fs"
                            >{{
                              moment(item.tanggalMulaiPelatihan).format("ll")
                            }}
                            s/d
                            {{
                              moment(item.tanggalSelesaiPelatihan).format("ll")
                            }}</b-td
                          >
                        </b-tr>

                        <b-tr v-b-tooltip.hover title="Kuota Peserta">
                          <b-td style="width: 35px; vertical-align: middle"
                            ><img
                              src="../assets/peserta.png"
                              alt=""
                              style="width: 25px"
                          /></b-td>
                          <b-td class="fs"
                            >Kuota Peserta : {{ item.kuotaPeserta }}<br />Sisa
                            Kuota Peserta :
                            {{ item.kuotaPeserta - item.jmlPeserta }}
                          </b-td>
                        </b-tr>

                        <b-tr>
                          <b-td style="width: 35px"
                            ><img
                              src="../assets/lokasi.png"
                              alt=""
                              style="width: 25px"
                          /></b-td>
                          <b-td class="fs"
                            ><a :href="item.lokasi" target="_blank"
                              ><b-badge
                                variant="dark"
                                style="padding: 5px; cursor: pointer"
                                >Lihat Lokasi Pendaftaran</b-badge
                              ></a
                            ></b-td
                          >
                        </b-tr>
                      </b-tbody>
                    </b-table-simple>
                  </b-col>
                </b-row>
                <hr class="mt-10" />

                <b-button
                  variant="primary"
                  @click="$router.push('/detail_pelatihan/' + item.id)"
                  >Detail</b-button
                >
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <ThisIsFooter></ThisIsFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import ThisIsHeader from "../components/ThisIsHeader";
import ThisIsFooter from "../components/ThisIsFooter";
import axios from "axios";
import ipbackend from "../ipbackend";
import moment from "moment";
moment.locale("id");
export default {
  name: "Pelatihan",
  components: {
    ThisIsHeader,
    ThisIsFooter,
  },
  data() {
    return {
      pelatihan: [],
      kejuruan: [],
      link: "all",
      ret: "",
      ipbackend,
      moment,
      minat: [],
    };
  },
  watch: {
    "$route.params": {
      handler(newValue) {
        let vm = this;
        // const { userName } = newValue
        let ret = localStorage.getItem("user");
        vm.ret = JSON.parse(ret);
        console.log(vm.ret);

        if (vm.ret != null) {
          vm.minat = [
            { namaKejuruan: vm.ret.minat1, count: 0 },
            { namaKejuruan: vm.ret.minat2, count: 0 },
          ];
          vm.ambilByMinat();
        } else {
          vm.ambilPelatihan();
          vm.ambilKejuruan();
        }
      },
      immediate: true,
    },
  },
  methods: {
    async ambilPelatihan(x) {
      let pelatihan = await axios.get(
        ipbackend + "pelatihan/listPelByKejuruanBelumTerlaksana/" + this.link
      );
      console.log(pelatihan, "ini all");
      this.pelatihan = pelatihan.data.data;
    },
    async ambilByMinat() {
      this.kejuruan = [];
      let pelatihan = await axios.get(
        ipbackend + "pelatihan/listPelatihanByMinatUsersLogin",
        {
          headers: {
            token: this.ret.token,
          },
        }
      );
      // console.log(pelatihan, "ini minat");
      this.pelatihan = pelatihan.data.data;
      this.ambilKejuruanMinat();
    },
    async ambilKejuruanMinat() {
      let jml = 0;
      for (let i = 0; i < this.minat.length; i++) {
        let x = this.minat[i];
        this.kejuruan.push({ namaKejuruan: x.namaKejuruan, count: 0 });
        for (let j = 0; j < this.pelatihan.length; j++) {
          if (x.namaKejuruan == this.pelatihan[j].kejuruan) {
            if (j < this.pelatihan.length) {
              this.kejuruan[i].count++;
              jml++;
            }
          }
        }
      }
      this.kejuruan.unshift({ namaKejuruan: "Semua", count: jml });
      console.log(this.minat);
    },
    async ambilKejuruan() {
      this.kejuruan = [];
      let kejuruan = await axios.get(
        ipbackend + "pelatihan/allListPelByKejuruanBelumTerlaksana/"
      );
      console.log(kejuruan);
      let jml = 0;
      for (let i = 0; i < kejuruan.data.data.length; i++) {
        let x = kejuruan.data.data[i];
        if (x.count >= 1) {
          jml += Number(kejuruan.data.data[i].count);
          this.kejuruan.push({
            no: i,
            namaKejuruan: x.namaKejuruan,
            count: x.count,
          });
        }
      }
      this.kejuruan.unshift({ namaKejuruan: "Semua", count: jml });
      console.log(this.kejuruan);
    },
    filter(x) {
      if (x.namaKejuruan == "Semua") {
        this.$router.push({ path: "/pelatihan/all" });
      } else {
        this.$router.push({ path: "/pelatihan/" + x.namaKejuruan });
      }
    },
    getKate(x) {
      if (x == "all") {
        return "Semua";
      } else {
        return x;
      }
    },
  },
};
</script>

<style scoped>
.section-one {
  padding: 60px 0;
}

.section-one .box {
  border-radius: 10px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

/* .section-one .box img{
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
} */

.section-one .box .content {
  width: 100%;
  padding: 15px;
}

#pelatihan .fs {
  /* color: red; */
  font-size: 16px;
  vertical-align: middle;
}
</style>
