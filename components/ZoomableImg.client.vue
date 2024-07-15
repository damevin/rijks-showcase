<script lang="ts" setup>
defineProps<{
  src: string
}>()

const zoomableContainer = ref<HTMLElement | null>(null)
const zoomableImg = ref<HTMLElement | null>(null)

function zoom(e: MouseEvent) {
  const elementInformations = zoomableContainer.value?.getBoundingClientRect()

  console.log('elementInformations', elementInformations)
  console.log('zoomableImg', zoomableImg.value)
  if (!elementInformations)
    return

  const x = e.clientX - elementInformations?.left
  const y = e.clientY - elementInformations?.top

  const percentageX = (x / elementInformations.width) * 100
  const percentageY = (y / elementInformations.height) * 100

  if (zoomableImg.value) {
    zoomableImg.value.style.transformOrigin = `${percentageX}% ${percentageY}%`
  }
}

onMounted(() => {
  zoomableContainer.value?.addEventListener('mousemove', zoom)
})
</script>

<template>
  <div ref="zoomableContainer">
    <img ref="zoomableImg" :src="src">
  </div>
</template>
