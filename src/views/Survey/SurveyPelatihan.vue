<template>
  <div id="survey_pelatihan">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="text-center">
              <span>Formulir Usulan</span> <strong>Pelatihan</strong>
            </h2>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col md="8" offset-md="2">
            <b-form-group label="Nama">
              <b-form-input v-model="$v.item.namaPengusul.$model"></b-form-input>
            </b-form-group>

            <b-form-group label="NIK">
              <b-form-input v-model="$v.item.NIKUsulan.$model"></b-form-input>
            </b-form-group>

            <b-form-group label="Alamat">
              <b-form-input v-model="$v.item.alamatUsulan.$model"></b-form-input>
            </b-form-group>

            <b-form-group label="Kecamatan">
              <b-form-select
                :options="kecamatan"
                v-model="$v.item.kecamatanUsulan.$model"
                @change="getKelurahan(item.kecamatanUsulan)"
              ></b-form-select>
            </b-form-group>

            <b-form-group label="Kelurahan">
              <b-form-select
                :options="kelurahan"
                v-model="$v.item.kelurahanUsulan.$model"
              ></b-form-select>
            </b-form-group>

            <b-form-group label="No. Telepon">
              <b-form-input v-model="$v.item.noHpUsulan.$model"></b-form-input>
            </b-form-group>

            <b-form-group label="Usulan Pelatihan">
              <b-form-input v-model="$v.item.namaUsulan.$model"></b-form-input>
            </b-form-group>

            <b-button  :disabled="!isValid" variant="primary" @click="regisUsulan()">Kirim</b-button>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <ThisIsFooter></ThisIsFooter>
  </div>
</template>

<script>
import ipbackend from "../../ipbackend";
import axios from "axios";
// @ is an alias to /src
import ThisIsHeader from "../../components/ThisIsHeader";
import ThisIsFooter from "../../components/ThisIsFooter";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
  alpha,
  numeric,
  helpers,
} from "vuelidate/lib/validators";

export default {
  name: "SurveyPelatihan",
  data() {
    return {
      item: {
        namaUsulan: "",
        namaPengusul: "",
        NIKUsulan: "",
        noHpUsulan: "",
        alamatUsulan: "",
        kecamatanUsulan: "",
        kelurahanUsulan: "",
      },
      kecamatan: [
        { value: "", text: "-- Pilih --" },
        { value: "Argomulyo", text: "Argomulyo" },
        { value: "Sidomukti", text: "Sidomukti" },
        { value: "Sidorejo", text: "Sidorejo" },
        { value: "Tingkir", text: "Tingkir" },
      ],
      kelurahan: [{ value: "", text: "-- Pilih --" }],
    };
  },
  components: {
    ThisIsHeader,
    ThisIsFooter,
  },
  created() {
  },
  computed: {
    formString() {
      return JSON.stringify(this.item, null, 4);
    },
    isValid() {
      return !this.$v.item.$invalid;
    },
    isDirty() {
      return this.$v.item.$anyDirty;
    },
  },
  mixins: [validationMixin],
  validations: {
    item: {
      NIKUsulan: {
        required,
        numeric,
        minLength: minLength(16),
      },
      namaUsulan: {
        required,
      },
      alamatUsulan: {
        required,
      },
      noHpUsulan: {
        required,
        numeric,
      },
      kelurahanUsulan: {
        required,
      },
      kecamatanUsulan: {
        required,
      },
      namaPengusul:{
        required
      }
    },
  },
  methods: {
    regisUsulan() {
      axios
        .post(ipbackend + "usulanPelatihan/register", this.item)
        .then((res) => {
          console.log(res);
          this.$router.push({ path: "/" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getKelurahan(x) {
      this.kelurahan = [{ value: "", text: "-- Pilih --" }],
      axios
        .get(ipbackend + "kelurahan/listKelByKecamatan/" + x)
        .then((res) => {
          console.log(res);
          res.data.data.map(item =>{
            this.kelurahan.push({value:item.namaKelurahan, text: item.namaKelurahan})
          })
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
#survey_pelatihan .section-one {
  padding: 60px 0;
}
</style>
