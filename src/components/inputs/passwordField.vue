<template>
  <div class="input-group">
    <label>{{ label }}</label>
    <input type="text" :placeholder placeholder="Enter Your Password">
  </div>
</template>

<script>
export default {
 
  props: {
    label: String,
    placeholder: String,
  },

}
</script>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 20px;
}

label {
  font-weight: 600;
  font-size: 14px;
  color: #111827;
}

.password-wrapper {
  display: flex;
  align-items: center;
  background: #f3f6fb;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  padding-right: 8px;
}

input {
  flex: 1;
  border: none;
  background: transparent;
  padding: 10px 14px;
  font-size: 14px;
  color: #111827;
}

input::placeholder {
  color: #9ca3af;
}

.toggle-btn {
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
}
</style>