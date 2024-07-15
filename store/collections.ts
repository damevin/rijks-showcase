import { defineStore } from 'pinia'
import type { ArtObject } from '~/types/collections.types'

export const useCollectionsStore = defineStore('collections', () => {
  const collections = ref<ArtObject[]>([])

  function addCollection(collection: ArtObject) {
    collections.value.push(collection)
  }

  function removeCollection(collection: ArtObject) {
    const index = collections.value.indexOf(collection)
    collections.value.splice(index, 1)
  }

  function toggleCollection(collection: ArtObject) {
    if (collections.value.includes(collection)) {
      removeCollection(collection)
    }
    else {
      addCollection(collection)
    }
  }

  return {
    collections,
    toggleCollection,
  }
}, {
  persist: true,
})
