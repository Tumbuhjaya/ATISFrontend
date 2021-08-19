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
              <strong>Aplikasi Training Integration System</strong>
            </h2>
          </b-col>
          <b-col md="8" offset-md="2" class="mt-5 text-center">
            <h6>
              A.T.I.S merupakan sistem informasi yang menjadi wadah yang
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
            <VueSlickCarousel v-bind="terbaru">
              <div>
                <div class="box-kegiatan">
                  <img src="../assets/agenda2.jpg" alt="" />
                  <div class="content">
                    <b-row>
                      <b-col md="12">
                        <h4 class="title">Judul Pelatihan</h4>
                        <b-row>
                          <b-col md="12">
                            <b-badge variant="success" style="padding: 5px"
                              >OPD Terkait</b-badge
                            >
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
                              <b-td>00 Juli 2021 s/d 00 Agustus 2021</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td style="width: 35px"
                                ><img
                                  src="../assets/peserta.png"
                                  alt=""
                                  style="width: 25px"
                              /></b-td>
                              <b-td>100 Peserta</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td style="width: 35px"
                                ><img
                                  src="../assets/lokasi.png"
                                  alt=""
                                  style="width: 25px"
                              /></b-td>
                              <b-td>Pelatihan Salatiga</b-td>
                            </b-tr>
                          </b-tbody>
                        </b-table-simple>
                      </b-col>

                      <b-col md="12">
                        <hr class="mt-10" />
                      </b-col>
                      <b-col md="12">
                        <router-link :to="'/detail_pelatihan/35'">
                          <b-button variant="primary">Selengkapnya</b-button>
                        </router-link>
                      </b-col>
                    </b-row>
                  </div>
                </div>
              </div>

              <div>
                <div class="box-kegiatan">
                  <img src="../assets/agenda2.jpg" alt="" />
                  <div class="content">
                    <b-row>
                      <b-col md="12">
                        <h4 class="title">Judul Pelatihan</h4>
                        <b-row>
                          <b-col md="12">
                            <b-badge variant="success" style="padding: 5px"
                              >OPD Terkait</b-badge
                            >
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
                              <b-td>00 Juli 2021 s/d 00 Agustus 2021</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td style="width: 35px"
                                ><img
                                  src="../assets/peserta.png"
                                  alt=""
                                  style="width: 25px"
                              /></b-td>
                              <b-td>100 Peserta</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td style="width: 35px"
                                ><img
                                  src="../assets/lokasi.png"
                                  alt=""
                                  style="width: 25px"
                              /></b-td>
                              <b-td>Pelatihan Salatiga</b-td>
                            </b-tr>
                          </b-tbody>
                        </b-table-simple>
                      </b-col>

                      <b-col md="12">
                        <hr class="mt-10" />
                      </b-col>
                      <b-col md="12">
                        <router-link :to="'/detail_pelatihan/35'">
                          <b-button variant="primary">Selengkapnya</b-button>
                        </router-link>
                      </b-col>
                    </b-row>
                  </div>
                </div>
              </div>

              <div>
                <div class="box-kegiatan">
                  <img src="../assets/agenda2.jpg" alt="" />
                  <div class="content">
                    <b-row>
                      <b-col md="12">
                        <h4 class="title">Judul Pelatihan</h4>
                        <b-row>
                          <b-col md="12">
                            <b-badge variant="success" style="padding: 5px"
                              >OPD Terkait</b-badge
                            >
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
                              <b-td>00 Juli 2021 s/d 00 Agustus 2021</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td style="width: 35px"
                                ><img
                                  src="../assets/peserta.png"
                                  alt=""
                                  style="width: 25px"
                              /></b-td>
                              <b-td>100 Peserta</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td style="width: 35px"
                                ><img
                                  src="../assets/lokasi.png"
                                  alt=""
                                  style="width: 25px"
                              /></b-td>
                              <b-td>Pelatihan Salatiga</b-td>
                            </b-tr>
                          </b-tbody>
                        </b-table-simple>
                      </b-col>

                      <b-col md="12">
                        <hr class="mt-10" />
                      </b-col>
                      <b-col md="12">
                        <router-link :to="'/detail_pelatihan/35'">
                          <b-button variant="primary">Selengkapnya</b-button>
                        </router-link>
                      </b-col>
                    </b-row>
                  </div>
                </div>
              </div>

              <div>
                <div class="box-kegiatan">
                  <img src="../assets/agenda2.jpg" alt="" />
                  <div class="content">
                    <b-row>
                      <b-col md="12">
                        <h4 class="title">Judul Pelatihan</h4>
                        <b-row>
                          <b-col md="12">
                            <b-badge variant="success" style="padding: 5px"
                              >OPD Terkait</b-badge
                            >
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
                              <b-td>00 Juli 2021 s/d 00 Agustus 2021</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td style="width: 35px"
                                ><img
                                  src="../assets/peserta.png"
                                  alt=""
                                  style="width: 25px"
                              /></b-td>
                              <b-td>100 Peserta</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td style="width: 35px"
                                ><img
                                  src="../assets/lokasi.png"
                                  alt=""
                                  style="width: 25px"
                              /></b-td>
                              <b-td>Pelatihan Salatiga</b-td>
                            </b-tr>
                          </b-tbody>
                        </b-table-simple>
                      </b-col>

                      <b-col md="12">
                        <hr class="mt-10" />
                      </b-col>
                      <b-col md="12">
                        <router-link :to="'/detail_pelatihan/35'">
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
            <VueSlickCarousel v-bind="kategori">
              <div>
                <router-link :to="'/pelatihan/Garment Apparel'">
                  <div class="box-kategori">
                    <img src="../assets/bg-pelatihan.png" alt="" />
                    <h6 class="text-center mt-3">
                      <strong>Teknologi Informasi dan Komunikasi </strong>
                    </h6>

                    <h6 class="mt-2"><strong>( 0 )</strong></h6>
                  </div>
                </router-link>
              </div>

              <div>
                <router-link :to="'/pelatihan/Garment Apparel'">
                  <div class="box-kategori">
                    <img src="../assets/bg-pelatihan.png" alt="" />
                    <h6 class="text-center mt-3">
                      <strong>Teknologi Informasi dan Komunikasi </strong>
                    </h6>

                    <h6 class="mt-2"><strong>( 0 )</strong></h6>
                  </div>
                </router-link>
              </div>

              <div>
                <router-link :to="'/pelatihan/Garment Apparel'">
                  <div class="box-kategori">
                    <img src="../assets/bg-pelatihan.png" alt="" />
                    <h6 class="text-center mt-3">
                      <strong>Teknologi Informasi dan Komunikasi </strong>
                    </h6>

                    <h6 class="mt-2"><strong>( 0 )</strong></h6>
                  </div>
                </router-link>
              </div>

              <div>
                <router-link :to="'/pelatihan/Garment Apparel'">
                  <div class="box-kategori">
                    <img src="../assets/bg-pelatihan.png" alt="" />
                    <h6 class="text-center mt-3">
                      <strong>Teknologi Informasi dan Komunikasi </strong>
                    </h6>

                    <h6 class="mt-2"><strong>( 0 )</strong></h6>
                  </div>
                </router-link>
              </div>

              <div>
                <router-link :to="'/pelatihan/Garment Apparel'">
                  <div class="box-kategori">
                    <img src="../assets/bg-pelatihan.png" alt="" />
                    <h6 class="text-center mt-3">
                      <strong>Teknologi Informasi dan Komunikasi </strong>
                    </h6>

                    <h6 class="mt-2"><strong>( 0 )</strong></h6>
                  </div>
                </router-link>
              </div>

              <div>
                <router-link :to="'/pelatihan/Garment Apparel'">
                  <div class="box-kategori">
                    <img src="../assets/bg-pelatihan.png" alt="" />
                    <h6 class="text-center mt-3">
                      <strong>Teknologi Informasi dan Komunikasi </strong>
                    </h6>

                    <h6 class="mt-2"><strong>( 0 )</strong></h6>
                  </div>
                </router-link>
              </div>

              <div>
                <router-link :to="'/pelatihan/Garment Apparel'">
                  <div class="box-kategori">
                    <img src="../assets/bg-pelatihan.png" alt="" />
                    <h6 class="text-center mt-3">
                      <strong>Teknologi Informasi dan Komunikasi </strong>
                    </h6>

                    <h6 class="mt-2"><strong>( 0 )</strong></h6>
                  </div>
                </router-link>
              </div>

              <div>
                <router-link :to="'/pelatihan/Garment Apparel'">
                  <div class="box-kategori">
                    <img src="../assets/bg-pelatihan.png" alt="" />
                    <h6 class="text-center mt-3">
                      <strong>Teknologi Informasi dan Komunikasi </strong>
                    </h6>

                    <h6 class="mt-2"><strong>( 0 )</strong></h6>
                  </div>
                </router-link>
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
// @ is an alias to /src
import ThisIsHeader from "../components/ThisIsHeader";
import ThisIsFooter from "../components/ThisIsFooter";
import AnimatedNumber from "animated-number-vue";
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "Home",
  data() {
    return {
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

  methods: {
    formatToPrice(value) {
      return `${value.toFixed(0)}`;
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

#home .box-kegiatan img {
  width: 100%;
  /* height: 200px; */
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
  width: 130px;
  height: 130px;
}

.slick-slider {
  margin: 0 15px;
}
</style>
