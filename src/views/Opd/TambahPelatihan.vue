<template>
  <div id="tambah_pelatihan">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="text-center">
              <span style="font-weight: 400">Tambah Data</span>
              <strong>Pelatihan</strong>
            </h2>
          </b-col>

          <b-col md="4" offset-md="4" class="mt-3">
            <div class="box-submenu">
              <router-link :to="'/dashboard_opd'" style="text-decoration: none"
                ><h6 class="m-t-0 m-b-0">Dashboard</h6></router-link
              >
              <h6 class="m-t-0 m-b-0">|</h6>
              <h6 class="m-t-0 m-b-0"><strong>Tambah Data</strong></h6>
            </div>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col md="10" offset-md="1">
            <b-row class="mb-3">
              <b-col md="12">
                <h2 class="text-left">
                  <span style="font-weight: 400">Informasi</span>
                  <strong>Pelatihan</strong>
                </h2>
              </b-col>
            </b-row>
            <b-form-group
              label-cols="6"
              label-cols-lg="3"
              label="Judul Pelatihan"
            >
              <b-form-input></b-form-input>
            </b-form-group>

            <b-form-group label-cols="6" label-cols-lg="3" label="Kategori">
              <b-form-select :options="kategori"></b-form-select>
            </b-form-group>

            <b-form-group label-cols="6" label-cols-lg="3" label="Sub Kategori">
              <b-form-select :options="subkategori"></b-form-select>
            </b-form-group>

            <b-form-group label-cols="6" label-cols-lg="3" label="Jenjang">
              <b-form-select :options="jenjang"></b-form-select>
            </b-form-group>

            <b-form-group label-cols="6" label-cols-lg="3" label="Deskripsi">
              <quill-editor></quill-editor>
            </b-form-group>

            <b-form-group
              label-cols="6"
              label-cols-lg="3"
              label="Tanggal Pelatihan"
            >
              <div class="row">
                <b-col md="6"
                  ><date-picker
                    v-model="time1"
                    valueType="format"
                    style="width: 100%"
                    placeholder="Tanggal Awal"
                  ></date-picker
                ></b-col>
                <b-col md="6"
                  ><date-picker
                    v-model="time2"
                    valueType="format"
                    style="width: 100%"
                    placeholder="Tanggal Akhir"
                  ></date-picker
                ></b-col>
              </div>
            </b-form-group>

            <b-form-group
              label-cols="6"
              label-cols-lg="3"
              label="Kouta Peserta"
            >
              <b-form-input></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols="6"
              label-cols-lg="3"
              label="Lokasi Pendaftaran"
            >
              <b-form-input></b-form-input>
            </b-form-group>

            <b-form-group label-cols="6" label-cols-lg="3" label="Kecamatan">
              <b-form-select :options="kecamatan"></b-form-select>
            </b-form-group>

            <b-form-group label-cols="6" label-cols-lg="3" label="Kelurahan">
              <b-form-select :options="kelurahan"></b-form-select>
            </b-form-group>

            <b-form-group
              label-cols="6"
              label-cols-lg="3"
              label="Upload Banner"
            >
              <b-form-file></b-form-file>
            </b-form-group>

            <b-form-group
              label-cols="6"
              label-cols-lg="3"
              label="Status Pelatihan"
            >
              <b-form-select :options="status"></b-form-select>
            </b-form-group>

            <b-row class="mt-5 mb-3">
              <b-col md="12">
                <h2 class="text-left">
                  <span style="font-weight: 400">Persyaratan</span>
                  <strong>Peserta</strong>
                </h2>
              </b-col>
            </b-row>

            <b-form-group label-cols="6" label-cols-lg="3" label="Syarat Umum">
              <quill-editor></quill-editor>
            </b-form-group>

            <b-form-group
              label-cols="6"
              label-cols-lg="3"
              label="Syarat Khusus"
            >
              <quill-editor></quill-editor>
            </b-form-group>

            <b-button variant="primary" class="mt-3">Simpan</b-button>
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
import Vue from "vue";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import VueQuillEditor from "vue-quill-editor";

Vue.use(VueQuillEditor /* { default global options } */);

export default {
  name: "TambahPelatihan",
  data() {
    return {
      time1: null,
      time2: null,
      kategori: [{ value: null, text: "-- Pilih --" }],

      subkategori: [{ value: null, text: "-- Pilih --" }],

      kecamatan: [{ value: null, text: "-- Pilih --" }],

      kelurahan: [{ value: null, text: "-- Pilih --" }],

      jenjang: [
        { value: null, text: "-- Pilih --" },
        { value: "Dasar", text: "Dasar" },
        { value: "Lanjutan", text: "Lanjutan" },
      ],

      status: [
        { value: null, text: "-- Pilih --" },
        { value: "Publish", text: "Publish" },
        { value: "Unpublish", text: "Unpublish" },
      ],

      editorOption: {
        // some quill options
      },
    };
  },
  components: {
    ThisIsHeader,
    ThisIsFooter,
    DatePicker,
    VueQuillEditor,
  },
};
</script>

<style scoped>
#tambah_pelatihan .section-one {
  padding: 60px 0;
}

#tambah_pelatihan .section-one .box-submenu {
  display: flex;
  justify-content: space-evenly;
  /* background-color: red; */
}

.ql-container {
  height: 300px !important;
}
</style>
