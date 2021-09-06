<template>
  <div id="pelatihan">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row class="mb-1">
          <b-col md="12">
            <h2>
              <span>Pelatihan</span>
              <strong> {{ $route.params.kejuruan }}</strong>
            </h2>
          </b-col>
        </b-row>

        <b-row class="mt-4">
          <b-col md="12">
            <b-alert show variant="primary">
              <h5 class="alert-heading">Filter Berdasarkan Kategori :</h5>
              <b-button
                variant="primary"
                size="sm"
                class="mr-1 ml-1 mt-3"
                v-for="item in kejuruan"
                :key="item.no"
                @click="filter(item)"
                >{{ item.namaKejuruan }}
                <b-badge variant="warning">{{ item.count }}</b-badge></b-button
              >

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
                <b-row>
                  <b-col md="12">
                    <b-badge variant="success" style="padding: 5px">{{
                      item.namaOPD
                    }}</b-badge>
                  </b-col>
                </b-row>
                <!-- <hr class="mb-10"> -->

                <b-row class="mt-3">
                  <b-col md="12">
                    <b-table-simple small borderless class="mb-0">
                      <b-tbody>
                        <b-tr v-b-tooltip.hover title="Tanggal Pelaksanaan">
                          <b-td style="width: 35px"
                            ><img
                              src="../../assets/pelaksanaan.png"
                              alt=""
                              style="width: 25px"
                          /></b-td>
                          <b-td class="fs"
                            >{{
                              moment(item.tanggalMulaiPelatihan).format("LL")
                            }}
                            s/d
                            {{
                              moment(item.tanggalSelesaiPelatihan).format("LL")
                            }}</b-td
                          >
                        </b-tr>

                        <b-tr v-b-tooltip.hover title="Kuota Peserta">
                          <b-td style="width: 35px; vertical-align: middle"
                            ><img
                              src="../../assets/peserta.png"
                              alt=""
                              style="width: 25px"
                          /></b-td>
                          <b-td class="fs"
                            >Kuota Peserta : {{ item.kuotaPeserta }} <br />Sisa
                            Kuota Peserta :
                            {{ item.kuotaPeserta - item.jmlPeserta }}
                          </b-td>
                        </b-tr>

                        <b-tr>
                          <b-td style="width: 35px"
                            ><img
                              src="../../assets/lokasi.png"
                              alt=""
                              style="width: 25px"
                          /></b-td>
                          <b-td class="fs">
                            <!-- <a :href="item.lokasi" target="_blank"
                              ><b-badge
                                variant="dark"
                                style="padding: 5px; cursor: pointer"
                                >Lihat Lokasi Pendaftaran</b-badge
                              ></a
                            > -->
                            <!-- <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.3573022667224!2d110.49354081477517!3d-7.313698094721612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a786b65969a7d%3A0x9352eb9d4032ec4!2sInspektorat%20Kota%20Salatiga!5e0!3m2!1sid!2sid!4v1630886744903!5m2!1sid!2sid"
                              width="600"
                              height="450"
                              style="border: 0"
                              allowfullscreen=""
                              loading="lazy"
                            ></iframe> -->
                            <iframe
                              :src="item.lokasi"
                              width="100%"
                              height="100"
                              style="border: 0"
                              allowfullscreen=""
                              loading="lazy"
                            ></iframe>
                          </b-td>
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
import ThisIsHeader from "../../components/ThisIsHeader";
import ThisIsFooter from "../../components/ThisIsFooter";
import axios from "axios";
import ipbackend from "../../ipbackend";
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
      ipbackend,
      moment,
    };
  },
  watch: {
    "$route.params": {
      handler(newValue) {
        // const { userName } = newValue

        this.ambilPelatihan();
        this.ambilKejuruan();
      },
      immediate: true,
    },
  },

  methods: {
    async ambilPelatihan() {
      let pelatihan = await axios.get(
        ipbackend +
          "pelatihan/listPelByKejuruanBelumTerlaksana/" +
          this.$route.params.kejuruan
      );
      console.log(pelatihan);
      this.pelatihan = pelatihan.data.data;
    },
    async ambilKejuruan() {
      this.kejuruan = [];
      let kejuruan = await axios.get(
        ipbackend + "pelatihan/allListPelByKejuruanBelumTerlaksana/"
      );
      // console.log(kejuruan);
      let jml = 0;
      for (let i = 0; i < kejuruan.data.data.length; i++) {
        let x = kejuruan.data.data[i];
        if (x.count == 1) {
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
  font-size: 14px;
  vertical-align: middle;
}
</style>
