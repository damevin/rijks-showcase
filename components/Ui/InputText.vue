<script setup lang="ts">
withDefaults(
  defineProps<{
    placeholder?: string
    loading?: boolean
  }>(),
  {
    placeholder: '',
    loading: false,
  },
)

const emit = defineEmits<{
  (e: 'update:search'): void
}>()

const inputValue = defineModel()
</script>

<template>
  <div class="wrapper">
    <input
      v-model="inputValue"
      class="input"
      type="text"
      :placeholder="placeholder"
      @keyup.prevent.enter="emit('update:search')"
    >
    <div class="button-slot">
      <slot name="button" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  border-radius: 8px;
  border: 3px solid hsl(210, 8%, 10%);
  background-color: hsl(210, 8%, 5%);
  transition: all 0.2s ease-in-out;
}

.input {
  flex-grow: 1;
  padding: 14px 18px;
  font-size: 20px;
  border: none;
  background-color: transparent;
  color: white;
}

.input:focus-within {
  outline: none;
}

.button-slot {
  display: flex;
  align-items: center;
  padding-right: 10px;
}

.wrapper:focus-within {
  outline: none;
  background-color: hsl(210, 8%, 8%);
  border: 3px solid white;
}

.wrapper:hover {
  background-color: hsl(210, 8%, 30%);
}

.wrapper.loading {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
