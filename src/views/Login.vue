<template>
  <div id="login">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="5">
            <div class="box">
              <b-row>
                <b-col md="12">
                  <h2><span>Masuk</span> <strong>SIMPEL</strong></h2>
                  <h4>{{ pesan }}</h4>
                  <hr />
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12">
                  <b-form-group
                    label="NIK/NIP/EMAIL"
                    description="Apabila anda sebagai peserta silahkan login menggunakan NIK/Email anda, sedangkan apabila anda sebagai OPD silahkan login menggunakan NIP/Email"
                  >
                    <b-form-input v-model="data.NIK"></b-form-input>
                  </b-form-group>

                  <b-form-group label="Password">
                    <b-form-input
                      v-model="data.password"
                      type="password"
                      @keyup.enter="login"
                    ></b-form-input>
                  </b-form-group>

                  <div style="width: 100%;display: flex;">
                    <div style="width: 50%;height: 50px;background-color: ;display: flex;justify-content: flex-start;align-items: center;">
                      <b-button variant="primary" @click="login">Login</b-button>
                    </div>
                    <div style="width: 50%;height: 50px;background-color: ;display: flex;justify-content: flex-end;align-items: center
                      ;">
                      <span v-b-modal.modal-lupa-password>
                        <h6 style="color: red;">Lupa Password ?</h6>
                      </span>
                    </div>
                  </div>
                </b-col>

                <b-col md="12">
                  <hr />
                </b-col>

                <b-col md="12">
                  Belum terdaftar? Silahkan daftar
                  <router-link :to="'/daftar'"
                    ><strong>disini</strong></router-link
                  >
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

    <b-modal id="modal-lupa-password" title="Lupa Password" hide-footer>
      <h6>Silahkan masukkan informasi akun anda </h6>
      <br/>
      <b-form-group
        label-cols="6"
        label-cols-lg="3"
        label="Nama"
      >
        <b-form-input  v-model="nama"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols="6"
        label-cols-lg="3"
        label="NIK"
      >
        <b-form-input  v-model="NIK"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols="6"
        label-cols-lg="3"
        label="Email"
      >
        <b-form-input v-model="email"></b-form-input>
      </b-form-group>

      <b-button variant="primary" @click="reset">Simpan</b-button>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import ThisIsHeader from "../components/ThisIsHeader";
import ThisIsFooter from "../components/ThisIsFooter";
import axios from "axios";
import ipbackend from "../ipbackend";
export default {
  name: "Login",
  components: {
    ThisIsHeader,
    ThisIsFooter,
  },
  data: function() {
    return {
      NIK:'',
      nama:'',
      email:'',
      data: {
        NIK: "",
        password: "",
      },
      pesan: "",
    };
  },
  methods: {
    reset(){
      let vm = this;
      let data = {
        NIK: vm.NIK ,
        email: vm.email ,
        nama: vm.nama
      }
      console.log(data);
      axios.post(ipbackend + "users/resetPassword", data).then((data) => {
        console.log(data);
        alert(data.data.message)
      })
    },
    login() {
      console.log(this.data);
      let vm = this;
      axios.post(ipbackend + "users/login", this.data).then((data) => {
        //   console.log(data);
        vm.pesan = data.data.message;
        const dataUser = JSON.stringify(data.data);
        localStorage.setItem("user", dataUser);
        if (data.data.message == "sukses") {
          if (data.data.role == "peserta") {
            if (vm.$route.query.redirect) {
              vm.$router.push({ path: vm.$route.query.redirect });
            } else {
              vm.$router.push({ path: "/dashboard_masyarakat" });
            }
          } else {
            if (vm.$route.query.redirect) {
              vm.$router.push({ path: vm.$route.query.redirect });
            } else {
              vm.$router.push({ path: "/dashboard_opd" });
            }
          }
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
