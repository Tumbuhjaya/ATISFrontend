<template>
  <div id="dashboard_masyarakat">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="6">
            <h2><span style="font-weight: 400">Selamat Datang,</span></h2>
            <h4>
              <strong>{{ dataUser.nama }}</strong>
            </h4>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="12">
            <hr />
          </b-col>
        </b-row>

        <b-row class="mt-4">
          <b-col md="8" offset-md="2">
            <div class="box-submenu">
              <div
                style="
                  width: 260px;
                  display: flex;
                  justify-content: center;
                  flex-direction: column;
                  align-items: center;
                  position: relative;
                "
                v-b-modal.modal-lg
              >
                <img
                  src="../../assets/set_profil.png"
                  alt=""
                  style="height: 260px"
                />
                <h4 class="mt-3 text-center"><strong>Profil</strong></h4>

                <!-- <div
                  style="
                    width: 50px;
                    height: 50px;
                    background-color: red;
                    position: absolute;
                    top: -25px;
                    right: -25px;
                    display: flex;
                    border-radius: 100%;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <img
                    src="../../assets/attention.png"
                    alt=""
                    style="width: 50px"
                  />
                </div> -->
              </div>

              <div
                style="
                  width: 260px;
                  display: flex;
                  justify-content: center;
                  flex-direction: column;
                  align-items: center;
                "
              >
                <router-link
                  :to="'/riwayat_pelatihan'"
                  style="text-decoration: none; color: #000"
                >
                  <img
                    src="../../assets/history.png"
                    alt=""
                    style="height: 260px"
                  />
                  <h4 class="mt-3 text-center">
                    <strong>Riwayat Pelatihan</strong>
                  </h4>
                </router-link>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!-- modal -->
    <b-modal id="modal-lg" size="lg" title="Data Profil" hide-footer>
      <b-row>
        <b-col md="12">
          <b-tabs align="center">
            <b-tab title="Identitas" active>
              <b-card-text class="mt-3">
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
                        disabled
                        v-model="dataUser.NIK"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group label-cols="6" label-cols-lg="3" label="Nama">
                      <b-form-input v-model="dataUser.nama"></b-form-input>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Jenis Kelamin"
                    >
                      <b-form-select
                        :options="jenisKelamin"
                        v-model="dataUser.jenisKelamin"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Tanggal Lahir"
                    >
                      <date-picker
                        v-model="dataUser.tanggalLahir"
                        valueType="format"
                        style="width: 100%"
                      ></date-picker>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Alamat"
                    >
                      <b-form-input v-model="dataUser.alamat"></b-form-input>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Kecamatan"
                    >
                      <b-form-select
                        :options="kecamatan"
                        v-model="dataUser.kecamatan"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Kelurahan"
                    >
                      <b-form-select
                        :options="kelurahan"
                        v-model="dataUser.kelurahan"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="No. Hp"
                    >
                      <b-form-input v-model="dataUser.noHp"></b-form-input>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Email"
                    >
                      <b-form-input v-model="dataUser.email"></b-form-input>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Foto Diri"
                    >
                      <input type="file" id="file" ref="file" />
                    </b-form-group>

                    <b-form-group label-cols="6" label-cols-lg="3">
                      <img
                        style="width: 100px"
                        :src="ipbackend + '/' + dataUser.foto"
                      />
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Foto KTP"
                    >
                      <input type="file" id="file" ref="file" />
                    </b-form-group>

                    <b-form-group label-cols="6" label-cols-lg="3">
                      <img
                        style="width: 100px"
                        :src="ipbackend + '/' + dataUser.foto"
                      />
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
                        v-model="dataUser.penerimaBantuanPemerintah"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Pendidikan Terakhir"
                    >
                      <b-form-select
                        :options="pendidikan"
                        v-model="dataUser.pendidikanTerakhir"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Status Dalam Keluarga"
                    >
                      <b-form-select
                        :options="keluarga"
                        v-model="dataUser.statusDalamKeluarga"
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
                        v-model="dataUser.kepemilikanUMKM"
                      ></b-form-select>
                    </b-form-group>
                    <div
                      v-if="
                        dataUser.kepemilikanUMKM == 'Ya, Sebagai Pemilik' ||
                        dataUser.kepemilikanUMKM == 'Ya, Sebagai Karyawan'
                      "
                    >
                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Nama UMKM"
                      >
                        <b-form-input
                          v-model="dataUser.namaUMKM"
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
                          v-model="dataUser.tanggalMulaiUsaha"
                        ></date-picker>
                      </b-form-group>

                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Nomor Surat Ijin Usaha (NIB)"
                      >
                        <b-form-input v-model="dataUser.NIB"></b-form-input>
                      </b-form-group>

                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Nomor Surat Ijin Usaha (IUMK)"
                      >
                        <b-form-input v-model="dataUser.IUMK"></b-form-input>
                      </b-form-group>

                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Nomor Surat Ijin Usaha (PIRT)"
                      >
                        <b-form-input v-model="dataUser.PIRT"></b-form-input>
                      </b-form-group>

                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Nomor Surat Ijin Usaha (Lainnya)"
                      >
                        <b-form-input v-model="dataUser.lainnya"></b-form-input>
                      </b-form-group>

                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Alamat Usaha"
                      >
                        <b-form-input
                          v-model="dataUser.alamatUMKM"
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Kecamatan"
                      >
                        <b-form-select
                          :options="kecamatan"
                          v-model="dataUser.kecamatanUMKM"
                        ></b-form-select>
                      </b-form-group>

                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Kelurahan"
                      >
                        <b-form-select
                          :options="kelurahan"
                          v-model="dataUser.kelurahanUMKM"
                        ></b-form-select>
                      </b-form-group>

                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Kode Pos"
                      >
                        <b-form-input
                          v-model="dataUser.kodePosUMKM"
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Nama Pemilik"
                      >
                        <b-form-input
                          v-model="dataUser.namaPemilikUMKM"
                        ></b-form-input>
                      </b-form-group>

                      <b-form-group
                        label-cols="6"
                        label-cols-lg="3"
                        label="Telepon/No. Hp"
                      >
                        <b-form-input
                          v-model="dataUser.noHpUMKM"
                        ></b-form-input>
                      </b-form-group>
                    </div>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-tab>

            <b-tab title="Riwayat Pelatihan">
              <b-card-text>
                <b-row class="mt-3">
                  <b-col md="12">
                    <b-table-simple small bordered class="mb-0">
                      <b-thead>
                        <b-tr>
                          <b-th>Pelatihan</b-th>
                          <b-th>Tahun</b-th>
                          <b-th>Penyelenggara</b-th>
                          <b-th>No. Sertifikat</b-th>
                        </b-tr>
                      </b-thead>
                      <b-tbody>
                        <b-tr>
                          <b-td
                            ><b-form-input
                              v-model="inputRiwayatPelatihan.namaPelatihanLain"
                            ></b-form-input
                          ></b-td>
                          <b-td
                            ><b-form-input
                              v-model="inputRiwayatPelatihan.tahunPelatihanLain"
                            ></b-form-input
                          ></b-td>
                          <b-td
                            ><b-form-input
                              v-model="
                                inputRiwayatPelatihan.penyelenggaraPelatihanLain
                              "
                            ></b-form-input
                          ></b-td>

                          <b-td>
                            <b-form-input
                              v-model="inputRiwayatPelatihan.noSertifikat"
                            ></b-form-input
                          ></b-td>
                        </b-tr>
                      </b-tbody>
                    </b-table-simple>

                    <b-button
                      variant="warning"
                      class="mt-3"
                      @click="simpanRiwayatPelatihan"
                      >Tambah Riwayat Pelatihan</b-button
                    >
                  </b-col>
                </b-row>

                <b-row>
                  <b-col md="12">
                    <hr />
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col md="12">
                    <b-table-simple small bordered class="mb-0">
                      <b-thead>
                        <b-tr>
                          <b-th>Pelatihan</b-th>
                          <b-th>Tahun</b-th>
                          <b-th>No. Sertifikat</b-th>
                          <b-th style="width: 80px">Opsi</b-th>
                        </b-tr>
                      </b-thead>
                      <b-tbody>
                        <b-tr
                          v-for="(item, idx) in riwayatPelatihan"
                          :key="idx"
                        >
                          <b-td>{{ item.namaPelatihanLain }}</b-td>
                          <b-td>{{ item.tahunPelatihanLain }}</b-td>

                          <b-td>{{ item.noSertifikat }}</b-td>
                          <b-td
                            ><b-button
                              variant="danger"
                              size="sm"
                              @click="hapusPelatihan(item.id)"
                            >
                              Hapus
                            </b-button></b-td
                          >
                        </b-tr>
                      </b-tbody>
                    </b-table-simple>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-tab>

            <b-tab title="Riwayat Pekerjaan">
              <b-card-text class="mt-3">
                <b-row>
                  <b-col md="12">
                    <b-table-simple small bordered class="mb-0">
                      <b-thead>
                        <b-tr>
                          <b-th>Pekerjaan</b-th>
                          <b-th>Perusahaan</b-th>
                          <b-th>Posisi/Jabatan</b-th>
                          <b-th>Tahun Mulai</b-th>
                          <b-th>Tahun Berakhir</b-th>
                        </b-tr>
                      </b-thead>
                      <b-tbody>
                        <b-tr>
                          <b-td
                            ><b-form-input
                              v-model="
                                inputRiwayatPekerjaan.namaRiwayatPekerjaan
                              "
                            ></b-form-input
                          ></b-td>
                          <b-td
                            ><b-form-input
                              v-model="
                                inputRiwayatPekerjaan.perusahaanRiwayatPekerjaan
                              "
                            ></b-form-input
                          ></b-td>
                          <b-td>
                            <b-form-input
                              v-model="
                                inputRiwayatPekerjaan.posisiRiwayatPekerjaan
                              "
                            ></b-form-input
                          ></b-td>
                          <b-td>
                            <b-form-input
                              v-model="
                                inputRiwayatPekerjaan.tahunAwalRiwayatPekerjaan
                              "
                            ></b-form-input
                          ></b-td>
                          <b-td>
                            <b-form-input
                              v-model="
                                inputRiwayatPekerjaan.tahunAkhirRiwayatPekerjaan
                              "
                            ></b-form-input
                          ></b-td>
                        </b-tr>
                      </b-tbody>
                    </b-table-simple>

                    <b-button
                      variant="warning"
                      class="mt-3"
                      @click="simpanRiwayatPekerjaan"
                      >Tambah Riwayat Pekerjaan</b-button
                    >
                  </b-col>
                </b-row>

                <b-row>
                  <b-col md="12">
                    <hr />
                  </b-col>
                </b-row>
                <b-row>
                  <b-col md="12">
                    <b-table-simple small bordered class="mb-0">
                      <b-thead>
                        <b-tr>
                          <b-th>Pekerjaan</b-th>
                          <b-th>Perusahaan</b-th>
                          <b-th>Posisi/Jabatan</b-th>
                          <b-th>Tahun Mulai</b-th>
                          <b-th>Tahun Berakhir</b-th>
                          <b-th style="width: 80px">Opsi</b-th>
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
                          <b-td
                            ><b-button
                              variant="danger"
                              size="sm"
                              @click="hapusPekerjaan(item.id)"
                            >
                              Hapus
                            </b-button></b-td
                          >
                        </b-tr>
                      </b-tbody>
                    </b-table-simple>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-tab>

            <b-tab title="Simpan Data">
              <b-card-text class="mt-3">
                <p>Apakah anda yakin akan menyimpan data ini ?</p>
                <b-button variant="primary" @click="simpan">Simpan</b-button>
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
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import axios from "axios";
import ipbackend from "../../ipbackend";

// nama,jenisKelamin,tanggalLahir,alamat,kecamatan,kelurahan,noHp,email,penerimaBantuanPemerintah,pendidikanTerakhir,statusDalamKeluarga
export default {
  name: "DashboardOpd",
  data() {
    return {
      user: {},
      inputRiwayatPelatihan: {
        namaPelatihanLain: "",
        tahunPelatihanLain: "",
        noSertifikat: "",
        penyelenggaraPelatihanLain: "",
      },
      inputRiwayatPekerjaan: {
        namaRiwayatPekerjaan: "",
        perusahaanRiwayatPekerjaan: "",
        posisiRiwayatPekerjaan: "",
        tahunAwalRiwayatPekerjaan: "",
        tahunAkhirRiwayatPekerjaan: "",
      },
      ipbackend,
      riwayatPelatihan: [],
      riwayatPekerjaan: [],

      dataUser: {
        nama: "",
        jenisKelamin: "",
        tanggalLahir: "",
        alamat: "",
        kecamatan: "",
        kelurahan: "",
        noHp: "",
        email: "",
        penerimaBantuanPemerintah: "",
        pendidikanTerakhir: "",
        statusDalamKeluarga: "",
        foto: "",
        kepemilikanUMKM: "",
        namaPemilikUMKM: "",
        NIB: "",
        PIRT: "",
        tanggalMulaiUsaha: "",
        IUMK: "",
        alamatUMKM: "",
        kecamatanUMKM: "",
        kelurahanUMKM: "",
        kodePosUMKM: "",
        noHpUMKM: "",
        lainnya: "",
        namaUMKM: "",
      },
      tanggalLahir: null,
      jenisKelamin: [
        { value: null, text: "-- Pilih --" },
        { value: "Laki-laki", text: "Laki-laki" },
        { value: "Perempuan", text: "Perempuan" },
      ],

      kecamatan: [{ value: null, text: "-- Pilih --" }],

      kelurahan: [{ value: null, text: "-- Pilih --" }],

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
    };
  },
  components: {
    ThisIsHeader,
    ThisIsFooter,
    DatePicker,
  },
  watch: {
    dataUser: {
      async handler(val) {
        let vm = this;
        // do stuff
        //  console.log(val);
        let kelurahan = await axios.get(
          ipbackend + "kelurahan/listKelByKecamatan/" + vm.dataUser.kecamatan,
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
      },
      deep: true,
    },
  },
  async mounted() {
    let vm = this;

    let ret = localStorage.getItem("user");
    vm.user = JSON.parse(ret);

    let kecamatan = await axios.get(ipbackend + "kelurahan/listKecamatan/", {
      headers: {
        token: vm.user.token,
      },
    });

    console.log(kecamatan.data.data);
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

    this.loadData();
    this.loadRiwayatPelatihan();
    this.loadRiwayatPekerjaan();
  },
  methods: {
    // onChangeFileUpload(){

    //     this.dataUser.foto = this.$refs.file.files[0];

    //   },
    async simpanRiwayatPelatihan() {
      let vm = this;
      //  namaPelatihanLain,tahunPelatihanLain,noSertifikat
      await axios.post(
        ipbackend + "pelatihanlain/register/",
        this.inputRiwayatPelatihan,
        {
          headers: {
            token: vm.user.token,
          },
        }
      );
      this.inputRiwayatPelatihan = {
        namaPelatihanLain: "",
        tahunPelatihanLain: "",
        noSertifikat: "",
        penyelenggaraPelatihanLain: "",
      };
      this.loadRiwayatPelatihan();
    },

    async simpanRiwayatPekerjaan() {
      let vm = this;
      //  namaPelatihanLain,tahunPelatihanLain,noSertifikat
      await axios.post(
        ipbackend + "riwayatPekerjaan/register/",
        this.inputRiwayatPekerjaan,
        {
          headers: {
            token: vm.user.token,
          },
        }
      );
      this.inputRiwayatPekerjaan = {
        namaRiwayatPekerjaan: "",
        perusahaanRiwayatPekerjaan: "",
        posisiRiwayatPekerjaan: "",
        tahunAwalRiwayatPekerjaan: "",
        tahunAkhirRiwayatPekerjaan: "",
      };
      this.loadRiwayatPekerjaan();
    },

    async hapusPelatihan(id) {
      let vm = this;
      //  namaPelatihanLain,tahunPelatihanLain,noSertifikat
      await axios.post(
        ipbackend + "pelatihanlain/delete/",
        { id },
        {
          headers: {
            token: vm.user.token,
          },
        }
      );

      this.loadRiwayatPelatihan();
    },
    async hapusPekerjaan(id) {
      let vm = this;
      //  namaPelatihanLain,tahunPelatihanLain,noSertifikat
      await axios.post(
        ipbackend + "riwayatPekerjaan/delete/",
        { id },
        {
          headers: {
            token: vm.user.token,
          },
        }
      );

      this.loadRiwayatPekerjaan();
    },
    async loadRiwayatPelatihan() {
      let vm = this;
      let pelatihan = await axios.get(
        ipbackend + "pelatihanlain/listByUsersLogin/",
        {
          headers: {
            token: vm.user.token,
          },
        }
      );
      this.riwayatPelatihan = pelatihan.data.data;
    },

    async loadRiwayatPekerjaan() {
      let vm = this;
      let pekerjaan = await axios.get(
        ipbackend + "riwayatPekerjaan/listByUsersLogin/",
        {
          headers: {
            token: vm.user.token,
          },
        }
      );
      this.riwayatPekerjaan = pekerjaan.data.data;
    },
    async loadData() {
      let vm = this;
      let dataUser = await axios.get(
        ipbackend + "users/listById/" + vm.user.id,
        {
          headers: {
            token: vm.user.token,
          },
        }
      );
      this.dataUser = dataUser.data.data[0];
      // console.log(dataUser.data.data[0]);
    },
    simpan() {
      console.log(this.dataUser);
      let vm = this;

      var formData = new FormData();
      formData.append("nama", vm.dataUser.nama);
      formData.append("alamat", vm.dataUser.alamat);
      formData.append("email", vm.dataUser.email);
      formData.append("jenisKelamin", vm.dataUser.jenisKelamin);
      formData.append("kecamatan", vm.dataUser.kecamatan);
      formData.append("kelurahan", vm.dataUser.kelurahan);
      // formData.append("NIK", vm.dataUser.NIK);
      formData.append("noHp", vm.dataUser.noHp);
      formData.append("pendidikanTerakhir", vm.dataUser.pendidikanTerakhir);
      formData.append(
        "penerimaBantuanPemerintah",
        vm.dataUser.penerimaBantuanPemerintah
      );
      formData.append("statusDalamKeluarga", vm.dataUser.statusDalamKeluarga);
      formData.append("tanggalLahir", vm.dataUser.tanggalLahir);
      formData.append("kepemilikanUMKM", vm.dataUser.kepemilikanUMKM);
      formData.append("namaPemilikUMKM", vm.dataUser.namaPemilikUMKM);
      formData.append("namaUMKM", vm.dataUser.namaUMKM);
      formData.append("tanggalMulaiUsaha", vm.dataUser.tanggalMulaiUsaha);
      formData.append("NIB", vm.dataUser.NIB);
      formData.append("PIRT", vm.dataUser.PIRT);
      formData.append("IUMK", vm.dataUser.IUMK);
      formData.append("lainnya", vm.dataUser.lainnya);
      formData.append("alamatUMKM", vm.dataUser.alamatUMKM);
      formData.append("kecamatanUMKM", vm.dataUser.kecamatanUMKM);
      formData.append("kelurahanUMKM", vm.dataUser.kelurahanUMKM);
      formData.append("kodePosUMKM", vm.dataUser.kodePosUMKM);
      formData.append("noHpUMKM", vm.dataUser.noHpUMKM);
      if (this.$refs.file.files[0]) {
        formData.append("file1", this.$refs.file.files[0]);
      }

      axios({
        method: "post",
        url: ipbackend + "users/update",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          token: vm.user.token,
        },
      }).then((data) => {
        console.log(data);
        this.loadData();
      });
    },
  },
};
</script>

<style scoped>
#dashboard_masyarakat .section-one {
  padding: 60px 0;
}

#dashboard_masyarakat .section-one .box-submenu {
  display: flex;
  justify-content: space-evenly;
  /* background-color: red; */
}
</style>
