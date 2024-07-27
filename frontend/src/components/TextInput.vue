<template>
    <div class="text-input">
      <label :for="inputId">{{ label }}</label>
      <input
        :id="inputId"
        :type="type"
        :value="value"
        @input="$emit('input', $event.target.value)"
        :placeholder="placeholder"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: "TextInput",
    props: {
      label: {
        type: String,
        required: true
      },
      value: {
        type: String,
        default: ""
      },
      placeholder: {
        type: String,
        default: ""
      },
      type: {
        type: String,
        default: "text"
      }
    },
    data() {
      return {
        inputId: `text-input-${Math.random().toString(36).substring(2, 11)}`
      };
    }
  };
  </script>
  
  <style scoped>
  .text-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  
  .text-input label {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  
  .text-input input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  