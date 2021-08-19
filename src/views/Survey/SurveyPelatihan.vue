<template>
  <div id="survey_pelatihan">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2 class="text-center">
              <span>Formulir Usulan</span> <strong>Pelatihan</strong>
            </h2>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col md="8" offset-md="2">
            <b-form-group label="Nama">
              <b-form-input></b-form-input>
            </b-form-group>

            <b-form-group label="NIK">
              <b-form-input></b-form-input>
            </b-form-group>

            <b-form-group label="No. Telepon">
              <b-form-input></b-form-input>
            </b-form-group>

            <b-form-group label="Usulan Pelatihan">
              <b-form-input></b-form-input>
            </b-form-group>

            <b-button variant="primary">Kirim</b-button>
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
  name: "SurveyPelatihan",
  data() {
    return {};
  },
  components: {
    ThisIsHeader,
    ThisIsFooter,
  },
};
</script>

<style scoped>
#survey_pelatihan .section-one {
  padding: 60px 0;
}
</style>
