<template>
  <div id="daftar_pelatihan">
    <ThisIsHeader></ThisIsHeader>
      <section class="section-one">
        <b-container>
            <b-row>
              <b-col md="12">
                <h2><span>Formulir</span> <strong>Pendaftaran Pelatihan</strong></h2>
                
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12">
                <hr>
              </b-col>
            </b-row>

            <b-row class="mt-4">
              <b-col md="12">
                <b-card no-body>
                  <b-tabs card align="center">
                    <b-tab title="Profil Peserta" active>
                      <b-card-text>
                        <b-row>
                          <b-col md="12"><h4><span style="font-weight:400">Data</span> <strong>Identitas</strong></h4></b-col>
                        </b-row>

                        <b-row class="mt-3">
                          <b-col md="12">
                            <b-table-simple small borderless class="mb-0">
                              <b-tbody>
                                <b-tr>
                                  <b-td style="width:180px">Nama</b-td>
                                  <b-td style="width:5px">:</b-td>
                                  <b-td>Danang</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Jenis Kelamin</b-td>
                                  <b-td>:</b-td>
                                  <b-td>Laki-Laki</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Tanggal Lahir</b-td>
                                  <b-td>:</b-td>
                                  <b-td>18 Mei 1992</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>NIK</b-td>
                                  <b-td>:</b-td>
                                  <b-td>3374131213123412</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Alamat</b-td>
                                  <b-td>:</b-td>
                                  <b-td>Jl. Sri Rejeki Dalam 6</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Kelurahan</b-td>
                                  <b-td>:</b-td>
                                  <b-td>Tingkir Lor</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Kecamatan</b-td>
                                  <b-td>:</b-td>
                                  <b-td>Tingkir</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>No. HP</b-td>
                                  <b-td>:</b-td>
                                  <b-td>12342343242</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Email</b-td>
                                  <b-td>:</b-td>
                                  <b-td>tes@gmail.com</b-td>
                                </b-tr>
                              </b-tbody>
                            </b-table-simple>
                          </b-col>
                        </b-row>

                        <b-row class="mt-5">
                          <b-col md="12"><h4><span style="font-weight:400">Data</span> <strong>Sosial Ekonomi</strong></h4></b-col>
                        </b-row>

                        <b-row class="mt-3">
                          <b-col md="12">
                            <b-table-simple small borderless class="mb-0">
                              <b-tbody>
                                <b-tr>
                                  <b-td style="width:180px">Pekerjaan</b-td>
                                  <b-td style="width:5px">:</b-td>
                                  <b-td>Karyawan Swasta</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Pendapatan</b-td>
                                  <b-td>:</b-td>
                                  <b-td>Rp 1.000.000,- s/d 3.000.000,-</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Penerima Bantuan Pemerintah</b-td>
                                  <b-td>:</b-td>
                                  <b-td>Ya</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Pendidikan Terakhir</b-td>
                                  <b-td>:</b-td>
                                  <b-td>SMA</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Status Dalam Keluarga</b-td>
                                  <b-td>:</b-td>
                                  <b-td>Ayah</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Kelurahan</b-td>
                                  <b-td>:</b-td>
                                  <b-td>Tingkir Lor</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Kecamatan</b-td>
                                  <b-td>:</b-td>
                                  <b-td>Tingkir</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>No. HP</b-td>
                                  <b-td>:</b-td>
                                  <b-td>12342343242</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Email</b-td>
                                  <b-td>:</b-td>
                                  <b-td>tes@gmail.com</b-td>
                                </b-tr>
                              </b-tbody>
                            </b-table-simple>
                          </b-col>
                        </b-row>

                        <b-row class="mt-5">
                          <b-col md="12"><h4><span style="font-weight:400">Data</span> <strong>Riwayat Pelatihan</strong></h4></b-col>
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
                                <b-tr>
                                  <b-td>Menjahit Baju Robek</b-td>
                                  <b-td>2021</b-td>
                                  <b-td>Dinas Sosial</b-td>
                                  <b-td>00/121/2021/01</b-td>
                                </b-tr>
                              </b-tbody>
                            </b-table-simple>
                          </b-col>
                        </b-row>

                        <b-row class="mt-5">
                          <b-col md="12"><h4><span style="font-weight:400">Data</span> <strong>Riwayat Pekerjaan</strong></h4></b-col>
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
                                <b-tr>
                                  <b-td>Penjual Ketoprak</b-td>
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

                    <b-tab title="Pelatihan">
                      <b-card-text>
                        <b-row>
                          <b-col md="12"><h4><span style="font-weight:400">Data</span> <strong>Sosial Ekonomi</strong></h4></b-col>
                        </b-row>
                        <b-row class="mt-3">
                          <b-col md="12">
                            <b-table-simple small borderless class="mb-0">
                              <b-tbody>
                                <b-tr>
                                  <b-td style="width:180px">Kategori</b-td>
                                  <b-td style="width:5px">:</b-td>
                                  <b-td>Menjahit</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Pelatihan</b-td>
                                  <b-td>:</b-td>
                                  <b-td>Menjahit baju yang bolong</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Tanggal Pelatihan</b-td>
                                  <b-td>:</b-td>
                                  <b-td>18 Juli 2021 s/d 25 Juli 2021</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Kuota Peserta</b-td>
                                  <b-td>:</b-td>
                                  <b-td>20 Peserta</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Lokasi</b-td>
                                  <b-td>:</b-td>
                                  <b-td>Jl. Sri Rejeki Dalam 6</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Penyelenggara</b-td>
                                  <b-td>:</b-td>
                                  <b-td>Dinas Sosial</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Jenjang Pelatihan</b-td>
                                  <b-td>:</b-td>
                                  <b-td>Dasar/Pemula</b-td>
                                </b-tr>
                              </b-tbody>
                            </b-table-simple>
                          </b-col>
                        </b-row>
                        
                        <b-row class="mt-5">
                          <b-col md="12"><h4><span style="font-weight:400">Data</span> <strong>Sosial Ekonomi</strong></h4></b-col>
                        </b-row>
                        <b-row class="mt-3">
                          <b-col md="12">
                            <b-table-simple small borderless class="mb-0">
                              <b-tbody>
                                <b-tr>
                                  <b-td style="width:180px">Usia Peserta</b-td>
                                  <b-td style="width:5px">:</b-td>
                                  <b-td>18 s/d 30 tahun</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Kemampuan Dasar</b-td>
                                  <b-td>:</b-td>
                                  <b-td>Tidak Ada</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Pengalaman Kerja</b-td>
                                  <b-td>:</b-td>
                                  <b-td>Tidak Ada</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Persyaratan Umum</b-td>
                                  <b-td>:</b-td>
                                  <b-td>Tidak Ada</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Persyaratan Khusus</b-td>
                                  <b-td>:</b-td>
                                  <b-td>TIdak Ada</b-td>
                                </b-tr>
                              </b-tbody>
                            </b-table-simple>
                          </b-col>
                        </b-row>
                      </b-card-text>
                    </b-tab>

                    <b-tab title="Data Pendukung">
                      <b-card-text>
                        <b-row>
                          <b-col md="12">
                            <p>Silahkan lengkapi data dukung sesuai dengan persyaratan pelatihan yang anda ikuti</p>
                          </b-col>
                          <b-col md="12">
                            <b-table-simple small bordered class="mb-0">
                              <b-thead>
                                <b-tr>
                                  <b-th>Keterangan</b-th>
                                  <b-th>Upload File</b-th>
                                  <b-th>Option</b-th>
                                </b-tr>
                              </b-thead>
                              <b-tbody>
                                <b-tr>
                                  <b-td>
                                    <b-form-input v-model="keteranganFile"></b-form-input>
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
                        <p>Apakah anda yakin akan menyimpan data ini ?</p>
                        <b-button variant="primary" @click="daftar">Daftar</b-button>
                      </b-card-text>
                    </b-tab>
                  </b-tabs>
                </b-card>
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
import ipbackend from '../../ipbackend';
import moment from 'moment';
 let ret =      localStorage.getItem('user');
   ret = JSON.parse(ret)
export default {
  name: 'DaftarPelatihan',
  components: {
      ThisIsHeader,
      ThisIsFooter
  },
   data(){
     return{
       pelatihan:[],
       ipbackend,
       moment,
       keteranganFile:'',
       file1: null
     }
   },

   methods:{
    async daftar(){
         var formData = new FormData();
      formData.append("keteranganFile", this.keteranganFile);
       formData.append("pelatihanId", this.$route.params.id);
        formData.append("file1", this.file1);
      let hasil =   await   axios({
        method: "post",
        url: ipbackend + 'poolpelatihan/register/',
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          token: ret.token,
        },
      })
      alert(hasil.data.message)
      console.log(hasil);
     }
   }
}
</script>

<style scoped>
#daftar_pelatihan .section-one{
  padding:60px 0;
}
</style>
