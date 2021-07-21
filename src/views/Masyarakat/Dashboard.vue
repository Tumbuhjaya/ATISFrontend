<template>
  <div id="dashboard_masyarakat">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="6">
            <h2><span style="font-weight: 400">Selamat Datang,</span></h2>
            <h4><strong>Username Login</strong></h4>
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
                <img src="https://via.placeholder.com/260" alt="" />
                <h3 class="mt-3 text-center"><strong>Profil</strong></h3>

                <div
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
                </div>
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
                <img src="https://via.placeholder.com/260" alt="" />
                <h3 class="mt-3"><strong>Pelatihan</strong></h3>
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
                      <b-form-input v-model="dataUser.NIK"></b-form-input>
                    </b-form-group>

                    <b-form-group label-cols="6" label-cols-lg="3" label="Nama">
                      <b-form-input v-model="dataUser.nama"></b-form-input>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Jenis Kelamin"
                    >
                      <b-form-select :options="jenisKelamin" v-model="dataUser.jenisKelamin"></b-form-select>
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
                      <b-form-select :options="kecamatan" v-model="dataUser.kecamatan"></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Kelurahan"
                    >
                      <b-form-select :options="kelurahan" v-model="dataUser.kelurahan"></b-form-select>
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

                    <b-row>
                      <b-col md="12" class="mb-3"
                        ><h4>
                          <span style="font-weight: 400">Data</span
                          >&nbsp;<strong>Sosial Ekonomi</strong>
                        </h4></b-col
                      >
                    </b-row>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Pekerjaan"
                    >
                      <b-form-input v-model="dataUser.pekerjaan"></b-form-input>
                    </b-form-group>

                    <!-- <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Pendapatan"
                    >
                      <b-form-select :options="pendapatan" v-model="dataUser.pendapatan"></b-form-select>
                    </b-form-group> -->

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Penerima Bantuan Pemerintah"
                    >
                      <b-form-select :options="bantuan" v-model="dataUser.penerimaBantuanPemerintah"></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Pendidikan Terakhir"
                    >
                      <b-form-select :options="pendidikan" v-model="dataUser.pendidikanTerakhir"></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label-cols="6"
                      label-cols-lg="3"
                      label="Status Dalam Keluarga"
                    >
                      <b-form-select :options="keluarga" v-model="dataUser.statusDalamKeluarga"></b-form-select>
                    </b-form-group>
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
                          <b-td><b-form-input></b-form-input></b-td>
                          <b-td><b-form-input></b-form-input></b-td>
                          <b-td> <b-form-input></b-form-input></b-td>
                          <b-td> <b-form-input></b-form-input></b-td>
                        </b-tr>
                      </b-tbody>
                    </b-table-simple>

                    <b-button variant="warning" class="mt-3"
                      >Tambah Riwayat Pelatihan</b-button
                    >
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
                          <b-td><b-form-input></b-form-input></b-td>
                          <b-td><b-form-input></b-form-input></b-td>
                          <b-td> <b-form-input></b-form-input></b-td>
                          <b-td> <b-form-input></b-form-input></b-td>
                          <b-td> <b-form-input></b-form-input></b-td>
                        </b-tr>
                      </b-tbody>
                    </b-table-simple>

                    <b-button variant="warning" class="mt-3"
                      >Tambah Riwayat Pekerjaan</b-button
                    >
                  </b-col>
                </b-row>
              </b-card-text>
            </b-tab>

            <b-tab title="Simpan Data">
              <b-card-text class="mt-3">
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
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import axios from "axios";
import ipbackend from '../../ipbackend'
// nama,jenisKelamin,tanggalLahir,alamat,kecamatan,kelurahan,noHp,email,penerimaBantuanPemerintah,pendidikanTerakhir,statusDalamKeluarga
export default {
  name: "DashboardOpd",
  data() {
    return {
       dataUser:{
          nama:'',
          jenisKelamin:'',
          tanggalLahir:'',
          alamat:'',
          kecamatan:'',
          kelurahan:'',
          noHp:'',
          email:'',
          penerimaBantuanPemerintah:'',
          pendidikanTerakhir:'',
          statusDalamKeluarga:''
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
 async mounted(){
        let ret =      localStorage.getItem('user');
   ret = JSON.parse(ret)
   let dataUser=   await axios.get(ipbackend+ 'users/listById/'+ret.id, {
        headers:{

          token: ret.token
        }
      })
    this.dataUser = dataUser.data.data[0];
      console.log(dataUser.data.data[0]);
  },
   methods:{
      login(){
          console.log(this.data);
          let vm = this
          axios.post(ipbackend+ 'users/login', this.data).then(data=>{
            //   console.log(data);
               const dataUser = JSON.stringify(data.data);
              localStorage.setItem('user', dataUser);
              if(data.data.message=='sukses'){
                   if(data.data.role=='Masyarakat'){
                         vm.$router.push({ path: '/dashboard_masyarakat' })
                   }else{
                         vm.$router.push({ path: '/dashboard_opd' })
                   }    
                
              }
          })
      }
  }
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
