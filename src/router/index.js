import Vue from 'vue'
import VueRouter from 'vue-router'



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
    component: () => import('@/views/Login'),
    meta: {
      requiresAuth: false
    }
  },

  {
    path: '/pelatihan/:kejuruan',
    name: 'Pelatihan',
    component: () => import('@/views/Pelatihan/Pelatihan'),
    meta: {
      requiresAuth: false
    }
  },

  {
    path: '/survey_pelatihan',
    name: 'SurveyPelatihan',
    component: () => import('@/views/Survey/SurveyPelatihan'),
    meta: {
      requiresAuth: false
    }
  },
  

  {
    path: '/detail_pelatihan/:id',
    name: 'DetailPelatihan',
    component: () => import('@/views/Pelatihan/Detail'),
    meta: {
      requiresAuth: false
    }
  },

  {
    path: '/daftar_pelatihan/:id',
    name: 'DaftarPelatihan',
    component: () => import('@/views/Pelatihan/Daftar'),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/galeri',
    name: 'Galeri',
    component: () => import('@/views/Galeri/Galeri'),
    meta: {
      requiresAuth: false
    }
  },

  {
    path: '/detail_galeri/:id',
    name: 'DetailGaleri',
    component: () => import('@/views/Galeri/Detail'),
    meta: {
      requiresAuth: false
    },
    beforeRouteUpdate(to, from, next) {
      console.log(to);
      if (to.path == "/detail_galeri/:id") {
        next({
          path: "/detail_galeri",
        });
      }
    },
  },
  {
    path: '/publikasi',
    name: 'Publikasi',
    component: () => import('@/views/Publikasi/Publikasi'),
    meta: {
      requiresAuth: true,
      role: 'Opd'
    }
  },
  {
    path: '/dashboard_opd',
    name: 'DashboardOpd',
    component: () => import('@/views/Opd/Dashboard'),
    meta: {
      requiresAuth: true,
      role: 'Opd'
    }
  },

  {
    path: '/data_peserta/:id',
    name: 'DataPeserta',
    component: () => import('@/views/Opd/DataPeserta'),
    meta: {
      requiresAuth: true,
      role: 'Opd'
    }
  },

  {
    path: '/tambah_pelatihan_opd',
    name: 'TambahPelatihanOpd',
    component: () => import('@/views/Opd/TambahPelatihan'),
    meta: {
      requiresAuth: true,
      role: 'Opd'
    }
  },

  {
    path: '/edit_pelatihan_opd',
    name: 'EditPelatihanOpd',
    component: () => import('@/views/Opd/EditPelatihan'),
    meta: {
      requiresAuth: true,
      role: 'Opd'
    }
  },

  {
    path: '/tambah_peserta_by_opd/:id',
    name: 'TambahPesertaByOPD',
    component: () => import('@/views/Opd/TambahPesertaByOpd'),
    meta: {
      requiresAuth: true,
      role: 'Opd'
    }
  },

  {
    path: '/dashboard_masyarakat',
    name: 'DashboardMasyarakat',
    component: () => import('@/views/Masyarakat/Dashboard'),
    meta: {
      requiresAuth: true,
      role: 'Masyarakat'
    }
  },

  {
    path: '/profil_masyarakat',
    name: 'ProfilMasyarakat',
    component: () => import('@/views/Masyarakat/Profil'),
    meta: {
      requiresAuth: true,
      role: 'Masyarakat'
    }
  },

  {
    path: '/riwayat_pelatihan',
    name: 'RiwayatPelatihan',
    component: () => import('@/views/Masyarakat/RiwayatPelatihan'),
    meta: {
      requiresAuth: true,
      role: 'Masyarakat'
    }
  },

  // {
  //   path: '/alumni',
  //   name: 'Alumni',
  //   component: () => import('@/views/Alumni/Alumni'),
  //   meta: {
  //     requiresAuth: false
  //   }
  // },

  {
    path: '/perangkat_daerah',
    name: 'PerangkarDaerah',
    component: () => import('@/views/PerangkatDaerah/PerangkatDaerah'),
    meta: {
      requiresAuth: false
    }
  },

  {
    path: '/detail_alumni',
    name: 'DetailAlumni',
    component: () => import('@/views/Alumni/Detail'),
    meta: {
      requiresAuth: false
    }
  },

  {
    path: '/statistik',
    name: 'Statistik',
    component: () => import('@/views/Statistik/Statistik'),
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
