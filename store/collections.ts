import { defineStore } from 'pinia'
import type { FormatedCollection } from '~/types/collections.types'

export const useCollectionsStore = defineStore('collections', () => {
  const collections = ref<FormatedCollection[]>([])
  const { $toast } = useNuxtApp()

  function addCollection(collection: FormatedCollection) {
    if (!collections.value.map(c => c.objectNumber).includes(collection.objectNumber)) {
      collections.value.push(collection)
      $toast.success('Added to collection', {
        description: `Added ${collection.title} to your collection`,
      })
    }
  }

  function removeCollection(collection: FormatedCollection) {
    collections.value = collections.value.filter(c => c.objectNumber !== collection.objectNumber)
    $toast.success('Removed from collection', {
      description: `Removed ${collection.title} from your collection`,
    })
  }

  function toggleCollection({ collection }: { collection: FormatedCollection }) {
    if (isInCollection(collection.objectNumber)) {
      removeCollection(collection)
    }
    else {
      addCollection(collection)
    }
  }

  function isInCollection(objectNumber: string) {
    return collections.value.some(c => c.objectNumber === objectNumber)
  }

  return {
    collections,
    toggleCollection,
    isInCollection,
  }
}, {
  persist: true,
})
