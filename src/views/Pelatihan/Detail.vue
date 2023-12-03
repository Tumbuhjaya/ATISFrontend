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
              style="width: 100%;object-fit: cover;"
            />

            <img
              v-else
              src="https://via.placeholder.com/1140x500?text=Tidak Ada Foto"
              style="width: 100%"
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
                <!-- <iframe
                  :src="pelatihan.lokasi + '&output=embed'"
                  width="70%"
                  height="260"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe> -->

                <a
                  :href="pelatihan.lokasi"
                  target="_blank"
                  v-if="pelatihan.lokasi != null"
                  ><b-button variant="dark"
                    >Lihat Lokasi Pendaftaran</b-button
                  ></a
                >
                <h6 v-else>Tidak ada lokasi</h6>
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
            <b-alert show variant="danger" v-if="!sesuai && login">
              <h5 class="text-center">
                Maaf Pelatihan ini tidak sesuai dengan peminatan yang anda pilih, <span style="font-weight: bold;color: red;"  v-b-modal.modal-usul-peminatan>Usul Perubahan Peminatan</span>
              </h5>

              <h5 v-if="pelatihan.sisa == 0" class="text-center">
                Maaf kuota peserta untuk pelatihan ini sudah terpenuhi
              </h5>
            </b-alert>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-col md="12">
            <router-link :to="'/daftar_pelatihan/' + $route.params.id"
              ><b-button variant="primary" :disabled="!sesuai && login"
                >Daftar Pelatihan</b-button
              ></router-link
            >


            
          </b-col>
        </b-row>
      </b-container>
    </section>

    <ThisIsFooter></ThisIsFooter>


  <!-- modal ubah peminatan -->
  <b-modal id="modal-usul-peminatan" title="Usul Perubahan Peminatan" hide-footer>
    <div class="b-row">
      <b-col md="12">
        <b-form-group label-cols="6" label-cols-lg="3" label="Peminatan 1">
          <b-form-select
          :options="kategori"
          v-model="temp_minat1"
          @change="getSub(temp_minat1, 'minat1')">
        </b-form-select>
        <h6
          style="font-weight: bold; font-size: 12px"
          class="mt-1 mb-0"
        >
          Meliputi : isi dengan subkategorinya
          <p></p>
          <p v-for="(item, index) in listSub1" :key="item.id">
            {{index+1}} . {{item.namaSubKejuruan}}
          </p>
        </h6>
        </b-form-group>

        <b-form-group label-cols="6" label-cols-lg="3" label="Peminatan 2">
          <b-form-select 
          :options="kategori"
          v-model="temp_minat2"
          @change="getSub(temp_minat2, 'minat2')">
        </b-form-select>
        <h6
          style="font-weight: bold; font-size: 12px"
          class="mt-1 mb-0"
        >
          Meliputi : isi dengan subkategorinya
          <p></p>
          <p v-for="(item, index) in listSub2" :key="item.id">
            {{index+1}} . {{item.namaSubKejuruan}}
          </p>
        </h6>
        </b-form-group>

        <b-button variant="primary" class="mt-3" @click="simpan">Simpan</b-button>
      </b-col>
    </div>
  </b-modal>
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
export default {
  name: "DetailPelatihan",
  components: {
    ThisIsHeader,
    ThisIsFooter,
  },
  data() {
    return {
      pelatihan: [],
      user: "",
      ipbackend,
      login: false,
      moment,
      kategori: [{ value: null, text: "-- Pilih --" }],
      temp_minat1: "",
      temp_minat2: "",
      listSub1: [],
      listSub2: [],
      minat: [],
      users:{}
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
  created() {
    let vm = this
    this.getKategori();
    let ret = localStorage.getItem("user");
      ret = JSON.parse(ret);
      console.log(ret.token);
      vm.users = ret
      console.log(this.$route.params.id);
      this.temp_minat1 = ret.minat1
      this.temp_minat2 = ret.minat2
      vm.getSub(ret.minat1,'minat1')
      vm.getSub(ret.minat2,'minat2')

  },
  watch: {
    "$route.params": {
      handler(newValue) {
        let vm = this;
        // const { userName } = newValue
        let ret = localStorage.getItem("user");
        vm.ret = JSON.parse(ret);
        console.log(vm.ret);

        if (vm.ret != null && vm.ret.role == 'peserta') {
          vm.minat = [
            { namaKejuruan: vm.ret.temp_minat1, count: 0 },
            { namaKejuruan: vm.ret.temp_minat2, count: 0 },
          ];
          vm.ambilPelatihan();
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
    simpan() {
      // console.log(this.data);
      let data = {
        id:this.users.id,
          temp_minat1: this.temp_minat1,
          temp_minat2: this.temp_minat2,
          tanggal_usulan_perubahan: this.moment(),

        }
        axios({
        method: "post",
        url: ipbackend + "users/update",
        data,
        headers: {
          token: this.users.token,
        },
      }).then((data) => {
        console.log(data);
          alert(data.data.message);
      });

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
      this.pelatihanMinat = pelatihan.data.data;
      this.ambilKejuruanMinat();
    },
    async ambilKejuruanMinat() {
      let jml = 0;
      for (let i = 0; i < this.minat.length; i++) {
        let x = this.minat[i];
        this.kejuruan.push({ namaKejuruan: x.namaKejuruan, count: 0 });
        for (let j = 0; j < this.pelatihanMinat.length; j++) {
          if (x.namaKejuruan == this.pelatihanMinat[j].kejuruan) {
            if (j < this.pelatihanMinat.length) {
              this.kejuruan[i].count++;
              jml++;
            }
          }
        }
      }
      this.kejuruan.unshift({ namaKejuruan: "Semua", count: jml });
      console.log(this.minat);
    },
    async getKategori() {
      let kate = await axios.get(ipbackend + "kejuruan/listKejuruan");
      console.log(kate);
      for (let i = 0; i < kate.data.data.length; i++) {
        let x = kate.data.data[i];
        this.kategori.push({ value: x.namaKejuruan, text: x.namaKejuruan });
      }
    },
    async getSub(x,y) {
      console.log(x)
      let vm = this;
      let subkategori = await axios.get(
        ipbackend + "kejuruan/listSubKejuruanByKejuruan/" + x,
      );
      if (y == "minat1") {
        vm.listSub1 = subkategori.data.data;
      } else if (y == "minat2") {
        vm.listSub2 = subkategori.data.data;
      }
    },
    async ambilPelatihan() {
      let ret = localStorage.getItem("user");
      ret = JSON.parse(ret);
      console.log(this.$route.params.id);
      let pelatihan = await axios.get(
        ipbackend + "pelatihan/listpelatihanbyid/" + this.$route.params.id
      );
      // console.log(pelatihan);
      this.pelatihan = pelatihan.data.data[0];
      this.pelatihan.sisa = pelatihan.data.sisaKuota;

      if (ret) {
        console.log("cihuy");
        let datauser = await axios.get(ipbackend + "users/listById/" + ret.id, {
          headers: {
            token: ret.token,
          },
        });
        console.log(datauser);
        this.user = datauser.data.data[0];
        this.login = true;
      }

      // console.log(this.pelatihan.kejuruan, this.user.minat2);
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
