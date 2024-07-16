# Frontend Technical Test

You can see the live version of the project [here](https://frontend-technical-test.netlify.app/)

## Installation and Setup

This project use [pnpm](https://pnpm.io/) as package manager, you can install it with the following command if you don't have it already:
```
npm install -g pnpm
```

1. Clone this repository
```
git clone https://github.com/damevin/rijks-showcase.git
```

2. Install dependencies
```
pnpm install
```

3. Create a `.env` file at the root of the project:
```
cp .env.example .env
```

4. Add env. variables to the `.env` file:
<!-- The private API key will be provided by email to the reviewer -->
```
NUXT_API_KEY=''
NUXT_PUBLIC_API_URL='https://www.rijksmuseum.nl/api/en/collection'
```

4. Run the project
```
pnpm dev
```

5. Build for production
```
pnpm build
```

## Technical Choices

### Frontend Technology

I chose to use [Vue.js](https://vuejs.org/) with [Nuxt](https://nuxt.com/) and Typescript for this project for the following reasons:
- Vue.js offers an excellent balance of performance, ease of learning, and flexibility, making it ideal for rapidly developing reactive and maintainable web applications.
- Nuxt provides a powerful framework for building server-side rendered applications with Vue.js, which is ideal for SEO and performance, and very pleasant for developper experience.
- Typescript adds static typing to the project, which helps to catch errors early and improve code quality.

### Project Architecture

The project architecture is organized as follows:

- Store:
  - The store folder contains the Pinia store for managing the application state, including the list of favorite collections.
- Composables:
  - All the logic for fetching data and managing state is encapsulated in composables, which are reusable functions that can be easily imported and used in components.
- Server:
  - The server folder contains the Nitro server routes for fetching data from the Rijksmuseum API.
- Components:
  - The components folder contains all the reusable components used in the application, such as the gallery, search bar, and image card.
- Pages:
  - The pages folder contains the main pages of the application, such as the home page (gallery) and collection detail page.

### API Requests, data fetching and cache policy

#### API Requests

For requests to the Rijksmuseum API, I used fetch with a nitro server **(provided by Nuxt)**:

This diagram illustrates the structure and flow of your two Nitro server routes:

<!-- Add schema of server here -->

- The Nuxt application interacts with the Nitro server.
- The Nitro server has two routes: collection-details and collections.
- Both routes use the runtime config for API URL and key.
- Both routes accept query parameters.
- Each route makes an API request and returns either the fetched data or an error.

Now, let me explain the advantages of using Nitro for data fetching in your Nuxt application:

- **Server-side processing:** Nitro allows you to perform data fetching on the server side, reducing the load on the client and improving initial page load times.
- **API key security:** By using Nitro, you can keep sensitive information like API keys on the server, enhancing security.
- **Centralized data fetching:** These server routes provide a centralized place for API calls, making it easier to manage and maintain your data fetching logic.
- **Error handling:** Server-side error handling allows you to manage and log errors more effectively, providing a better user experience.
- **Flexibility:** Nitro routes can transform or filter data before sending it to the client, allowing for more efficient data transfer and processing.
- **Scalability:** As your application grows, Nitro's server routes can be easily scaled and distributed to handle increased load.

#### Data Fetching and Cache Policy

I've implemented a cache policy for the data fetching, to avoid making the same request multiple times, and to improve the performance of the application:

For this need, I've used the [Vue Query](https://tanstack.com/query/latest/docs/framework/vue/overview) library, which provides a powerful and flexible way to manage data fetching and caching in Vue applications.

Key benefits of using [Vue Query](https://tanstack.com/query/latest/docs/framework/vue/overview) in this context:

- **Automatic Caching:** Vue Query automatically caches the results, reducing unnecessary API calls.
- **Stale-While-Revalidate:** With staleTime set, it serves cached data immediately while fetching fresh data in the background.
- **Pagination Support:** Built-in support for infinite querying simplifies implementation of "load more" functionality.
- **Loading and Error States:** Provides built-in states for loading, error handling, and fetching status.
- **Automatic Retries:** Vue Query automatically retries failed requests, improving reliability.

Let me show you in this diagram of the `useCollections` composable _(made fetch collections)_, how the cache policy works with Vue Query:

<!-- Add the schema of  -->

The `useCollections` function is a composable that encapsulates all the logic for fetching and managing collection data.

**Vue Query Setup:** It uses useInfiniteQuery from Vue Query to manage the data fetching, caching, and pagination.
**Infinite Querying:** The setup allows for infinite scrolling or "load more" functionality, fetching data in pages.
**Search Functionality:** It incorporates a searchQuery ref that can be updated to change the search parameters.
**API Integration:** The fetchCollections function makes requests to your Nitro server route /api/collections.
**Pagination Handling:** The getNextPageParam option in useInfiniteQuery determines if there's a next page to load.
**Data Transformation:** The collections computed property flattens the paged data for easy rendering.
**Exposed Functionality:** It returns various functions and reactive properties for components to use, such as loadMore, `updateSearchQuery`, and loading/error states.

In other words, the `useCollections` composable is a powerful tool for managing collection data in your Nuxt application, providing a flexible and efficient way to fetch, cache, and display data.

```typescript
/* We just have to import composable methods, it's super clean and easy-to-use  */
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
```

### State Management

I've implemented another feature for add a favorite image to a list, and display it in a separate page, so for this I've used a [pinia](https://pinia.vuejs.org/) store named `useCollectionsStore` to manage the state of the application:

The store maintains a reactive array of `FormatedCollection` objects, persists the data between sessions, and provides user feedback through toast notifications when items are added or removed. _(the data is persisted to local storage, if user clear his cache the data will diseapear)_

Here is a brief overview of the store's structure:

<!-- Add schema of the store here -->

### Styles and CSS

I used *vanilla CSS* to style the application:
- Each component have their own styles, we use scoped attribute
- I've used CSS variables for colors, to make it easier to change the theme of the application
- I've used some keyframes for animations, in a separate file

### Image Handling

To optimize image loading and display:
- I've used a [Nuxt Module](https://image.nuxt.com/usage/nuxt-img) to handle image optimization
- Each image is lazy loaded and optimized for performance, reformatted to webp and resized to the appropriate size for the device
- A placeholder is displayed while the image is rendering

Here is a brief overview of the image handling process:

<!-- Add schema of the image handling process here -->

In our example the image is very large, so we resize it to a smaller size and convert it to webp format, to improve performance and reduce the load time of the page.
The final user doesn't see the difference in search engine card preview, but the page load faster and the user experience is better.

And if the user want to see the full image, he can click on it and see the full image in good quality, in the dedicated page.

### Performance

To optimize application performance:
- The application is server-side rendered with Nuxt.
- The data fetching is managed with Vue Query, which provides caching and pagination.
- Images are lazy loaded and optimized for performance.
- Components for the gallery are lazy rendered too, to improve performance.

### Testing

I've made the choice to not include tests in this project, due to time constraints. However, I would normally include the following tests:
- Unit tests for components and store (_with Vitest_)[https://vitest.dev/]
- E2E tests for user interactions (_maybe with Playwright_)[https://vitest.dev/]

I think add tests is important to ensure the quality of the application and to prevent regressions, but in this case **I had to prioritize other aspects of the project**.

### Accessibility

To make the application accessible i've added a few good practices:
- Add alt text to images for screen readers.
- Use semantic HTML elements.
- Add aria attributes for interactive elements.
- Add aria-hidden for unwanted elements from the DOM.

## Challenges and Solutions

During development, I encountered the following challenges:

1. Images provided by **Rijksmuseum API** are not optimized for performance and are too large
   - Solution: I've implemented a module to optimize images and lazy load them, _an alternative solution would be to use a CDN to store the images and serve them faster, but this would require more time and resources._
2. Provide a great user experience for the gallery, with 'load more' feature and lazy loading
   - Solution: I've used Vue Query to manage the data fetching and caching, and implemented "infinite scrolling" for the gallery, _an alternative solution would be to use a virtual scroll list, but this would require more time and resources._
3. Deploy the application to a server and make it accessible to the public
   - Solution: I've deployed the application to Netlify, _an alternative solution would be to use a different hosting provider, but Netlify is a good choice for Nuxt applications._
4. Make the application ready for other developers to work on it
   - Solution: I've added a recommended eslint configuration, i've also implemented a git-hooks with Lint-staged to ensure that the code is clean and well formatted, _an alternative solution would be to use a pre-commit hook to run tests before committing, but this would require more time and resources._

## Future Improvements

If I had more time, I would consider the following improvements:
- Add virtual scroll list in for the gallery, for displaying large number of images and improving performance _(remove node from the DOM when they are not visible)_
- Add login/signup functionality to save favorite images to a user account instead of local storage
- Add tests for components and store, to ensure the quality of the application and prevent regressions
- Implementation of monitoring and logging tools to track the performance of the application and identify potential issues _(Sentry, Datadog....)_.
- Add i18n support for multiple languages, to make the application accessible to a wider audience
- Add CI/CD pipeline to automate the deployment/testing process and ensure the quality of the code

## Conclusion

In conclusion, I believe that the application meets the requirements of the project and provides a solid foundation for future development. I've used modern technologies and best practices to build a performant, maintainable, and user-friendly application. I've a little bit over-engineered the project, but I think it's a good way to show my skills and knowledge in modern front-end development.
