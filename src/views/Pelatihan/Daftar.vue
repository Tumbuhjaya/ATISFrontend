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
                                  <b-td>{{profil.nama}}</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Jenis Kelamin</b-td>
                                  <b-td>:</b-td>
                                  <b-td>{{profil.jenisKelamin}}</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Tanggal Lahir</b-td>
                                  <b-td>:</b-td>
                                  <b-td>{{moment(profil.tanggalLahir).format('LL')}}</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>NIK</b-td>
                                  <b-td>:</b-td>
                                  <b-td>{{profil.NIK}}</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Alamat</b-td>
                                  <b-td>:</b-td>
                                  <b-td>{{profil.alamat}}</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Kelurahan</b-td>
                                  <b-td>:</b-td>
                                  <b-td>{{profil.kelurahan}}</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Kecamatan</b-td>
                                  <b-td>:</b-td>
                                  <b-td>{{profil.kecamatan}}</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>No. HP</b-td>
                                  <b-td>:</b-td>
                                  <b-td>{{profil.noHp}}</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Email</b-td>
                                  <b-td>:</b-td>
                                  <b-td>{{profil.email}}</b-td>
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
                                  <b-td>Pendidikan Terakhir</b-td>
                                  <b-td>:</b-td>
                                  <b-td>{{profil.pendidikanTerakhir}}</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Status Dalam Keluarga</b-td>
                                  <b-td>:</b-td>
                                  <b-td>{{profil.statusDalamKeluarga}}</b-td>
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
                                 
                                  <b-th>No. Sertifikat</b-th>
                                </b-tr>
                              </b-thead>
                              <b-tbody>
                                <b-tr v-for="(item, idx) in pelatihanLain" :key="idx">
                                  <b-td>{{item.namaPelatihanLain}}</b-td>
                                  <b-td>{{item.tahunPelatihanLain}}</b-td>
                          
                                  <b-td>{{item.noSertifikat}}</b-td>
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
                                 <b-tr v-for="(item, idx) in riwayatPekerjaan" :key="idx">
                                 <b-td>{{item.namaRiwayatPekerjaan}}</b-td>
                                  <b-td>{{item.perusahaanRiwayatPekerjaan}}</b-td>
                                  <b-td>{{item.posisiRiwayatPekerjaan}}</b-td>
                                  <b-td>{{item.tahunAwalRiwayatPekerjaan}}</b-td>
                                  <b-td>{{item.tahunAkhirRiwayatPekerjaan}}</b-td>
                                </b-tr>
                              </b-tbody>
                            </b-table-simple>
                          </b-col>
                        </b-row>
                      </b-card-text>
                    </b-tab>

                    <b-tab title="Pelatihan">
                      <b-card-text>
                        <div v-for="(item, idx) in pelatihan" :key="idx">
                        <b-row>
                          <b-col md="12"><h4><span style="font-weight:400"></span> <strong>{{item.judulPelatihan}}</strong></h4></b-col>
                        </b-row>
                        <b-row class="mt-3">
                          <b-col md="12">
                            <b-table-simple small borderless class="mb-0">
                              <b-tbody>
                                <b-tr>
                                  <b-td style="width:180px">Kategori</b-td>
                                  <b-td style="width:5px">:</b-td>
                                  <b-td>{{item.kejuruan}}</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Pelatihan</b-td>
                                  <b-td>:</b-td>
                                  <b-td> <div class="ql-container">
                            <div class="ql-editor" v-html="item.deskripsiPelatihan">
                            </div>
                        </div></b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Tanggal Pelatihan</b-td>
                                  <b-td>:</b-td>
                                  <b-td>{{moment(item.tanggalMulaiPelatihan).format('LL')}} s/d {{moment(item.tanggalSelesaiPelatihan).format('LL')}}</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Kuota Peserta</b-td>
                                  <b-td>:</b-td>
                                  <b-td>{{item.kuota}} Peserta</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Lokasi</b-td>
                                  <b-td>:</b-td>
                                  <b-td>J{{item.lokasi}}</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Penyelenggara</b-td>
                                  <b-td>:</b-td>
                                  <b-td>{{item.namaOPD}}</b-td>
                                </b-tr>

                                <b-tr>
                                  <b-td>Jenjang Pelatihan</b-td>
                                  <b-td>:</b-td>
                                  <b-td>{{item.jenjang}}</b-td>
                                </b-tr>
                              </b-tbody>
                            </b-table-simple>
                          </b-col>
                        </b-row>
                         </div>
                      
                     
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
   moment.locale('id');
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
       file1: null,
       profil:[],
       pelatihanLain:[],
       riwayatPekerjaan:[]
     }
   },
  mounted(){
    this.loadProfil()
  },
   methods:{
     async loadProfil(){
         let profil=   await axios.get(ipbackend+ 'users/listById/'+ret.id, {
           headers:{
             token: ret.token
           }
         })
        //  console.log(profil.data.data[0],'-------');
          this.profil = profil.data.data[0]

            let pelatihanLain=   await axios.get(ipbackend+ 'pelatihanlain/listByUsersId/'+ret.id, {
           headers:{
             token: ret.token
           }
         })
         this.pelatihanLain = pelatihanLain.data.data;

                let riwayatPekerjaan=   await axios.get(ipbackend+ 'riwayatpekerjaan/listByUsersId/'+ret.id, {
           headers:{
             token: ret.token
           }
         })
         this.riwayatPekerjaan = riwayatPekerjaan.data.data;

           let pelatihan=   await axios.get(ipbackend+ 'pelatihan/listPelatihanByUsersId/'+ret.id, {
           headers:{
             token: ret.token
           }
         })
         this.pelatihan = pelatihan.data.data;
     },
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
      if(hasil.data.message=='sukses'){
        this.$router.push('/')
      }
      // console.log(hasil);
     }
   }
}
</script>

<style scoped>
#daftar_pelatihan .section-one{
  padding:60px 0;
}
</style>
