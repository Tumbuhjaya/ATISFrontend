<template>
  <div id="edit_pelatihan">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="text-center"><span style="font-weight:400">Edit Data</span> <strong>Pelatihan</strong></h2>
          </b-col>

          <b-col md="4" offset-md="4" class="mt-3">
                <div class="box-submenu">
                    <router-link
                        :to="'/dashboard_opd'"
                        style="text-decoration:none"
                        ><h6 class="m-t-0 m-b-0">Dashboard</h6></router-link
                    >
                    <h6 class="m-t-0 m-b-0">|</h6>
                    <h6 class="m-t-0 m-b-0"><strong>Edit Data</strong></h6>
                </div>
          </b-col>
        </b-row>


        <b-row class="mt-5">
            <b-col md="10" offset-md="1">
                <b-row class="mb-3">
                    <b-col md="12">
                        <h2 class="text-left"><span style="font-weight:400">Informasi</span> <strong>Pelatihan</strong></h2>
                    </b-col>
                </b-row>
                <b-form-group label-cols="6" label-cols-lg="3" label="Judul Pelatihan">
                    <b-form-input></b-form-input>
                </b-form-group>

                <b-form-group label-cols="6" label-cols-lg="3" label="Kategori">
                    <b-form-select
                        :options="kategori"
                    ></b-form-select>
                </b-form-group>

                <b-form-group label-cols="6" label-cols-lg="3" label="Jenjang">
                    <b-form-select
                        :options="jenjang"
                    ></b-form-select>
                </b-form-group>

                <b-form-group label-cols="6" label-cols-lg="3" label="Deskripsi">
                    <b-form-textarea rows="3" max-rows="6"></b-form-textarea>
                </b-form-group>

                

                <b-form-group label-cols="6" label-cols-lg="3" label="Tanggal Pelatihan">
                    <date-picker v-model="time1" valueType="format" style="width:100%"></date-picker>
                </b-form-group>

                <b-form-group label-cols="6" label-cols-lg="3" label="Kouta Peserta">
                    <b-form-input></b-form-input>
                </b-form-group>

                <b-form-group label-cols="6" label-cols-lg="3" label="Lokasi">
                    <b-form-input></b-form-input>
                </b-form-group>

                <b-row class="mt-5 mb-3">
                    <b-col md="12">
                        <h2 class="text-left"><span style="font-weight:400">Persyaratan</span> <strong>Peserta</strong></h2>
                    </b-col>
                </b-row>

                <b-form-group label-cols="6" label-cols-lg="3" label="Usia Peserta">
                    <b-form-input></b-form-input>
                </b-form-group>

                <b-form-group label-cols="6" label-cols-lg="3" label="Kemampuan Dasar">
                    <b-form-input></b-form-input>
                </b-form-group>

                <b-form-group label-cols="6" label-cols-lg="3" label="Pengalaman Kerja">
                    <b-form-input></b-form-input>
                </b-form-group>

                <b-form-group label-cols="6" label-cols-lg="3" label="Syarat Umum">
                    <b-form-textarea rows="3" max-rows="6"></b-form-textarea>
                </b-form-group>

                <b-form-group label-cols="6" label-cols-lg="3" label="Syarat Khusus">
                    <b-form-textarea rows="3" max-rows="6"></b-form-textarea>
                </b-form-group>
                
                <b-form-group label-cols="6" label-cols-lg="3" label="Status Pelatihan">
                    <b-form-select
                        :options="status"
                    ></b-form-select>
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
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  name: "EditPelatihan",
  data(){
    return{
        time1: null,
        kategori: [
            { value: null, text: "-- Pilih --" },
        ],

        jenjang: [
            { value: null, text: "-- Pilih --" },
            { value: "Pemula", text: "Pemula" },
            { value: "Menengah", text: "Menengah" },
            { value: "Profesional", text: "Profesional" },
        ],

        status: [
            { value: null, text: "-- Pilih --" },
            { value: "Publish", text: "Publish" },
            { value: "Unpublish", text: "Unpublish" },
        ],
    }
  },
  components: {
    ThisIsHeader,
    ThisIsFooter,
    DatePicker
  },
};
</script>

<style scoped>
#edit_pelatihan .section-one{
  padding:60px 0;
}

#edit_pelatihan .section-one .box-submenu {
  display: flex;
  justify-content: space-evenly;
  /* background-color: red; */
}
</style>
