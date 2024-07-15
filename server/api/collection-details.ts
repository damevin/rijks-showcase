import type { MuseumApiResponse } from '~/types/collections.types'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)

  const { q } = query
  const url = `${config.public.apiUrl}/${q}?key=${config.apiKey}&format=json`

  try {
    const response = await $fetch(url)
    return response
  }
  catch (error) {
    console.error('Error fetching collections:', error)
    throw createError({
      statusCode: 500,
      statusMessage: `Error fetching collection detail ${error}`,
    })
  }
})
