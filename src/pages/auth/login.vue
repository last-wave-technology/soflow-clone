<template>
  <div class="login-container">
    <div class="login-card">
      <img src="../../assets/icon-transparent-cropped.png" class="logo" />

      <h2>Welcome to Soflow Ops</h2>
      <p class="subtitle">Enterprise Operation Management</p>

      <InputField label="Email" placeholder="Enter your email" />

      <PasswordField label="Password" placeholder="Enter your password" />

      <div class="forgot">
        <RouterLink to="/reset-password">Forgot Password?</RouterLink>
      </div>

      <button class="login-btn">Login</button>

      <p class="version">v1.0.0</p>
    </div>
  </div>
</template>

<script>
import InputField from '../../components/input/InputField.vue'
import PasswordField from '../../components/input/PasswordField.vue'

export default {
  components: {
    InputField,
    PasswordField,
  },
  mounted() {
    document.body.classList.add('no-scroll')
  },
  unmounted() {
    document.body.classList.remove('no-scroll')
  },
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  background: #0f172a;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  background: #f1f3f6;
  width: 460px;
  max-width: calc(100vw - 40px);
  min-height: 600px;
  padding: 44px 46px;
  border-radius: 28px;
  text-align: center;
  flex-direction: column;
}

.logo {
  width: 70px;
  margin-bottom: 15px;
}

h2 {
  margin-bottom: 5px;
  color: #1e293b;
  font-weight: bold;
}

.subtitle {
  color: #a1a9be;
  margin-bottom: 30px;
  font-weight: 500;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
}

.forgot {
  text-align: right;
  margin-bottom: 20px;
}

.forgot a {
  color: #2c7dbf;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
}

.login-btn {
  width: 100%;
  padding: 15px;
  background: #2c7dbf;
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 700;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
}

.login-btn:hover {
  background: #166292;
}

.version {
  margin-top: auto;
  padding-top: 22px;
  font-size: 10px;
  font-weight: 400;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  color: #a1a9be;
  text-align: center;
}
</style>
