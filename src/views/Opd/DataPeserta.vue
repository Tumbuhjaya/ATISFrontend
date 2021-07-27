<template>
  <div id="data_peserta">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="text-center">
              <strong
                >Data <span style="font-weight: 400">Peserta</span></strong
              >
            </h2>
          </b-col>
        </b-row>

        <!-- <b-row>
          <b-col md="4" offset-md="4" class="mt-3">
            <div class="box-submenu">
              <router-link
                :to="'/dashboard_masyarakat'"
                style="text-decoration: none"
                ><h6 class="m-t-0 m-b-0">Dashboard</h6></router-link
              >
              <h6 class="m-t-0 m-b-0">|</h6>
              <h6 class="m-t-0 m-b-0"><strong>Riwayat Pelatihan</strong></h6>
            </div>
          </b-col>
        </b-row> -->

        <b-row class="mt-5">
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
              :items="dataPeserta"
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
              <template #cell(filePendukung)="item">
                <center>
                  <a
                    :href="ipbackend + item.item.filePendukung"
                    target="_blank"
                  >
                    <b-button
                      variant="success"
                      size="sm"
                      v-b-tooltip.hover
                      title="Download"
                      ><b-icon icon="cloud-download"></b-icon>
                    </b-button>
                  </a>
                </center>
              </template>
              <template #cell(actions)="item">
                <center>
                  <b-button
                    variant="warning"
                    size="sm"
                    class="mr-3"
                    v-b-tooltip.hover
                    title="Verifikasi"
                    v-b-modal.modal-lg
                    ><b-icon icon="check2-square"></b-icon>
                    {{ item.actions }}</b-button
                  >
                </center>
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
      </b-container>
    </section>

    <!-- modal -->
    <b-modal id="modal-lg" size="xl" title="Detail Peserta" hide-footer>
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
                          <b-td>{{ profil.nama }}</b-td>
                        </b-tr>

                        <b-tr>
                          <b-td>Jenis Kelamin</b-td>
                          <b-td>:</b-td>
                          <b-td>{{ profil.jenisKelamin }}</b-td>
                        </b-tr>

                        <b-tr>
                          <b-td>Tanggal Lahir</b-td>
                          <b-td>:</b-td>
                          <b-td>{{
                            moment(profil.tanggalLahir).format("LL")
                          }}</b-td>
                        </b-tr>

                        <b-tr>
                          <b-td>NIK</b-td>
                          <b-td>:</b-td>
                          <b-td>{{ profil.NIK }}</b-td>
                        </b-tr>

                        <b-tr>
                          <b-td>Alamat</b-td>
                          <b-td>:</b-td>
                          <b-td>{{ profil.alamat }}</b-td>
                        </b-tr>

                        <b-tr>
                          <b-td>Kelurahan</b-td>
                          <b-td>:</b-td>
                          <b-td>{{ profil.kelurahan }}</b-td>
                        </b-tr>

                        <b-tr>
                          <b-td>Kecamatan</b-td>
                          <b-td>:</b-td>
                          <b-td>{{ profil.kecamatan }}</b-td>
                        </b-tr>

                        <b-tr>
                          <b-td>No. HP</b-td>
                          <b-td>:</b-td>
                          <b-td>{{ profil.noHp }}</b-td>
                        </b-tr>

                        <b-tr>
                          <b-td>Email</b-td>
                          <b-td>:</b-td>
                          <b-td>{{ profil.email }}</b-td>
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
                          <b-td>{{ profil.pendidikanTerakhir }}</b-td>
                        </b-tr>

                        <b-tr>
                          <b-td>Status Dalam Keluarga</b-td>
                          <b-td>:</b-td>
                          <b-td>{{ profil.statusDalamKeluarga }}</b-td>
                        </b-tr>
                      </b-tbody>
                    </b-table-simple>
                  </b-col>
                </b-row>

                <b-row class="mt-5">
                  <b-col md="12"
                    ><h4>
                      <span style="font-weight: 400">Data</span>
                      <strong>Riwayat Pelatihan</strong>
                    </h4></b-col
                  >
                </b-row>

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
                      <b-tbody>
                        <b-tr v-for="(item, idx) in pelatihanLain" :key="idx">
                          <b-td>{{ item.namaPelatihanLain }}</b-td>
                          <b-td>{{ item.tahunPelatihanLain }}</b-td>

                          <b-td>{{ item.noSertifikat }}</b-td>
                        </b-tr>
                      </b-tbody>
                    </b-table-simple>
                  </b-col>
                </b-row>

                <b-row class="mt-5">
                  <b-col md="12"
                    ><h4>
                      <span style="font-weight: 400">Data</span>
                      <strong>Riwayat Pekerjaan</strong>
                    </h4></b-col
                  >
                </b-row>

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
                      <b-tbody>
                        <b-tr
                          v-for="(item, idx) in riwayatPekerjaan"
                          :key="idx"
                        >
                          <b-td>{{ item.namaRiwayatPekerjaan }}</b-td>
                          <b-td>{{ item.perusahaanRiwayatPekerjaan }}</b-td>
                          <b-td>{{ item.posisiRiwayatPekerjaan }}</b-td>
                          <b-td>{{ item.tahunAwalRiwayatPekerjaan }}</b-td>
                          <b-td>{{ item.tahunAkhirRiwayatPekerjaan }}</b-td>
                        </b-tr>
                      </b-tbody>
                    </b-table-simple>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-tab>

            <b-tab title="Riwayat Pelatihan">
              <b-card-text>
                <div v-for="(item, idx) in pelatihan" :key="idx">
                  <b-row>
                    <b-col md="12"
                      ><h4>
                        <span style="font-weight: 400"></span>
                        <strong>{{ item.judulPelatihan }}</strong>
                      </h4></b-col
                    >
                  </b-row>
                  <b-row class="mt-3">
                    <b-col md="12">
                      <b-table-simple small borderless class="mb-0">
                        <b-tbody>
                          <b-tr>
                            <b-td style="width: 180px">Kategori</b-td>
                            <b-td style="width: 5px">:</b-td>
                            <b-td>{{ item.kejuruan }}</b-td>
                          </b-tr>

                          <b-tr>
                            <b-td>Pelatihan</b-td>
                            <b-td>:</b-td>
                            <b-td>
                              <div class="ql-container">
                                <div
                                  class="ql-editor"
                                  v-html="item.deskripsiPelatihan"
                                ></div></div
                            ></b-td>
                          </b-tr>

                          <b-tr>
                            <b-td>Tanggal Pelatihan</b-td>
                            <b-td>:</b-td>
                            <b-td
                              >{{
                                moment(item.tanggalMulaiPelatihan).format("LL")
                              }}
                              s/d
                              {{
                                moment(item.tanggalSelesaiPelatihan).format(
                                  "LL"
                                )
                              }}</b-td
                            >
                          </b-tr>

                          <b-tr>
                            <b-td>Kuota Peserta</b-td>
                            <b-td>:</b-td>
                            <b-td>{{ item.kuota }} Peserta</b-td>
                          </b-tr>

                          <b-tr>
                            <b-td>Lokasi</b-td>
                            <b-td>:</b-td>
                            <b-td>J{{ item.lokasi }}</b-td>
                          </b-tr>

                          <b-tr>
                            <b-td>Penyelenggara</b-td>
                            <b-td>:</b-td>
                            <b-td>{{ item.namaOPD }}</b-td>
                          </b-tr>

                          <b-tr>
                            <b-td>Jenjang Pelatihan</b-td>
                            <b-td>:</b-td>
                            <b-td>{{ item.jenjang }}</b-td>
                          </b-tr>
                        </b-tbody>
                      </b-table-simple>
                    </b-col>
                  </b-row>
                </div>
              </b-card-text>
            </b-tab>

            <b-tab title="Verifikasi & Simpan Data">
              <b-card-text>
                <b-row class="mt-3">
                  <b-col md="12">
                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Verifikasi"
                    >
                      <b-form-select :options="verifikasi"></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Keterangan"
                    >
                      <b-form-input></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>

                <hr />
                <p>Apakah anda yakin akan menyimpan data ini ?</p>
                <b-button variant="primary">Simpan</b-button>
              </b-card-text>
            </b-tab>
          </b-tabs>
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
import axios from "axios";
import ipbackend from "../../ipbackend";
import moment from "moment";
let ret = localStorage.getItem("user");
ret = JSON.parse(ret);
export default {
  name: "RiwayatPelatihan",
  data() {
    return {
      user: {},
      ipbackend,
      moment,
      dataPeserta: [],
      profil: [],
      pelatihanLain: [],
      riwayatPekerjaan: [],
      verifikasi: [
        { value: 0, text: "Belum Diverifikasi" },
        { value: 1, text: "Disetujui" },
        { value: 2, text: "Syarat Belum Lengkap" },
        { value: 3, text: "Ditolak" },
      ],
      fields: [
        {
          key: "nonya",
          label: "No",
          sortable: true,
          class: "text-center",
        },
        // {
        //   key: "niknya",
        //   label: "NIK",
        //   sortable: true,
        //   sortDirection: "desc",
        //   class: "text-left",
        // },
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
        // {
        //   key: "hpnya",
        //   label: "No. Hp",
        //   sortable: true,
        //   class: "text-left",
        // },
        // {
        //   key: "emailnya",
        //   label: "Email",
        //   sortable: true,
        //   class: "text-left",
        // },
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
        { key: "actions", label: "Actions", class: "text-center" },
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

  mounted() {
    let vm = this;
    let ret = localStorage.getItem("user");
    vm.user = JSON.parse(ret);
    // Set the initial number of items
    this.listUser();
    this.totalRows = this.items.length;
    this.loadProfil();
  },
  methods: {
    async loadProfil() {
      let profil = await axios.get(ipbackend + "users/listById/" + ret.id, {
        headers: {
          token: ret.token,
        },
      });
      //  console.log(profil.data.data[0],'-------');
      this.profil = profil.data.data[0];

      let pelatihanLain = await axios.get(
        ipbackend + "pelatihanlain/listByUsersId/" + ret.id,
        {
          headers: {
            token: ret.token,
          },
        }
      );
      this.pelatihanLain = pelatihanLain.data.data;

      let riwayatPekerjaan = await axios.get(
        ipbackend + "riwayatpekerjaan/listByUsersId/" + ret.id,
        {
          headers: {
            token: ret.token,
          },
        }
      );
      this.riwayatPekerjaan = riwayatPekerjaan.data.data;

      let pelatihan = await axios.get(
        ipbackend + "pelatihan/listPelatihanByUsersId/" + ret.id,
        {
          headers: {
            token: ret.token,
          },
        }
      );
      this.pelatihan = pelatihan.data.data;
    },
    async listUser() {
      let vm = this;
      this.dataPeserta = [];
      let itemnya = await axios.get(
        ipbackend +
          "poolpelatihan/listPesertaByPelatihan/" +
          this.$route.params.id,
        {
          headers: {
            token: vm.user.token,
          },
        }
      );
      console.log("abcde");
      itemnya.data.data.forEach((item, idx) => {
        this.dataPeserta.push({
          nonya: idx + 1,
          // niknya: item.NIK,
          namanya: item.nama,
          kelaminnya: item.jenisKelamin,
          lahirnya: moment(item.tanggalLahir).format("LL"),
          alamatnya: item.alamat,
          kecamatannya: item.kecamatan,
          kelurahannya: item.kelurahan,
          // hpnya: item.noHp,
          // emailnya: item.email,
          filePendukung: item.file,
          keteranganFile: item.keteranganFile,
        });
      });
      // console.log(itemnya);
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>

<style scoped>
#data_peserta .section-one {
  padding: 60px 0;
}

#data_peserta .section-one .box-submenu {
  display: flex;
  justify-content: space-evenly;
  /* background-color: red; */
}
</style>
