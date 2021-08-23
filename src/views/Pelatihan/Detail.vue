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
                  {{ pelatihan.kuotaPeserta }} Peserta, Sisa Kuota : 00 Peserta
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
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4050.860110010008!2d110.49856856371225!3d-7.3319508571359275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a7836e1ffaac3%3A0x245363b38d0a6761!2sBappeda%20Salatiga!5e0!3m2!1sid!2sid!4v1627193634401!5m2!1sid!2sid"
                  width="70%"
                  height="300"
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
                <h6></h6>
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

        <b-row class="mt-3">
          <b-col md="12">
            <router-link :to="'/daftar_pelatihan/' + $route.params.id"
              ><b-button variant="primary"
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
export default {
  name: "DetailPelatihan",
  components: {
    ThisIsHeader,
    ThisIsFooter,
  },
  data() {
    return {
      pelatihan: [],
      ipbackend,
      moment,
    };
  },
  mounted() {
    this.ambilPelatihan();
  },
  methods: {
    async ambilPelatihan() {
      console.log(this.$route.params.id);
      let pelatihan = await axios.get(
        ipbackend + "pelatihan/listpelatihanbyid/" + this.$route.params.id
      );
      console.log(pelatihan);
      this.pelatihan = pelatihan.data.data[0];
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
