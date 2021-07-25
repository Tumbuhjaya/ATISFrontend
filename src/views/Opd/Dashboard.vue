<template>
  <div id="dashboard_opd">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="text-center"><strong>Dashboard</strong></h2>
            <h4 class="text-center">Nama OPD</h4>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col md="12">
            <!-- <router-link :to="'/tambah_pelatihan_opd'"> -->
            <b-button variant="primary" v-b-modal.modal-lg @click="reset"
              >PELATIHAN BARU</b-button
            >
            <!-- </router-link> -->
          </b-col>
        </b-row>

        <b-row class="mt-3">
          <b-col md="12">
            <b-tabs content-class="mt-3" align="center">
              <b-tab title="Rencana" active>
                <b-row>
                  <b-col md="2">
                    <b-form-group
                      label="Per page"
                      label-for="per-page-select"
                      label-cols-md="6"
                      label-align-md="left"
                      label-size="md"
                      class="mb-0"
                    >
                      <b-form-select
                        id="per-page-select"
                        v-model="perPage"
                        :options="pageOptions"
                        size="md"
                      ></b-form-select>
                    </b-form-group>
                  </b-col>

                  <b-col md="5" offset-md="5">
                    <b-form-group
                      label="Filter"
                      label-for="filter-input"
                      label-cols-md="3"
                      label-align-md="right"
                      label-size="md"
                      class="mb-0"
                    >
                      <b-input-group size="md">
                        <b-form-input
                          id="filter-input"
                          v-model="filter"
                          type="search"
                          placeholder="Type to Search"
                        ></b-form-input>

                        <b-input-group-append>
                          <b-button :disabled="!filter" @click="filter = ''"
                            >Clear</b-button
                          >
                        </b-input-group-append>
                      </b-input-group>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col md="12">
                    <b-table
                      :items="items"
                      :fields="fields"
                      :current-page="currentPage"
                      :per-page="perPage"
                      :filter="filter"
                      :filter-included-fields="filterOn"
                      stacked="md"
                      show-empty
                      bordered
                      small
                      @filtered="onFiltered"
                      class="mt-3"
                    >
                      <template #cell(actions)="item">
                        <b-button
                          variant="warning"
                          size="sm"
                          class="mr-3"
                          v-b-tooltip.hover
                          title="Edit Data"
                          v-b-modal.modal-lg
                          @click="edit(item.item.id)"
                          ><b-icon icon="pencil-square"></b-icon>
                          {{ item.actions }}</b-button
                        >
                        <b-button
                          variant="danger"
                          size="sm"
                          class="mr-3"
                          v-b-tooltip.hover
                          title="Hapus Data"
                            @click="hapus(item.item.id)"
                          ><b-icon icon="trash"></b-icon>
                          {{ item.actions }}</b-button
                        >

                        <b-button
                          variant="success"
                          size="sm"
                          v-b-tooltip.hover
                          title="Detail Peserta"
                          v-b-modal.modal-peserta
                            @click="listUser(item.item.id)"
                          ><b-icon icon="info-circle"></b-icon>
                          {{ item.actions }}</b-button
                        >
                      </template>
                    </b-table>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col md="5" offset-md="7">
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="totalRows"
                      :per-page="perPage"
                      align="fill"
                      size="sm"
                    ></b-pagination>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="Sedang Terlaksana">
                <b-row>
                  <b-col md="2">
                    <b-form-group
                      label="Per page"
                      label-for="per-page-select"
                      label-cols-md="6"
                      label-align-md="left"
                      label-size="md"
                      class="mb-0"
                    >
                      <b-form-select
                        id="per-page-select"
                        v-model="perPage"
                        :options="pageOptions"
                        size="md"
                      ></b-form-select>
                    </b-form-group>
                  </b-col>

                  <b-col md="5" offset-md="5">
                    <b-form-group
                      label="Filter"
                      label-for="filter-input"
                      label-cols-md="3"
                      label-align-md="right"
                      label-size="md"
                      class="mb-0"
                    >
                      <b-input-group size="md">
                        <b-form-input
                          id="filter-input"
                          v-model="filter2"
                          type="search"
                          placeholder="Type to Search"
                        ></b-form-input>

                        <b-input-group-append>
                          <b-button :disabled="!filter2" @click="filter2 = ''"
                            >Clear</b-button
                          >
                        </b-input-group-append>
                      </b-input-group>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col md="12">
                    <b-table
                      :items="items2"
                      :fields="fields2"
                      :current-page="currentPage"
                      :per-page="perPage"
                      :filter="filter2"
                      :filter-included-fields="filterOn"
                      stacked="md"
                      show-empty
                      bordered
                      small
                      @filtered="onFiltered"
                      class="mt-3"
                    >
                               <template #cell(actions)="item">
                        <b-button
                          variant="warning"
                          size="sm"
                          class="mr-3"
                          v-b-tooltip.hover
                          title="Edit Data"
                          v-b-modal.modal-lg
                          @click="edit(item.item.id)"
                          ><b-icon icon="pencil-square"></b-icon>
                          {{ item.actions }}</b-button
                        >
                        <b-button
                          variant="danger"
                          size="sm"
                          class="mr-3"
                          v-b-tooltip.hover
                          title="Hapus Data"
                            @click="hapus(item.item.id)"
                          ><b-icon icon="trash"></b-icon>
                          {{ item.actions }}</b-button
                        >

                        <b-button
                          variant="success"
                          size="sm"
                          v-b-tooltip.hover
                          title="Detail Peserta"
                          v-b-modal.modal-peserta
                            @click="listUser(item.item.id)"
                          ><b-icon icon="info-circle"></b-icon>
                          {{ item.actions }}</b-button
                        >
                      </template>
                    </b-table>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col md="5" offset-md="7">
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="totalRows"
                      :per-page="perPage"
                      align="fill"
                      size="sm"
                    ></b-pagination>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="Realisasi">
                <b-row>
                  <b-col md="2">
                    <b-form-group
                      label="Per page"
                      label-for="per-page-select"
                      label-cols-md="6"
                      label-align-md="left"
                      label-size="md"
                      class="mb-0"
                    >
                      <b-form-select
                        id="per-page-select"
                        v-model="perPage"
                        :options="pageOptions"
                        size="md"
                      ></b-form-select>
                    </b-form-group>
                  </b-col>

                  <b-col md="5" offset-md="5">
                    <b-form-group
                      label="Filter"
                      label-for="filter-input"
                      label-cols-md="3"
                      label-align-md="right"
                      label-size="md"
                      class="mb-0"
                    >
                      <b-input-group size="md">
                        <b-form-input
                          id="filter-input"
                          v-model="filter3"
                          type="search"
                          placeholder="Type to Search"
                        ></b-form-input>

                        <b-input-group-append>
                          <b-button :disabled="!filter3" @click="filter3 = ''"
                            >Clear</b-button
                          >
                        </b-input-group-append>
                      </b-input-group>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col md="12">
                    <b-table
                      :items="items3"
                      :fields="fields3"
                      :current-page="currentPage"
                      :per-page="perPage"
                      :filter="filter3"
                      :filter-included-fields="filterOn"
                      stacked="md"
                      show-empty
                      bordered
                      small
                      @filtered="onFiltered"
                      class="mt-3"
                    >
                              <template #cell(actions)="item">
                        <b-button
                          variant="warning"
                          size="sm"
                          class="mr-3"
                          v-b-tooltip.hover
                          title="Edit Data"
                          v-b-modal.modal-lg
                          @click="edit(item.item.id)"
                          ><b-icon icon="pencil-square"></b-icon>
                          {{ item.actions }}</b-button
                        >
                        <b-button
                          variant="danger"
                          size="sm"
                          class="mr-3"
                          v-b-tooltip.hover
                          title="Hapus Data"
                            @click="hapus(item.item.id)"
                          ><b-icon icon="trash"></b-icon>
                          {{ item.actions }}</b-button
                        >

                        <b-button
                          variant="success"
                          size="sm"
                          v-b-tooltip.hover
                          title="Detail Peserta"
                          v-b-modal.modal-peserta
                            @click="listUser(item.item.id)"
                          ><b-icon icon="info-circle"></b-icon>
                          {{ item.actions }}</b-button
                        >
                      </template>
                    </b-table>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col md="5" offset-md="7">
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="totalRows"
                      :per-page="perPage"
                      align="fill"
                      size="sm"
                    ></b-pagination>
                  </b-col>
                </b-row>
              </b-tab>
            </b-tabs>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!-- modal -->
    <b-modal id="modal-lg" size="lg" title="Data Pelatihan" hide-footer>
      <b-row class="mb-3">
        <b-col md="12">
          <h2 class="text-left">
            <span style="font-weight: 400">Informasi</span>
            <strong>Pelatihan</strong>
          </h2>
        </b-col>
      </b-row>
      <b-form-group label-cols="6" label-cols-lg="3" label="Judul Pelatihan">
        <b-form-input v-model="dataInput.judulPelatihan"></b-form-input>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Kategori">
        <b-form-select
          :options="kategori"
          v-model="dataInput.kejuruan"
        ></b-form-select>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Sub Kategori">
        <b-form-select
          :options="subkategori"
               v-model="dataInput.subKejuruan"
        ></b-form-select>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Jenjang">
        <b-form-select
          :options="jenjang"
           v-model="dataInput.jenjang"
        ></b-form-select>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Deskripsi">
        <quill-editor  v-model="dataInput.deskripsiPelatihan"></quill-editor>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Tanggal Pelatihan">
        <div class="row">
          <b-col md="6"><date-picker v-model="dataInput.tanggalMulaiPelatihan" valueType="format" style="width:100%" placeholder="Tanggal Awal" ></date-picker></b-col>
          <b-col md="6"><date-picker v-model="dataInput.tanggalSelesaiPelatihan" valueType="format" style="width:100%" placeholder="Tanggal Akhir"></date-picker></b-col>
        </div>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Kouta Peserta">
        <b-form-input v-model="dataInput.kuotaPeserta"></b-form-input>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Lokasi">
        <b-form-input v-model="dataInput.lokasi"></b-form-input>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Kecamatan">
        <b-form-select
          :options="kecamatan"
          v-model="dataInput.kecamatanPelatihan"
        ></b-form-select>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Kelurahan">
        <b-form-select
          :options="kelurahan"
            v-model="dataInput.kelurahanPelatihan"
        ></b-form-select>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Upload Banner">
        <img style="width:100px" :src="ipbackend+'/'+dataInput.bannerPelatihan" />
                       <input type="file" id="file" ref="file" />
      </b-form-group>          

      <b-form-group label-cols="6" label-cols-lg="3" label="Status Pelatihan">
        <b-form-select
            :options="status"
              v-model="dataInput.statusPelatihan"
        ></b-form-select>
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
        <quill-editor         v-model="dataInput.syaratUmum"></quill-editor>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Syarat Khusus">
        <quill-editor v-model="dataInput.syaratKhusus"></quill-editor>
      </b-form-group>
      
      <hr class="mb-0">
      <b-button variant="primary" class="mt-3" v-if="dataInput.id" @click="update">Update</b-button>
      <b-button variant="primary" class="mt-3" v-else @click="simpanBelumDimulai">Simpan</b-button>
    </b-modal>

    <!-- modal peserta -->
    <b-modal
      id="modal-peserta"
      size="xl"
      title="Data Peserta"
      hide-footer
    >
      <b-row>
        <b-col md="12">
          <b-row>
            <b-col md="2">
              <b-form-group
                label="Per page"
                label-for="per-page-select"
                label-cols-md="6"
                label-align-md="left"
                label-size="md"
                class="mb-0"
              >
                <b-form-select
                  id="per-page-select"
                  v-model="perPage"
                  :options="pageOptions"
                  size="md"
                ></b-form-select>
              </b-form-group>
            </b-col>

            <b-col md="5" offset-md="5">
              <b-form-group
                label="Filter"
                label-for="filter-input"
                label-cols-md="3"
                label-align-md="right"
                label-size="md"
                class="mb-0"
              >
                <b-input-group size="md">
                  <b-form-input
                    id="filter-input"
                    v-model="filter4"
                    type="search"
                    placeholder="Type to Search"
                  ></b-form-input>

                  <b-input-group-append>
                    <b-button :disabled="!filter4" @click="filter4 = ''"
                      >Clear</b-button
                    >
                  </b-input-group-append>
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col md="12">
              <b-table
                :items="dataPeserta"
                :fields="fields4"
                :current-page="currentPage"
                :per-page="perPage"
                :filter="filter4"
                :filter-included-fields="filterOn"
                stacked="md"
                show-empty
                bordered
                small
                @filtered="onFiltered"
                class="mt-3"
              >
                   <template #cell(filePendukung)="item">
                  
<a  :href="ipbackend+item.item.filePendukung" target="_blank">
                        <b-button
                          variant="success"
                          size="sm"
                          v-b-tooltip.hover
                          title="Download"
                        
                          ><b-icon icon="info-circle"></b-icon>
                          </b-button
                        >
                        </a>
                      </template>
              </b-table>
            </b-col>
          </b-row>

          <b-row>
            <b-col md="5" offset-md="7">
              <b-pagination
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                align="fill"
                size="sm"
              ></b-pagination>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-modal>
    <ThisIsFooter></ThisIsFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import ThisIsHeader from "../../components/ThisIsHeader";
import ThisIsFooter from "../../components/ThisIsFooter";
import Vue from "vue";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import VueQuillEditor from "vue-quill-editor";

import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import axios from "axios";
import ipbackend from '../../ipbackend'
 let ret =      localStorage.getItem('user');
   ret = JSON.parse(ret)
import moment from 'moment';
moment.locale('id');
Vue.use(VueQuillEditor /* { default global options } */);
export default {
  name: "DashboardOpd",
  data(){
    return{
      ipbackend,
      dataPeserta:[],
      dataInput:{
        judulPelatihan:'',
        kejuruan:'',
        subKejuruan:'',
        statusPelatihan:'',
        deskripsiPelatihan:'',
        jenjang:'',
        tanggalMulaiPelatihan:'',
        tanggalSelesaiPelatihan:'',
        kuotaPeserta:0,
        lokasi:'',
        kecamatanPelatihan:'',
        kelurahanPelatihan:'',
        syaratUmum:'',
        syaratKhusus:''
      },
      time1: null,
      time2: null,
      kategori: [{ value: null, text: "-- Pilih --" }],

      subkategori: [{ value: null, text: "-- Pilih --" }],

      kecamatan: [{ value: null, text: "-- Pilih --" }],

      kelurahan: [{ value: null, text: "-- Pilih --" }],

      jenjang: [
        { value: "Dasar", text: "Dasar" },
        { value: "Lanjutan", text: "Lanjutan" },
      ],

      status: [
        { value: "publish", text: "publish" },
        { value: "unpublish", text: "unpublish" },
      ],
      fields: [
        {
          key: "nonya",
          label: "No",
          sortable: true,
          class: "text-center",
        },
        {
          key: "judulnya",
          label: "Judul Pelatihan",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
        {
          key: "kategorinya",
          label: "Kategori",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
        {
          key: "tglnya",
          label: "Tanggal Pelatihan",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
        {
          key: "lokasinya",
          label: "Lokasi",
          sortable: true,
          class: "text-left",
        },
        {
          key: "statusnya",
          label: "Status",
          sortable: true,
          class: "text-left",
        },
        { key: "actions", label: "Actions", class: "text-center" },
      ],
      items: [
       
      ],

      fields2: [
        {
          key: "nonya",
          label: "No",
          sortable: true,
          class: "text-center",
        },
        {
          key: "judulnya",
          label: "Judul Pelatihan",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
        {
          key: "kategorinya",
          label: "Kategori",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
        {
          key: "tglnya",
          label: "Tanggal Pelatihan",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
        {
          key: "lokasinya",
          label: "Lokasi",
          sortable: true,
          class: "text-left",
        },
        {
          key: "statusnya",
          label: "Status",
          sortable: true,
          class: "text-left",
        },
        { key: "actions", label: "Actions", class: "text-center" },
      ],
      items2: [
        {
          nonya: 1,
          judulnya: "dul",
          kategorinya: "kat",
          tglnya: "tgl",
          lokasinya: "lok",
          statusnya: "stat",
        },
      ],

      fields3: [
        {
          key: "nonya",
          label: "No",
          sortable: true,
          class: "text-center",
        },
        {
          key: "judulnya",
          label: "Judul Pelatihan",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
        {
          key: "kategorinya",
          label: "Kategori",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
        {
          key: "tglnya",
          label: "Tanggal Pelatihan",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
        {
          key: "lokasinya",
          label: "Lokasi",
          sortable: true,
          class: "text-left",
        },
        {
          key: "statusnya",
          label: "Status",
          sortable: true,
          class: "text-left",
        },
        { key: "actions", label: "Actions", class: "text-center" },
      ],
      items3: [
        {
          nonya: 1,
          judulnya: "dul",
          kategorinya: "kat",
          tglnya: "tgl",
          lokasinya: "lok",
          statusnya: "stat",
        },
      ],

      fields4: [
        {
          key: "nonya",
          label: "No",
          sortable: true,
          class: "text-center",
        },
        {
          key: "niknya",
          label: "NIK",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
        {
          key: "namanya",
          label: "Nama",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
        {
          key: "kelaminnya",
          label: "Jenis Kelamin",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
        {
          key: "lahirnya",
          label: "Tanggal Lahir",
          sortable: true,
          class: "text-left",
        },
        {
          key: "alamatnya",
          label: "Alamat",
          sortable: true,
          class: "text-left",
        },
        {
          key: "kecamatannya",
          label: "Kecamatan",
          sortable: true,
          class: "text-left",
        },
        {
          key: "kelurahannya",
          label: "Kelurahan",
          sortable: true,
          class: "text-left",
        },
        {
          key: "hpnya",
          label: "No. Hp",
          sortable: true,
          class: "text-left",
        },
        {
          key: "emailnya",
          label: "Email",
          sortable: true,
          class: "text-left",
        },
         {
          key: "filePendukung",
          label: "File Pendukung",
          sortable: true,
          class: "text-left",
        },
         {
          key: "keteranganFile",
          label: "Keterangan File",
          sortable: true,
          class: "text-left",
        },
      ],
      

      totalRows: 1,
      currentPage: 1,
      perPage: 50,
      pageOptions: [50, 100, { value: 100, text: "Tampilkan Banyak" }],
      filter: null,
      filter2: null,
      filter3: null,
      filter4: null,
      filterOn: [],

      editorOption: {
        // some quill options
      },
    };
  },

  components: {
    ThisIsHeader,
    ThisIsFooter,
    VueQuillEditor,
    DatePicker,
  },
 watch:{
    dataInput: {
     async handler(val, oldVal){
       let vm = this;
      //  console.log(val.kecamatanPelatihan, oldVal.kecamatanPelatihan);
       // do stuff
      //  console.log(val);
      if(val.kecamatanPelatihan){
          let kelurahan=   await axios.get(ipbackend+ 'kelurahan/listKelByKecamatan/'+vm.dataInput.kecamatanPelatihan, {
        headers:{

          token: ret.token
        }
      })
       vm.kelurahan=[];
        vm.kelurahan.push({ value: null, text: "-- Pilih --" })
      kelurahan.data.data.forEach((item, idx)=>{
          vm.kelurahan.push({ value: item.namaKelurahan, text: item.namaKelurahan })
      })
      }


        if(val.kejuruan){
          let subkategori=   await axios.get(ipbackend+ 'kejuruan/listSubKejuruanByKejuruan/'+vm.dataInput.kejuruan, {
        headers:{

          token: ret.token
        }
      })
       vm.subkategori=[];
        vm.subkategori.push({ value: null, text: "-- Pilih --" })
      subkategori.data.data.forEach((item, idx)=>{
          vm.subkategori.push({ value: item.namaSubKejuruan, text: item.namaSubKejuruan })
      })
      }
      
     },
     deep: true
  }
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },

  async mounted() {
      // Set the initial number of items
      let vm = this;
      this.totalRows = this.items.length

       let kecamatan=   await axios.get(ipbackend+ 'kelurahan/listKecamatan/', {
        headers:{

          token: ret.token
        }
      })
 
      console.log(kecamatan.data.data);
      vm.kecamatan=[];
        vm.kecamatan.push({ value: null, text: "-- Pilih --" })
      kecamatan.data.data.forEach((item, idx)=>{
          vm.kecamatan.push({ value: item.namaKecamatan, text: item.namaKecamatan })
      })


 let kelurahan=   await axios.get(ipbackend+ 'kelurahan/list/', {
        headers:{

          token: ret.token
        }
      })
       vm.kelurahan=[];
        vm.kelurahan.push({ value: null, text: "-- Pilih --" })
      kelurahan.data.data.forEach((item, idx)=>{
          vm.kelurahan.push({ value: item.namaKelurahan, text: item.namaKelurahan })
      })

this.loadBelumDimulai();
this.ambilKejuruan();
this.loadSedangDimulai();
this.loadTerlaksana();
  },
  methods: {
  async  edit(id){

       let itemnya=   await axios.get(ipbackend+ 'pelatihan/listpelatihanbyid/'+id, {
        headers:{

          token: ret.token
        }
      })
      // console.log(itemnya);
      this.dataInput = itemnya.data.data[0]
    },
      async  hapus(id){

       let itemnya=   await axios.post(ipbackend+ 'pelatihan/delete/',{id}, {
        headers:{

          token: ret.token
        }
      })
        alert(itemnya.data.message);
        this.loadBelumDimulai();
        this.loadSedangDimulai();
        this.loadTerlaksana();
    },
    async  listUser(id){
   
      this.dataPeserta=[]
       let itemnya=   await axios.get(ipbackend+ 'poolpelatihan/listPesertaByPelatihan/'+id, {
        headers:{

          token: ret.token
        }
      })
       itemnya.data.data.forEach((item, idx)=>{
        this.dataPeserta.push(    {
          nonya: idx+1,
          niknya: item.NIK,
          namanya: item.nama,
          kelaminnya: item.jenisKelamin,
          lahirnya: moment(item.tanggalLahir).format('LL'),
          alamatnya: item.alamat,
          kecamatannya: item.kecamatan,
          kelurahannya: item.kelurahan,
          hpnya: item.noHp,
          emailnya: item.email,
          filePendukung: item.file,
          keteranganFile: item.keteranganFile
        })

       })
      // console.log(itemnya);
    },
    async loadBelumDimulai(){

    let vm = this;
   let itemnya=   await axios.get(ipbackend+ 'pelatihan/pelatihanBelumDimulai/', {
        headers:{

          token: ret.token
        }
      })
       this.items = [];
      itemnya.data.data.forEach((item, idx)=>{
        this.items.push({ 
           id : item.id, 
          nonya : idx+1, 
        judulnya : item.judulPelatihan,
         kategorinya : item.kejuruan, 
         tglnya : moment(item.tanggalMulaiPelatihan).format('LL'), 
         lokasinya : item.lokasi,
          statusnya :   item.statusPelatihan})
      })
      // console.log(itemnya);
    },
     async loadSedangDimulai(){

    let vm = this;
   let itemnya=   await axios.get(ipbackend+ 'pelatihan/pelatihanSedangBerlangsung/', {
        headers:{

          token: ret.token
        }
      })
       this.items2 = [];
      itemnya.data.data.forEach((item, idx)=>{
        this.items2.push({ 
           id : item.id, 
          nonya : idx+1, 
        judulnya : item.judulPelatihan,
         kategorinya : item.kejuruan, 
         tglnya : moment(item.tanggalMulaiPelatihan).format('LL'), 
         lokasinya : item.lokasi,
          statusnya :   item.statusPelatihan})
      })
      // console.log(itemnya);
    },
     async loadTerlaksana(){

    let vm = this;
   let itemnya=   await axios.get(ipbackend+ 'pelatihan/pelatihanSudahSelesai/', {
        headers:{

          token: ret.token
        }
      })
       this.items3 = [];
      itemnya.data.data.forEach((item, idx)=>{
        this.items3.push({ 
           id : item.id, 
          nonya : idx+1, 
        judulnya : item.judulPelatihan,
         kategorinya : item.kejuruan, 
         tglnya : moment(item.tanggalMulaiPelatihan).format('LL'), 
         lokasinya : item.lokasi,
          statusnya :   item.statusPelatihan})
      })
      // console.log(itemnya);
    },
 async  ambilKejuruan(){
   let vm = this;
       let kategori=   await axios.get(ipbackend+ 'pelatihan/grafikPelatihanByKejuruan/')
      // console.log(kejuruan);
    // this.kejuruan = kejuruan.data.data
       this.kategori=[];
        this.kategori.push({ value: null, text: "-- Pilih --" })
      kategori.data.data.forEach((item, idx)=>{
          vm.kategori.push({ value: item.namaKejuruan, text: item.namaKejuruan })
      })
      // console.log(vm.kejuruan);
  },
     async simpanBelumDimulai(){
// judulPelatihan,kejuruan,subKejuruan,statusPelatihan,deskripsiPelatihan,jenjang,tanggalMulaiPelatihan,tanggalSelesaiPelatihan,kuotaPeserta,lokasi,kecamatanPelatihan,kelurahanPelatihan,syaratUmum,syaratKhusus
    var formData = new FormData();
      formData.append("judulPelatihan", this.dataInput.judulPelatihan);
       formData.append("kejuruan", this.dataInput.kejuruan);
        formData.append("subKejuruan", this.dataInput.subKejuruan);
         formData.append("statusPelatihan", this.dataInput.statusPelatihan);
          formData.append("deskripsiPelatihan", this.dataInput.deskripsiPelatihan);
           formData.append("jenjang", this.dataInput.jenjang);
            formData.append("tanggalMulaiPelatihan", this.dataInput.tanggalMulaiPelatihan);
             formData.append("tanggalSelesaiPelatihan", this.dataInput.tanggalSelesaiPelatihan);
              formData.append("kuotaPeserta", this.dataInput.kuotaPeserta);
               formData.append("lokasi", this.dataInput.lokasi);
                formData.append("kecamatanPelatihan", this.dataInput.kecamatanPelatihan);
                 formData.append("kelurahanPelatihan", this.dataInput.kelurahanPelatihan);
                  formData.append("syaratUmum", this.dataInput.syaratUmum);
                   formData.append("syaratKhusus", this.dataInput.syaratKhusus);
                      if(this.$refs.file.files.length){
              formData.append("file1", this.$refs.file.files[0]);
          }
   let vm = this;
 

  let hasil=  await   axios({
        method: "post",
        url: ipbackend + 'pelatihan/register/',
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          token: ret.token,
        },
      })
            alert(hasil.data.message);
       this.loadBelumDimulai();
     this.loadSedangDimulai();
      this.loadTerlaksana();
    this.dataInput={
        judulPelatihan:'',
        kejuruan:'',
        subKejuruan:'',
        statusPelatihan:'',
        deskripsiPelatihan:'',
        jenjang:'',
        tanggalMulaiPelatihan:'',
        tanggalSelesaiPelatihan:'',
        kuotaPeserta:0,
        lokasi:'',
        kecamatanPelatihan:'',
        kelurahanPelatihan:'',
        syaratUmum:'',
        syaratKhusus:''
      }
    },



       async update(){
// judulPelatihan,kejuruan,subKejuruan,statusPelatihan,deskripsiPelatihan,jenjang,tanggalMulaiPelatihan,tanggalSelesaiPelatihan,kuotaPeserta,lokasi,kecamatanPelatihan,kelurahanPelatihan,syaratUmum,syaratKhusus
    var formData = new FormData();
    formData.append("id", this.dataInput.id);
      formData.append("judulPelatihan", this.dataInput.judulPelatihan);
       formData.append("kejuruan", this.dataInput.kejuruan);
        formData.append("subKejuruan", this.dataInput.subKejuruan);
         formData.append("statusPelatihan", this.dataInput.statusPelatihan);
          formData.append("deskripsiPelatihan", this.dataInput.deskripsiPelatihan);
           formData.append("jenjang", this.dataInput.jenjang);
            formData.append("tanggalMulaiPelatihan", this.dataInput.tanggalMulaiPelatihan);
             formData.append("tanggalSelesaiPelatihan", this.dataInput.tanggalSelesaiPelatihan);
              formData.append("kuotaPeserta", this.dataInput.kuotaPeserta);
               formData.append("lokasi", this.dataInput.lokasi);
                formData.append("kecamatanPelatihan", this.dataInput.kecamatanPelatihan);
                 formData.append("kelurahanPelatihan", this.dataInput.kelurahanPelatihan);
                  formData.append("syaratUmum", this.dataInput.syaratUmum);
                   formData.append("syaratKhusus", this.dataInput.syaratKhusus);
                   
                    if(this.$refs.file.files.length){
                formData.append("file1", this.$refs.file.files[0]);
          }
   let vm = this;
 

   let hasil =  await   axios({
        method: "post",
        url: ipbackend + 'pelatihan/update/',
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          token: ret.token,
        },
      })
      alert(hasil.data.message);
    this.loadBelumDimulai();
     this.loadSedangDimulai();
      this.loadTerlaksana();
    this.dataInput={
        judulPelatihan:'',
        kejuruan:'',
        subKejuruan:'',
        statusPelatihan:'',
        deskripsiPelatihan:'',
        jenjang:'',
        tanggalMulaiPelatihan:'',
        tanggalSelesaiPelatihan:'',
        kuotaPeserta:0,
        lokasi:'',
        kecamatanPelatihan:'',
        kelurahanPelatihan:'',
        syaratUmum:'',
        syaratKhusus:''
      }
    },
    reset(){
this.dataInput={
        judulPelatihan:'',
        kejuruan:'',
        subKejuruan:'',
        statusPelatihan:'',
        deskripsiPelatihan:'',
        jenjang:'',
        tanggalMulaiPelatihan:'',
        tanggalSelesaiPelatihan:'',
        kuotaPeserta:0,
        lokasi:'',
        kecamatanPelatihan:'',
        kelurahanPelatihan:'',
        syaratUmum:'',
        syaratKhusus:''
      }
    },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
  },
};
</script>

<style scoped>
#dashboard_opd .section-one {
  padding: 60px 0;
}
</style>
