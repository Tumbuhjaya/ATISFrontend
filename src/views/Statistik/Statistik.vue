<template>
  <div id="statistik">
    <ThisIsHeader></ThisIsHeader>
    <section class="section-one">
      <b-container>
        <b-row>
          <b-col md="12">
            <h2>
              <strong
                ><span style="font-weight: 400">Statistik</span> Salatiga
                Tranning Integration System</strong
              >
            </h2>
          </b-col>
        </b-row>

        <b-row class="mt-4">
          <!-- <b-col md="8" offset-md="2">
            <b-alert show variant="success">
              <h4 class="alert-heading">Pencarian Data</h4>

              <hr />
              <div class="box-cari">
                <div class="opd">
                  <b-form-select :options="opd"></b-form-select>
                </div>

                <div class="space"></div>
                <div class="tahun">
                  <b-form-select :options="tahun"></b-form-select>
                </div>
                <div class="space"></div>

                <div class="simpan">
                  <b-button variant="primary" block>Cari</b-button>
                </div>
              </div>
            </b-alert>
          </b-col> -->
          <b-col md="12" class="mt-3">
            <div>
              <b-tabs content-class="mt-3" align="center">
                <b-tab title="Jumlah Pelatihan Berdasarkan OPD" active>
                  <b-row>
                    <b-col md="8">
                      <div
                        style="width: 100%; height: 500px; background-color: "
                        id="chartContainer"
                      ></div>
                    </b-col>
                    <b-col md="4">
                      <b-row>
                        <b-col md="12">
                          <b-table
                            :items="chartOptions.data[0].dataPoints"
                            :fields="fields"
                            :current-page="currentPage"
                            :per-page="perPage"
                            stacked="md"
                            show-empty
                            bordered
                            striped
                          >
                          </b-table>
                        </b-col>
                      </b-row>

                      <b-row>
                        <b-col md="12">
                          <b-pagination
                            v-model="currentPage"
                            :total-rows="totalRows"
                            :per-page="perPage"
                            align="fill"
                            size="sm"
                          ></b-pagination>
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </b-tab>
                <b-tab title="Jumlah Pelatihan Berdasarkan Kategori ">
                  <b-row>
                    <b-col md="8">
                      <div
                        style="width: 100%; height: 500px; background-color: "
                        id="chartContainer2"
                      ></div>
                    </b-col>
                    <b-col md="4">
                      <b-row>
                        <b-col md="12">
                          <b-table
                            :items="chartOptions2.data[0].dataPoints"
                            :fields="fields2"
                            :current-page="currentPage"
                            :per-page="perPage"
                            stacked="md"
                            show-empty
                            bordered
                            striped
                          >
                          </b-table>
                        </b-col>
                      </b-row>

                      <b-row>
                        <b-col md="12">
                          <b-pagination
                            v-model="currentPage"
                            :total-rows="totalRows"
                            :per-page="perPage"
                            align="fill"
                            size="sm"
                          ></b-pagination>
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </b-tab>
              </b-tabs>
            </div>
          </b-col>
          <b-col md="8"> </b-col>

          <b-col md="4"> </b-col>
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
let CanvasJS = require("../../../node_modules/canvasjs/dist/canvasjs");
// import CanvasJS from "@/canvasjs/dist/canvasjs.min.js";
import axios from "axios";
import ipbackend from '../../ipbackend'

export default {
  name: "Statistik",
  data() {
    return {
       ipbackend,
       user:{},
      // opd
      opd: [{ value: null, text: "-- Pilih --" }],

      // tahun
      tahun: [{ value: null, text: "-- Pilih --" }],

      // table1
      fields: [
        {
          key: "label",
          label: "OPD",
          sortable: true,
          class: "text-left",
        },
        {
          key: "y",
          label: "Jumlah",
          sortable: true,
          class: "text-left",
        },
      ],
   
      // table2
      fields2: [
        {
          key: "label",
          label: "Kategori",
          sortable: true,
          class: "text-left",
        },
        {
          key: "y",
          label: "Jumlah",
          sortable: true,
          class: "text-left",
        },
      ],
   
      totalRows: 1,
      currentPage: 1,
      perPage: 10,

      // chart
      chartOptions: {
        axisX: {
          labelFontSize: 14,

          labelAutoFit: true,
          labelTextAlign: "center",
        },

        axisY: {
          labelFontSize: 14,
        },
        data: [
          {
            type: "column",
            dataPoints: [
              { y: 10, label: "Dinas Sosial" },
              { y: 20, label: "Dinas Koperasi dan UMKM" },
              { y: 30, label: "Dinas Tenaga Kerja dan Perindustrian" },
              { y: 40, label: "Dinas Kepemudaan dan Olahraga" },
            ],
          },
        ],
      },

      chartOptions2: {
        width: "730",
        height: "500",
        axisX: {
          labelFontSize: 14,
          labelAutoFit: true,
          labelTextAlign: "center",
        },

        axisY: {
          labelFontSize: 14,
        },
        data: [
          {
            type: "column",
            dataPoints: [
              { y: 10, label: "Menjahit" },
              { y: 20, label: "Memasak" },
              { y: 30, label: "Menari" },
              { y: 40, label: "Menyanyi" },
            ],
          },
        ],
      },
      chart: null,
      chart2: null,
    };
  },

 async mounted() {
    // console.log(CanvasJS);


       let pelatihan=   await axios.get(ipbackend+ 'pelatihan/grafikPelatihanByOPD/')
      console.log(pelatihan);
       let items  = [];
    
      pelatihan.data.data.forEach((item, idx)=>{
        items.push({ y: Number(item.count), label: item.namaOPD })
      })

      this.chartOptions.data[0].dataPoints = items;
    this.chart = new CanvasJS.Chart("chartContainer", this.chartOptions);




       let kejuruan=   await axios.get(ipbackend+ 'pelatihan/grafikPelatihanByKejuruan/')
  
       let items2  = [];
    
      kejuruan.data.data.forEach((item, idx)=>{
        items2.push({ y: Number(item.count), label: item.namaKejuruan })
      })

      this.chartOptions2.data[0].dataPoints = items2;
    this.chart2 = new CanvasJS.Chart("chartContainer2", this.chartOptions2);
    this.chart.render();
    this.chart2.render();
  },
  components: {
    ThisIsHeader,
    ThisIsFooter,
  },
};
</script>

<style scoped>
#statistik .section-one {
  padding: 60px 0;
}

#statistik .section-one .box-cari {
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* height: 100px; */
}

#statistik .section-one .box-cari .opd {
  width: 43%;
  /* background-color: yellow; */
}

#statistik .section-one .box-cari .tahun {
  width: 43%;
  /* background-color: pink; */
}

#statistik .section-one .box-cari .simpan {
  width: 14%;
  /* background-color: violet; */
}

#statistik .section-one .box-cari .space {
  width: 2.5%;
}
</style>
