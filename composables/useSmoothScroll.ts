import Lenis from '@studio-freight/lenis'

export function useSmoothScroll() {
  const { $gsap } = useNuxtApp()

  const scrollLenis = new Lenis({
    duration: 1.3,
    gestureOrientation: 'vertical',
    orientation: 'vertical',
    smoothWheel: true,
  })

  $gsap.ticker.add((time: number) => {
    scrollLenis.raf(time * 1000)
  })

  $gsap.ticker.lagSmoothing(0)
}
