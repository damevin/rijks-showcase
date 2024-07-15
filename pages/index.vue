<script lang="ts" setup>
const {
  updateSearchQuery,
  collections,
  loadMore,
  hasNextPage,
  isFetchingNextPage,
  isLoading,
  isError,
  isFetching,
  error,
} = useCollections()

const query = ref<string>('')
const searchInputPlaceholder = 'Search for a collection'

const displayMoreText = computed(() => {
  if (isFetchingNextPage.value)
    return 'Loading'
  if (hasNextPage.value)
    return 'Load more'
  return 'No more results'
})

function handleUpdateSearchQuery(newQuery: string) {
  query.value = newQuery
  updateSearchQuery(newQuery)
}

useSeoMeta({
  title: 'Rijks - Collections',
  description: 'Discover the best collections from the Rijks museum',
})
</script>

<template>
  <div class="main">
    <header class="main__header">
      <UiSearchbar
        v-model="query"
        :loading="isLoading"
        :placeholder="searchInputPlaceholder"
        @update:search="updateSearchQuery(query)"
      >
        <template #button>
          <UiBtn
            variant="fab"
            aria-label="Search for a collection"
            @click="updateSearchQuery(query)"
          >
            <Icon v-if="!isLoading" name="ic:outline-search" />
            <Icon v-else name="svg-spinners:wind-toy" />
          </UiBtn>
        </template>
      </UiSearchbar>
    </header>
    <div v-if="isError">
      An error occurs : {{ error }}
    </div>
    <div v-if="!isError && !isLoading && !collections?.length">
      <CollectionNoResults @update:query="handleUpdateSearchQuery" />
    </div>
    <div>
      <CollectionGrid v-if="!isLoading">
        <div v-for="(collection, index) in collections" :key="collection?.id">
          <LazyCollectionCard
            v-if="collection"
            :collection="collection!"
            :style="{ animationDelay: `${index * 0.1}s` }"
            @click="navigateTo(`/collection-${collection?.objectNumber}`)"
          />
        </div>
        <template v-if="isFetchingNextPage">
          <div v-for="i in 10" :key="`skeleton-${i}`" aria-hidden="true">
            <SkeletonCard />
          </div>
        </template>
      </CollectionGrid>

      <template v-if="isLoading || (isFetching && !collections?.length)">
        <CollectionGrid aria-hidden="true">
          <div v-for="i in 20" :key="`initial-skeleton-${i}`">
            <SkeletonCard />
          </div>
        </CollectionGrid>
      </template>
      <div v-if="collections?.length" class="main__footer">
        <UiBtn
          v-if="hasNextPage && !isFetchingNextPage"
          :loading="isFetchingNextPage"
          variant="secondary"
          aria-label="Load more collections"
          @click="loadMore"
        >
          {{ displayMoreText }}
          <Icon v-if="isFetching" name="svg-spinners:wind-toy" />
        </UiBtn>
        <span v-else>No more results</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: 1rem;
  justify-content: start;
  overflow-x: scroll;
}

.main__header {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  justify-content: start;
}

.main__footer {
  display: flex;
  justify-content: center;
  padding: 2rem;
}
</style>
