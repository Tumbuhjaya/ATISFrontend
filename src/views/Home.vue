<template>
  <div id="home">
    <ThisIsHeader></ThisIsHeader>

    <section>
      <b-container fluid>
        <b-row>
          <b-col md="12" style="padding-left: 0; padding-right: 0">
            <img src="../assets/banner.png" alt="" style="width: 100%" />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="7">
            <b-row>
              <b-col md="12">
                <h2>
                  <strong
                    ><span style="font-weight: 400">Tentang</span> Salatiga
                    Tranning Integration System</strong
                  >
                </h2>
              </b-col>

              <b-col md="12" class="mt-3">
                S.T.I.S merupakan sistem informasi yang menjadi wadah yang
                mengintegrasikan database program pelatihan, peserta, dan output
                pelatihan dari setiap instansi penyelenggara. Sistem ini juga
                berfungsi memudahkan peserta pelatihan untuk mendapat informasi
                yang relevan dengan bidang pelatihan yang pernah diikutinya,
                seperti misalnya event untuk memasarkan produk usahanya atau
                lowongan kerja.
              </b-col>
            </b-row>
          </b-col>
          <b-col md="4" offset-md="1">
            <b-row>
              <b-col md="12">
                <h2>
                  <strong
                    ><span style="font-weight: 400">Info</span> Lowongan
                    Pekerjaan</strong
                  >
                </h2>
              </b-col>
            </b-row>

            <b-row class="mt-3">
              <b-col md="12">
                <img src="../assets/loker1.jpg" alt="" style="width: 100%" />
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="section-two">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2>
              <strong
                ><span style="font-weight: 400">Agenda</span> Kegiatan</strong
              >
            </h2>
          </b-col>

          <b-col md="4" class="mt-3">
            <div class="box-kegiatan">
              <img src="../assets/agenda1.jpg" alt="" />
              <div class="content">
                <h5><strong>Pameran UMKM Salatiga</strong></h5>
                <h6 class="mt-2">
                  Dinas Koperasi dan UKM Salatiga menyelenggarakan pameran
                  produk UMKM masyarakat Salatiga ....
                </h6>

                <b-button variant="primary" class="mt-3">Selengkapnya</b-button>
              </div>
            </div>
          </b-col>

          <b-col md="4" class="mt-3">
            <div class="box-kegiatan">
              <img src="../assets/agenda2.jpg" alt="" />
              <div class="content">
                <h5><strong>Lomba Memasak</strong></h5>
                <h6 class="mt-2">
                  Dinas Sosial Salatiga menyelenggarakan lomba memasak bagi
                  masyarakat Salatiga ....
                </h6>

                <b-button variant="primary" class="mt-3">Selengkapnya</b-button>
              </div>
            </div>
          </b-col>

          <b-col md="4" class="mt-3">
            <div class="box-kegiatan">
              <img src="../assets/agenda3.jpg" alt="" />
              <div class="content">
                <h5><strong>Pameran Batik dan Kerajinan Salatiga</strong></h5>
                <h6 class="mt-2">
                  Dinas Pendidikan Salatiga menyelenggarakan pameran batik dan
                  kerajinan Salatiga....
                </h6>

                <b-button variant="primary" class="mt-3">Selengkapnya</b-button>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="section-three">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2>
              <strong
                ><span style="font-weight: 400">Apa</span> Kata Mereka</strong
              >
            </h2>
          </b-col>
        </b-row>

        <b-row class="mt-3">
          <b-col md="12">
            <b-row>
              <b-col md="3">
                <img
                  src="../assets/komentator.jpg"
                  alt=""
                  style="width: 100%; border-radius: 100%"
                />
              </b-col>
              <b-col md="8" offset-md="1">
                <div class="comment">
                  <p>
                    “Saya sangat terbantu dengan sistem ini. Mencari pelatihan
                    yang saya butuhkan sangat mudah. Cara daftarnya pun sangat
                    mudah. Alhamdulillah sekarang saya sudah bekerja di beberapa
                    proyek pembangunan berkat mengikuti pelatihan menukang”
                  </p>

                  <p>
                    <i
                      ><strong>Abdul,<br />30 Tahun</strong></i
                    >
                  </p>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <ThisIsFooter></ThisIsFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import ThisIsHeader from "../components/ThisIsHeader";
import ThisIsFooter from "../components/ThisIsFooter";

export default {
  name: "Home",
  components: {
    ThisIsHeader,
    ThisIsFooter,
  },
};
</script>

<style scoped>
#home .section-one {
  padding: 60px 0;
}

#home .section-two {
  padding: 60px 0;
  background-color: whitesmoke;
}

#home .section-three {
  padding: 60px 0;
}

#home .section-three .comment {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  /* background-color: red; */
  height: 261px;
  flex-direction: column;
}

#home .box-kegiatan {
  width: 100%;
  background-color: #fff;
  border-radius: 6px;
}

#home .box-kegiatan img {
  width: 100%;
  height: 200px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

#home .box-kegiatan .content {
  padding: 30px 20px;
}
</style>
