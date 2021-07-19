<template>
  <div id="detail-galeri">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h5>Menjahit</h5>
            <h2><strong>Judul Pelatihannya</strong></h2>
          </b-col>
        </b-row>

        <b-row class="mt-3">
          <b-col md="12">
            <img src="https://via.placeholder.com/1140x600" alt="">
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col md="12">
            <h2><span style="font-weight:400">Deskripsi</span> <strong>Pelatihan</strong></h2>
          </b-col>

          <b-col md="12" class="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eum assumenda quaerat laudantium, fugit accusantium in perferendis ab earum provident, dolores eveniet cumque! Provident commodi numquam expedita recusandae modi officia quas. Deserunt temporibus odio quaerat similique quis fuga laboriosam consequatur quos voluptatem laudantium ut, doloremque, veritatis aspernatur adipisci nihil saepe facilis! Alias hic ut fuga odit optio inventore accusantium ducimus, magni quibusdam voluptatem magnam accusamus vitae autem odio? Sequi esse consequuntur sed, natus eveniet labore laboriosam! Veniam aperiam dolorum earum obcaecati iste. Necessitatibus aliquid repudiandae facilis, a modi, ipsam quia commodi impedit, quam dolorem deleniti veritatis pariatur sint consequatur amet!
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
                <h6>21 Juli 2021 s/d 25 Juli 2021</h6>
              </b-col>
            </b-row>

            <b-row class="mt-4">
              <b-col md="12">
                <h4><span style="font-weight:400">Kouta</span> <strong>Peserta</strong></h4>
              </b-col>    

              <b-col md="12" class="mt-3">
                <h6>20 Peserta</h6>
              </b-col>
            </b-row>

            <b-row class="mt-4">
              <b-col md="12">
                <h4><span style="font-weight:400">Lokasi</span> <strong>Pelatihan</strong></h4>
              </b-col>    

              <b-col md="12" class="mt-2">
                <h6>Balai Pelatihan Kerja</h6>
              </b-col>
            </b-row>
          </b-col>

          <b-col md="6">
            <b-row>
              <b-col md="12">
                <h4><span style="font-weight:400">Instansi</span> <strong>Penyelenggara</strong></h4>
              </b-col>    

              <b-col md="12" class="mt-3">
                <h6>OPD Terkait</h6>
              </b-col>
            </b-row>

            <b-row class="mt-4">
              <b-col md="12">
                <h4><span style="font-weight:400">Jenjang</span> <strong>Pelatihan</strong></h4>
              </b-col>    

              <b-col md="12" class="mt-2">
                <h6>Dasar/Pemula</h6>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col md="12">
            <h2><span style="font-weight:400">Dokumentasi</span> <strong>Pelatihan</strong></h2>
          </b-col>

          <b-col md="12">
            <hr class="mb-0">
          </b-col>
        </b-row>

        <b-row>
          <b-col md="4" class="mt-4">
            <img src="https://via.placeholder.com/360x300" alt="" style="width:100%">
          </b-col>

          <b-col md="4" class="mt-4">
            <img src="https://via.placeholder.com/360x300" alt="" style="width:100%">
          </b-col>

          <b-col md="4" class="mt-4">
            <img src="https://via.placeholder.com/360x300" alt="" style="width:100%">
          </b-col>

          <b-col md="4" class="mt-4">
            <img src="https://via.placeholder.com/360x300" alt="" style="width:100%">
          </b-col>

          <b-col md="4" class="mt-4">
            <img src="https://via.placeholder.com/360x300" alt="" style="width:100%">
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
  name: 'Daftar',
  components: {
      ThisIsHeader,
      ThisIsFooter
  }
}
</script>

<style scoped>
#detail-galeri .section-one{
  padding:60px 0;
}
</style>
