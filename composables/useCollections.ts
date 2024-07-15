import { useInfiniteQuery } from '@tanstack/vue-query'
import { useDebounceFn } from '@vueuse/core'
import type { ArtObject } from '~/types/collections.types'

interface PaginatedResponse {
  data?: ArtObject[] | null | undefined
  nextPage: number | null
}

export function useCollections() {
  const searchQuery = ref<string | null>(null)

  const DEFAULT_LIMIT = 20

  async function fetchCollections({ pageParam = 1 }): Promise<PaginatedResponse> {
    const response = await $fetch('/api/collections', {
      params: {
        q: searchQuery.value,
        p: pageParam,
        ps: DEFAULT_LIMIT,
      },
    })

    return {
      data: response.artObjects,
      nextPage: response.count > pageParam * DEFAULT_LIMIT ? pageParam + 1 : null,
    }
  }

  const query = useInfiniteQuery({
    queryKey: ['collections', searchQuery],
    queryFn: fetchCollections,
    getNextPageParam: lastPage => lastPage.nextPage,
    initialPageParam: undefined,
    staleTime: 1000 * 60 * 5,
  })

  const collections = computed(() => {
    return query.data.value?.pages.flatMap(page => page.data)
  })

  const loadMore = () => {
    if (query.hasNextPage.value && !query.isFetchingNextPage.value) {
      query.fetchNextPage()
    }
  }

  function updateSearchQuery(value: string) {
    searchQuery.value = value
  }

  return {
    collections,
    loadMore,
    updateSearchQuery,
    hasNextPage: query.hasNextPage,
    isFetchingNextPage: query.isFetchingNextPage,
    isLoading: query.isLoading,
    isError: query.isError,
    isFetching: query.isFetching,
    error: query.error,
  }
}
