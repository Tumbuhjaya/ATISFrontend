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
                                <h2><span>Masuk</span> <strong>Akun STIS</strong></h2>
                                <hr>
                            </b-col>
                        </b-row>

                        <b-row>
                            <b-col md="12">
                                <b-form-group label="Username">
                                    <b-form-input
                                    ></b-form-input>
                                </b-form-group>

                                <b-form-group label="Password">
                                    <b-form-input
                                        type="password"
                                    ></b-form-input>
                                </b-form-group>

                                

                                <b-button variant="primary">Login</b-button>
                            </b-col>
                        </b-row>
                        
                    </div>
                </b-col>
                <b-col md="7">
                    <img src="https://via.placeholder.com/600x410" alt="" style="width:100%">
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
  name: 'Login',
  components: {
      ThisIsHeader,
      ThisIsFooter
  }
}
</script>

<style scoped>
.section-one{
    padding: 60px 0;
}

.section-one .box{
    padding: 30px;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
    border-radius: 10px;
}
</style>
