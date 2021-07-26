<template>
  <div id="pelatihan">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2>
              <span>Pelatihan</span>
              <strong> {{ $route.params.kejuruan }}</strong>
            </h2>
          </b-col>
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
                        <b-tr>
                          <b-td style="width: 35px"
                            ><img
                              src="../../assets/pelaksanaan.png"
                              alt=""
                              style="width: 25px"
                          /></b-td>
                          <b-td
                            >{{
                              moment(item.tanggalMulaiPelatihan).format("LL")
                            }}
                            s/d
                            {{
                              moment(item.tanggalSelesaiPelatihan).format("LL")
                            }}</b-td
                          >
                        </b-tr>

                        <b-tr>
                          <b-td style="width: 35px"
                            ><img
                              src="../../assets/peserta.png"
                              alt=""
                              style="width: 25px"
                          /></b-td>
                          <b-td>{{ item.kuotaPeserta }} Peserta</b-td>
                        </b-tr>

                        <b-tr>
                          <b-td style="width: 35px"
                            ><img
                              src="../../assets/lokasi.png"
                              alt=""
                              style="width: 25px"
                          /></b-td>
                          <b-td>{{ item.lokasi }}</b-td>
                        </b-tr>
                      </b-tbody>
                    </b-table-simple>
                  </b-col>
                </b-row>
                <hr class="mt-10" />

                <b-button
                  variant="primary"
                  @click="$router.push('/detail_pelatihan/' + item.id)"
                  >Selengkapnya</b-button
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
      ipbackend,
      moment,
    };
  },
  watch: {
    '$route.params': {
        handler(newValue) {
            // const { userName } = newValue

             this.ambilPelatihan();
        },
        immediate: true,
    }
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
</style>
