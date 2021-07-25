<template>
  <div id="detail_pelatihan">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
        <b-container>
            <b-row>
              <b-col md="12">
                <h5>{{pelatihan.kejuruan}}</h5>
                <h2><strong>{{pelatihan.judulPelatihan}}</strong></h2>
              </b-col>
            </b-row>

            <b-row class="mt-3">
              <b-col md="12">
                  <img :src="ipbackend+pelatihan.bannerPelatihan" alt="">
              </b-col>
            </b-row>

            <b-row class="mt-5">
                <b-col md="12">
                    <h2><span style="font-weight:400">Deskripsi</span> <strong>Pelatihan</strong></h2>
                </b-col>

                <b-col md="12" class="mt-3">
                    <div class="ql-container">
                            <div class="ql-editor" v-html="pelatihan.deskripsiPelatihan">
                            </div>
                        </div>
             
                </b-col>
            </b-row>
            <b-row class="mt-5">
                <b-col md="12">
                    <h2><span style="font-weight:400">Informasi</span> <strong>Pelatihan</strong></h2>
                </b-col>
                <b-col md="12">
                    <hr>
                </b-col>
                <b-col md="6">
                    <b-row>
                        <b-col md="12">
                            <h4><span style="font-weight:400">Tanggal</span> <strong>Pelatihan</strong></h4>
                        </b-col>    

                        <b-col md="12" class="mt-3">
                            <h6>{{moment(pelatihan.tanggalMulaiPelatihan).format('LL')}} s/d {{moment(pelatihan.tanggalSelesaiPelatihan).format('LL')}}</h6>
                        </b-col>
                    </b-row>

                    <b-row class="mt-4">
                        <b-col md="12">
                            <h4><span style="font-weight:400">Kouta</span> <strong>Peserta</strong></h4>
                        </b-col>    

                        <b-col md="12" class="mt-3">
                            <h6>{{pelatihan.kuotaPeserta}} Peserta</h6>
                        </b-col>
                    </b-row>

                    <b-row class="mt-4">
                        <b-col md="12">
                            <h4><span style="font-weight:400">Lokasi</span> <strong>Pelatihan</strong></h4>
                        </b-col>    

                        <b-col md="12" class="mt-2">
                            <h6>{{pelatihan.lokasi}}</h6>
                        </b-col>
                    </b-row>
                    
                </b-col>

                <b-col md="6">
                    <b-row>
                        <b-col md="12">
                            <h4><span style="font-weight:400">Instansi</span> <strong>Penyelenggara</strong></h4>
                        </b-col>    

                        <b-col md="12" class="mt-3">
                            <h6>{{pelatihan.namaOPD}}</h6>
                        </b-col>
                    </b-row>

                    <b-row class="mt-4">
                        <b-col md="12">
                            <h4><span style="font-weight:400">Jenjang</span> <strong>Pelatihan</strong></h4>
                        </b-col>    

                        <b-col md="12" class="mt-2">
                            <h6>{{pelatihan.jenjang}}</h6>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            
            <b-row class="mt-5">
                <b-col md="12">
                    <h2><span style="font-weight:400">Persyaratan</span> <strong>Peserta</strong></h2>
                </b-col>
                <b-col md="12">
                    <hr>
                </b-col>
            

                <b-col md="12">
                    <b-row>
                        <b-col md="12">
                            <h4><span style="font-weight:400">Persyaratan</span> <strong>Umum</strong></h4>
                        </b-col>    

                        <b-col md="12" class="mt-3">
                             <div class="ql-container">
                            <div class="ql-editor" v-html="pelatihan.syaratUmum">
                            </div>
                        </div>
                        </b-col>
                    </b-row>

                    <b-row class="mt-4">
                        <b-col md="12">
                            <h4><span style="font-weight:400">Persyaratan</span> <strong>Khusus</strong></h4>
                        </b-col>    

                        <b-col md="12" class="mt-2">
                            <div class="ql-container">
                            <div class="ql-editor" v-html="pelatihan.syaratKhusus">
                            </div>
                        </div>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col md="12">
                    <hr>
                </b-col>
            </b-row>

            <b-row class="mt-3">
                <b-col md="12">
                    <router-link :to="'/daftar_pelatihan/'+$route.params.id"><b-button variant="primary">Daftar Pelatihan</b-button></router-link>
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
export default {
  name: 'DetailPelatihan',
  components: {
      ThisIsHeader,
      ThisIsFooter
  },
   data(){
     return{
       pelatihan:[],
       ipbackend,
       moment
     }
   },
     mounted(){
     this.ambilPelatihan();
   },
   methods:{
    async  ambilPelatihan(){
        console.log(this.$route.params.id);
       let pelatihan=   await axios.get(ipbackend+ 'pelatihan/listpelatihanbyid/'+this.$route.params.id)
      console.log(pelatihan);
    this.pelatihan = pelatihan.data.data[0]
  }
  
   }
}
</script>

<style scoped>
.section-one{
    padding: 60px 0;
}
</style>
