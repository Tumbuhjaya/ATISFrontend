<template>
  <div id="detail-galeri">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h5>{{ details.kejuruan }}</h5>
            <h2>
              <strong>{{ details.judulPelatihan }}</strong>
            </h2>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col md="6">
            <img
              :src="setSrc(details.bannerPelatihan)"
              alt=""
              style="width: 100%"
            />
          </b-col>

          <b-col md="6">
            <p class="ql-editor" v-html="details.deskripsiPelatihan"></p>
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
                  {{ setDate(details.tanggalMulaiPelatihan) }} s/d
                  {{ setDate(details.tanggalSelesaiPelatihan) }}
                </h6>
              </b-col>
            </b-row>

            <b-row class="mt-4">
              <b-col md="12">
                <h4>
                  <strong
                    ><span style="font-weight: 400">Kouta</span> Peserta</strong
                  >
                </h4>
              </b-col>

              <b-col md="12" class="mt-3">
                <h6>{{ details.kuotaPeserta }} Peserta</h6>
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
                <h6>{{ details.namaOPD }}</h6>
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

              <b-col md="12" class="mt-3">
                <h6>{{ details.jenjang }}</h6>
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

              <b-col md="12" class="mt-3">
                <h6>lorem</h6>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col md="12">
            <h2>
              <strong
                ><span style="font-weight: 400">Dokumentasi</span>
                Pelatihan</strong
              >
            </h2>
          </b-col>

          <b-col md="12">
            <hr class="mb-0" />
          </b-col>
        </b-row>

        <b-row>
          <b-col md="4" class="mt-4">
            <img
              :src="ipbackend + details.fotoPelatihan1"
              alt=""
              style="width: 100%; height: 300px"
            />
          </b-col>

          <b-col md="4" class="mt-4">
            <img
              :src="ipbackend + details.fotoPelatihan2"
              alt=""
              style="width: 100%; height: 300px"
            />
          </b-col>

          <b-col md="4" class="mt-4">
            <img
              :src="ipbackend + details.fotoPelatihan3"
              alt=""
              style="width: 100%; height: 300px"
            />
          </b-col>

          <b-col md="4" class="mt-4">
            <img
              :src="ipbackend + details.fotoPelatihan4"
              alt=""
              style="width: 100%; height: 300px"
            />
          </b-col>

          <b-col md="4" class="mt-4">
            <img
              :src="ipbackend + details.fotoPelatihan5"
              alt=""
              style="width: 100%; height: 300px"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>
    <ThisIsFooter></ThisIsFooter>
  </div>
</template>

<script>
import axios from "axios";
import ipbackend from "../../ipbackend";
import moment from "moment";
moment.locale("id");
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
// @ is an alias to /src
import ThisIsHeader from "../../components/ThisIsHeader";
import ThisIsFooter from "../../components/ThisIsFooter";

export default {
  name: "Daftar",
  components: {
    ThisIsHeader,
    ThisIsFooter,
  },
  data() {
    return {
      details: "",
      ipbackend,
    };
  },
  created() {
    this.getdetail();
  },
  methods: {
    setDate(x) {
      return moment(x).format("LL");
    },
    setSrc(x) {
      return ipbackend + x;
    },
    async getdetail() {
      let detail = await axios.get(
        ipbackend + "pelatihan/listPelatihanById/" + this.$route.params.id
      );

      console.log(detail.data.data, "detail");
      this.details = detail.data.data[0];
    },
  },
};
</script>

<style scoped>
#detail-galeri .section-one {
  padding: 60px 0;
}
</style>
