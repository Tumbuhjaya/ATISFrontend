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
import RiwayatPelatihan from '../views/Masyarakat/RiwayatPelatihan.vue'
// statistik
import Statistik from '../views/Statistik/Statistik.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
    meta: {
      requiresAuth: false
    }
  },

  {
    path: '/daftar',
    name: 'Daftar',
    component: () => import('@/views/Daftar'),
    meta: {
      requiresAuth: false
    }
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: false
    }
  },

  {
    path: '/pelatihan/:kejuruan',
    name: 'Pelatihan',
    component: Pelatihan,
    meta: {
      requiresAuth: false
    }
  },

  {
    path: '/detail_pelatihan/:id',
    name: 'DetailPelatihan',
    component: DetailPelatihan,
    meta: {
      requiresAuth: false
    }
  },

  {
    path: '/daftar_pelatihan/:id',
    name: 'DaftarPelatihan',
    component: DaftarPelatihan,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/galeri',
    name: 'Galeri',
    component: Galeri,
    meta: {
      requiresAuth: false
    }
  },

  {
    path: '/detail_galeri',
    name: 'DetailGaleri',
    component: DetailGaleri,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/publikasi',
    name: 'Publikasi',
    component: Publikasi,
    meta: {
      requiresAuth: true,
      role: 'Opd'
    }
  },
  {
    path: '/dashboard_opd',
    name: 'DashboardOpd',
    component: DashboardOpd,
    meta: {
      requiresAuth: true,
      role: 'Opd'
    }
  },

  {
    path: '/tambah_pelatihan_opd',
    name: 'TambahPelatihanOpd',
    component: TambahPelatihanOpd,
    meta: {
      requiresAuth: true,
      role: 'Opd'
    }
  },

  {
    path: '/edit_pelatihan_opd',
    name: 'EditPelatihanOpd',
    component: EditPelatihanOpd,
    meta: {
      requiresAuth: true,
      role: 'Opd'
    }
  },

  {
    path: '/dashboard_masyarakat',
    name: 'DashboardMasyarakat',
    component: DashboardMasyarakat,
    meta: {
      requiresAuth: true,
      role: 'Masyarakat'
    }
  },

  {
    path: '/profil_masyarakat',
    name: 'ProfilMasyarakat',
    component: ProfilMasyarakat,
    meta: {
      requiresAuth: true,
      role: 'Masyarakat'
    }
  },

  {
    path: '/riwayat_pelatihan',
    name: 'RiwayatPelatihan',
    component: RiwayatPelatihan,
    meta: {
      requiresAuth: true,
      role: 'Masyarakat'
    }
  },

  {
    path: '/statistik',
    name: 'Statistik',
    component: Statistik,
    meta: {
      requiresAuth: false
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach(async (to, from, next) => {
  let ret =      localStorage.getItem('user');
   ret = JSON.parse(ret)
   console.log(ret);
  // const role = await Storage.get({ key: "role" })
  console.log(to.query)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (ret) {
      if (!ret.token) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }

  } else {
    next()
  }
})
export default router
