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
              <b-form-input v-model="namaPengusul"></b-form-input>
            </b-form-group>

            <b-form-group label="NIK">
              <b-form-input v-model="NIKUsulan"></b-form-input>
            </b-form-group>

            <b-form-group label="Alamat">
              <b-form-input></b-form-input>
            </b-form-group>

            <b-form-group label="Kecamatan">
              <b-form-select :options="kecamatan"></b-form-select>
            </b-form-group>

            <b-form-group label="Kelurahan">
              <b-form-select :options="kelurahan"></b-form-select>
            </b-form-group>

            <b-form-group label="No. Telepon">
              <b-form-input v-model="noHpUsulan"></b-form-input>
            </b-form-group>

            <b-form-group label="Usulan Pelatihan">
              <b-form-input v-model="namaUsulan"></b-form-input>
            </b-form-group>

            <b-button variant="primary" @click="regisUsulan()">Kirim</b-button>
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

export default {
  name: "SurveyPelatihan",
  data() {
    return {
      namaUsulan: "",
      namaPengusul: "",
      NIKUsulan: "",
      noHpUsulan: "",
      kec: [{ value: "", text: "-- Pilih --" }],
      kel: [{ value: "", text: "-- Pilih --" }],
    };
  },
  components: {
    ThisIsHeader,
    ThisIsFooter,
  },
  methods: {
    regisUsulan() {
      axios
        .post(ipbackend + "usulanPelatihan/register", {
          namaUsulan: this.namaUsulan,
          namaPengusul: this.namaPengusul,
          NIKUsulan: this.NIKUsulan,
          noHpUsulan: this.noHpUsulan,
        })
        .then((res) => {
          console.log(res);
          this.$router.push({ path: "/" });
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
