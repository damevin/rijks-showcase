<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'fab' | 'plain' | 'disabled'
    disabled?: boolean
  }>(),
  {
    variant: 'primary',
    disabled: false,
  },
)
</script>

<template>
  <button
    :disabled="props.disabled"
    :class="{
      'btn-primary btn': props.variant === 'primary',
      'btn-secondary btn': props.variant === 'secondary',
      'btn-plain btn': props.variant === 'plain',
      'btn-disabled': props.variant === 'disabled',
      'btn-fab btn': props.variant === 'fab',
    }"
  >
    <span class="btn__slot">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.btn__slot {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.btn-secondary {
  padding: 12px 24px;
  background-color: transparent;
  border: 1px solid #d55140;
  color: #d55140;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  z-index: 1;
}

.btn-disabled {
  color: var(--background-surface);
  cursor: not-allowed;
}

.btn-secondary span {
  z-index: 1;
  position: relative;
}

.btn-secondary::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
  transition: opacity .4s cubic-bezier(.19, 1, .22, 1), transform .75s cubic-bezier(.19, 1, .22, 1);
  background-color: #d55140;
  opacity: 0;
}

.btn-secondary:hover span {
  color: hsl(0, 0%, 100%);
}

.btn-secondary:hover::before {
  opacity: 1;
  transition-duration: .85s;
  transform: translate3d(-50%, -50%, 0) scale3d(2, 1.5, 1.5);
}

.btn {
  color: #d55140;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.btn-fab {
  border-radius: 8px;
  height: 45px;
  display: flex;
  font-size: 25px;
  justify-content: center;
  align-items: center;
  background-color: #d55140;
  border: 1px solid #d55140;
  width: 45px;
  color: var(--background-surface);
}

.btn-fab span {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-primary {
  display: inline-block;
  position: relative;
  color: #d55140;
  background-color: var(--color-primary);
  outline: none;
  border: none;
}

.btn-primary::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #d55140;
  transform-origin: bottom right;
  transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
}

.btn-primary:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.btn-plain {
  background: linear-gradient(to right, #e85640, #d55140, #a03020);
  background-size: 200% 200%;
  animation: rainbow 3s ease-in-out infinite;
  background-clip: text;
  -webkit-background-clip: text;
  color: black;
  -webkit-text-stroke: 2px #d5514031;
  text-align: center;
  outline: none;
  border: none;
  transition: color .2s ease-in-out;
}

.btn-plain:hover {
  color: rgba(0, 0, 0, 0);
}
</style>
