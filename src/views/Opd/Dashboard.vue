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
            <router-link :to="'/tambah_pelatihan_opd'">
            <b-button variant="primary">Tambah Data</b-button>
            </router-link>
          </b-col>
        </b-row>


        <b-row class="mt-3">
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
              :items="listRTLH"
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
              <template #cell(No)="item"> {{ item.index + 1 }}. </template>
              <template #cell(actions)="item">
                <b-button variant="primary" v-b-modal.modal-fotortlh size="sm">Lihat Foto {{item.nama}}</b-button>
                
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
      </b-container>
    </section>
      
    <ThisIsFooter></ThisIsFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import ThisIsHeader from "../../components/ThisIsHeader";
import ThisIsFooter from "../../components/ThisIsFooter";

export default {
  name: "DashboardOpd",
  data(){
    return{
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
      totalRows: 1,
      currentPage: 1,
      perPage: 50,
      pageOptions: [50, 100, { value: 100, text: "Tampilkan Banyak" }],
      filter: null,
      filterOn: [],
    }
  },
  components: {
    ThisIsHeader,
    ThisIsFooter,
  },
};
</script>

<style scoped>
#dashboard_opd .section-one{
  padding:60px 0;
}
</style>
