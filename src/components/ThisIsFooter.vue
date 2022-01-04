<template>
  <div id="ThisIsFooter">
    <footer>
      <b-container>
        <b-row>
          <b-col md="5">
            <b-row>
              <b-col md="12">
                <div class="indentity-footer">
                  <img
                    src="../assets/logo kota salatiga.png"
                    alt=""
                    style="height: 100px"
                  />

                  <div class="indentity-footer-name">
                    <h6 class="mt-0 mb-0">
                      <strong
                        >Badan Perencaan, Pembangunan dan Penelitian Daerah Kota
                        Salatiga</strong
                      >
                    </h6>

                    <h6 class="mt-2 mb-0" style="font-size: 12px">
                      Jl. Letnan Jenderal Sukowati No.51, Kalicacing, Kec.
                      Sidomukti, Kota Salatiga, Jawa Tengah
                    </h6>
                  </div>
                </div>
              </b-col>
            </b-row>

            <b-row class="mt-3">
              <b-col md="12">
                <p style="font-size: 12px">
                  Sistem Informasi Pelatihan Masyarakat (SIMPEL MAS) merupakan
                  salah satu program yang dicanangkan oleh Bappeda Salatiga pada
                  tahun 2021 yang bertujuan mengintegrasikan dan mensinkronkan
                  program-program pelatihan yang diselenggarakan oleh setiap
                  instansi Pemerintah Kota Salatiga
                </p>
              </b-col>
            </b-row>

            <b-row>
              <b-col md="12">
                <a :href="ipBackend + 'users/downloadAPK'" target="_blank">
                  <button class="btn btn-primary">
                    Download APK SIMPEL MAS
                  </button>
                </a>
              </b-col>
            </b-row>
          </b-col>

          <b-col md="6" offset-md="1">
            <b-row>
              <b-col md="12">
                <b-row>
                  <b-col md="12">
                    <h4 class="mt-0 mb-0">
                      <strong
                        ><span style="font-weight: 400">Kontak</span>
                        Kami</strong
                      >
                    </h4>
                  </b-col>

                  <b-col md="12" class="mt-3">
                    <p style="font-size: 12px">
                      Apabila anda mengalami kendala pada saat mengoperasikan
                      simpelmas.salatiga.go.id, silahkan hubungi admin melalui
                      email berikut ini
                      <span style="font-weight: bold">
                        simpelmas.salatiga@gmail.com</span
                      >
                    </p>
                  </b-col>
                  <b-col md="12" class="mt-3">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15828.79326772853!2d110.5006196!3d-7.3316109!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8878386f39e860a4!2sBappeda%20Kota%20Salatiga!5e0!3m2!1sid!2sid!4v1641282617771!5m2!1sid!2sid"
                      width="100%"
                      height="300"
                      style="border: 0"
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<script>
import ipBackend from "../ipbackend";
export default {
  name: "ThisIsFooter",
  data: function () {
    return { ipBackend };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
