<template>
  <div id="dashboard_masyarakat">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="6">
            <h2><span style="font-weight:400">Selamat Datang,</span></h2>
            <h4><strong>Username Login</strong></h4>
          </b-col>
        </b-row>


        <b-row>
          <b-col md="12">
            <hr>
          </b-col>
        </b-row>

        <b-row class="mt-4">
          <b-col md="8" offset-md="2">
            <div class="box-submenu">

              <div style="width:260px;display:flex;justify-content:center;flex-direction:column;align-items:center;position:relative;">
                <router-link :to="'/profil_masyarakat'">
                  <img src="https://via.placeholder.com/260" alt="">
                  <h3 class="mt-3 text-center"><strong>Profil</strong></h3>

                  <div style="width:50px;height:50px;background-color:red;position:absolute;top:-25px;right:-25px;display:flex;border-radius:100%;justify-content:center;align-items:center">
                    <img src="../../assets/attention.png" alt="" style="width:50px">
                  </div>
                </router-link>
              </div>

              <div style="width:260px;display:flex;justify-content:center;flex-direction:column;align-items:center">
              <img src="https://via.placeholder.com/260" alt="">
              <h3 class="mt-3"><strong>Pelatihan</strong></h3>
              </div>
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
import ThisIsHeader from "../../components/ThisIsHeader";
import ThisIsFooter from "../../components/ThisIsFooter";

export default {
  name: "DashboardOpd",
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
#dashboard_masyarakat .section-one{
  padding:60px 0;
}

#dashboard_masyarakat .section-one .box-submenu {
  display: flex;
  justify-content: space-evenly;
  /* background-color: red; */
}
</style>
