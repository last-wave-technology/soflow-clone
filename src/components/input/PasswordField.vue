<template>
  <div class="input-group">
    <label>{{ label }}</label>
    <div class="input-wrapper">
      <input
        class="input-field"
        :type="isVisible ? 'text' : 'password'"
        :placeholder="placeholder"
        :value="modelValue"
        @input="onInput"
      />
      <button type="button" class="eye" @click="toggleVisibility">
        {{ isVisible ? '🙈' : '👁' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    placeholder: String,
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      isVisible: false,
    }
  },
  methods: {
    onInput(e) {
      this.$emit('update:modelValue', e.target.value)
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
  },
}
</script>

<style scoped>
.input-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #444;
}

.input-wrapper {
  position: relative;
}

.input-field {
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #ccc;
  background: #e9edf3;
  font-size: 14px;
  padding-right: 40px;
}

.eye {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background: transparent;
  border: none;
  font-size: 16px;
}
</style>
