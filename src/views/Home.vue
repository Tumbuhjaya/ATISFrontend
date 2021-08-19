<template>
  <div id="home">
    <ThisIsHeader></ThisIsHeader>

    <section>
      <b-container fluid>
        <b-row>
          <b-col md="12" style="padding-left: 0; padding-right: 0">
            <img src="../assets/banner.png" alt="" style="width: 100%" />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="text-center">Tentang</h2>
            <h2 class="text-center">
              <strong>Sistem Informasi Pelatihan</strong>
            </h2>
            <h2 class="text-center"><strong>(S I M P E L)</strong></h2>
          </b-col>
          <b-col md="8" offset-md="2" class="mt-5 text-center">
            <h6>
              SIMPEL merupakan sistem informasi yang menjadi wadah yang
              mengintegrasikan database program pelatihan, peserta, dan output
              pelatihan dari setiap instansi penyelenggara. Sistem ini juga
              berfungsi memudahkan peserta pelatihan untuk mendapat informasi
              yang relevan dengan bidang pelatihan yang pernah diikutinya,
              seperti misalnya event untuk memasarkan produk usahanya atau
              lowongan kerja.
            </h6>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col md="3">
            <h1 class="text-center title">
              <animated-number
                :value="peserta"
                :formatValue="formatToPrice"
                :duration="2500"
                :delay="2500"
              />
            </h1>
            <h5 class="text-center">PESERTA</h5>
            <h5 class="text-center">PELATIHAN</h5>
          </b-col>

          <b-col md="3">
            <h1 class="text-center title">
              <animated-number
                :value="akan"
                :formatValue="formatToPrice"
                :duration="2500"
                :delay="2500"
              />
            </h1>
            <h5 class="text-center">PELATIHAN<br />AKAN TERLAKSANA</h5>
          </b-col>

          <b-col md="3">
            <h1 class="text-center title">
              <animated-number
                :value="sedang"
                :formatValue="formatToPrice"
                :duration="2500"
                :delay="2500"
              />
            </h1>
            <h5 class="text-center">PELATIHAN<br />SEDANG TERLAKSANA</h5>
          </b-col>

          <b-col md="3">
            <h1 class="text-center title">
              <animated-number
                :value="telah"
                :formatValue="formatToPrice"
                :duration="2500"
                :delay="2500"
              />
            </h1>
            <h5 class="text-center">PELATHAN<br />TELAH TERLAKSANA</h5>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="section-two">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="text-center">
              <strong
                ><span style="font-weight: 400">Pelatihan</span> Terbaru</strong
              >
            </h2>
          </b-col>
          <b-col md="12" class="mt-5">
            <VueSlickCarousel v-bind="terbaru" v-if="terbaruu.length > 0">
              <div v-for="item in terbaruu" :key="item.id">
                <div class="box-kegiatan">
                  <div class="banner">
                    <img :src="setSrc(item.bannerPelatihan)" alt="" />
                  </div>

                  <div class="content">
                    <b-row>
                      <b-col md="12">
                        <h4 class="title">{{ item.judulPelatihan }}</h4>
                        <b-row>
                          <b-col md="12">
                            <b-badge variant="success" style="padding: 5px">{{
                              item.namaOPD
                            }}</b-badge>
                          </b-col>
                        </b-row>
                      </b-col>
                      <b-col md="12" class="mt-3 icon">
                        <b-table-simple small borderless class="mb-0">
                          <b-tbody>
                            <b-tr>
                              <b-td style="width: 35px"
                                ><img
                                  src="../assets/pelaksanaan.png"
                                  alt=""
                                  style="width: 25px"
                              /></b-td>
                              <b-td
                                >{{ getDate(item.tanggalMulaiPelatihan) }} s/d
                                {{
                                  getDate(item.tanggalSelesaiPelatihan)
                                }}</b-td
                              >
                            </b-tr>

                            <b-tr>
                              <b-td style="width: 35px"
                                ><img
                                  src="../assets/peserta.png"
                                  alt=""
                                  style="width: 25px"
                              /></b-td>
                              <b-td>{{ item.kuotaPeserta }} Peserta</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td style="width: 35px"
                                ><img
                                  src="../assets/lokasi.png"
                                  alt=""
                                  style="width: 25px"
                              /></b-td>
                              <b-td>{{ item.lokasi }}</b-td>
                            </b-tr>
                          </b-tbody>
                        </b-table-simple>
                      </b-col>

                      <b-col md="12">
                        <hr class="mt-10" />
                      </b-col>
                      <b-col md="12">
                        <router-link :to="'/detail_pelatihan/' + item.id">
                          <b-button variant="primary">Selengkapnya</b-button>
                        </router-link>
                      </b-col>
                    </b-row>
                  </div>
                </div>
              </div>
            </VueSlickCarousel>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="section-three">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="text-center">
              <strong
                ><span style="font-weight: 400">Kategori</span>
                Pelatihan</strong
              >
            </h2>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col md="12">
            <VueSlickCarousel v-bind="kategori" v-if="kejuruan.length > 0">
              <div v-for="item in kejuruan" :key="item.namaKejuruan">
                <span
                  @click="goKejuruan(item.namaKejuruan)"
                  style="cursor: pointer"
                >
                  <div class="box-kategori">
                    <img src="../assets/bg-pelatihan.png" alt="" />
                    <h6 class="text-center mt-3">
                      <strong>{{ item.namaKejuruan }} </strong>
                    </h6>
                    <h6 class="mt-2">
                      <strong>( {{ item.count }} )</strong>
                    </h6>
                  </div>
                </span>
              </div>
            </VueSlickCarousel>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <ThisIsFooter></ThisIsFooter>
  </div>
</template>

<script>
import axios from "axios";
import ipbackend from "../ipbackend";
// @ is an alias to /src
import ThisIsHeader from "../components/ThisIsHeader";
import ThisIsFooter from "../components/ThisIsFooter";
import AnimatedNumber from "animated-number-vue";
import VueSlickCarousel from "vue-slick-carousel";
import moment from "moment";
moment.locale("id");

export default {
  name: "Home",
  data() {
    return {
      kejuruan: "",
      terbaruu: "",
      counts: "",
      kategori: {
        autoplay: true,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
      },

      terbaru: {
        autoplay: true,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
      peserta: 100,
      akan: 100,
      sedang: 100,
      telah: 100,
    };
  },
  components: {
    ThisIsHeader,
    ThisIsFooter,
    AnimatedNumber,
    VueSlickCarousel,
  },
  created() {
    this.ambilKejuruan();
  },
  methods: {
    formatToPrice(value) {
      return `${value.toFixed(0)}`;
    },
    goKejuruan(x) {
      this.$router.push({ path: "/pelatihan/" + x });
    },
    getDate(x) {
      return moment(x).format("LL");
    },
    setSrc(x) {
      return ipbackend + x;
    },
    async ambilKejuruan() {
      let kejuruan = await axios.get(
        ipbackend + "pelatihan/allListPelByKejuruanBelumTerlaksana/"
      );
      // console.log(kejuruan, 'ini keju');
      this.kejuruan = kejuruan.data.data;

      let terbaru = await axios.get(ipbackend + "pelatihan/pelatihanTerbaru");
      // console.log(terbaru,' terbaru')
      this.terbaruu = terbaru.data.data;

      let count = await axios.get(
        ipbackend + "pelatihan/jumlahPelatihanByPelaksanaan"
      );
      // console.log(count, 'ini count')
      this.akan = count.data.belumDimulai;
      this.sedang = count.data.sedangDimulai;
      this.telah = count.data.sudahSelesai;

      let peserta = await axios.get(ipbackend + "users/jumlahPeserta");
      // console.log(peserta, 'peserta')
      this.peserta = peserta.data.jumlahPeserta;
    },
  },
};
</script>

<style scoped>
#home .section-one {
  padding: 60px 0;
}

#home .section-one .box-kat {
  width: 100%;
  /* height: 100px; */
  background-color: whitesmoke;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 6px;
}

#home .section-two {
  padding: 60px 0;
  background-color: whitesmoke;
}

#home .section-two {
  padding: 60px 0;
  background-color: whitesmoke;
}

#home .section-three {
  padding: 60px 0;
}

#home .section-three .comment {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  /* background-color: red; */
  height: 261px;
  flex-direction: column;
}

#home .box-kegiatan {
  width: 100%;
  background-color: #fff;
  border-radius: 6px;
}

#home .box-kegiatan .banner img {
  width: 100%;
  height: 200px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

#home .box-kegiatan .icon img {
  width: 25px;
}

#home .box-kegiatan .content {
  padding: 15px;
}

#home .box-kategori {
  width: 100%;
  height: 220px;
  padding: 30px;
  border-radius: 6px;
  /* background-color: whitesmoke; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

#home .box-kategori .count {
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 100%;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
}

#home .box-kategori img {
  width: 120px;
  height: 120px;
}

.slick-slider {
  margin: 0 15px;
}
</style>
