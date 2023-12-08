<template>
  <div id="data_peserta">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="text-center">
              <strong><span>Tambah Peserta</span></strong>
            </h2>

            <h2 class="text-center">
              {{ judul }}
            </h2>
          </b-col>
        </b-row>

        <b-row class="mt-3">
          <b-col md="4" offset-md="4">
            <div
              style="width: 100%; display: flex; justify-content: space-evenly"
            >
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
          <b-col md="8" lg="8" offset-md="2" offset-lg="2">
            <div>
              <b-alert show variant="success">
                <!-- <h5 class="alert-heading"><strong>Jumlah Peserta Yang Telah Anda Tambahkan :</strong></h5>
                <h1><strong>00</strong></h1> -->
                <b-row>
                  <b-col md="6"
                    ><h5 class="alert-heading text-center">
                      <strong>Jumlah peserta<br />yang telah anda pilih</strong>
                    </h5>
                    <h1 v-if="this.bulk.length == 0" class="text-center">
                      <strong>0</strong>
                    </h1>
                    <h1 v-if="this.bulk.length != 0" class="text-center">
                      <strong>{{ bulk.length }}</strong>
                    </h1>
                  </b-col>
                  <b-col md="6">
                    <h5 class="alert-heading text-center">
                      <strong>Kuota peserta<br />yang dibutuhkan </strong>
                    </h5>
                    <h1 class="text-center">
                      <strong>{{ kuota }}</strong>
                    </h1>
                  </b-col>
                </b-row>
                <hr />
                <p>
                  Apabila anda telah yakin dengan data peserta yang anda pilih,
                  silahkan tekan tombol
                  <span style="color: red; font-weight: bold">"Tambahkan"</span>
                  untuk menyimpan data peserta yang sudah ada pilih, sedangkan
                  apabila peserta tidak ada didalam data peserta dibawah ini,
                  silahkan anda melakukan pendaftaran peserta secara manual
                  melalui tombol
                  <span style="color: red; font-weight: bold"
                    >"Daftar Peserta"</span
                  >
                </p>
                <hr />
                <b-button variant="primary" class="mr-3" @click="regisBulk()"
                  >Tambahkan</b-button
                >
                <router-link :to="'/daftar'">
                  <b-button variant="warning">Daftar Peserta</b-button>
                </router-link>
              </b-alert>
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="12" lg="12">
            <hr />
          </b-col>
        </b-row>

        <!-- <b-row>
          <b-col md="12" lg="12">
            <p>
              <i>
                Apabila data peserta yang anda pilih tidak ada didalam data
                peserta dibawah ini, silahkan anda melakukan pendaftaran peserta
                terlebih dahulu dengan menggunakan tombol "<span
                  style="font-weight: bold"
                  >Daftar Peserta</span
                >" dibawah ini
              </i>
            </p>
            <router-link :to="'/daftar'">
              <b-button variant="primary">Daftar Peserta</b-button>
            </router-link>
          </b-col>
        </b-row> -->
        <b-tabs align="center">
          <b-tab title="Peserta Sesuai Peminatan">
            <b-row class="mt-3">
              <b-col md="12">
                <h5 style="text-align:center"><strong>DATA PESERTA SESUAI PEMINATAN</strong></h5>
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
                  :items="dataPesertaMinat"
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
                    <center>
                      <b-button
                        variant="warning"
                        size="sm"
                        class="mr-3"
                        v-b-tooltip.hover
                        title="Profil Peserta"
                        v-b-modal.modal-lg
                        @click="loadProfil(item.item.idnya, $route.params.id)"
                        ><b-icon icon="info-circle"></b-icon>
                        {{ item.actions }}</b-button
                      >

                      <b-button
                        variant="info"
                        size="sm"
                        class="mr-3"
                        v-b-tooltip.hover
                        title="Edit Profil Peserta"
                        v-b-modal.modal-lg-profil
                        ><b-icon icon="pencil-square"></b-icon>
                        {{ item.actions }}</b-button
                      >

                      <b-button
                        variant="success"
                        size="sm"
                        class="mr-3"
                        v-b-tooltip.hover
                        title="Verifikasi Perubahan Peminatan"
                        v-b-modal.modal-lg-peminatan
                        ><b-icon icon="check2-circle"></b-icon>
                        {{ item.actions }}</b-button
                      >
                    </center>
                  </template>

                  <template #cell(ikutsertanya)="item">
                    <center>
                      <b-form-checkbox
                        :disabled="
                          kuota == bulk.length && item.item.ditambahkan == 0
                        "
                        class="checkbox"
                        @input="bulks()"
                        v-model="item.item.ditambahkan"
                        value="1"
                        unchecked-value="0"
                      >
                      </b-form-checkbox>
                    </center>
                  </template>
                </b-table>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="5" offset-md="7">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="totalRows2"
                  :per-page="perPage"
                  align="fill"
                  size="sm"
                ></b-pagination>
              </b-col>
            </b-row>
          </b-tab>

          <b-tab title="Peserta Diluar Peminatan">
            <b-row class="mt-3">
              <b-col md="12">
                <h5 style="text-align:center"><strong>DATA PESERTA DILUAR PEMINATAN</strong></h5>
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
                  <template #cell(actions)="item">
                    <center>
                      <b-button
                        variant="warning"
                        size="sm"
                        class="mr-3"
                        v-b-tooltip.hover
                        title="Profil Peserta"
                        v-b-modal.modal-lg
                        @click="loadProfil(item.item.idnya, $route.params.id)"
                        ><b-icon icon="info-circle"></b-icon>
                        {{ item.actions }}</b-button
                      >

                      <b-button
                        variant="info"
                        size="sm"
                        class="mr-3"
                        v-b-tooltip.hover
                        title="Edit Profil Peserta"
                        v-b-modal.modal-lg-profil
                        ><b-icon icon="pencil-square"></b-icon>
                        {{ item.actions }}</b-button
                      >

                      <b-button
                        variant="success"
                        size="sm"
                        class="mr-3"
                        v-b-tooltip.hover
                        title="Verifikasi Perubahan Peminatan"
                        v-b-modal.modal-lg-peminatan
                        ><b-icon icon="check2-circle"></b-icon>
                        {{ item.actions }}</b-button
                      >
                    </center>
                  </template>

                  <template #cell(ikutsertanya)="item">
                    <center>
                      <b-form-checkbox
                        :disabled="
                          kuota == bulk.length && item.item.ditambahkan == 0
                        "
                        class="checkbox"
                        @input="bulks()"
                        v-model="item.item.ditambahkan"
                        value="1"
                        unchecked-value="0"
                      >
                      </b-form-checkbox>
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
          </b-tab>
          
        </b-tabs>
      </b-container>
    </section>

    <!-- modal -->
    <b-modal id="modal-lg" size="xl" title="Detail Peserta" hide-footer>
      <b-row>
        <b-col md="12">
          <b-tabs align="center">
            <b-tab title="Profil Peserta" active>
              <b-card-text>
                <b-row>
                  <b-col md="8">
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
                              <b-td style="width: 180px"
                                >Penerima Bantuan Pemerintah</b-td
                              >
                              <b-td style="width: 5px">:</b-td>
                              <b-td>{{
                                profil.penerimaBantuanPemerintah
                              }}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Pendidikan Terakhir</b-td>
                              <b-td>:</b-td>
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
                            ><span style="font-weight: 400">Data</span>
                            Kepemilikan Usaha</strong
                          >
                        </h4></b-col
                      >
                    </b-row>

                    <b-row class="mt-3">
                      <b-col md="12">
                        <b-table-simple small borderless class="mb-0">
                          <b-tbody>
                            <b-tr>
                              <b-td style="width: 180px">Memiliki Usaha </b-td>
                              <b-td style="width: 5px">:</b-td>
                              <b-td>{{ profil.kepemilikanUMKM }}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Nama UMKM</b-td>
                              <b-td>:</b-td>
                              <b-td>{{ profil.namaUMKM }}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Tanggal Mulai Usaha</b-td>
                              <b-td>:</b-td>
                              <b-td>{{ profil.tanggalMulaiUsaha }}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Nomor Ijin Usaha (NIB)</b-td>
                              <b-td>:</b-td>
                              <b-td>{{ profil.NIB }}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Nomor Ijin Usaha (IUMK)</b-td>
                              <b-td>:</b-td>
                              <b-td>{{ profil.IUMK }}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Nomor Ijin Usaha (PIRT)</b-td>
                              <b-td>:</b-td>
                              <b-td>{{ profil.PIRT }}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Nomor Ijin Usaha (Lainnya)</b-td>
                              <b-td>:</b-td>
                              <b-td>{{ profil.lainnya }}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Alamat Usaha</b-td>
                              <b-td>:</b-td>
                              <b-td>{{ profil.alamatUMKM }}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Kecamatan</b-td>
                              <b-td>:</b-td>
                              <b-td>{{ profil.kecamatanUMKM }}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Kelurahan</b-td>
                              <b-td>:</b-td>
                              <b-td>{{ profil.kelurahanUMKM }}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Kode Pos</b-td>
                              <b-td>:</b-td>
                              <b-td>{{ profil.kodePosUMKM }}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Nama Pemilik</b-td>
                              <b-td>:</b-td>
                              <b-td>{{ profil.namaPemilikUMKM }}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Telepon/No. Hp</b-td>
                              <b-td>:</b-td>
                              <b-td>{{ profil.noHpUMKM }}</b-td>
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
                          <b-td>{{ item.penyelenggaraPelatihanLain }}</b-td>

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

            <b-tab title="Riwayat Perubahan Peminatan">
              <b-card-text>
                <b-row class="mt-3">
                  <b-col md="12">
                    <b-table-simple small bordered class="mb-0">
                      <b-thead>
                        <b-tr>
                          <b-th rowspan="2">Tanggal Usulan Perubahan</b-th>
                          <b-th colspan="2">Peminatan Lama </b-th>
                          <b-th colspan="2">Peminatan Baru</b-th>
                          <b-th rowspan="2">Status</b-th>
                        </b-tr>

                        <b-tr>
                          <b-th>Satu</b-th>
                          <b-th>Dua</b-th>
                          <b-th>Satu</b-th>
                          <b-th>Dua</b-th>
                        </b-tr>
                      </b-thead>
                      <b-tbody>
                        <b-tr>
                          <b-td>-</b-td>
                          <b-td>-</b-td>
                          <b-td>-</b-td>
                          <b-td>-</b-td>
                          <b-td>-</b-td>
                          <b-td>-</b-td>
                        </b-tr>
                      </b-tbody>
                    </b-table-simple>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal id="modal-lg-profil" size="lg" title="Edit Profil Peserta" hide-footer>
      <b-row>
        <b-col md="12">
                <b-row>
                  <b-col md="12"
                    ><h4>
                      <span style="font-weight: 400">Data</span>&nbsp;<strong
                        >Identitas</strong
                      >
                    </h4></b-col
                  >
                </b-row>

                <b-row class="mt-3">
                  <b-col md="12">
                    <b-form-group label-cols="6" label-cols-lg="3" label="NIK">
                      <b-form-input
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group label-cols="6" label-cols-lg="3" label="Nama">
                      <b-form-input
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Jenis Kelamin"
                    >
                      <b-form-select
                        :options="jenisKelamin"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Tanggal Lahir"
                    >
                      <date-picker
                        style="width: 100%"
                        placeholder="TanggalLahir"
                      ></date-picker>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Alamat"
                    >
                      <b-form-input
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Kecamatan"
                    >
                      <b-form-select
                        :options="kecamatan"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Kelurahan"
                    >
                      <b-form-select
                        :options="kelurahan"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="No. Hp"
                    >
                      <b-form-input
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Email"
                    >
                      <b-form-input></b-form-input>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Foto Diri"
                    >
                      <b-form-file
                        type="file"
                      />
                    </b-form-group>

                    <b-form-group label-cols="6" label-cols-lg="3">
                      <img style="width: 100px"/>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Foto KTP"
                    >
                      <b-form-file
                        type="file"
                      />
                    </b-form-group>

                    <b-form-group label-cols="6" label-cols-lg="3">
                      <img style="width: 100px" />
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col md="12">
                    <h4>
                      <span style="font-weight: 400">Data</span>&nbsp;<strong
                        >Sosial Ekonomi</strong
                      >
                    </h4>
                  </b-col>
                </b-row>

                <b-row class="mt-3">
                  <b-col md="12">
                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Penerima Bantuan Pemerintah"
                    >
                      <b-form-select
                        :options="bantuan"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Pendidikan Terakhir"
                    >
                      <b-form-select
                        :options="pendidikan"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Status Dalam Keluarga"
                    >
                      <b-form-select
                        :options="keluarga"
                      ></b-form-select>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col md="12"
                    ><h4>
                      <span style="font-weight: 400">Data</span>&nbsp;<strong
                        >Kepemilikan Usaha</strong
                      >
                    </h4></b-col
                  >
                </b-row>

                <b-row class="mt-3">
                  <b-col md="12">
                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Memiliki Usaha"
                    >
                      <b-form-select
                        :options="kepemilikanUsaha"
                      ></b-form-select>
                    </b-form-group>

                    <!-- kondisional field berdasarkan kepemilikan -->
                    <div
                    >
                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Nama UMKM"
                      >
                        <b-form-input
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Tanggal Mulai Usaha"
                      >
                        <date-picker
                          valueType="format"
                          style="width: 100%"
                          placeholder="Tanggal Mulai Usaha"
                        ></date-picker>
                      </b-form-group>

                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Nomor Surat Ijin Usaha (NIB)"
                      >
                        <b-form-input></b-form-input>
                      </b-form-group>

                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Nomor Surat Ijin Usaha (IUMK)"
                      >
                        <b-form-input></b-form-input>
                      </b-form-group>

                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Nomor Surat Ijin Usaha (PIRT)"
                      >
                        <b-form-input></b-form-input>
                      </b-form-group>

                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Nomor Surat Ijin Usaha (Lainnya)"
                      >
                        <b-form-input></b-form-input>
                      </b-form-group>

                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Alamat Usaha"
                      >
                        <b-form-input
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Kecamatan"
                      >
                        <b-form-select
                          :options="kecamatan"
                        ></b-form-select>
                      </b-form-group>

                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Kelurahan"
                      >
                        <b-form-select
                          :options="kelurahan2"
                        ></b-form-select>
                      </b-form-group>

                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Kode Pos"
                      >
                        <b-form-input
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Nama Pemilik"
                      >
                        <b-form-input
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Telepon/No. Hp"
                      >
                        <b-form-input
                        ></b-form-input>
                      </b-form-group>
                    </div>
                  </b-col>
                </b-row>
        </b-col>
      </b-row>

      <b-row>
        <b-col md=12>
          <b-button variant="primary">Simpan</b-button>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal id="modal-lg-peminatan" title="Verifikasi Usulan Perubahan Peminatan Peserta" hide-footer>
      <b-row>
        <b-col md="12">
          <b-table-simple small bordered class="mb-0">
            <b-tbody>
              <b-tr>
                <b-td colspan="3" style="font-weight:bold">Peminatan Lama</b-td>
              </b-tr>

              <b-tr>
                <b-td style="width:180px">Peminatan Satu</b-td>
                <b-td style="width:10px">:</b-td>
                <b-td>-</b-td>
              </b-tr>

              <b-tr>
                <b-td>Peminatan Dua</b-td>
                <b-td>:</b-td>
                <b-td>-</b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </b-col>

        <b-col md="12" style="margin-top:15px">
          <b-table-simple small bordered class="mb-0">
            <b-tbody>
              <b-tr>
                <b-td colspan="3" style="font-weight:bold">Peminatan Baru</b-td>
              </b-tr>

              <b-tr>
                <b-td style="width:180px">Peminatan Satu</b-td>
                <b-td style="width:10px">:</b-td>
                <b-td>-</b-td>
              </b-tr>

              <b-tr>
                <b-td>Peminatan Dua</b-td>
                <b-td>:</b-td>
                <b-td>-</b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </b-col>

        <b-col md="12" style="margin-top:15px">
          <h6><strong>Alasan Perubahan Peminatan</strong></h6>
          <h6>--</h6>
        </b-col>
      </b-row>

      <b-row style="margin-top:15px">
        <b-col md=12>
          <b-button variant="success">Setujui</b-button>
        </b-col>
      </b-row>
    </b-modal>
    <b-modal id="maksimum" hide-footer>
      <p>Kuota sudah terpenuhi</p>
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
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "RiwayatPelatihan",
  data() {
    return {
      detailUser: {},
      user: {},
      pelatihan: [],
      user: {},
      kuota: 0,
      ipbackend,
      bulk: [],
      moment,
      dataPeserta: [],
      dataPesertaMinat: [],
      profil: [],
      pelatihanLain: [],
      riwayatPekerjaan: [],
      detail: {},
      ikutSerta: [
        { value: 1, text: "Ya" },
        { value: 0, text: "Tidak" },
      ],
      jenisKelamin: [
        { value: null, text: "-- Pilih --" },
        { value: "Laki-laki", text: "Laki-laki" },
        { value: "Perempuan", text: "Perempuan" },
      ],

      kecamatan: [{ value: null, text: "-- Pilih --" }],

      kelurahan: [{ value: null, text: "-- Pilih --" }],

      kelurahan2: [{ value: null, text: "-- Pilih --" }],

      pendapatan: [{ value: null, text: "-- Pilih --" }],

      bantuan: [
        { value: null, text: "-- Pilih --" },
        { value: "Ya", text: "Ya" },
        { value: "Tidak", text: "Tidak" },
      ],

      kepemilikanUsaha: [
        { value: null, text: "-- Pilih --" },
        { value: "Ya, Sebagai Pemilik", text: "Ya, Sebagai Pemilik" },
        { value: "Ya, Sebagai Karyawan", text: "Ya, Sebagai Karyawan" },
        { value: "Tidak Memiliki Usaha", text: "Tidak Memiliki Usaha" },
      ],

      keluarga: [
        { value: null, text: "-- Pilih --" },
        { value: "Suami/Ayah", text: "Suami/Ayah" },
        { value: "Istri/Ibu", text: "Istri/Ibu" },
        { value: "Anak", text: "Anak" },
        { value: "Lainnya", text: "Lainnya" },
      ],

      pendidikan: [
        { value: null, text: "-- Pilih --" },
        { value: "Tidak Lulus SD", text: "Tidak Lulus SD" },
        { value: "SD", text: "SD" },
        { value: "SMP", text: "SMP" },
        { value: "SMA", text: "SMA" },
        { value: "Perguruan Tinggi", text: "Perguruan Tinggi" },
      ],
      fields: [
        {
          key: "nonya",
          label: "No",
          sortable: true,
          class: "text-center",
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
          key: "ikutsertanya",
          label: "Pilih Peserta",
          sortable: true,
          class: "text-center",
        },

        {
          key: "jmlPelatihanSelesai",
          label: "Jumlah Pelatihan SIMPEL yang telah diikuti",
          sortable: true,
          class: "text-left table-width",
        },
        { key: "actions", label: "Actions", class: "text-center custom-width-100" },
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
    DatePicker,
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
    // bulkP(){
    //   let P = []
    //   let x = this.bulk.map((item) => {
    //     return {
    //       userId: item.idnya,
    //       pelatihanId: this.$route.params.id,
    //       status: 1,
    //     };
    //   });
    // },
  },

  mounted() {
    let vm = this;
    let ret = localStorage.getItem("user");
    vm.user = JSON.parse(ret);
    // Set the initial number of items
    this.listUser();
    this.totalRows = this.items.length;
    // this.loadProfil();
    this.propel();
  },
  methods: {
    async bulks() {
      this.bulk = [] 
      await this.dataPeserta.forEach((item) => {
        if(item.ditambahkan == 1){
          this.bulk.push(item)
        }
      });
      await this.dataPesertaMinat.forEach((item) => {
        if(item.ditambahkan == 1){
          this.bulk.push(item)
        }
      });
      if (this.bulk.length >= this.kuota) {
        this.$bvModal.show("maksimum");
      }
    },
    propel() {
      axios
        .get(
          ipbackend + "pelatihan/listPelatihanById/" + this.$route.params.id,
          {
            headers: {
              token: this.user.token,
            },
          }
        )
        .then((res) => {
          // console.log(res)
          this.kuota = res.data.sisaKuota;
          this.judul = res.data.data[0].judulPelatihan;
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
          // console.log(data);
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

          alert(data.data.message);
          vm.detailUser = {};
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
      let minat = await axios.get(
        ipbackend + "users/listPesertaSesuaiMinat/" + vm.$route.params.id,
        {
          headers: {
            token: vm.user.token,
          },
        }
      );
      vm.totalRows2 = minat.data.data.length;

      vm.dataPesertaMinat = await minat.data.data.map((item, idx) => {
        return {
          nonya: idx + 1,
          idnya: item.id,
          judulPelatihan: item.judulPelatihan,
          foto: item.foto,
          jmlPelatihanSelesai: item.jmlPelatihanSelesai,
          // niknya: item.NIK,
          namanya: item.nama,
          kelaminnya: item.jenisKelamin,
          // lahirnya: moment(item.tanggalLahir).format("LL"),
          alamatnya: item.alamat,
          kecamatannya: item.kecamatan,
          kelurahannya: item.kelurahan,
          // hpnya: item.noHp,
          // emailnya: item.email,
          ditambahkan: 0,
          filePendukung: item.file,
          keteranganFile: item.keteranganFile,
          statusnya: item.status,
        };
      });

      let itemnya = await axios.get(
        ipbackend + "users/usersNotInPelatihan/" + vm.$route.params.id,
        {
          headers: {
            token: vm.user.token,
          },
        }
      );
      vm.dataPeserta = []
      console.log(itemnya.data.data, "anjay");
      await itemnya.data.data.forEach((ele, idx) => {
        if (vm.dataPesertaMinat.length) {
          let x = vm.dataPesertaMinat;
          let count = 0;
          for (let i = 0; i < x.length; i++) {
            count++;
            if (ele.id == x[i].idnya) {
              count--;
              // console.log(count,ele.nama,"<<")
            } else if (count == vm.dataPesertaMinat.length) {
              vm.dataPeserta.push({
                nonya: idx + 1,
                idnya: ele.id,
                judulPelatihan: ele.judulPelatihan,
                foto: ele.foto,
                jmlPelatihanSelesai: ele.jmlPelatihanSelesai,
                // niknya: ele.NIK,
                namanya: ele.nama,
                kelaminnya: ele.jenisKelamin,
                // lahirnya: moment(ele.tanggalLahir).format("LL"),
                alamatnya: ele.alamat,
                kecamatannya: ele.kecamatan,
                kelurahannya: ele.kelurahan,
                // hpnya: ele.noHp,
                // emailnya: ele.email,
                ditambahkan: 0,
                filePendukung: ele.file,
                keteranganFile: ele.keteranganFile,
                statusnya: ele.status,
              });
            }
          }
        } else {
          vm.dataPeserta.push({
            nonya: idx + 1,
            idnya: ele.id,
            judulPelatihan: ele.judulPelatihan,
            foto: ele.foto,
            jmlPelatihanSelesai: ele.jmlPelatihanSelesai,
            // niknya: ele.NIK,
            namanya: ele.nama,
            kelaminnya: ele.jenisKelamin,
            // lahirnya: moment(ele.tanggalLahir).format("LL"),
            alamatnya: ele.alamat,
            kecamatannya: ele.kecamatan,
            kelurahannya: ele.kelurahan,
            // hpnya: ele.noHp,
            // emailnya: ele.email,
            ditambahkan: 0,
            filePendukung: ele.file,
            keteranganFile: ele.keteranganFile,
            statusnya: ele.status,
          });
        }
      });
      console.log(vm.dataPesertaMinat, vm.dataPeserta);
      vm.totalRows = vm.dataPeserta.length;
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    regisBulk() {
      let vm = this;
      let x = this.bulk.map((item) => {
        return {
          userId: item.idnya,
          pelatihanId: this.$route.params.id,
          status: 1,
        };
      });
      axios
        .post(
          ipbackend + "poolPelatihan/inviteUsers",
          {
            bulk: x,
          },
          {
            headers: {
              token: vm.user.token,
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.listUser();
          this.propel()
          this.bulk = []
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
#data_peserta .section-one {
  padding: 60px 0;
}

#data_peserta .section-one .box-submenu {
  display: flex;
  justify-content: space-evenly;
  /* background-color: red; */
}

.custom-width-100{
  width: 180px !important;
}

</style>
