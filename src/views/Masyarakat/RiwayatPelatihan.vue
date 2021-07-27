<template>
  <div id="riwayat_pelatihan">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="text-center">
              <strong
                >Riwayat <span style="font-weight: 400">Pelatihan</span></strong
              >
            </h2>
          </b-col>
        </b-row>

        <b-row>
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
        </b-row>

        <b-row class="mt-5">
          <b-col md="12">
            <b-tabs content-class="mt-3" align="center">
            
              <b-tab title="Daftar Pelatihan">
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
                      <template #cell(actions)="item">
                        <b-button
                          variant="warning"
                          size="sm"
                          class="mr-3"
                          v-b-tooltip.hover
                          title="Monitoring Evaluasi"
                          v-b-modal.modal-monev
                          @click="detailPel(item.item.pelatihanId, item.item.userId)"
                          ><b-icon icon="file-ruled"></b-icon>
                          </b-button
                        >
                      </template>

                       <template #cell(status)="item">
                        <span v-if="item.item.status==0">Belum Diverifikasi</span>
                          <span v-if="item.item.status==1">Disetujui</span>
                            <span v-if="item.item.status==2">Syarat Belum Lengkap</span>
                              <span v-if="item.item.status==3">Ditolak</span>
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
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!-- modal -->
    <b-modal id="modal-detail" size="lg" title="Detail Pelatihan" hide-footer>
      <b-row>
        <b-col md="6">
          <img
            src="https://via.placeholder.com/360"
            alt=""
            style="width: 100%"
          />
        </b-col>
        <b-col md="6">
          <b-table-simple small borderless class="mb-0">
            <b-tbody>
              <b-tr>
                <b-td style="width: 140px">Kategori</b-td>
                <b-td style="width: 5px">:</b-td>
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
    </b-modal>

    <!-- modal 2-->
    <b-modal id="modal-monev" size="lg" title="Monitoring Evaluasi" hide-footer>
       <b-form-group
        label-cols="4"
        label-cols-lg="8"
        label="Keterangan"
      >
      {{detail.keterangan}}
      </b-form-group>

           <b-form-group
        label-cols="4"
        label-cols-lg="8"
        label="Keterangan File"
      >
      <a :href="ipbackend+'/'+detail.file" target="_blank" v-if="detail.file">[DOWNLOAD]</a>
      <b-form-input v-model="detail.keteranganFile"></b-form-input>

      </b-form-group>

             <b-form-group
        label-cols="4"
        label-cols-lg="8"
        label="File"
      >
      <b-form-file refs='file' v-model="fileUpload"></b-form-file>

      </b-form-group>


      <b-form-group
        label-cols="4"
        label-cols-lg="8"
        label="Apakah anda mendapatkan pekerjaan yang sesuai pelatihan?"
      >
        <b-form-select :options="usaha_sendiri" v-model="detail.kesesuaianDenganPekerjaan"></b-form-select>
      </b-form-group>

      

     
<b-form-group
        label-cols="4"
        label-cols-lg="8"
        label="Apakah Pendapatan anda bertambah setelah mengikuti pelatihan?"
      >
        <b-form-select :options="usaha_sendiri" v-model="detail.perubahanPendapatan"></b-form-select>
      </b-form-group>
      <b-form-group
        label-cols="4"
        label-cols-lg="8"
        label="Berapa pendapatan Anda saat ini dalam sebulan?"
      >
        <b-form-select :options="pendapatan" v-model="detail.gajiSetelahPelatihan"></b-form-select>
      </b-form-group>

      <hr class="mb-0" />
      <b-button variant="primary" class="mt-3" @click="update">Simpan</b-button>
    </b-modal>
    <ThisIsFooter></ThisIsFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import ThisIsHeader from "../../components/ThisIsHeader";
import ThisIsFooter from "../../components/ThisIsFooter";
import axios from "axios";
import ipbackend from '../../ipbackend'
import moment from 'moment';

export default {
  name: "RiwayatPelatihan",
  data() {
    return {
      fileUpload:'',
      user:{},
       pelatihan:[],
        detail:{},
       ipbackend,
       moment,
      tambah_terampil: [
        { value: "Ya", text: "Ya" },
        { value: "Tidak", text: "Tidak" },
      ],
      usaha_sendiri: [
        { value: "Ya", text: "Ya" },
        { value: "Tidak", text: "Tidak" },
      ],
      perubahan: [
        { value: "Meningkat", text: "Meningkat" },
        { value: "Menurun", text: "Menurun" },
        { value: "Tetap", text: "Tetap" },
      ],
      pendapatan: [
        { value: "< 3.000.000", text: "< 3.000.000" },
        { value: "3.000.000 s/d 5.000.000", text: "3.000.000 s/d 5.000.000" },
        { value: "5.000.000 s/d 7.000.000", text: "5.000.000 s/d 7.000.000" },
        { value: "> 7.000.000", text: "> 7.000.000" },
      ],
      
    

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
          key: "lokasinya",
          label: "Lokasi",
          sortable: true,
          class: "text-left",
        },
         {
          key: "statusnya",
          label: "Status",
          sortable: true,
          class: "text-left",
        },
        { key: "actions", label: "Actions", class: "text-center" },
      ],
      items2: [
        {
          nonya: 1,
          judulnya: "dul",
          kategorinya: "kat",
          tglnya: "tgl",
          lokasinya: "lok",
        },
      ],

      totalRows: 1,
      currentPage: 1,
      perPage: 50,
      pageOptions: [50, 100, { value: 100, text: "Tampilkan Banyak" }],
      filter: null,
      filter2: null,
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
     let ret =      localStorage.getItem('user');
   this.user = JSON.parse(ret)
    // Set the initial number of items
    this.totalRows = this.items2.length;
    this.ambilPelatihan();
  },
  methods: {
    async detailPel(pelatihanId, userId){
      // console.log(item);
           let pelatihan=   await axios.get(ipbackend+ 'poolpelatihan/listByPelatihanIdUserId/'+pelatihanId+'/'+userId, {
         headers:{
           token: this.user.token
         }
       })
      //  console.log(pelatihan);
      this.detail = pelatihan.data.data[0]
    },

      async update(){
      // console.log(item);
      let vm = this;
           var formData = new FormData();
 
       formData.append("keteranganFile", vm.detail.keteranganFile);
        formData.append("kesesuaianDenganPekerjaan", vm.detail.kesesuaianDenganPekerjaan);
         formData.append("perubahanPendapatan", vm.detail.perubahanPendapatan);
           formData.append("gajiSetelahPelatihan", vm.detail.gajiSetelahPelatihan);

             formData.append("id", vm.detail.poolPelatihanId);
          if(vm.fileUpload){
                formData.append("file1", vm.fileUpload);
          }
         
      axios({
        method: "post",
        url: ipbackend + "poolpelatihan/update",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          token: vm.user.token,
        },
      }).then(async data=>{
              console.log(data);
              //  this.loadData();
               await axios.post(ipbackend+ 'poolpelatihan/changeStatus/',{id: vm.detail.poolPelatihanId, status: 0}, {
         headers:{
           token: this.user.token
         }
       })
              alert(data.data.message)
          }).catch(err=>{
                 alert(err)
            
          })
      
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
     async  ambilPelatihan(){

       let pelatihan=   await axios.get(ipbackend+ 'pelatihan/listPelatihanByUsersLogin/', {
         headers:{
           token: this.user.token
         }
       })
      console.log(pelatihan);
    // this.pelatihan = pelatihan.data.data
      this.items2 = [];
    
      pelatihan.data.data.forEach((item, idx)=>{
        this.items2.push({ 
           id : item.id, 
          nonya : idx+1, 
        judulnya : item.judulPelatihan,
         kategorinya : item.kejuruan, 
         tglnya : moment(item.tanggalMulaiPelatihan).format('LL'), 
         lokasinya : item.lokasi,
          statusnya :   item.status,
                    poolPelatihanId :   item.poolPelatihanId,
                    pelatihanId:item.pelatihanId,
                    userId: item.userId
          })
      })
  }
  },
};
</script>

<style scoped>
#riwayat_pelatihan .section-one {
  padding: 60px 0;
}

#riwayat_pelatihan .section-one .box-submenu {
  display: flex;
  justify-content: space-evenly;
  /* background-color: red; */
}
</style>
