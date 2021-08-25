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
                  <h2><span>Daftar</span> <strong>Peserta SIMPEL</strong></h2>
                  <hr />
                </b-col>
              </b-row>

              <b-row>
                <b-col md="12">
                  <b-form-group label-cols="6" label-cols-lg="3" label="NIK">
                    <b-form-input v-model="data.NIK"></b-form-input>
                  </b-form-group>

                  <b-form-group label-cols="6" label-cols-lg="3" label="Nama">
                    <b-form-input></b-form-input>
                  </b-form-group>

                  <b-form-group label-cols="6" label-cols-lg="3" label="Alamat">
                    <b-form-input></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label-cols="6"
                    label-cols-lg="3"
                    label="Password"
                  >
                    <b-form-input
                      v-model="data.password"
                      type="password"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label-cols="6"
                    label-cols-lg="3"
                    label="No. Telepon"
                  >
                    <b-form-input v-model="data.noHp"></b-form-input>
                  </b-form-group>

                  <b-form-group label-cols="6" label-cols-lg="3" label="Email">
                    <b-form-input v-model="data.email"></b-form-input>
                  </b-form-group>
                  <hr />
                  <div
                    style="
                      background-color: whitesmoke;
                      padding: 15px;
                      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
                      border-radius: 10px;
                    "
                  >
                    <b-form-group
                      label="Peminatan 1"
                      description="Isi sesuai dengan minat anda"
                    >
                      <b-form-select :options="kategori" v-model="data.minat1"></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label="Peminatan 2"
                      description="Isi sesuai dengan minat anda"
                    >
                      <b-form-select :options="kategori" v-model="data.minat2"></b-form-select>
                    </b-form-group>
                  </div>
                  <hr />
                  <b-button variant="primary" @click="simpan">Daftar</b-button>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col md="7">
            <div
              style="
                display: flex;
                justify-content: center;
                align-items: center;
                height: 800px;
              "
            >
              <img src="../assets/bg.jpg" alt="" style="width: 100%" />
            </div>
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
        minat1:"",
        minat2:"",
      },
      kategori: [{ value: null, text: "-- Pilih --" }],
    };
  },
  created(){
    this.getKategori()
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
          role: "Peserta",
          noHp: "",
          email: "",
          minat1:"",
          minat2:""
        }),
          alert(data.data.message);
        if (data.data.message == "sukses") {
          vm.$router.push("/login");
        }
      });
    },
    async getKategori(){
    let kate = await  axios.get(ipbackend + 'kejuruan/listKejuruan')
    console.log(kate)
     for (let i = 0 ; i < kate.data.data.length; i ++){
       let x = kate.data.data[i]
       this.kategori.push({value: x.namaKejuruan, text: x.namaKejuruan})
     }
    }
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
