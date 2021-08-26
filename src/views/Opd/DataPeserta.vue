<template>
  <div id="data_peserta">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="text-center">
              <strong
                > <span>Data Peserta</span></strong
              >
            </h2>
            
            <h2 v-if="dataPeserta.length" class="text-center">{{ dataPeserta[0].judulPelatihan }}</h2>
          </b-col>
        </b-row>


        <b-row class="mt-3">
          <b-col md="4" offset-md="4">
            <div style="width:100%;display:flex;justify-content:space-evenly">
              <router-link :to="'/dashboard_opd'">
                <h6>Dashboard</h6>
              </router-link>
              <h6>|</h6>
              <h6><strong>Data Peserta</strong></h6>
            </div>
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
              <template #cell(statusnya)="item">
                <center>
                    <b-badge variant="dark"  v-if="item.item.statusnya == 0">Belum Diverifikasi</b-badge>
                    <b-badge variant="success"  v-else-if="item.item.statusnya == 1">Disetujui</b-badge>
                    <b-badge variant="info"  v-else-if="item.item.statusnya == 2">Syarat Belum Lengkap</b-badge>
                    <b-badge variant="danger"  v-else-if="item.item.statusnya == 3">Ditolak</b-badge>
                </center>
              </template>
              <template #cell(filePendukung)="item">
                <center>
                  <a
                    :href="ipbackend + item.item.filePendukung"
                    target="_blank"
                  >
                    <b-button
                      variant="primary"
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
                    @click="loadProfil(item.item.idnya, $route.params.id)"
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
    <b-modal id="modal-lg" size="xl" title="Verifikasi Peserta" hide-footer>
      <b-row>
        <b-col md="12">
          <b-tabs align="center">
            <b-tab title="Profil Peserta" active>
              <b-card-text>
                <b-row>
                  <b-col md="8">
                    <b-row class="mt-3">
                      <b-col md="12"><h4>
                          <strong ><span style="font-weight: 400">Data</span>
                            Identitas</strong>
                        </h4></b-col>
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
                              <b-td style="width: 180px">Penerima Bantuan Pemerintah</b-td>
                              <b-td style="width: 5px">:</b-td>
                              <b-td>{{ profil.penerimaBantuanPemerintah }}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td >Pendidikan Terakhir</b-td>
                              <b-td >:</b-td>
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
                          <strong
                            ><span style="font-weight: 400">Data</span> Kepemilikan Usaha</strong
                          >
                        </h4></b-col
                      >
                    </b-row>

                    <b-row class="mt-3">
                      <b-col md="12">
                        <b-table-simple small borderless class="mb-0">
                          <b-tbody>
                            <b-tr>
                              <b-td style="width:220px">Memiliki Usaha</b-td>
                              <b-td style="width: 5px">:</b-td>
                              <b-td>{{profil.kepemilikanUMKM}}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Nama UMKM</b-td>
                              <b-td>:</b-td>
                              <b-td>{{profil.namaUMKM}}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Tanggal Mulai Usaha</b-td>
                              <b-td>:</b-td>
                              <b-td>{{profil.tanggalMulaiUsaha}}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Nomor Ijin Usaha (NIB)</b-td>
                              <b-td>:</b-td>
                              <b-td>{{profil.NIB}}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Nomor Ijin Usaha (IUMK)</b-td>
                              <b-td>:</b-td>
                              <b-td>{{profil.IUMK}}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Nomor Ijin Usaha (PIRT)</b-td>
                              <b-td>:</b-td>
                              <b-td>{{profil.PIRT}}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Nomor Ijin Usaha (Lainnya)</b-td>
                              <b-td>:</b-td>
                              <b-td>{{profil.lainnya}}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Alamat Usaha</b-td>
                              <b-td>:</b-td>
                              <b-td>{{profil.alamatUMKM}}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Kecamatan</b-td>
                              <b-td>:</b-td>
                              <b-td>{{profil.kecamatanUMKM}}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Kelurahan</b-td>
                              <b-td>:</b-td>
                              <b-td>{{profil.kelurahanUMKM}}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Kode Pos</b-td>
                              <b-td>:</b-td>
                              <b-td>{{profil.kodePosUMKM}}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Nama Pemilik</b-td>
                              <b-td>:</b-td>
                              <b-td>{{profil.namaPemilikUMKM}}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Telepon/No. Hp</b-td>
                              <b-td>:</b-td>
                              <b-td>{{profil.noHpUMKM}}</b-td>
                            </b-tr>
                          </b-tbody>
                        </b-table-simple>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col md="4">
                    <h4 class="mt-3">
                      <strong
                        ><span style="font-weight: 400">Foto</span>
                        Peserta</strong
                      >
                    </h4>
                    <img
                      :src="ipbackend + profil.foto"
                      alt=""
                      class="mt-3"
                      style="width: 100%"
                    />
                  </b-col>
                </b-row>
                
              </b-card-text>
            </b-tab>

            <b-tab title="Riwayat Pelatihan SIMPEL">
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
                      <b-tbody>
                        <b-tr v-for="(item, idx) in pelatihan" :key="idx">
                          <b-td>{{ item.judulPelatihan }}</b-td>
                          <b-td>{{ item.kejuruan }}</b-td>
                          <b-td
                            >{{
                              moment(item.tanggalMulaiPelatihan).format("LL")
                            }}
                            s/d
                            {{
                              moment(item.tanggalSelesaiPelatihan).format("LL")
                            }}</b-td
                          >
                          <b-td>{{ item.namaOPD }}</b-td>
                          <b-td>{{ item.jenjang }}</b-td>
                        </b-tr>
                      </b-tbody>
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
                          <b-th>Penyelenggara</b-th>

                          <b-th>No. Sertifikat</b-th>
                        </b-tr>
                      </b-thead>
                      <b-tbody>
                        <b-tr v-for="(item, idx) in pelatihanLain" :key="idx">
                          <b-td>{{ item.namaPelatihanLain }}</b-td>
                          <b-td>{{ item.tahunPelatihanLain }}</b-td>
                          <b-td>{{ item.penyelenggaraPelatihanLain}}</b-td>

                          <b-td>{{ item.noSertifikat }}</b-td>
                        </b-tr>
                      </b-tbody>
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

            <b-tab title="Verifikasi & Simpan Data">
              <b-card-text>
                <b-row class="mt-3">
                  <b-col md="12">
                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Verifikasi"
                    >
                      <b-form-select
                        :options="verifikasi"
                        v-model="detailUser.status"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Keterangan"
                      v-if="detailUser.status == 2 || detailUser.status == 3"
                    >
                      <b-form-input
                        v-model="detailUser.keterangan"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>

                <hr />
                <p>Apakah anda yakin akan menyimpan data ini ?</p>
                <b-button variant="primary" @click="update">Simpan</b-button>
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

export default {
  name: "RiwayatPelatihan",
  data() {
    return {
      detailUser: {},
      user: {},
      pelatihan: [],
      user: {},
      ipbackend,
      moment,
      dataPeserta: [],
      profil: [],
      pelatihanLain: [],
      riwayatPekerjaan: [],
      detail: {},
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
        // {
        //   key: "lahirnya",
        //   label: "Tanggal Lahir",
        //   sortable: true,
        //   class: "text-left",
        // },
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
          key: "statusnya",
          label: "Status",
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
        {
          key: "jmlPelatihanSelesai",
          label: "Jumlah Pelatihan SIMPEL yang telah diikuti",
          sortable: true,
          class: "text-center",
        },
        { key: "actions", label: "Actions", class: "text-center" },
      ],

      items: [],

      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 50, 100],
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
    // this.loadProfil();
  },
  methods: {
    async update() {
      // console.log(item);
      let vm = this;
      var formData = new FormData();

      formData.append("keterangan", vm.detailUser.keterangan);

      // formData.append("status", vm.detailUser.status);

      formData.append("id", vm.detailUser.poolPelatihanId);

      axios({
        method: "post",
        url: ipbackend + "poolpelatihan/update",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          token: vm.user.token,
        },
      })
        .then(async (data) => {
          console.log(data);
          //  this.loadData();
          await axios.post(
            ipbackend + "poolpelatihan/changeStatus/",
            { id: vm.detailUser.poolPelatihanId, status: vm.detailUser.status },
            {
              headers: {
                token: vm.user.token,
              },
            }
          );
          this.$bvModal.hide("modal-lg")
          alert(data.data.message);
          vm.detailUser = {};
          this.listUser();
          
        })
        .catch((err) => {
          alert(err);
        });
    },
    async loadProfil(id, idPelatihan) {
      let vm = this;
      let profil = await axios.get(ipbackend + "users/listById/" + id, {
        headers: {
          token: vm.user.token,
        },
      });
      //  console.log(profil.data.data[0],'-------');
      this.profil = profil.data.data[0];

      let pelatihanLain = await axios.get(
        ipbackend + "pelatihanlain/listByUsersId/" + id,
        {
          headers: {
            token: vm.user.token,
          },
        }
      );
      this.pelatihanLain = pelatihanLain.data.data;

      let riwayatPekerjaan = await axios.get(
        ipbackend + "riwayatpekerjaan/listByUsersId/" + id,
        {
          headers: {
            token: vm.user.token,
          },
        }
      );
      this.riwayatPekerjaan = riwayatPekerjaan.data.data;

      let pelatihan = await axios.get(
        ipbackend + "pelatihan/listPelatihanByUsersId/" + id,
        {
          headers: {
            token: vm.user.token,
          },
        }
      );
      this.pelatihan = pelatihan.data.data;

      let detailUser = await axios.get(
        ipbackend +
          "poolPelatihan/listByPelatihanIdUserId/" +
          idPelatihan +
          "/" +
          id,
        {
          headers: {
            token: vm.user.token,
          },
        }
      );
      this.detailUser = detailUser.data.data[0];
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
      // console.log("abcde");
      let x = itemnya.data.data;
      this.totalRows = x.length;
      itemnya.data.data.forEach((item, idx) => {
        this.dataPeserta.push({
          nonya: idx + 1,
          idnya: item.id,
          judulPelatihan: item.judulPelatihan,
          foto: item.foto,
          // niknya: item.NIK,
          namanya: item.nama,
          kelaminnya: item.jenisKelamin,
          // lahirnya: moment(item.tanggalLahir).format("LL"),
          alamatnya: item.alamat,
          kecamatannya: item.kecamatan,
          kelurahannya: item.kelurahan,
          // hpnya: item.noHp,
          // emailnya: item.email,
          jmlPelatihanSelesai: item.jmlPelatihanSelesai,
          filePendukung: item.file,
          keteranganFile: item.keteranganFile,
          statusnya: item.status,
        });
      });
      console.log(itemnya, "anjay");
      console.log(dataPeserta, "ihir");
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
