<template>
  <div id="perangkat-daerah">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2><span>Data Perangkat </span> <strong>Daerah</strong></h2>
          </b-col>
        </b-row>

        <b-row class="mt-5">
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
                  <template #cell(No)="item">
                    {{ item.index + 1 }}
                  </template>
                  <template #cell(actions)="item">
                    <b-button
                      variant="warning"
                      size="sm"
                      class="mr-3"
                      v-b-tooltip.hover
                      title="Detail Pelatihan"
                      @click="item"
                      v-b-modal.modal-lg
                      ><b-icon icon="info-circle"></b-icon>
                    </b-button>
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
      </b-container>
    </section>

    <!-- modal -->
    <b-modal id="modal-lg" size="xl" title="Detail Pelatihan" hide-footer>
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
                <template #cell(No)="item">
                  {{ item.index + 1 }}
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
import axios from "axios";
import ipbackend from "../../ipbackend";
// @ is an alias to /src
import ThisIsHeader from "../../components/ThisIsHeader";
import ThisIsFooter from "../../components/ThisIsFooter";

export default {
  name: "PerangkatDaerah",
  data() {
    return {
      fields: [
        {
          key: "nonya",
          label: "No",
          sortable: true,
          class: "text-center",
        },

        {
          key: "opdnya",
          label: "Perangkat Daerah",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
        {
          key: "jmlnya",
          label: "Jumlah Pelatihan",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },

        { key: "actions", label: "Actions", class: "text-center" },
      ],
      items: [
        {
          nonya: 1,
          opdnya: "dul",
          jmlnya: "1",
        },
      ],

      fields2: [
        {
          key: "nonya",
          label: "No",
          sortable: true,
          class: "text-center",
        },

        {
          key: "pelatihannya",
          label: "Pelatihan",
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
          key: "subKategorinya",
          label: "Sub Kategori",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },

        {
          key: "tglnya",
          label: "Tanggal Pelaksanaan",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
      ],
      items2: [
        {
          nonya: 1,
          pelatihannya: "dul",
          kategorinya: "1",
          subKatergorinya: "1",
          tglnya: "1",
        },
      ],

      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 50, 100],
      filter: null,
      filter2: null,
      filterOn: [],
    };
  },
  components: {
    ThisIsHeader,
    ThisIsFooter,
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
};
</script>

<style scoped>
#perangkat-daerah .section-one {
  padding: 60px 0;
}

#perangkat-daerah .section-one .box {
  border-radius: 10px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

#perangkat-daerah .section-one .box .content {
  width: 100%;
  padding: 15px;
}
</style>
