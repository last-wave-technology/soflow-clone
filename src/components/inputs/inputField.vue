<template>
  <div class="input-group">
    <label>{{ label }}</label>
    <input type="text" placeholder="Enter your email">
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

input {
  width: 100%;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: #f3f6fb;
  font-size: 14px;
  color: #111827;
}

input::placeholder {
  color: #9ca3af;
}
</style>
