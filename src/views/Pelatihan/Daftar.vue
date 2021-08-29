<template>
  <div id="daftar_pelatihan">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="text-center">
              <span>Formulir</span> <strong>Pendaftaran Pelatihan</strong>
            </h2>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col md="12">
            <b-tabs align="center">
              <b-tab title="Profil Peserta" active>
                <b-card-text>
                  <b-row class="mt-3">
                    <b-col md="6">
                      <b-row>
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
                    </b-col>
                    <b-col md="6">
                      <b-row>
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
                                <b-td style="width: 180px"
                                  >Memiliki Usaha ?</b-td
                                >
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
                                <b-td>{{profil.IMUK}}</b-td>
                              </b-tr>

                              <b-tr>
                                <b-td>Nomor Ijin Usaha (PIRT)</b-td>
                                <b-td>:</b-td>
                                <b-td>{{profil.PIRT}}</b-td>
                              </b-tr>

                              <b-tr>
                                <b-td>Nomor Ijin Usaha (Lainnya)</b-td>
                                <b-td>:</b-td>
                                <b-td>-</b-td>
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
                                <b-td>{{profil.KelurahanUMKM}}</b-td>
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
                  </b-row>

                  <b-row class="mt-5">
                    <b-col md="12"
                      ><h4>
                        <strong
                          ><span style="font-weight: 400">Data</span> Riwayat
                          Pelatihan SIMPEL</strong
                        >
                      </h4></b-col
                    >
                  </b-row>

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
                                moment(item.tanggalSelesaiPelatihan).format(
                                  "LL"
                                )
                              }}</b-td
                            >
                            <b-td>{{ item.namaOPD }}</b-td>
                            <b-td>{{ item.jenjang }}</b-td>
                          </b-tr>
                        </b-tbody>
                      </b-table-simple>
                    </b-col>
                  </b-row>

                  <b-row class="mt-5">
                    <b-col md="12"
                      ><h4>
                        <strong
                          ><span style="font-weight: 400">Data</span> Riwayat
                          Pelatihan Lainnya</strong
                        >
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
                            <b-th>Penyelenggara</b-th>

                            <b-th>No. Sertifikat</b-th>
                          </b-tr>
                        </b-thead>
                        <b-tbody>
                          <b-tr v-for="(item, idx) in pelatihanLain" :key="idx">
                            <b-td>{{ item.namaPelatihanLain }}</b-td>
                            <b-td>{{ item.tahunPelatihanLain }}</b-td>
                            <b-td>{{ item.PenyelenggaraPelatihanLain}}</b-td>

                            <b-td>{{ item.noSertifikat }}</b-td>
                          </b-tr>
                        </b-tbody>
                      </b-table-simple>
                    </b-col>
                  </b-row>

                  <b-row class="mt-5">
                    <b-col md="12"
                      ><h4>
                        <strong
                          ><span style="font-weight: 400">Data</span> Riwayat
                          Pekerjaan</strong
                        >
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

              <b-tab title="Pelatihan Yang Akan Diikuti ">
                <b-card-text>
                  <div>
                    <b-row class="mt-3">
                      <b-col md="12">
                        <b-table-simple small borderless class="mb-0">
                          <b-tbody>
                            <b-tr>
                              <b-td style="width: 180px">Judul</b-td>
                              <b-td style="width: 5px">:</b-td>
                              <b-td>{{ pelatihanDipilih.judulPelatihan }}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Kategori</b-td>
                              <b-td>:</b-td>
                              <b-td>{{ pelatihanDipilih.kejuruan }}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Tanggal Pelatihan</b-td>
                              <b-td>:</b-td>
                              <b-td
                                >{{
                                  moment(
                                    pelatihanDipilih.tanggalMulaiPelatihan
                                  ).format("LL")
                                }}
                                s/d
                                {{
                                  moment(
                                    pelatihanDipilih.tanggalSelesaiPelatihan
                                  ).format("LL")
                                }}</b-td
                              >
                            </b-tr>

                            <b-tr>
                              <b-td>Kuota Peserta</b-td>
                              <b-td>:</b-td>
                              <b-td>{{ pelatihanDipilih.kuotaPeserta }}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Lokasi</b-td>
                              <b-td>:</b-td>
                              <b-td>{{ pelatihanDipilih.lokasi }}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Penyelenggara</b-td>
                              <b-td>:</b-td>
                              <b-td>{{ pelatihanDipilih.namaOPD }}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Jenjang Pelatihan</b-td>
                              <b-td>:</b-td>
                              <b-td>{{ pelatihanDipilih.jenjang }}</b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Syarat Umum</b-td>
                              <b-td>:</b-td>
                              <b-td>
                                <div class="ql-container">
                                  <div
                                    class="ql-editor"
                                    v-html="pelatihanDipilih.syaratUmum"
                                  ></div>
                                </div>
                              </b-td>
                            </b-tr>

                            <b-tr>
                              <b-td>Syarat Khusus</b-td>
                              <b-td>:</b-td>
                              <b-td>
                                <div class="ql-container">
                                  <div
                                    class="ql-editor"
                                    v-html="pelatihanDipilih.syaratUmum"
                                  ></div>
                                </div>
                              </b-td>
                            </b-tr>
                          </b-tbody>
                        </b-table-simple>
                      </b-col>
                    </b-row>
                  </div>
                </b-card-text>
              </b-tab>

              <b-tab title="Dokumen Persyaratan">
                <b-card-text>
                  <b-row class="mt-3">
                    <b-col md="12">
                      <h6>
                        Silahkan upload dokumen persyaratan pelatihan yang anda
                        ikuti
                      </h6>
                      <h6 style="font-size: 12px; font-weight: bold">
                        <i
                          >* Apabila dokumen persyaratan yang akan anda upload
                          lebih dari satu file, silahkan gabungkan file-file
                          tersebut kedalam bentuk .pdf/.zip
                        </i>
                      </h6>
                    </b-col>
                    <b-col md="12" class="mt-3">
                      <b-table-simple small bordered class="mb-0">
                        <b-thead>
                          <b-tr>
                            <b-th>Keterangan</b-th>
                            <b-th>Upload Dokumen Persyaratan</b-th>
                          </b-tr>
                        </b-thead>
                        <b-tbody>
                          <b-tr>
                            <b-td>
                              <b-form-input
                                v-model="keteranganFile"
                                placeholder="Contoh : (FC Ijazah, FC KTP, FC Sertifikat)"
                              ></b-form-input>
                            </b-td>
                            <b-td>
                              <b-form-file v-model="file1"></b-form-file>
                            </b-td>
                          </b-tr>
                        </b-tbody>
                      </b-table-simple>
                    </b-col>
                  </b-row>
                </b-card-text>
              </b-tab>

              <b-tab title="Simpan Data">
                <b-card-text>
                  <b-row class="mt-3">
                    <b-col md="12">
                      <p>Apakah anda yakin akan menyimpan data ini ?</p>
                      <b-button variant="primary" @click="daftar"
                        >Simpan</b-button
                      >
                    </b-col>
                  </b-row>
                </b-card-text>
              </b-tab>
            </b-tabs>
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
import "quill/dist/quill.core.css";

import axios from "axios";
import ipbackend from "../../ipbackend";
import moment from "moment";
let ret = localStorage.getItem("user");
ret = JSON.parse(ret);
moment.locale("id");
export default {
  name: "DaftarPelatihan",
  components: {
    ThisIsHeader,
    ThisIsFooter,
  },
  data() {
    return {
      pelatihanDipilih: {},
      pelatihan: [],
      ipbackend,
      moment,
      keteranganFile: "",
      file1: null,
      profil: [],
      pelatihanLain: [],
      riwayatPekerjaan: [],
    };
  },
  mounted() {
    this.loadProfil();
  },
  methods: {
    async loadProfil() {
      let vm = this;
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
      // console.log(pelatihanLain)

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

      let pelatihanDipilih = await axios.get(
        ipbackend + "pelatihan/listPelatihanById/" + vm.$route.params.id,
        {
          headers: {
            token: ret.token,
          },
        }
      );
      this.pelatihanDipilih = pelatihanDipilih.data.data[0];
      console.log(this.pelatihanDipilih, 'dipilih')
    },
    async daftar() {
      var formData = new FormData();
      formData.append("keteranganFile", this.keteranganFile);
      formData.append("pelatihanId", this.$route.params.id);
      formData.append("file1", this.file1);
      let hasil = await axios({
        method: "post",
        url: ipbackend + "poolpelatihan/register/",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          token: ret.token,
        },
      });
      alert(hasil.data.message);
      if (hasil.data.message == "sukses") {
        this.$router.push("/");
      }
      // console.log(hasil);
    },
  },
};
</script>

<style scoped>
#daftar_pelatihan .section-one {
  padding: 60px 0;
}
</style>
