<template>
  <div class="input-group">
    <label>{{ label }}</label>
    <div class="input-wrapper">
      <input
        class="input-field"
        type="text"
        :placeholder="placeholder"
        :value="modelValue"
      />
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
      default: "",
    },
  },
  emits: ["update:modelValue"],
  methods: {
    onInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
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
}

.eye {
  position: absolute;
  right: 15px;
  top: 14px;
  cursor: pointer;
}
</style>
