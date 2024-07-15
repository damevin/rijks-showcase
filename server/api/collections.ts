import type { MuseumApiResponse } from '~/types/collections.types'

export default defineEventHandler(async (event): Promise<MuseumApiResponse> => {
  const config = useRuntimeConfig()
  const query = getQuery(event)

  const { q, p = 1, ps = 20 } = query

  const url = `${config.public.apiUrl}?key=${config.apiKey}&q=${q}&ps=${ps}&p=${p}&imgonly=true`

  try {
    const response = await $fetch(url) as MuseumApiResponse
    return response
  }
  catch (error) {
    console.error('Error fetching collections:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Error fetching collections',
    })
  }
})
