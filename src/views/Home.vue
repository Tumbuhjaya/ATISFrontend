<template>
  <div id="home">
    <ThisIsHeader></ThisIsHeader>

    <section>
      <b-container fluid>
        <b-row>
          <b-col md="12" style="padding-left:0;padding-right:0;">
           <img src="https://via.placeholder.com/1366x600" alt="" style="width:100%">
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
                <h2><span style="font-weight:400">Tentang</span> <strong>Salatiga Tranning Integration System</strong></h2>
              </b-col>

              <b-col md="12" class="mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque laudantium qui officiis, praesentium odio quas at iure, accusantium soluta quam blanditiis quaerat? Illo repudiandae eveniet hic, quasi eaque consectetur ducimus temporibus animi? Doloribus culpa eos alias voluptatum sunt, ratione fuga rem itaque eveniet inventore vitae incidunt cupiditate ut, a reiciendis est consequatur, magnam asperiores eius placeat commodi. Dolorum error accusamus quia in cupiditate quae nulla libero veritatis, consequuntur odio mollitia possimus veniam praesentium. Deleniti eaque minus molestias inventore odit, quidem alias? Minima animi ipsa, et maxime quia esse voluptas fugiat fuga, cumque non magnam distinctio exercitationem dolores aut molestias nulla?
              </b-col>
            </b-row>
            
          </b-col>
          <b-col md="4" offset-md="1">
            <b-row>
              <b-col md="12">
                <h2><span style="font-weight:400">Info</span> <strong>Lowongan Pekerjaan</strong></h2>
              </b-col>
            </b-row>

            <b-row class="mt-3">
              <b-col md="12">
                <img src="https://via.placeholder.com/360" alt="" style="width:100%">
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
            <h2><span style="font-weight:400">Agenda</span> <strong>Kegiatan</strong></h2>
          </b-col>

          <b-col md="4" class="mt-3">
            <b-card
              title="Agenda Kegiatan 1"
              img-src="https://via.placeholder.com/360x260"
              img-alt="Image"
              img-top
              tag="article"
            >
              <b-card-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatibus eligendi ea a fugiat explicabo earum itaque velit? Accusantium, eveniet!
              </b-card-text>

              <b-button href="#" variant="primary">Selengkapnya</b-button>
            </b-card>
          </b-col>

          <b-col md="4" class="mt-3">
            <b-card
              title="Agenda Kegiatan 2"
              img-src="https://via.placeholder.com/360x260"
              img-alt="Image"
              img-top
              tag="article"
            >
              <b-card-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatibus eligendi ea a fugiat explicabo earum itaque velit? Accusantium, eveniet!
              </b-card-text>

              <b-button href="#" variant="primary">Selengkapnya</b-button>
            </b-card>
          </b-col>

          <b-col md="4" class="mt-3">
            <b-card
              title="Card Title"
              img-src="https://via.placeholder.com/360x260"
              img-alt="Image"
              img-top
              tag="article"
            >
              <b-card-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatibus eligendi ea a fugiat explicabo earum itaque velit? Accusantium, eveniet!
              </b-card-text>

              <b-button href="#" variant="primary">Selengkapnya</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="section-three">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2><span style="font-weight:400">Apa</span> <strong>Kata Mereka</strong></h2>
          </b-col>
        </b-row>

        <b-row class="mt-3">
          <b-col md="12">
            <b-row>
              <b-col md="3">
                <img src="https://via.placeholder.com/300" alt="" style="width:100%;border-radius:100%">
              </b-col>
              <b-col md="8" offset-md="1">
                <div class="comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis deserunt incidunt ducimus at. Fugit beatae cum in maxime porro error adipisci odio consequatur reprehenderit animi perspiciatis ea a, eum incidunt optio. Quibusdam esse, ipsum expedita debitis vitae quo magnam. Iusto.</div>
                
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
  name: 'Home',
  components: {
    ThisIsHeader,
    ThisIsFooter
  }
}
</script>

<style scoped>
#home .section-one{
  padding: 60px 0;
}

#home .section-two{
  padding: 60px 0;
  background-color: whitesmoke;
}

#home .section-three{
  padding: 60px 0;
}

#home .section-three .comment{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background-color: red; */
  height: 261px;
}
</style>
