<template>
  <div class="reset-container">
    <div class="reset-card">
      <div class="brand">
        <div class="brand-mark">S</div>
      </div>

      <h2>Reset Password</h2>
      <p class="subtitle">Enter your email to receive a verification code</p>

      <div class="steps" aria-label="Reset steps">
        <div class="step is-active">1</div>
        <div class="step-line"></div>
        <div class="step">2</div>
        <div class="step-line"></div>
        <div class="step">3</div>
      </div>

      <div class="form">
        <InputField v-model="email" label="Email Address" placeholder="Enter your email" />
        <p v-if="emailError" class="error-text">{{ emailError }}</p>

        <button class="primary-btn" type="button" @click="onSendVerificationCode">
          Send Verification Code
        </button>
      </div>

      <div class="divider"></div>

      <div class="back">
        <RouterLink class="back-link" to="/">
          <span class="arrow">←</span>
          Back to Login
        </RouterLink>
      </div>

      <p class="version">v1.0.0</p>
    </div>
  </div>
</template>

<script>
import InputField from '../../components/input/InputField.vue'

export default {
  components: {
    InputField,
  },
  data() {
    return {
      email: '',
      emailError: '',
    }
  },
  watch: {
    email(next) {
      if (this.emailError && String(next).trim()) {
        this.emailError = ''
      }
    },
  },
  methods: {
    onSendVerificationCode() {
      if (!String(this.email).trim()) {
        this.emailError = 'Please enter your email address'
        return
      }

      this.emailError = ''
      // next step (API call / navigation) will go here
    },
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
.reset-container {
  height: 100vh;
  background: #0f172a;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reset-card {
  background: #f1f3f6;
  width: 460px;
  max-width: calc(100vw - 40px);
  min-height: 600px;
  padding: 44px 46px;
  border-radius: 28px;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.brand {
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  font-size: 28px;
  font-weight: bold;
  color: #1e293b;
}

.brand-mark {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  background: #1f86c7;
  color: #ffffff;
  font-weight: 700;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  box-shadow: 0 10px 24px rgba(31, 134, 199, 0.35);
  width: 70px;
  /* margin-bottom: 20px; */
}

h2 {
  margin-bottom: 6px;
  font-size: 24px;
  color: #1e293b;
  font-weight: bold;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
}

.subtitle {
  color: #9aa5b5;
  margin-bottom: 26px;
  font-weight: 600;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  font-size: 14px;
}

.steps {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 26px;
}

.step {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e3e7ee;
  color: #6b7280;
  display: grid;
  place-items: center;
  font-weight: 800;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
}

.step.is-active {
  background: #1f86c7;
  color: white;
}

.step-line {
  width: 70px;
  height: 3px;
  border-radius: 999px;
  background: #d6dce6;
}

.form {
  margin-top: 6px;
}

.error-text {
  text-align: left;
  margin-top: -8px;
  margin-bottom: 14px;
  color: #dc2626;
  font-weight: 600;
  font-size: 13px;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
}

.primary-btn {
  width: 100%;
  padding: 16px;
  background: #1f86c7;
  color: white;
  border: none;
  border-radius: 18px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  box-shadow: 0 10px 18px rgba(31, 134, 199, 0.25);
}

.primary-btn:hover {
  background: #166fa7;
}

.divider {
  margin-top: 22px;
  border-top: 1px solid #d7dee8;
}

.back {
  text-align: left;
  margin-top: 12px;
}

.back-link {
  color: #4b5563;
  text-decoration: none;
  font-weight: 600;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.arrow {
  font-size: 18px;
  line-height: 1;
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
