<template>
  <div id="home">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="8">
            <img
              src="https://via.placeholder.com/700x460?text=1"
              alt=""
              style="width: 100%"
            />
          </b-col>
          <b-col md="4" class="lowongan">
            <b-row>
              <b-col md="12">
                <h3 class="text-center mt-0 mb-0">
                  <strong
                    ><span style="font-weight: 400">LOWONGAN</span>
                    PEKERJAAN</strong
                  >
                </h3>
              </b-col>
            </b-row>

            <b-row class="mt-3">
              <b-col md="12">
                <VueSlickCarousel v-bind="lowongan">
                  <div>
                    <img
                      src="https://via.placeholder.com/300x100?text=11"
                      alt=""
                      style="width: 100%"
                    />
                  </div>

                  <div>
                    <img
                      src="https://via.placeholder.com/300x100?text=22"
                      alt=""
                      style="width: 100%"
                    />
                  </div>

                  <div>
                    <img
                      src="https://via.placeholder.com/300x100?text=33"
                      alt=""
                      style="width: 100%"
                    />
                  </div>

                  <div>
                    <img
                      src="https://via.placeholder.com/300x100?text=44"
                      alt=""
                      style="width: 100%"
                    />
                  </div>

                  <div>
                    <img
                      src="https://via.placeholder.com/300x100?text=55"
                      alt=""
                      style="width: 100%"
                    />
                  </div>

                  <div>
                    <img
                      src="https://via.placeholder.com/300x100?text=66"
                      alt=""
                      style="width: 100%"
                    />
                  </div>
                </VueSlickCarousel>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col md="12">
            <h2 class="text-center">
              <strong
                ><span style="font-weight: 400">PELATIHAN </span>
                TERBARU</strong
              >
            </h2>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col md="12">
            <b-card-group columns v-bind="terbaru" v-if="terbaruu.length > 0">
              <b-card
                :img-src="setSrc(item.bannerPelatihan)"
                img-alt="Image"
                img-top
                v-for="item in terbaruu"
                :key="item.id"
              >
                <b-card-text
                  ><b-row>
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
                          <b-tr v-b-tooltip.hover title="Tanggal Pelaksanaan">
                            <b-td style="width: 35px"
                              ><img
                                src="../assets/pelaksanaan.png"
                                alt=""
                                style="width: 25px"
                            /></b-td>
                            <b-td class="fs"
                              >{{ getDate(item.tanggalMulaiPelatihan) }} s/d
                              {{ getDate(item.tanggalSelesaiPelatihan) }}</b-td
                            >
                          </b-tr>

                          <b-tr v-b-tooltip.hover title="Kuota Peserta">
                            <b-td style="width: 35px"
                              ><img
                                src="../assets/peserta.png"
                                alt=""
                                style="width: 25px"
                            /></b-td>
                            <b-td class="fs"
                              >{{ item.kuotaPeserta }} Peserta , Sisa Kuota : {{item.kuotaPeserta - item.jmlPeserta}}
                              Peserta</b-td
                            >
                          </b-tr>

                          <b-tr v-b-tooltip.hover title="Lokasi Pendaftaran">
                            <b-td style="width: 35px"
                              ><img
                                src="../assets/lokasi.png"
                                alt=""
                                style="width: 25px"
                            /></b-td>
                            <b-td class="fs">{{ item.lokasi }}</b-td>
                          </b-tr>
                        </b-tbody>
                      </b-table-simple>
                    </b-col>

                    <b-col md="12">
                      <hr class="mt-10" />
                    </b-col>
                    <b-col md="12">
                      <router-link :to="'/detail_pelatihan/' + item.id">
                        <b-button variant="primary">Detail</b-button>
                      </router-link>
                    </b-col>
                  </b-row>
                </b-card-text>
              </b-card>
            </b-card-group>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col md="4" offset-md="4">
            <router-link :to="'/pelatihan/all'" style="text-decoration: none">
              <b-button variant="primary" size="lg" block
                >Selengkapnya</b-button
              >
            </router-link>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section>
      <b-container> </b-container>
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
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: false,
      },

      lowongan: {
        autoplay: true,
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
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

/* .slick-slider {
  margin: 0 15px;
} */
/* .section-one .leftnya .slick-slide img {
  width: 100%;
  height: 500px;
} */

.section-one .lowongan .slick-slide img {
  width: 100%;
  height: 100px;
}
#home .fs {
  /* color: red; */
  font-size: 14px;
  vertical-align: middle;
}

#home .box-lowongan img {
  width: 200px;
  height: 100px;
}
</style>
