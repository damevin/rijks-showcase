<script lang="ts" setup>
const isScrolled = ref<boolean>(false)
const displayScrollToTop = ref<boolean>(false)

function handleScroll() {
  if (window.scrollY > 5) {
    isScrolled.value = true
  }
  if (window.scrollY > 200) {
    displayScrollToTop.value = true
  }
  else {
    isScrolled.value = false
    displayScrollToTop.value = false
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
    <div class="header" :class="{ scrolled: isScrolled }">
      <NuxtLink to="/" aria-label="Navigate to homepage">
        <svg aria-hidden="true" focusable="false" class="header__logo">
          <use xlink:href="#icon-rijks-logo" href="#icon-rijks-logo" />
          <symbol id="icon-rijks-logo" viewBox="0 0 335 40">
            <title>rijks-logo</title>
            <g fill="#FFF" fill-rule="evenodd">
              <path
                d="M155.56 12.527c-.928 1.65-1.86 3.465-2.569 5.115h-.054c-.711-1.65-1.641-3.464-2.57-5.115L143.86.757h-7.327V39.26h6.397V15.938c0-2.256-.108-4.235-.437-6.05l.11-.055c.547 1.705 1.368 3.409 2.46 5.389l5.358 9.571h5.085l5.358-9.571c1.093-1.98 1.914-3.684 2.46-5.389l.11.055c-.328 1.815-.437 3.795-.437 6.05V39.26h6.398V.757h-7.327l-6.507 11.77zM327.634.757l-6.507 11.77c-.93 1.65-1.86 3.465-2.57 5.115h-.054c-.711-1.65-1.64-3.464-2.57-5.115L309.427.757H302.1V39.26h6.395V15.938c0-2.256-.108-4.235-.437-6.05l.11-.055c.547 1.705 1.367 3.409 2.46 5.389l5.36 9.571h5.085l5.36-9.571c1.092-1.98 1.911-3.684 2.458-5.389l.11.055c-.328 1.815-.437 3.795-.437 6.05V39.26h6.396V.757h-7.326zM288.65 25.783c0 5.61-2.626 7.755-7.327 7.755-4.704 0-7.329-2.144-7.329-7.755V.757h-6.451v25.355c0 10.01 5.359 13.807 13.78 13.807 8.419 0 13.778-3.797 13.778-13.807V.757h-6.451v25.026zm-91.15 0c0 5.61-2.623 7.755-7.326 7.755-4.704 0-7.329-2.144-7.329-7.755V.757h-6.451v25.355c0 10.01 5.358 13.807 13.78 13.807 8.419 0 13.776-3.797 13.776-13.807V.757h-6.45v25.026zm-118.431-6.6L93.612.977v-.22h-8.038L73.216 16.652V.757h-6.45V39.26h6.45V21.987L86.12 39.26h8.039v-.22L79.068 19.294zM239.547 39.26h22.307V33.1h-15.855V22.373h15.255v-6.16h-15.255V6.917h15.855V.757h-22.307zm-127.51-21.782-3.118-1.1c-3.116-1.1-5.467-2.2-5.467-5.17 0-3.686 3.39-4.841 6.944-4.841 3.719 0 6.89 1.265 8.967 2.585h.22V2.408c-1.806-1.212-5.195-2.31-9.132-2.31-7.327 0-13.668 3.74-13.668 11.44 0 6.106 3.443 8.856 8.637 10.671l3.118 1.1c3.116 1.101 5.467 2.201 5.467 5.171 0 3.685-3.39 5.17-7.108 5.17-3.827 0-7.71-1.54-10.005-2.97h-.22v6.601c1.914 1.319 5.851 2.64 10.17 2.64 7.929 0 13.835-4.346 13.835-11.771 0-6.108-3.446-8.858-8.64-10.672zm112.638 0-3.118-1.1c-3.117-1.1-5.468-2.2-5.468-5.17 0-3.686 3.39-4.841 6.945-4.841 3.715 0 6.889 1.265 8.966 2.585h.219V2.408c-1.805-1.212-5.196-2.31-9.128-2.31-7.33 0-13.673 3.74-13.673 11.44 0 6.106 3.444 8.856 8.638 10.671l3.117 1.1c3.119 1.101 5.468 2.201 5.468 5.171 0 3.685-3.39 5.17-7.108 5.17-3.829 0-7.71-1.54-10.007-2.97h-.218v6.601c1.913 1.319 5.852 2.64 10.17 2.64 7.928 0 13.834-4.346 13.834-11.771.001-6.108-3.442-8.858-8.637-10.672zM51.563 26.443c0 5.115-2.952 7.096-7.546 7.096-3.881 0-7.326-1.264-10.606-2.97h-.22v6.6c2.79 1.542 6.563 2.752 11.047 2.752 9.13 0 13.778-5.005 13.778-13.036V.757h-6.453v25.686z"
              />
              <path
                d="M33.192.757h6.452v23.927h-6.452zm-7.818 12.154c0-9.185-5.797-12.154-14.216-12.154H.112V39.26h6.451V24.959h4.156c1.585 0 2.789-.053 3.718-.275l5.687 14.576h6.943v-.22l-6.725-16.225c3.063-1.706 5.032-4.787 5.032-9.903zm-15.091 6.052h-3.72v-12.1H10.5c4.811 0 8.2 1.209 8.2 6.048.002 4.843-3.389 6.052-8.417 6.052z"
              />
            </g>
          </symbol>
        </svg>
      </NuxtLink>
      <div>
        <NuxtLink to="my-collections" aria-label="Navigate to my collection page">
          <UiBtn>
            My collection
          </UiBtn>
        </NuxtLink>
      </div>
    </div>
    <div v-show="displayScrollToTop" class="badge">
      <UiBtn aria-label="Scroll to top section" @click="scrollToTop">
        Scroll to top
      </UiBtn>
    </div>
  </div>
</template>

<style scoped>
.header {
  padding: 5px 9px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  transition: all 0.2s ease-in-out;
}

.header__logo {
  width: 150px;
  height: 60px;
}

.header.scrolled {
  background: rgba(0, 0, 0, 0.65);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.6px);
  -webkit-backdrop-filter: blur(2.6px);
}

.badge {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}
</style>
