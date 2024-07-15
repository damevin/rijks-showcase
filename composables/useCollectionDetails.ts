import { useQuery } from '@tanstack/vue-query'
import type { FormatedCollection } from '~/types/collections.types'

export function useCollectionDetails() {
  const objectId = ref<string | null>(null)

  const queryIsEnabled = computed(() => !!objectId.value)

  async function fetchCollections() {
    if (!objectId.value) {
      createError({
        statusCode: 400,
        statusMessage: 'No object ID provided',
      })
    }

    const response = await $fetch('/api/collection-details', {
      params: {
        q: objectId.value,
      },
    }) as { artObject: any }

    return formatCollection(response.artObject)
  }

  function formatCollection(collection: {
    title: string
    objectNumber: string
    webImage: { url: string }
    description: string
  }): FormatedCollection {
    return {
      title: collection.title,
      objectNumber: collection.objectNumber,
      webImage: collection.webImage.url,
      description: collection.description,
    }
  }

  const { data } = useQuery({
    queryKey: ['collection', objectId],
    queryFn: fetchCollections,
    staleTime: 1000 * 60 * 5,
    enabled: queryIsEnabled,
  })

  return {
    details: data,
    objectId,
  }
}
