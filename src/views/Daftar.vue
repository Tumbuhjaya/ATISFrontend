<template>
  <div id="daftar">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="5">
            <div class="box">
              <b-row>
                <b-col md="12">
                  <h2><span>Daftar</span> <strong>Peserta SIMPEL</strong></h2>
                  <hr />
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12">
                  <b-form-group label-cols="6" label-cols-lg="3" label="NIK">
                    <b-form-input v-model="$v.data.NIK.$model"></b-form-input>
                    <b-form-invalid-feedback :state="checkIfValid('NIK')">
                      Masukkan 16 digit angka yang tertera di KTP.
                    </b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group label-cols="6" label-cols-lg="3" label="Nama">
                    <b-form-input v-model="$v.data.nama.$model"></b-form-input>
                    <b-form-invalid-feedback :state="checkIfValid('nama')">
                      Nama wajib diisi.
                    </b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group label-cols="6" label-cols-lg="3" label="Alamat">
                    <b-form-input
                      v-model="$v.data.alamat.$model"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="checkIfValid('alamat')">
                      Alamat Wajib diisi.
                    </b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    label-cols="6"
                    label-cols-lg="3"
                    label="Password"
                  >
                    <b-form-input
                      v-model="$v.data.password.$model"
                      type="password"
                    ></b-form-input>
                    <b-form-invalid-feedback :state="checkIfValid('password')">
                      Password minimal 8 digit mengandung 1 angka, 1 huruf
                      capital dan tidak mengandung tanda baca.
                    </b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    label-cols="6"
                    label-cols-lg="3"
                    label="Telepon"
                  >
                    <b-form-input v-model="$v.data.noHp.$model"></b-form-input>
                    <b-form-invalid-feedback :state="checkIfValid('noHp')">
                      No. Telepon Wajib diisi.
                    </b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group label-cols="6" label-cols-lg="3" label="Email">
                    <b-form-input v-model="data.email"></b-form-input>
                  </b-form-group>
                  <hr />
                  <div
                    style="
                      background-color: #e0e0e0;
                      padding: 15px;
                      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
                      border-radius: 10px;
                    "
                  >
                    <b-form-group label="Peminatan 1">
                      <b-form-select
                        :options="kategori"
                        v-model="$v.data.minat1.$model"
                        @change="getSub(data.minat1, 'minat1')"
                      ></b-form-select>
                      <b-form-invalid-feedback :state="checkIfValid('minat1')">
                        Peminatan Wajib diisi.
                      </b-form-invalid-feedback>
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

                    <b-form-group label="Peminatan 2">
                      <b-form-select
                        :options="kategori"
                        v-model="$v.data.minat2.$model"
                        @change="getSub(data.minat2, 'minat2')"
                      ></b-form-select>
                      <b-form-invalid-feedback :state="checkIfValid('minat2')">
                        Peminatan Wajib diisi.
                      </b-form-invalid-feedback>
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

                    <b-form-group>
                      <h6
                        style="font-weight: bold; font-size: 12px"
                        class="mt-0 mb-0"
                      >
                        <i
                          >Pastikan isi sesuai dengan minat anda, karena
                          peminatan ini akan menetukan kategori pelatihan yang
                          bisa anda ikuti</i
                        >
                      </h6>
                    </b-form-group>
                  </div>
                  <hr />
                  <b-button
                    :disabled="!isValid"
                    variant="primary"
                    @click="simpan"
                    >Daftar</b-button
                  >
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col md="7">
            <div
              style="
                display: flex;
                justify-content: center;
                align-items: center;
                height: 800px;
              "
            >
              <img src="../assets/bg.jpg" alt="" style="width: 100%" />
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
import ThisIsHeader from "../components/ThisIsHeader";
import ThisIsFooter from "../components/ThisIsFooter";
import axios from "axios";
import ipbackend from "../ipbackend";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  numeric,
  helpers,
} from "vuelidate/lib/validators";

export default {
  name: "Daftar",
  components: {
    ThisIsHeader,
    ThisIsFooter,
  },
  data: function() {
    return {
      data: {
        NIK: "",
        password: "",
        role: "peserta",
        noHp: "",
        nama: "",
        alamat: "",
        email: "",
        minat1: "",
        minat2: "",
      },
      kategori: [{ value: null, text: "-- Pilih --" }],
      listSub1: [],
      listSub2: [],
    };
  },
  created() {
    this.getKategori();
  },
  computed: {
    formString() {
      return JSON.stringify(this.data, null, 4);
    },
    isValid() {
      return !this.$v.data.$invalid;
    },
    isDirty() {
      return this.$v.data.$anyDirty;
    },
  },
  mixins: [validationMixin],
  validations: {
    data: {
      NIK: {
        required,
        numeric,
        minLength: minLength(16),
      },
      nama: {
        required,
      },
      alamat: {
        required,
      },
      password: {
        required,
        minLength: minLength(8),
        strongPass: helpers.regex(
          "strongPass",
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
        ),
      },
      noHp: {
        required,
        numeric,
      },
      minat1: {
        required,
      },
      minat2: {
        required,
      },
    },
  },
  methods: {
    checkIfValid(fieldName) {
      const field = this.$v.data[fieldName];
      if (!field.$dirty) {
        return null;
      }
      return !(field.$invalid || field.$model === "");
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
    simpan() {
      // console.log(this.data);
      let vm = this;
      axios.post(ipbackend + "users/register", this.data).then((data) => {
        console.log(data);
        (vm.data = {
          NIK: "",
          nama: "",
          alamat: "",
          password: "",
          role: "peserta",
          noHp: "",
          email: "",
          minat1: "",
          minat2: "",
        }),
          alert(data.data.message);
        if (data.data.message == "sukses") {
          vm.$router.push("/login");
        }
      });
    },
    async getKategori() {
      let kate = await axios.get(ipbackend + "kejuruan/listKejuruan");
      console.log(kate);
      for (let i = 0; i < kate.data.data.length; i++) {
        let x = kate.data.data[i];
        this.kategori.push({ value: x.namaKejuruan, text: x.namaKejuruan });
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
  padding: 30px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  border-radius: 10px;
}
</style>
