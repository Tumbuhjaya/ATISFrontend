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
            <b-button variant="primary" v-b-modal.modal-lg>Tambah Data</b-button>
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
                          >Clear</b-button>
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
                        <b-button variant="warning" size="sm" class="mr-3" v-b-tooltip.hover title="Edit Data" v-b-modal.modal-lg><b-icon icon="pencil-square"></b-icon> {{item.actions}}</b-button>
                        <b-button variant="danger" size="sm"><b-icon icon="trash"></b-icon> {{item.actions}}</b-button>
                        
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
                      size="md"
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
                          >Clear</b-button>
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
                        <b-button variant="warning" size="sm" class="mr-3" v-b-tooltip.hover title="Edit Data" v-b-modal.modal-lg><b-icon icon="pencil-square"></b-icon> {{item.actions}}</b-button>
                        <b-button variant="danger" size="sm"><b-icon icon="trash"></b-icon> {{item.actions}}</b-button>
                        
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
                      size="md"
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
                          >Clear</b-button>
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
                        <b-button variant="warning" size="sm" class="mr-3" v-b-tooltip.hover title="Edit Data" v-b-modal.modal-lg><b-icon icon="pencil-square"></b-icon> {{item.actions}}</b-button>
                        <b-button variant="danger" size="sm" v-b-tooltip.hover title="Hapus Data"><b-icon icon="trash"></b-icon> {{item.actions}}</b-button>
                        
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
                      size="md"
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

      <b-form-group label-cols="6" label-cols-lg="3" label="Sub Kategori">
        <b-form-select
          :options="subkategori"
        ></b-form-select>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Jenjang">
        <b-form-select
          :options="jenjang"
        ></b-form-select>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Deskripsi">
        <quill-editor></quill-editor>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Tanggal Pelatihan">
        <div class="row">
          <b-col md="6"><date-picker v-model="time1" valueType="format" style="width:100%" placeholder="Tanggal Awal"></date-picker></b-col>
          <b-col md="6"><date-picker v-model="time2" valueType="format" style="width:100%" placeholder="Tanggal Akhir"></date-picker></b-col>
        </div>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Kouta Peserta">
        <b-form-input></b-form-input>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Lokasi">
        <b-form-input></b-form-input>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Kecamatan">
        <b-form-select
          :options="kecamatan"
        ></b-form-select>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Kelurahan">
        <b-form-select
          :options="kelurahan"
        ></b-form-select>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Upload Banner">
        <b-form-file></b-form-file>
      </b-form-group>          

      <b-form-group label-cols="6" label-cols-lg="3" label="Status Pelatihan">
        <b-form-select
            :options="status"
        ></b-form-select>
      </b-form-group>          

      <b-row class="mt-5 mb-3">
        <b-col md="12">
          <h2 class="text-left"><span style="font-weight:400">Persyaratan</span> <strong>Peserta</strong></h2>
        </b-col>
      </b-row>

      <b-form-group label-cols="6" label-cols-lg="3" label="Syarat Umum">
        <quill-editor></quill-editor>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Syarat Khusus">
        <quill-editor></quill-editor>
      </b-form-group>
      
      <hr class="mb-0">
      <b-button variant="primary" class="mt-3">Simpan</b-button>
    </b-modal>
      
    <ThisIsFooter></ThisIsFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import ThisIsHeader from "../../components/ThisIsHeader";
import ThisIsFooter from "../../components/ThisIsFooter";
import Vue from 'vue'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import VueQuillEditor from 'vue-quill-editor'

import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

Vue.use(VueQuillEditor, /* { default global options } */)
export default {
  name: "DashboardOpd",
  data(){
    return{
      time1: null,
      time2: null,
      kategori: [
            { value: null, text: "-- Pilih --" },
      ],

      subkategori: [
            { value: null, text: "-- Pilih --" },
      ],

      kecamatan: [
            { value: null, text: "-- Pilih --" },
      ],

      kelurahan: [
            { value: null, text: "-- Pilih --" },
      ],

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
          { nonya : 1, judulnya : 'dul', kategorinya : 'kat', tglnya : 'tgl', lokasinya : 'lok', statusnya : 'stat',  },
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
          { nonya : 1, judulnya : 'dul', kategorinya : 'kat', tglnya : 'tgl', lokasinya : 'lok', statusnya : 'stat',  },
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
          { nonya : 1, judulnya : 'dul', kategorinya : 'kat', tglnya : 'tgl', lokasinya : 'lok', statusnya : 'stat',  },
      ],
      
      totalRows: 1,
      currentPage: 1,
      perPage: 50,
      pageOptions: [50, 100, { value: 100, text: "Tampilkan Banyak" }],
      filter: null,
      filter2: null,
      filter3: null,
      filterOn: [], 

      editorOption: {
          // some quill options
        }
    }
  },

  components: {
    ThisIsHeader,
    ThisIsFooter,
    VueQuillEditor,
    DatePicker


  },

  computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
  },

  mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length
  },
  methods: {
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
  },
  
};
</script>

<style scoped>
#dashboard_opd .section-one{
  padding:60px 0;
}
</style>
