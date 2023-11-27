<template>
  <div id="galeri">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2><span>Galeri</span> <strong>Pelatihan</strong></h2>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="4" class="mt-4" v-for="item in pelatihans" :key="item.id">
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
                  object-fit: cover;
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
                  height: 240px;
                "
              />

              <div class="content">
                <h4 class="title">{{ item.judulPelatihan }}</h4>
                <b-row class="mt-2">
                  <b-col md="12">
                    <div style="overflow: auto;">
                    <b-badge variant="success" style="padding: 5px">{{
                      item.namaOPD
                    }}</b-badge>
                    </div>
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
                              src="../../assets/pelaksanaan.png"
                              alt=""
                              style="width: 25px"
                          /></b-td>
                          <b-td class="fs">
                            {{
                              moment(item.tanggalMulaiPelatihan).format("ll")
                            }}
                            s/d
                            {{
                              moment(item.tanggalSelesaiPelatihan).format("ll")
                            }}</b-td
                          >
                        </b-tr>

                        <b-tr>
                          <b-td style="width: 35px"
                            ><img
                              src="../../assets/lokasi.png"
                              alt=""
                              style="width: 25px"
                          /></b-td>
                          <b-td class="fs">
                            <a :href="item.lokasi" target="_blank"
                              ><b-badge
                                variant="dark"
                                style="padding: 5px; cursor: pointer"
                                >Lihat Lokasi Pendaftaran</b-badge
                              ></a
                            >
                          </b-td>
                        </b-tr>
                      </b-tbody>
                    </b-table-simple>
                  </b-col>
                </b-row>

                <hr class="mt-10" />

                <router-link :to="'/detail_galeri/' + item.id"
                  ><b-button variant="primary">Detail</b-button></router-link
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
import axios from "axios";
import ipbackend from "../../ipbackend";
import moment from "moment";
moment.locale("id");
// @ is an alias to /src
import ThisIsHeader from "../../components/ThisIsHeader";
import ThisIsFooter from "../../components/ThisIsFooter";

export default {
  name: "Galeri",
  components: {
    ThisIsHeader,
    ThisIsFooter,
  },
  data() {
    return {
      pelatihans: "",
      moment,
      ipbackend,
    };
  },
  created() {
    this.getPel();
  },
  methods: {
    setDate(x) {
      return moment(x).format("LL");
    },
    setSrc(x) {
      return ipbackend + x;
    },
    async getPel() {
      let pelatihan = await axios.get(
        ipbackend + "pelatihan/ALLPelatihanSudahSelesai"
      );
      console.log(pelatihan, "pelatihans");
      this.pelatihans = pelatihan.data.data;
    },
  },
};
</script>

<style scoped>
#galeri .section-one {
  padding: 60px 0;
}

#galeri .section-one .box {
  border-radius: 10px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

#galeri .section-one .box .content {
  width: 100%;
  padding: 15px;
}

#galeri .fs {
  /* color: red; */
  font-size: 14px;
  vertical-align: middle;
}
</style>
