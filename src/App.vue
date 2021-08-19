<template>
  <div id="app">
    <router-view />

    <router-link :to="'/survey_pelatihan'">
      <div
        style="
          background-color: whitesmoke;
          position: fixed;
          right: 30px;
          bottom: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 15px;
          border-radius: 6px;
          z-index: 2;
        "
      >
        <img src="./assets/icon-usulan.png" alt="" style="width: 100px" />

        <h6 class="mt-2 mb-0"><strong>Usulan</strong></h6>
        <h6 class="mt-0 mb-0"><strong>Pelatihan</strong></h6>
      </div>
    </router-link>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap");
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
  font-weight: 300;
  position: relative;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.title {
  font-weight: 600;
}

.layout {
  width: 100%;
  height: 100px;
  background-color: red;
}

header {
  padding: 10px 0;
  /* background-color: turquoise; */
  box-shadow: 0 7px 20px 0 rgb(0 0 0 / 10%);
  /* position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1; */
}

header .indentity {
  width: 100%;
  display: flex;
  height: 80px;
}

header .indentity .indentity-name {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 80px;
  margin-left: 15px;
  flex-direction: column;
}

header .daftar-login {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* background-color: red; */
}

header .menu {
  width: 100%;
  height: 40px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .btn-check:focus + .btn,
.btn:focus {
  box-shadow: transparent;
}

footer {
  background-color: rgb(243, 244, 246);
  padding: 60px 0;
}

footer .indentity-footer {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  /* height: 80px; */
}

footer .indentity-footer .indentity-footer-name {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin-left: 15px;
  flex-direction: column;
  /* background-color: red; */
}

footer .indentity-footer .indentity-footer-name .fw400 {
  font-weight: 400;
}

.ql-editor {
  padding: 0 !important;
}

.ql-editor ol,
.ql-editor ul {
  padding-left: 0 !important;
}

.table-width {
  width: 160px !important;
}

.table-width-3 {
  width: 180px !important;
}
</style>
