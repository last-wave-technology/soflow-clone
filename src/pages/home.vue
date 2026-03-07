<template>
  <div class="home-page ">
    <div class="home-card">
      <img class="home-image" src="../assets/icon-transparent-cropped.png" alt="Soflow Ops Logo" />

      <h2 class="title">Welcome to Soflow Ops</h2>
      <p class="subtitle">Enterprise Operation Management</p>

      <!-- <div class="form-section">

        <input v-model="email" type="email" class="form-control">

        <div class="forgot-row">
          <a href="#" class="forgot-link">Forgot Password?</a>
        </div>

        <button class="login-button">Login</button>
      </div> -->
      <form class="text-start" @submit.prevent="login">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input v-model="email" type="email"  class="form-control rounded-2 py-2 bg-light border is-invalid"  id="exampleInputEmail1"
            aria-describedby="emailHelp" placeholder="Enter your email">
          <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label  ">Password</label>
          <input v-model="password" type="password" class="form-control rounded-2 py-2  bg-light border " id="exampleInputPassword1"
            placeholder="Enter your password"><legend></legend>
            
        </div>
        <!-- <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> -->
        <a href="#" target="blank" class="fs-6 text-decoration-none fw-medium d-block text-end">Forgot Password?</a>
        <button  class="login-button">Login</button>

      </form>

      <p class="version">v1.0.0</p>
    </div>
  </div>
</template>


<script>

export default {
  data() {
    return {
      email: '',
      password: "",

    }
  },

 methods:{
  login(){
    if(this.email === '' && this.email === '' ) {
      alert("Please Enter Your Credentials")
    }
    else if(this.email ==='') {
   alert("Please Enter Your email")
    }

    else if(this.password === ''){
         alert("Please Enter Your password")
    }
    else{
         alert("login sucessfull")
    }
  }
 }
}



</script>


<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #020617; */
  padding: 24px;

}

.home-card {
  width: 30%;
  height: 10%;
  /* max-width: 460px; */
  background: #f9fbff;
  border-radius: 32px;
  padding: 40px 40px 24px;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.35);
  text-align: center;
}

.home-image {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  border-radius: 24px;
}

.title {
  font-size: 26px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 4px;
}

.subtitle {
  font-size: 14px;
  font-weight: 500;
  color: #a1a9be;
}








.login-button {
  margin-top: 20px;
  width: 100%;
  padding: 14px 90px;
  border-radius: 15px;
  border: none;
  background: #2563eb;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}

.login-button:hover {
  background: #1d4ed8;
}


.version {
  margin-top: 20px;
  font-size: 12px;
  color: #9ca3af;
}
</style>
