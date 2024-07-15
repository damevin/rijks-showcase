export function useImgZoom(zoomFactor = 2) {
  const containerRef = ref<HTMLElement | null>(null)
  const imgRef = ref<HTMLImageElement | null>(null)

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.value || !imgRef.value)
      return

    const rect = containerRef.value.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const positionXInContainer = (x / rect.width) * 100
    const positionYInContainer = (y / rect.height) * 100

    imgRef.value.style.transformOrigin = `${positionXInContainer}% ${positionYInContainer}%`
    imgRef.value.style.transform = `scale(${zoomFactor})`
  }

  const handleMouseLeave = () => {
    if (imgRef.value) {
      imgRef.value.style.transform = 'scale(1)'
    }
  }

  onMounted(() => {
    if (containerRef.value) {
      containerRef.value.addEventListener('mousemove', handleMouseMove)
      containerRef.value.addEventListener('mouseleave', handleMouseLeave)
    }
  })

  onUnmounted(() => {
    if (containerRef.value) {
      containerRef.value.removeEventListener('mousemove', handleMouseMove)
      containerRef.value.removeEventListener('mouseleave', handleMouseLeave)
    }
  })

  return { containerRef, imgRef }
}
