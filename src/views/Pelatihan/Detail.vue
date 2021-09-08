<template>
  <div id="detail_pelatihan">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h5>{{ pelatihan.kejuruan }}</h5>
            <h2>
              <strong>{{ pelatihan.judulPelatihan }}</strong>
            </h2>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col md="6">
            <!-- <img :src="ipbackend + pelatihan.bannerPelatihan" alt="" /> -->
            <img
              v-if="pelatihan.bannerPelatihan"
              :src="ipbackend + pelatihan.bannerPelatihan"
              style="width: 100%"
            />

            <img
              v-else
              src="https://via.placeholder.com/1140x500?text=Tidak Ada Foto"
            />
          </b-col>

          <b-col md="6">
            <b-row>
              <b-col md="12">
                <div class="ql-container">
                  <div
                    class="ql-editor"
                    v-html="pelatihan.deskripsiPelatihan"
                  ></div>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col md="12">
            <h2>
              <strong
                ><span style="font-weight: 400">Informasi</span>
                Pelatihan</strong
              >
            </h2>
          </b-col>
          <b-col md="12">
            <hr />
          </b-col>
          <b-col md="6">
            <b-row>
              <b-col md="12">
                <h4>
                  <strong
                    ><span style="font-weight: 400">Tanggal</span>
                    Pelatihan</strong
                  >
                </h4>
              </b-col>

              <b-col md="12" class="mt-3">
                <h6>
                  {{ moment(pelatihan.tanggalMulaiPelatihan).format("LL") }} s/d
                  {{ moment(pelatihan.tanggalSelesaiPelatihan).format("LL") }}
                </h6>
              </b-col>
            </b-row>

            <b-row class="mt-4">
              <b-col md="12">
                <h4>
                  <strong
                    ><span style="font-weight: 400">Kuota</span> Peserta</strong
                  >
                </h4>
              </b-col>

              <b-col md="12" class="mt-3">
                <h6>
                  Kuota Peserta : {{ pelatihan.kuotaPeserta }}<br />Sisa Kuota
                  Peserta :
                  {{ pelatihan.sisa }}
                </h6>
              </b-col>
            </b-row>

            <b-row class="mt-4">
              <b-col md="12">
                <h4>
                  <strong
                    ><span style="font-weight: 400">Lokasi</span>
                    Pendaftaran</strong
                  >
                </h4>
              </b-col>

              <b-col md="12" class="mt-2">
                <!-- <a :href="pelatihan.lokasi" target="_blank"
                  ><b-badge variant="dark" style="padding: 5px; cursor: pointer"
                    >Lihat Lokasi Pendaftaran</b-badge
                  ></a
                > -->
                <iframe
                  :src="pelatihan.lokasi + '&output=embed'"
                  width="70%"
                  height="260"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </b-col>
            </b-row>
          </b-col>

          <b-col md="6">
            <b-row>
              <b-col md="12">
                <h4>
                  <strong
                    ><span style="font-weight: 400">Instansi</span>
                    Penyelenggara</strong
                  >
                </h4>
              </b-col>

              <b-col md="12" class="mt-3">
                <h6>{{ pelatihan.namaOPD }}</h6>
              </b-col>
            </b-row>

            <b-row class="mt-4">
              <b-col md="12">
                <h4>
                  <strong
                    ><span style="font-weight: 400">Jenjang</span>
                    Pelatihan</strong
                  >
                </h4>
              </b-col>

              <b-col md="12" class="mt-2">
                <h6>{{ pelatihan.jenjang }}</h6>
              </b-col>
            </b-row>

            <b-row class="mt-4">
              <b-col md="12">
                <h4>
                  <strong
                    ><span style="font-weight: 400">Kontak</span> Person</strong
                  >
                </h4>
              </b-col>

              <b-col md="12" class="mt-2">
                <h6>{{ pelatihan.CPPelatihan }}</h6>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col md="12">
            <h2>
              <strong
                ><span style="font-weight: 400">Persyaratan</span>
                Peserta</strong
              >
            </h2>
          </b-col>
          <b-col md="12">
            <hr />
          </b-col>

          <b-col md="12">
            <b-row>
              <b-col md="6">
                <b-row>
                  <b-col md="12">
                    <h4>
                      <strong
                        ><span style="font-weight: 400">Persyaratan</span>
                        Umum</strong
                      >
                    </h4>
                  </b-col>

                  <b-col md="12" class="mt-3">
                    <div class="ql-container">
                      <div
                        class="ql-editor"
                        v-html="pelatihan.syaratUmum"
                      ></div>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col md="6">
                <b-row>
                  <b-col md="12">
                    <h4>
                      <strong
                        ><span style="font-weight: 400">Persyaratan</span>
                        Khusus</strong
                      >
                    </h4>
                  </b-col>

                  <b-col md="12" class="mt-2">
                    <div class="ql-container">
                      <div
                        class="ql-editor"
                        v-html="pelatihan.syaratKhusus"
                      ></div>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <b-row class="mt-3">
          <b-col md="12">
            <hr />
          </b-col>
        </b-row>

        <b-row>
          <b-col md="12" lg="12">
            <b-alert show variant="danger">
              <h4 v-if="!sesuai" class="text-center">
                Maaf Pelatihan ini tidak sesuai dengan peminatan yang anda pilih
              </h4>

              <h4 v-if="pelatihan.sisa == 0" class="text-center">
                Maaf kuota peserta untuk pelatihan ini sudah terpenuhi
              </h4>
            </b-alert>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col md="12">
            <router-link :to="'/daftar_pelatihan/' + $route.params.id"
              ><b-button variant="primary" :disabled="!sesuai"
                >Daftar Pelatihan</b-button
              ></router-link
            >
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
import "quill/dist/quill.core.css";

import axios from "axios";
import ipbackend from "../../ipbackend";
import moment from "moment";
moment.locale("id");

let ret = localStorage.getItem("user");
ret = JSON.parse(ret);
export default {
  name: "DetailPelatihan",
  components: {
    ThisIsHeader,
    ThisIsFooter,
  },
  data() {
    return {
      pelatihan: [],
      user: [],
      ipbackend,
      moment,
    };
  },
  mounted() {
    this.ambilPelatihan();
  },
  computed: {
    sesuai() {
      return (
        this.pelatihan.kejuruan == this.user.minat1 ||
        this.pelatihan.kejuruan == this.user.minat2
      );
    },
  },
  methods: {
    async ambilPelatihan() {
      console.log(this.$route.params.id);
      let pelatihan = await axios.get(
        ipbackend + "pelatihan/listpelatihanbyid/" + this.$route.params.id
      );
      console.log(pelatihan);
      this.pelatihan = pelatihan.data.data[0];
      this.pelatihan.sisa = pelatihan.data.sisaKuota;

      let datauser = await axios.get(ipbackend + "users/listById/" + ret.id, {
        headers: {
          token: ret.token,
        },
      });
      this.user = datauser.data.data[0];
      console.log(this.pelatihan.kejuruan, this.user.minat2);
    },
  },
};
</script>

<style scoped>
#detail_pelatihan .section-one {
  padding: 60px 0;
}

/* .ql-container {
  height: 200px !important;
} */
</style>
