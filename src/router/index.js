import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Daftar from '../views/Daftar.vue'
import Login from '../views/Login.vue'
import Pelatihan from '../views/Pelatihan/Pelatihan.vue'
import DetailPelatihan from '../views/Pelatihan/Detail.vue'
import DaftarPelatihan from '../views/Pelatihan/Daftar.vue'
import Galeri from '../views/Galeri/Galeri.vue'
import DetailGaleri from '../views/Galeri/Detail.vue'
import Publikasi from '../views/Publikasi/Publikasi.vue'
// opd
import DashboardOpd from '../views/Opd/Dashboard.vue'
import TambahPelatihanOpd from '../views/Opd/TambahPelatihan.vue'
import EditPelatihanOpd from '../views/Opd/EditPelatihan.vue'
// masyarakat
import DashboardMasyarakat from '../views/Masyarakat/Dashboard.vue'
import ProfilMasyarakat from '../views/Masyarakat/Profil.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/daftar',
    name: 'Daftar',
    component: Daftar
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/pelatihan',
    name: 'Pelatihan',
    component: Pelatihan
  },

  {
    path: '/detail_pelatihan',
    name: 'DetailPelatihan',
    component: DetailPelatihan
  },

  {
    path: '/daftar_pelatihan',
    name: 'DaftarPelatihan',
    component: DaftarPelatihan
  },

  {
    path: '/galeri',
    name: 'Galeri',
    component: Galeri
  },

  {
    path: '/detail_galeri',
    name: 'DetailGaleri',
    component: DetailGaleri
  },
  {
    path: '/publikasi',
    name: 'Publikasi',
    component: Publikasi
  },
  {
    path: '/dashboard_opd',
    name: 'DashboardOpd',
    component: DashboardOpd
  },

  {
    path: '/tambah_pelatihan_opd',
    name: 'TambahPelatihanOpd',
    component: TambahPelatihanOpd
  },

  {
    path: '/edit_pelatihan_opd',
    name: 'EditPelatihanOpd',
    component: EditPelatihanOpd
  },

  {
    path: '/dashboard_masyarakat',
    name: 'DashboardMasyarakat',
    component: DashboardMasyarakat
  },

  {
    path: '/profil_masyarakat',
    name: 'ProfilMasyarakat',
    component: ProfilMasyarakat
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
