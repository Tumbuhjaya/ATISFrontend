<template>
  <div id="alumni">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2><span>Data Peserta</span> <strong>SIMPEL</strong></h2>
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
                  <!-- <template #cell(actions)="item">
                    <b-button
                      variant="warning"
                      size="sm"
                      class="mr-3"
                      v-b-tooltip.hover
                      title="Detail Profil"
                      @click="item"
                      v-b-modal.modal-lg
                      ><b-icon icon="info-circle"></b-icon>
                    </b-button>
                  </template> -->
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
    <!-- <b-modal id="modal-lg" size="xl" title="Detail Peserta" hide-footer>
      <b-row>
        <b-col md="12">
          <b-tabs align="center">
            <b-tab title="Profil Peserta" active>
              <b-card-text>
                <b-row class="mt-3">
                  <b-col md="12"
                    ><h4>
                      <strong
                        ><span style="font-weight: 400">Data</span>
                        Identitas</strong
                      >
                    </h4></b-col
                  >
                </b-row>

                <b-row class="mt-3">
                  <b-col md="12">
                    <b-table-simple small borderless class="mb-0">
                      <b-tbody>
                        <b-tr>
                          <b-td style="width: 180px">Nama</b-td>
                          <b-td style="width: 5px">:</b-td>
                          <b-td>-</b-td>
                        </b-tr>

                        <b-tr>
                          <b-td>Jenis Kelamin</b-td>
                          <b-td>:</b-td>
                          <b-td>-</b-td>
                        </b-tr>

                        <b-tr>
                          <b-td>Tanggal Lahir</b-td>
                          <b-td>:</b-td>
                          <b-td>-</b-td>
                        </b-tr>

                        <b-tr>
                          <b-td>NIK</b-td>
                          <b-td>:</b-td>
                          <b-td>-</b-td>
                        </b-tr>

                        <b-tr>
                          <b-td>Alamat</b-td>
                          <b-td>:</b-td>
                          <b-td>-</b-td>
                        </b-tr>

                        <b-tr>
                          <b-td>Kelurahan</b-td>
                          <b-td>:</b-td>
                          <b-td>-</b-td>
                        </b-tr>

                        <b-tr>
                          <b-td>Kecamatan</b-td>
                          <b-td>:</b-td>
                          <b-td>-</b-td>
                        </b-tr>

                        <b-tr>
                          <b-td>No. HP</b-td>
                          <b-td>:</b-td>
                          <b-td>-</b-td>
                        </b-tr>

                        <b-tr>
                          <b-td>Email</b-td>
                          <b-td>:</b-td>
                          <b-td>-</b-td>
                        </b-tr>
                      </b-tbody>
                    </b-table-simple>
                  </b-col>
                </b-row>

                <b-row class="mt-5">
                  <b-col md="12"
                    ><h4>
                      <strong
                        ><span style="font-weight: 400">Data</span> Sosial
                        Ekonomi</strong
                      >
                    </h4></b-col
                  >
                </b-row>

                <b-row class="mt-3">
                  <b-col md="12">
                    <b-table-simple small borderless class="mb-0">
                      <b-tbody>
                        <b-tr>
                          <b-td style="width: 180px">Pendidikan Terakhir</b-td>
                          <b-td style="width: 5px">:</b-td>
                          <b-td>-</b-td>
                        </b-tr>

                        <b-tr>
                          <b-td>Status Dalam Keluarga</b-td>
                          <b-td>:</b-td>
                          <b-td>-</b-td>
                        </b-tr>
                      </b-tbody>
                    </b-table-simple>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-tab>

            <b-tab title="Riwayat Pelatihan ATIS">
              <b-card-text>
                <b-row class="mt-3">
                  <b-col md="12">
                    <b-table-simple small bordered class="mb-0">
                      <b-thead>
                        <b-tr>
                          <b-th>Judul</b-th>
                          <b-th>Kategori</b-th>
                          <b-th>Tanggal Pelaksanaan</b-th>
                          <b-th>Penyelenggara</b-th>
                          <b-th>Jenjang Pelatihan</b-th>
                        </b-tr>
                      </b-thead>
                      <b-tbody> </b-tbody>
                    </b-table-simple>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-tab>

            <b-tab title="Riwayat Pelatihan Lainnya">
              <b-card-text>
                <b-row class="mt-3">
                  <b-col md="12">
                    <b-table-simple small bordered class="mb-0">
                      <b-thead>
                        <b-tr>
                          <b-th>Nama</b-th>
                          <b-th>Tahun</b-th>

                          <b-th>No. Sertifikat</b-th>
                        </b-tr>
                      </b-thead>
                      <b-tbody> </b-tbody>
                    </b-table-simple>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-tab>

            <b-tab title="Riwayat Pekerjaan">
              <b-card-text>
                <b-row class="mt-3">
                  <b-col md="12">
                    <b-table-simple small bordered class="mb-0">
                      <b-thead>
                        <b-tr>
                          <b-th>Pekerjaan</b-th>
                          <b-th>Perusahaan</b-th>
                          <b-th>Posisi/Jabatan</b-th>
                          <b-th>Tahun Mulai</b-th>
                          <b-th>Tahun Akhir</b-th>
                        </b-tr>
                      </b-thead>
                      <b-tbody> </b-tbody>
                    </b-table-simple>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-modal> -->
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
  name: "Alumni",
  data() {
    return {
      fields: [
        {
          key: "No",
          label: "No",
          sortable: true,
          class: "text-center",
        },

        {
          key: "nama",
          label: "Nama",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
        {
          key: "jenisKelamin",
          label: "Jenis Kelamin",
          sortable: true,
          sortDirection: "desc",
          class: "text-left",
        },
        {
          key: "alamat",
          label: "Alamat",
          sortable: true,
          class: "text-left",
        },
        {
          key: "kecamatan",
          label: "Kecamatan",
          sortable: true,
          class: "text-left",
        },
        {
          key: "kelurahan",
          label: "Kelurahan",
          sortable: true,
          class: "text-left",
        },
        // { key: "actions", label: "Actions", class: "text-center" },
      ],
      items: [],

      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [
        10,
        25,
        50,
        75,
        100,
        { value: 100, text: "Tampilkan Banyak" },
      ],
      filter: null,
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
  created() {
    this.getPeserta();
  },
  mounted() {
    this.totalRows = this.items.length;
  },
  methods: {
    async getPeserta() {
      let peserta = await axios.get(ipbackend + "users/listPesertaTanpaLogin");
      console.log(peserta, "peserta");
      this.items = peserta.data.data;

      let x = peserta.data.data;
      this.totalRows = x.length;
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    // async loadProfil(id, idPelatihan) {
    //   let vm = this;
    //   let profil = await axios.get(ipbackend + "users/listById/" + id, {
    //     headers: {
    //       token: vm.user.token,
    //     },
    //   });
    //   //  console.log(profil.data.data[0],'-------');
    //   this.profil = profil.data.data[0];

    //   let pelatihanLain = await axios.get(
    //     ipbackend + "pelatihanlain/listByUsersId/" + id,
    //     {
    //       headers: {
    //         token: vm.user.token,
    //       },
    //     }
    //   );
    //   this.pelatihanLain = pelatihanLain.data.data;

    //   let riwayatPekerjaan = await axios.get(
    //     ipbackend + "riwayatpekerjaan/listByUsersId/" + id,
    //     {
    //       headers: {
    //         token: vm.user.token,
    //       },
    //     }
    //   );
    //   this.riwayatPekerjaan = riwayatPekerjaan.data.data;

    //   let pelatihan = await axios.get(
    //     ipbackend + "pelatihan/listPelatihanByUsersId/" + id,
    //     {
    //       headers: {
    //         token: vm.user.token,
    //       },
    //     }
    //   );
    //   this.pelatihan = pelatihan.data.data;

    //   let detailUser = await axios.get(
    //     ipbackend +
    //       "poolPelatihan/listByPelatihanIdUserId/" +
    //       idPelatihan +
    //       "/" +
    //       id,
    //     {
    //       headers: {
    //         token: vm.user.token,
    //       },
    //     }
    //   );
    //   this.detailUser = detailUser.data.data[0];
    // },
  },
};
</script>

<style scoped>
#alumni .section-one {
  padding: 60px 0;
}

#alumni .section-one .box {
  border-radius: 10px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

#alumni .section-one .box .content {
  width: 100%;
  padding: 15px;
}
</style>
