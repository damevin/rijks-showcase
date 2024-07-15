import { useInfiniteQuery, useQuery } from '@tanstack/vue-query'
import { useDebounceFn } from '@vueuse/core'
import type { ArtObject } from '~/types/collections.types'

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
    })
    return response.artObject
  }

  const { data, isLoading } = useQuery({
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
