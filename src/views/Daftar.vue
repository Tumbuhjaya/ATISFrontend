<template>
  <div id="daftar">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="5">
            <div class="box">
              <b-row>
                <b-col md="12">
                  <h2><span>Daftar</span> <strong>Akun SIMPEL</strong></h2>
                  <hr />
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12">
                  <b-form-group label="NIK">
                    <b-form-input v-model="data.NIK"></b-form-input>
                  </b-form-group>

                  <b-form-group label="Password">
                    <b-form-input
                      v-model="data.password"
                      type="password"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group label="No. Telepon">
                    <b-form-input v-model="data.noHp"></b-form-input>
                  </b-form-group>

                  <b-form-group label="Email">
                    <b-form-input v-model="data.email"></b-form-input>
                  </b-form-group>

                  <b-button variant="primary" @click="simpan">Daftar</b-button>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col md="7">
            <img src="../assets/bg.jpg" alt="" style="width: 100%" />
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
import axios from "axios";
import ipbackend from "../ipbackend";
export default {
  name: "Daftar",
  components: {
    ThisIsHeader,
    ThisIsFooter,
  },
  data: function () {
    return {
      data: {
        NIK: "",
        password: "",
        role: "peserta",
        noHp: "",
        email: "",
      },
    };
  },
  methods: {
    simpan() {
      // console.log(this.data);
      let vm = this;
      axios.post(ipbackend + "users/register", this.data).then((data) => {
        console.log(data);
        (vm.data = {
          NIK: "",
          password: "",
          role: "peserta",
          noHp: "",
          email: "",
        }),
          alert(data.data.message);
        if (data.data.message == "sukses") {
          vm.$router.push("/login");
        }
      });
    },
  },
};
</script>

<style scoped>
.section-one {
  padding: 60px 0;
}

.section-one .box {
  padding: 30px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  border-radius: 10px;
}
</style>
