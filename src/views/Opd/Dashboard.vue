<template>
  <div id="dashboard_opd">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="text-center"><strong>Dashboard</strong></h2>
            <h4 class="text-center">{{ user.namaOPD.namaOPD }}</h4>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col md="12">
            <!-- <router-link :to="'/tambah_pelatihan_opd'"> -->
            <b-button variant="primary" v-b-modal.modal-lg @click="reset()"
              >Tambah Data Pelatihan</b-button
            >
            <!-- </router-link> -->
          </b-col>
        </b-row>

        <b-row class="mt-3">
          <b-col md="12">
            <b-tabs content-class="mt-3" align="center">
              <b-tab title="Rencana" active>
                <b-row>
                  <b-col md="12" lg="12">
                    <b-button
                      variant="success"
                      class="float-right"
                      v-b-modal.modal-sm
                      >Cetak Rencana Pelatihan</b-button
                    >
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
                      <template #cell(tglnya)="item">
                        <center>
                          {{ moment(item.item.tglnya).format("ll") }} s/d
                          {{ moment(item.item.tglSel).format("ll") }}
                        </center>
                      </template>
                      <template #cell(kuotanya)="item">
                        <center>
                          {{ item.item.kuotanya }}/
                          {{ item.item.kuotanya - item.item.jmlPeserta }}
                        </center>
                      </template>
                      <!-- <template #cell(lokasinya)="item">
                        <center>
                          <b-badge
                            variant="dark"
                            style="padding: 5px; cursor: pointer"
                            @click="go(item)"
                            >Lihat Lokasi</b-badge
                          >
                        </center>
                      </template> -->
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
                        <!-- <b-button
                          variant="danger"
                          size="sm"
                          class="mr-3"
                          v-b-tooltip.hover
                          title="Hapus Data"
                          @click="hapus(item.item.id)"
                          ><b-icon icon="trash"></b-icon>
                          {{ item.actions }}</b-button
                        > -->

                        <router-link :to="'/data_peserta/' + item.item.id">
                          <b-button
                            variant="success"
                            size="sm"
                            class="mr-3"
                            v-b-tooltip.hover
                            title="Verifikasi Peserta"
                            ><b-icon icon="info-circle"></b-icon>
                            {{ item.actions }}</b-button
                          >
                        </router-link>

                        <router-link
                          :to="'/tambah_peserta_by_opd/' + item.item.id"
                        >
                          <b-button
                            variant="info"
                            size="sm"
                            class="mr-3"
                            v-b-tooltip.hover
                            title="Tambah Peserta"
                            ><b-icon icon="file-plus"></b-icon>
                            {{ item.actions }}</b-button
                          >
                        </router-link>

                        <a
                          :href="
                            'http://besimpelmas.salatiga.go.id/pelatihan/cetakabsen/' +
                            item.item.id
                          "
                          target="_blank"
                        >
                          <b-button
                            variant="warning"
                            size="sm"
                            v-b-tooltip.hover
                            title="Cetak Absensi"
                            ><b-icon icon="printer-fill"></b-icon>
                            {{ item.actions }}</b-button
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
                      :total-rows="items.length"
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
                      <template #cell(tglnya)="item">
                        <center>
                          {{ moment(item.item.tglnya).format("ll") }} s/d
                          {{ moment(item.item.tglSel).format("ll") }}
                        </center>
                      </template>
                      <template #cell(kuotanya)="item">
                        <center>
                          {{ item.item.kuotanya }}/ {{ item.item.jmlPeserta }}
                        </center>
                      </template>

                      <template #cell(actions)="item">
                        <a
                          :href="
                            'http://besimpelmas.salatiga.go.id/pelatihan/cetakabsen/' +
                            item.item.id
                          "
                          target="_blank"
                        >
                          <b-button
                            variant="warning"
                            size="sm"
                            v-b-tooltip.hover
                            title="Cetak Absensi"
                            ><b-icon icon="printer-fill"></b-icon>
                            {{ item.actions }}</b-button
                          >
                        </a>
                        <!-- <b-button
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
                        > -->

                        <!-- <router-link
                          :to="'/tambah_peserta_by_opd/' + item.item.id"
                        >
                          <b-button
                            variant="info"
                            size="sm"
                            class="mr-3"
                            v-b-tooltip.hover
                            title="Tambah Peserta"
                            ><b-icon icon="file-plus"></b-icon>
                            {{ item.actions }}</b-button
                          >
                        </router-link>

                        <router-link :to="'/data_peserta/' + item.item.id">
                          <b-button
                            variant="success"
                            size="sm"
                            v-b-tooltip.hover
                            title="Verifikasi Peserta"
                            ><b-icon icon="info-circle"></b-icon>
                            {{ item.actions }}</b-button
                          >
                        </router-link> -->
                      </template>
                    </b-table>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col md="5" offset-md="7">
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="items2.length"
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
                      <!-- <template #cell(lokasinya)="item">
                        <center>
                          <b-badge
                            variant="dark"
                            style="padding: 5px; cursor: pointer"
                            @click="go(item)"
                            >Lihat Lokasi</b-badge
                          >
                        </center>
                      </template> -->
                      <template #cell(tglnya)="item">
                        <center>
                          {{ moment(item.item.tglnya).format("ll") }} s/d
                          {{ moment(item.item.tglSel).format("ll") }}
                        </center>
                      </template>

                      <template #cell(kuotanya)="item">
                        <center>
                          {{ item.item.kuotanya }}/ {{ item.item.jmlPeserta }}
                        </center>
                      </template>

                      <template #cell(actions)="item">
                        <!-- <b-button
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

                        <router-link :to="'/data_peserta/' + item.item.id">
                          <b-button
                            variant="success"
                            size="sm"
                            class="mr-3"
                            v-b-tooltip.hover
                            title="Verifikasi Peserta"
                            ><b-icon icon="info-circle"></b-icon>
                            {{ item.actions }}</b-button
                          >
                        </router-link> -->

                        <b-button
                          variant="info"
                          size="sm"
                          class="mr-3"
                          v-b-tooltip.hover
                          title="Upload Dokumentasi Pelatihan"
                          v-b-modal.modal-dokumentasi
                          @click="uploadId = item.item.id"
                          ><b-icon icon="pencil-square"></b-icon>
                          {{ item.actions }}</b-button
                        >

                        <a
                          :href="
                            'http://besimpelmas.salatiga.go.id/pelatihan/cetakrealisasi/' +
                            item.item.id
                          "
                          target="_blank"
                        >
                          <b-button
                            variant="warning"
                            size="sm"
                            v-b-tooltip.hover
                            title="Cetak Realisasi"
                            ><b-icon icon="printer-fill"></b-icon>
                            {{ item.actions }}</b-button
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
                      :total-rows="items3.length"
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
    <b-modal
      id="modal-lg"
      size="xl"
      title="Formulir Data Pelatihan"
      hide-footer
    >
      <b-row class="mb-3">
        <b-col md="12">
          <h2 class="text-left">
            <strong
              ><span style="font-weight: 400">Informasi</span> Pelatihan</strong
            >
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
        <quill-editor v-model="dataInput.deskripsiPelatihan"></quill-editor>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Tanggal Pelatihan">
        <div class="row">
          <b-col md="6"
            ><date-picker
              v-model="dataInput.tanggalMulaiPelatihan"
              valueType="format"
              style="width: 100%"
              placeholder="Tanggal Awal"
            ></date-picker
          ></b-col>
          <b-col md="6"
            ><date-picker
              v-model="dataInput.tanggalSelesaiPelatihan"
              valueType="format"
              style="width: 100%"
              placeholder="Tanggal Akhir"
            ></date-picker
          ></b-col>
        </div>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Contact Person">
        <b-form-input v-model="dataInput.CPPelatihan"></b-form-input>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Kuota Peserta">
        <b-form-input v-model="dataInput.kuotaPeserta"></b-form-input>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Sumber Dana">
        <b-form-select
          :options="sumberDana"
          v-model="dataInput.sumberDanaPelatihan"
        ></b-form-select>
      </b-form-group>
      <b-form-group
        label-cols="6"
        label-cols-lg="3"
        label="Sumber Dana Lainnya"
        v-if="dataInput.sumberDanaPelatihan == 'lain'"
      >
        <b-form-input v-model="dataInput.SumberDanaLainnya"></b-form-input>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Pagu Anggaran">
        <b-form-input v-model="dataInput.anggaranPelatihan"></b-form-input>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Sasaran Peserta">
        <b-form-input v-model="dataInput.sasaranPelatihan"></b-form-input>
      </b-form-group>
      <b-form-group label-cols="6" label-cols-lg="3" label="Lokasi">
        <b-form-input v-model="dataInput.lokasi"></b-form-input>
      </b-form-group>
      <!-- <b-row>
        <b-col>
          <b-form-group label="Lokasi Pendaftaran" label-cols="6" label-cols-lg="3">
            <b-form-input
              v-model="dataInput.koordinatXPelatihan"
              placeholder="Koordinat X (Longitude)"
            ></b-form-input>
            <p></p>
            <b-form-input
              v-model="dataInput.koordinatYPelatihan"
              placeholder="Koordinat Y (Langitude)"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row> -->
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
        <input type="file" id="file" ref="file" @input="handleFile('file')" />
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="">
        <img style="width: 100px" :src="src0" />
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Status Pelatihan">
        <b-form-select
          :options="status"
          v-model="dataInput.statusPelatihan"
        ></b-form-select>
      </b-form-group>

      <b-form-group
        label-cols="6"
        label-cols-lg="3"
        label="Keterangan Pembatalan"
        v-if="dataInput.statusPelatihan == 'Dibatalkan'"
      >
        <b-form-input v-model="dataInput.keteranganPembatalan"></b-form-input>
      </b-form-group>

      <b-row class="mt-5 mb-3">
        <b-col md="12">
          <h2 class="text-left">
            <strong
              ><span style="font-weight: 400">Persyaratan</span> Peserta</strong
            >
          </h2>
        </b-col>
      </b-row>

      <b-form-group label-cols="6" label-cols-lg="3" label="Syarat Umum">
        <quill-editor v-model="dataInput.syaratUmum"></quill-editor>
      </b-form-group>

      <b-form-group label-cols="6" label-cols-lg="3" label="Syarat Khusus">
        <quill-editor v-model="dataInput.syaratKhusus"></quill-editor>
      </b-form-group>

      <hr class="mb-0" />
      <b-button
        variant="primary"
        class="mt-3"
        v-if="dataInput.id"
        @click="update"
        >Update</b-button
      >
      <b-button
        variant="primary"
        class="mt-3"
        v-else
        @click="simpanBelumDimulai"
        >Simpan</b-button
      >
    </b-modal>

    <!-- modal peserta -->
    <b-modal id="modal-peserta" size="xl" title="Data Peserta" hide-footer>
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
                  <a
                    :href="ipbackend + item.item.filePendukung"
                    target="_blank"
                  >
                    <b-button
                      variant="success"
                      size="sm"
                      v-b-tooltip.hover
                      title="Download"
                      ><b-icon icon="info-circle"></b-icon>
                    </b-button>
                  </a>
                </template>
              </b-table>
            </b-col>
          </b-row>

          <b-row>
            <b-col md="5" offset-md="7">
              <b-pagination
                v-model="dataPeserta.length"
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

    <!-- modal dokumentasi -->
    <b-modal
      id="modal-dokumentasi"
      size="lg"
      title="Upload Dokumentasi Pelatihan"
      hide-footer
    >
      <b-row>
        <b-col md="12">
          <b-form>
            <b-form-group
              label-cols="6"
              label-cols-lg="3"
              label="Upload Foto Kegiatan"
            >
              <b-form-file
                id="file1"
                ref="file1"
                @input="handleFile('file1')"
              />
            </b-form-group>

            <b-form-group label-cols="6" label-cols-lg="3">
              <b-img
                :src="src1"
                style="height: 100px; width: 100px"
                alt=""
              ></b-img>
            </b-form-group>

            <b-form-group
              label-cols="6"
              label-cols-lg="3"
              label="Upload Foto Kegiatan"
            >
              <b-form-file
                type="file"
                id="file2"
                ref="file2"
                @input="handleFile('file2')"
              />
            </b-form-group>

            <b-form-group label-cols="6" label-cols-lg="3">
              <b-img
                :src="src2"
                style="height: 100px; width: 100px"
                alt=""
              ></b-img>
            </b-form-group>

            <b-form-group
              label-cols="6"
              label-cols-lg="3"
              label="Upload Foto Kegiatan"
            >
              <b-form-file
                type="file"
                id="file3"
                ref="file3"
                @input="handleFile('file3')"
              />
            </b-form-group>
            <b-form-group label-cols="6" label-cols-lg="3">
              <b-img
                :src="src3"
                style="height: 100px; width: 100px"
                alt=""
              ></b-img>
            </b-form-group>

            <b-form-group
              label-cols="6"
              label-cols-lg="3"
              label="Upload Foto Kegiatan"
            >
              <b-form-file
                type="file"
                id="file4"
                ref="file4"
                @input="handleFile('file4')"
              />
            </b-form-group>
            <b-form-group label-cols="6" label-cols-lg="3">
              <b-img
                :src="src4"
                style="height: 100px; width: 100px"
                alt=""
              ></b-img>
            </b-form-group>

            <b-form-group
              label-cols="6"
              label-cols-lg="3"
              label="Upload Foto Kegiatan"
            >
              <b-form-file
                type="file"
                id="file5"
                ref="file5"
                @input="handleFile('file5')"
              />
            </b-form-group>
            <b-form-group label-cols="6" label-cols-lg="3">
              <b-img
                :src="src5"
                style="height: 100px; width: 100px"
                alt=""
              ></b-img>
            </b-form-group>

            <b-form-group
              label-cols="6"
              label-cols-lg="3"
              label="Upload Foto Kegiatan"
            >
              <b-form-file
                type="file"
                id="file6"
                ref="file6"
                @input="handleFile('file6')"
              />
            </b-form-group>
            <b-form-group label-cols="6" label-cols-lg="3">
              <b-img
                :src="src6"
                style="height: 100px; width: 100px"
                alt=""
              ></b-img>
            </b-form-group>
          </b-form>
        </b-col>

        <b-col md="12">
          <hr />
        </b-col>
        <b-col md="12">
          <b-button variant="primary" @click="uploadDok()">Simpan</b-button>
        </b-col>
      </b-row>
    </b-modal>

    <!-- modal tahun -->
    <b-modal
      id="modal-sm"
      size="sm"
      title="Cetak Rencana Pelatihan Berdasarkan Tahun"
      hide-footer
    >
      <b-row>
        <b-col md="12" lg="12">
          <b-form-group label="Pilih Tahun">
            <b-form-select
              :options="tahunnya"
              v-model="tahunPilih"
            ></b-form-select>
          </b-form-group>

          <b-button variant="primary" @click="cetakrencana">Cetak</b-button>
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

import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import axios from "axios";
import ipbackend from "../../ipbackend";

import moment from "moment";
moment.locale("id");
Vue.use(VueQuillEditor /* { default global options } */);
export default {
  name: "DashboardOpd",
  data() {
    return {
      user: {},
      ipbackend,
      dataPeserta: [],
      moment,
      tahunPilih: 2021,
      dataInput: {
        judulPelatihan: "",
        kejuruan: "",
        subKejuruan: "",
        statusPelatihan: "",
        deskripsiPelatihan: "",
        jenjang: "",
        tanggalMulaiPelatihan: "",
        tanggalSelesaiPelatihan: "",
        kuotaPeserta: 0,
        sumberDanaPelatihan: "",
        SumberDanaLainnya: "",
        lokasi: "",
        koordinatXPelatihan: "",
        koordinatYPelatihan: "",
        kecamatanPelatihan: "",
        kelurahanPelatihan: "",
        syaratUmum: "",
        syaratKhusus: "",
        anggaranPelatihan: "",
        pelatihanPelatihan: "",
        CPPelatihan: "",
        keteranganPembatalan: "",
      },
      time1: null,
      time2: null,
      kategori: [{ value: null, text: "-- Pilih --" }],

      subkategori: [{ value: null, text: "-- Pilih --" }],

      kecamatan: [{ value: null, text: "-- Pilih --" }],

      kelurahan: [{ value: null, text: "-- Pilih --" }],

      tahunnya: [{ value: null, text: "-- Pilih Tahun --" }],

      jenjang: [
        { value: "Dasar", text: "Dasar" },
        { value: "Lanjutan", text: "Lanjutan" },
      ],

      status: [
        { value: "Publish", text: "Publish" },
        { value: "Unpublish", text: "Unpublish" },
        { value: "Dibatalkan", text: "Dibatalkan" },
      ],

      sumberDana: [
        { value: "APBN", text: "APBN" },
        { value: "APBD", text: "APBD" },
        { value: "Dakel", text: "Dakel" },
        { value: "DAK", text: "DAK" },
        { value: "DBHCHT", text: "DBHCHT" },
        { value: "Sumber Lainnya", text: "Sumber Lainnya" },
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
          key: "kuotanya",
          label: "Kuota / Sisa Kuota Peserta",
          sortable: true,
          class: "text-left table-width-2",
        },
        {
          key: "statusnya",
          label: "Status Pelatihan",
          sortable: true,
          class: "text-left",
        },
        {
          key: "actions",
          label: "Actions",
          class: "table-width-3 text-center",
        },
      ],
      items: [],

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
          key: "kuotanya",
          label: "Kuota / Peserta Terdaftar",
          sortable: true,
          class: "text-left table-width-2",
        },
        {
          key: "statusnya",
          label: "Status Pelatihan",
          sortable: true,
          class: "text-left",
        },
        {
          key: "actions",
          label: "Actions",
          class: "table-width-3 text-center",
        },
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
          key: "kuotanya",
          label: "Kuota / Peserta Terdaftar",
          sortable: true,
          class: "text-left table-width-2",
        },
        {
          key: "statusnya",
          label: "Status Pelatihan",
          sortable: true,
          class: "text-left",
        },
        {
          key: "actions",
          label: "Actions",
          class: "table-width text-center",
        },
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
      perPage: 10,
      pageOptions: [10, 50, 100],
      filter: null,
      filter2: null,
      filter3: null,
      filter4: null,
      filterOn: [],
      file: "",
      file1: "",
      file2: "",
      file3: "",
      file4: "",
      file5: "",
      file6: "",
      src0: "",
      src1: "",
      src2: "",
      src3: "",
      src4: "",
      src5: "",
      src6: "",
      uploadId: "",
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
  watch: {
    dataInput: {
      async handler(val, oldVal) {
        let vm = this;
        //  console.log(val.kecamatanPelatihan, oldVal.kecamatanPelatihan);
        // do stuff
        //  console.log(val);
        if (val.kecamatanPelatihan) {
          let kelurahan = await axios.get(
            ipbackend +
              "kelurahan/listKelByKecamatan/" +
              vm.dataInput.kecamatanPelatihan,
            {
              headers: {
                token: vm.user.token,
              },
            }
          );
          vm.kelurahan = [];
          vm.kelurahan.push({ value: null, text: "-- Pilih --" });
          kelurahan.data.data.forEach((item, idx) => {
            vm.kelurahan.push({
              value: item.namaKelurahan,
              text: item.namaKelurahan,
            });
          });
        }

        if (val.kejuruan) {
          let subkategori = await axios.get(
            ipbackend +
              "kejuruan/listSubKejuruanByKejuruan/" +
              vm.dataInput.kejuruan,
            {
              headers: {
                token: vm.user.token,
              },
            }
          );
          vm.subkategori = [];
          vm.subkategori.push({ value: null, text: "-- Pilih --" });
          subkategori.data.data.forEach((item, idx) => {
            vm.subkategori.push({
              value: item.namaSubKejuruan,
              text: item.namaSubKejuruan,
            });
          });
        }
      },
      deep: true,
    },
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
    let ret = localStorage.getItem("user");

    for (let i = 2015; i < 2051; i++) {
      vm.tahunnya.push({ value: i, text: i });
    }
    vm.user = JSON.parse(ret);
    this.totalRows = this.items.length;

    let kecamatan = await axios.get(ipbackend + "kelurahan/listKecamatan/", {
      headers: {
        token: vm.user.token,
      },
    });

    // console.log(kecamatan.data.data);
    vm.kecamatan = [];
    vm.kecamatan.push({ value: null, text: "-- Pilih --" });
    kecamatan.data.data.forEach((item, idx) => {
      vm.kecamatan.push({
        value: item.namaKecamatan,
        text: item.namaKecamatan,
      });
    });

    let kelurahan = await axios.get(ipbackend + "kelurahan/list/", {
      headers: {
        token: vm.user.token,
      },
    });
    vm.kelurahan = [];
    vm.kelurahan.push({ value: null, text: "-- Pilih --" });
    kelurahan.data.data.forEach((item, idx) => {
      vm.kelurahan.push({
        value: item.namaKelurahan,
        text: item.namaKelurahan,
      });
    });

    this.loadBelumDimulai();
    this.ambilKejuruan();
    this.loadSedangDimulai();
    this.loadTerlaksana();
  },
  methods: {
    cetakrencana() {
      console.log(this.user, "nomor 90 oke");
      window.open(
        ipbackend +
          "pelatihan/cetakopd/" +
          this.user.namaOPD.OPDId +
          "/" +
          this.tahunPilih,
        "_blank"
      );
    },
    handleFile(x) {
      if (x == "file1") {
        this.file1 = this.$refs.file1.files[0];
        this.src1 = URL.createObjectURL(this.file1);
      } else if (x == "file2") {
        this.file2 = this.$refs.file2.files[0];
        this.src2 = URL.createObjectURL(this.file2);
      } else if (x == "file3") {
        this.file3 = this.$refs.file3.files[0];
        this.src3 = URL.createObjectURL(this.file3);
      } else if (x == "file4") {
        this.file4 = this.$refs.file4.files[0];
        this.src4 = URL.createObjectURL(this.file4);
      } else if (x == "file5") {
        this.file5 = this.$refs.file5.files[0];
        this.src5 = URL.createObjectURL(this.file5);
      } else if (x == "file6") {
        this.file6 = this.$refs.file6.files[0];
        this.src6 = URL.createObjectURL(this.file6);
      } else if (x == "file") {
        this.file = this.$refs.file.files[0];
        this.src0 = URL.createObjectURL(this.file);
      }
    },
    uploadDok() {
      let vm = this;
      let formData = new FormData();
      formData.append("file1", vm.file1);
      formData.append("file2", vm.file2);
      formData.append("file3", vm.file3);
      formData.append("file4", vm.file4);
      formData.append("file5", vm.file5);
      formData.append("file6", vm.file6);
      formData.append("pelatihanId", vm.uploadId);
      axios
        .post(ipbackend + "pelatihan/changeFotoPelatihan", formData, {
          headers: {
            token: vm.user.token,
          },
        })
        .then((res) => {
          // console.log(res);
          this.uploadId = "";
          this.$bvModal.hide("modal-dokumentasi");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async edit(id) {
      let vm = this;
      let itemnya = await axios.get(
        ipbackend + "pelatihan/listpelatihanbyid/" + id,
        {
          headers: {
            token: vm.user.token,
          },
        }
      );
      // console.log(itemnya);
      this.dataInput = itemnya.data.data[0];
      this.src0 = ipbackend + this.dataInput.bannerPelatihan;
    },
    async hapus(id) {
      let vm = this;
      let itemnya = await axios.post(
        ipbackend + "pelatihan/delete/",
        { id },
        {
          headers: {
            token: vm.user.token,
          },
        }
      );
      alert(itemnya.data.message);
      this.loadBelumDimulai();
      this.loadSedangDimulai();
      this.loadTerlaksana();
    },
    async listUser(id) {
      let vm = this;
      this.dataPeserta = [];
      let itemnya = await axios.get(
        ipbackend + "poolpelatihan/listPesertaByPelatihan/" + id,
        {
          headers: {
            token: vm.user.token,
          },
        }
      );
      // console.log("listUser");
      itemnya.data.data.forEach((item, idx) => {
        this.dataPeserta.push({
          nonya: idx + 1,
          niknya: item.NIK,
          namanya: item.nama,
          kelaminnya: item.jenisKelamin,
          lahirnya: moment(item.tanggalLahir).format("LL"),
          alamatnya: item.alamat,
          kecamatannya: item.kecamatan,
          kelurahannya: item.kelurahan,
          lokasinya: item.lokasi,
          hpnya: item.noHp,
          emailnya: item.email,
          filePendukung: item.file,
          keteranganFile: item.keteranganFile,
          koordinatXPelatihan: item.koordinatXPelatihan,
          koordinatYPelatihan: item.koordinatYPelatihan,
        });
      });
      // console.log("anjay");
    },
    async loadBelumDimulai() {
      let vm = this;
      let itemnya = await axios.get(
        ipbackend + "pelatihan/pelatihanBelumDimulai/",
        {
          headers: {
            token: vm.user.token,
          },
        }
      );
      this.items = [];
      let x = itemnya.data.data;
      this.totalRows = x.length;
      itemnya.data.data.forEach((item, idx) => {
        this.items.push({
          id: item.id,
          nonya: idx + 1,
          judulnya: item.judulPelatihan,
          kategorinya: item.kejuruan,
          tglnya: item.tanggalMulaiPelatihan,
          tglSel: item.tanggalSelesaiPelatihan,
          jmlPeserta: item.jmlPeserta,
          kuotanya: item.kuotaPeserta,
          statusnya: item.statusPelatihan,
          koordinatXPelatihan: item.koordinatXPelatihan,
          koordinatYPelatihan: item.koordinatYPelatihan,
        });
      });
      console.log(itemnya, "ini itemnya");
    },
    async loadSedangDimulai() {
      let vm = this;
      let itemnya = await axios.get(
        ipbackend + "pelatihan/pelatihanSedangBerlangsung/",
        {
          headers: {
            token: vm.user.token,
          },
        }
      );
      this.items2 = [];
      let x = itemnya.data.data;
      this.totalRows = x.length;
      itemnya.data.data.forEach((item, idx) => {
        this.items2.push({
          id: item.id,
          nonya: idx + 1,
          judulnya: item.judulPelatihan,
          kategorinya: item.kejuruan,
          tglnya: item.tanggalMulaiPelatihan,
          tglSel: item.tanggalSelesaiPelatihan,
          jmlPeserta: item.jmlPeserta,
          kuotanya: item.kuotaPeserta,
          statusnya: item.statusPelatihan,
          koordinatXPelatihan: item.koordinatXPelatihan,
          koordinatYPelatihan: item.koordinatYPelatihan,
        });
      });
      // console.log(itemnya);
    },
    async loadTerlaksana() {
      let vm = this;
      let itemnya = await axios.get(
        ipbackend + "pelatihan/pelatihanSudahSelesai/",
        {
          headers: {
            token: vm.user.token,
          },
        }
      );
      this.items3 = [];
      let x = itemnya.data.data;
      this.totalRows = x.length;
      itemnya.data.data.forEach((item, idx) => {
        this.items3.push({
          id: item.id,
          nonya: idx + 1,
          judulnya: item.judulPelatihan,
          kategorinya: item.kejuruan,
          tglnya: item.tanggalMulaiPelatihan,
          tglSel: item.tanggalSelesaiPelatihan,
          jmlPeserta: item.jmlPeserta,
          kuotanya: item.kuotaPeserta,
          statusnya: item.statusPelatihan,
          koordinatXPelatihan: item.koordinatXPelatihan,
          koordinatYPelatihan: item.koordinatYPelatihan,
        });
      });
      // console.log(itemnya);
    },
    async ambilKejuruan() {
      let vm = this;
      let kategori = await axios.get(ipbackend + "kejuruan/listKejuruan");
      // console.log(kejuruan);
      // this.kejuruan = kejuruan.data.data
      this.kategori = [];
      this.kategori.push({ value: null, text: "-- Pilih --" });
      kategori.data.data.forEach((item, idx) => {
        vm.kategori.push({ value: item.namaKejuruan, text: item.namaKejuruan });
      });
      // console.log(vm.kejuruan);
    },
    async simpanBelumDimulai() {
      // judulPelatihan,kejuruan,subKejuruan,statusPelatihan,deskripsiPelatihan,jenjang,tanggalMulaiPelatihan,tanggalSelesaiPelatihan,kuotaPeserta,lokasi,kecamatanPelatihan,kelurahanPelatihan,syaratUmum,syaratKhusus
      var formData = new FormData();
      formData.append("judulPelatihan", this.dataInput.judulPelatihan);
      formData.append("kejuruan", this.dataInput.kejuruan);
      formData.append("subKejuruan", this.dataInput.subKejuruan);
      formData.append("statusPelatihan", this.dataInput.statusPelatihan);
      formData.append("deskripsiPelatihan", this.dataInput.deskripsiPelatihan);
      formData.append("jenjang", this.dataInput.jenjang);
      formData.append("anggaranPelatihan", this.dataInput.anggaranPelatihan);
      formData.append("CPPelatihan", this.dataInput.CPPelatihan);
      formData.append("sasaranPelatihan", this.dataInput.sasaranPelatihan);
      formData.append(
        "tanggalMulaiPelatihan",
        moment(this.dataInput.tanggalMulaiPelatihan).format("YYYY/MM/DD")
      );
      formData.append(
        "tanggalSelesaiPelatihan",
        moment(this.dataInput.tanggalSelesaiPelatihan).format("YYYY/MM/DD")
      );
      formData.append("kuotaPeserta", this.dataInput.kuotaPeserta);
      formData.append("lokasi", this.dataInput.lokasi);
      formData.append("kecamatanPelatihan", this.dataInput.kecamatanPelatihan);
      formData.append("kelurahanPelatihan", this.dataInput.kelurahanPelatihan);
      formData.append("syaratUmum", this.dataInput.syaratUmum);
      formData.append("syaratKhusus", this.dataInput.syaratKhusus);
      if (vm.dataInput.sumberDanaPelatihan == "lain") {
        formData.append(
          "sumberDanaPelatihan",
          this.dataInput.SumberDanaLainnya
        );
      } else {
        formData.append(
          "sumberDanaPelatihan",
          this.dataInput.sumberDanaPelatihan
        );
      }

      formData.append(
        "keteranganPembatalan",
        this.dataInput.keteranganPembatalan
      );
      if (this.$refs.file.files.length) {
        formData.append("file1", this.$refs.file.files[0]);
      }
      let vm = this;

      let hasil = await axios({
        method: "post",
        url: ipbackend + "pelatihan/register/",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          token: vm.user.token,
        },
      });
      alert(hasil.data.message);
      this.loadBelumDimulai();
      this.loadSedangDimulai();
      this.loadTerlaksana();
      this.dataInput = {
        judulPelatihan: "",
        kejuruan: "",
        subKejuruan: "",
        statusPelatihan: "",
        deskripsiPelatihan: "",
        jenjang: "",
        tanggalMulaiPelatihan: "",
        tanggalSelesaiPelatihan: "",
        kuotaPeserta: 0,
        sumberDanaPelatihan: "",
        SumberDanaLainnya: "",
        koordinatXPelatihan: "",
        koordinatYPelatihan: "",
        kecamatanPelatihan: "",
        kelurahanPelatihan: "",
        lokasi: this.user.namaOPD.urlOPD,
        syaratUmum: "",
        syaratKhusus: "",
        CPPelatihan: "",
        keteranganPembatalan: "",
      };
      this.$bvModal.hide("modal-lg");
    },

    async update() {
      console.log(this.dataInput.keteranganPembatalan);
      // judulPelatihan,kejuruan,subKejuruan,statusPelatihan,deskripsiPelatihan,jenjang,tanggalMulaiPelatihan,tanggalSelesaiPelatihan,kuotaPeserta,lokasi,kecamatanPelatihan,kelurahanPelatihan,syaratUmum,syaratKhusus
      var formData = new FormData();
      formData.append("id", this.dataInput.id);
      formData.append("judulPelatihan", this.dataInput.judulPelatihan);
      formData.append("kejuruan", this.dataInput.kejuruan);
      formData.append("subKejuruan", this.dataInput.subKejuruan);
      formData.append("statusPelatihan", this.dataInput.statusPelatihan);
      formData.append("deskripsiPelatihan", this.dataInput.deskripsiPelatihan);
      formData.append("jenjang", this.dataInput.jenjang);
      formData.append("anggaranPelatihan", this.dataInput.anggaranPelatihan);
      formData.append("CPPelatihan", this.dataInput.CPPelatihan);
      formData.append("sasaranPelatihan", this.dataInput.sasaranPelatihan);
      formData.append(
        "tanggalMulaiPelatihan",
        moment(this.dataInput.tanggalMulaiPelatihan).format("YYYY/MM/DD")
      );
      formData.append(
        "tanggalSelesaiPelatihan",
        moment(this.dataInput.tanggalSelesaiPelatihan).format("YYYY/MM/DD")
      );
      formData.append("kuotaPeserta", this.dataInput.kuotaPeserta);
      formData.append("lokasi", this.dataInput.lokasi);
      formData.append("kecamatanPelatihan", this.dataInput.kecamatanPelatihan);
      formData.append("kelurahanPelatihan", this.dataInput.kelurahanPelatihan);
      formData.append("syaratUmum", this.dataInput.syaratUmum);
      formData.append("syaratKhusus", this.dataInput.syaratKhusus);
      if (vm.dataInput.sumberDanaPelatihan == "lain") {
        formData.append(
          "sumberDanaPelatihan",
          this.dataInput.SumberDanaLainnya
        );
      } else {
        formData.append(
          "sumberDanaPelatihan",
          this.dataInput.sumberDanaPelatihan
        );
      }
      formData.append(
        "keteranganPembatalan",
        this.dataInput.keteranganPembatalan
      );
      if (this.$refs.file.files.length) {
        formData.append("file1", this.$refs.file.files[0]);
      }
      let vm = this;

      let hasil = await axios({
        method: "post",
        url: ipbackend + "pelatihan/update/",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          token: vm.user.token,
        },
      });
      alert(hasil.data.message);
      this.loadBelumDimulai();
      this.loadSedangDimulai();
      this.loadTerlaksana();
      this.dataInput = {
        judulPelatihan: "",
        kejuruan: "",
        subKejuruan: "",
        statusPelatihan: "",
        deskripsiPelatihan: "",
        jenjang: "",
        tanggalMulaiPelatihan: "",
        tanggalSelesaiPelatihan: "",
        kuotaPeserta: 0,
        sumberDanaPelatihan: "",
        lokasi: this.user.namaOPD.urlOPD,
        koordinatXPelatihan: "",
        koordinatYPelatihan: "",
        kecamatanPelatihan: "",
        kelurahanPelatihan: "",
        syaratUmum: "",
        syaratKhusus: "",
        keteranganPembatalan: "",
      };
      this.$bvModal.hide("modal-lg");
    },
    reset() {
      // console.log(this.user.namaOPD.urlOPD, 'ihir')
      this.dataInput = {
        judulPelatihan: "",
        kejuruan: "",
        subKejuruan: "",
        statusPelatihan: "",
        deskripsiPelatihan: "",
        jenjang: "",
        tanggalMulaiPelatihan: "",
        tanggalSelesaiPelatihan: "",
        kuotaPeserta: 0,
        sumberDanaPelatihan: "",
        lokasi: this.user.namaOPD.urlOPD,
        koordinatXPelatihan: "",
        koordinatYPelatihan: "",
        kecamatanPelatihan: "",
        kelurahanPelatihan: "",
        syaratUmum: "",
        syaratKhusus: "",
      };
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    // go(x) {
    //   console.log(x)
    //   window.open('https://www.google.com/maps/@-7.020909,110.3827747', '_blank')
    //   window.open(x.item.lokasinya, "_blank");
    // },
  },
};
</script>

<style scoped>
#dashboard_opd .section-one {
  padding: 60px 0;
}
</style>
