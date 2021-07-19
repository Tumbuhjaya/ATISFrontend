<template>
  <div id="profil_masyarakat">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="text-center"><strong>Edit Profil</strong></h2>
          </b-col>

          <b-col md="4" offset-md="4" class="mt-3">
                <div class="box-submenu">
                    <router-link
                        :to="'/dashboard_masyarakat'"
                        style="text-decoration:none"
                        ><h6 class="m-t-0 m-b-0">Dashboard</h6></router-link
                    >
                    <h6 class="m-t-0 m-b-0">|</h6>
                    <h6 class="m-t-0 m-b-0"><strong>Edit Data</strong></h6>
                </div>
          </b-col>
        </b-row>

        <b-row class="mt-4">
            <b-col md="12">
                <b-card no-body>
                  <b-tabs card align="center">
                    <b-tab title="Identitas" active>
                      <b-card-text>
                        <b-row>
                          <b-col md="12"><h4><span style="font-weight:400">Data</span> <strong>Identitas</strong></h4></b-col>
                        </b-row>

                        <b-row class="mt-3">
                          <b-col md="12">
                            <b-form-group label-cols="6" label-cols-lg="3" label="Nama">
                                <b-form-input></b-form-input>
                            </b-form-group>

                            <b-form-group label-cols="6" label-cols-lg="3" label="Jenis Kelamin">
                                <b-form-input></b-form-input>
                            </b-form-group>

                            <b-form-group label-cols="6" label-cols-lg="3" label="Tanggal Lahir">
                                <b-form-input></b-form-input>
                            </b-form-group>

                            <b-form-group label-cols="6" label-cols-lg="3" label="NIK">
                                <b-form-input></b-form-input>
                            </b-form-group>

                            <b-form-group label-cols="6" label-cols-lg="3" label="Alamat">
                                <b-form-input></b-form-input>
                            </b-form-group>

                            <b-form-group label-cols="6" label-cols-lg="3" label="Kecamatan">
                                <b-form-input></b-form-input>
                            </b-form-group>

                            <b-form-group label-cols="6" label-cols-lg="3" label="Kelurahan">
                                <b-form-input></b-form-input>
                            </b-form-group>

                            <b-form-group label-cols="6" label-cols-lg="3" label="No. Hp">
                                <b-form-input></b-form-input>
                            </b-form-group>

                            <b-form-group label-cols="6" label-cols-lg="3" label="Email">
                                <b-form-input></b-form-input>
                            </b-form-group>
                            
                            <b-row>
                                <b-col md="12" class="mb-3"><h4><span style="font-weight:400">Data</span> <strong>Sosial Ekonomi</strong></h4></b-col>
                            </b-row>

                            <b-form-group label-cols="6" label-cols-lg="3" label="Pekerjaan">
                                <b-form-input></b-form-input>
                            </b-form-group>

                            <b-form-group label-cols="6" label-cols-lg="3" label="Pendapatan">
                                <b-form-input></b-form-input>
                            </b-form-group>

                            <b-form-group label-cols="6" label-cols-lg="3" label="Penerima Bantuan Pemerintah">
                                <b-form-input></b-form-input>
                            </b-form-group>

                            <b-form-group label-cols="6" label-cols-lg="3" label="Pendidikan Terakhir">
                                <b-form-input></b-form-input>
                            </b-form-group>

                            <b-form-group label-cols="6" label-cols-lg="3" label="Status Dalam Keluarga">
                                <b-form-input></b-form-input>
                            </b-form-group>
                          </b-col>
                        </b-row>
                      </b-card-text>
                    </b-tab>

                    <b-tab title="Riwayat Pelatihan">
                      <b-card-text>
                        <b-row>
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

                            <b-button variant="primary" class="mt-3">Tambah Riwayat Pelatihan</b-button>
                          </b-col>
                        </b-row>
                      </b-card-text>
                    </b-tab>

                    <b-tab title="Riwayat Pekerjaan">
                      <b-card-text>
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
                                </b-tr>
                              </b-tbody>
                            </b-table-simple>

                            <b-button variant="primary" class="mt-3">Tambah Riwayat Pekerjaan</b-button>
                          </b-col>
                        </b-row>
                      </b-card-text>
                    </b-tab>

                    <b-tab title="Simpan Data">
                      <b-card-text>
                        <p>Apakah anda yakin akan menyimpan data ini ?</p>
                        <b-button variant="primary">Daftar</b-button>
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

export default {
  name: "ProfilMasyarakat",
  data(){
    return{
      
    }
  },
  components: {
    ThisIsHeader,
    ThisIsFooter,
  },
};
</script>

<style scoped>
#profil_masyarakat .section-one{
  padding:60px 0;
}

#profil_masyarakat .section-one .box-submenu {
  display: flex;
  justify-content: space-evenly;
  /* background-color: red; */
}
</style>
