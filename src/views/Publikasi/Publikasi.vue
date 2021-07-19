<template>
  <div id="publikasi">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2><span>Publikasi</span></h2>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="12" class="mt-4">
            <b-card no-body class="overflow-hidden" style="max-width: 100%;">
              <b-row no-gutters>
                <b-col md="2">
                  <b-card-img src="https://picsum.photos/200/200/?image=20" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="10">
                  <b-card-body title="Judul Publikasi">
                    <b-card-text>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum odio voluptatum exercitationem, hic deserunt inventore incidunt tempora tenetur expedita nostrum!
                    </b-card-text>

                    <b-button variant="primary">Unduh</b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </b-col>

          <b-col md="12" class="mt-4">
            <b-card no-body class="overflow-hidden" style="max-width: 100%;">
              <b-row no-gutters>
                <b-col md="2">
                  <b-card-img src="https://picsum.photos/200/200/?image=20" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="10">
                  <b-card-body title="Judul Publikasi">
                    <b-card-text>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum odio voluptatum exercitationem, hic deserunt inventore incidunt tempora tenetur expedita nostrum!
                    </b-card-text>

                    <b-button variant="primary">Unduh</b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </b-col>

          <b-col md="12" class="mt-4">
            <b-card no-body class="overflow-hidden" style="max-width: 100%;">
              <b-row no-gutters>
                <b-col md="2">
                  <b-card-img src="https://picsum.photos/200/200/?image=20" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="10">
                  <b-card-body title="Judul Publikasi">
                    <b-card-text>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum odio voluptatum exercitationem, hic deserunt inventore incidunt tempora tenetur expedita nostrum!
                    </b-card-text>

                    <b-button variant="primary">Unduh</b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
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
  name: 'Publikasi',
  components: {
      ThisIsHeader,
      ThisIsFooter
  }
}
</script>

<style scoped>
#publikasi .section-one{
  padding:60px 0;
}

#publikasi .section-one .card-title{
  font-weight: bold;
}
</style>
