# Simple SSR (without Next.js) with Express, React, React Router and Redux

## Stack

- Express 4.17
- React 17
- Redux Toolkit 1.7
- React Router 6.2
- React Helmet 6.1
- TailwindCSS 3
- Webpack 5.67
- Babel 7.16
- Axios 0.25

## Key moments

- I use path aliases `@client` and `@server` to avoid the relative paths' hell.
- The Redux store is organized according to the [**ducks**](https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-with-single-file-logic) pattern. **One module - one file** that includes all the action types and creators, reducers, middlewares, thunks, selectors, and hooks related to the module.
- The Redux modules use the `bindActionCreators` to call actions without the `dispatch`.
- `App` component acts like a layout for the whole application.
- The Admins page can be accessed only by a logged in user. **Unfortunately, something is wrong with the authentication on the remote API.**

## Description

These steps were performed to achive SSR without Next.js:

1. Render React components on the server.
2. Hydrate React app.
3. Use `BrowserRouter` for the client and `StaticRouter` for the render server.
4. Create separate stores for the client and for the render server.
5. Add `loadData` function to components. Call `loadData` on the components that need to be rendered on the requested route, wait for all the data to be fetched and return the markup.
6. Hydrate Redux store.
7. Setup a proxy on the render server which will handle only AJAX requests from our React app.
8. Setup separate instances of Axios for the client and for the render server.
9. Add HTTP slice to the store to track the 404 status and the redirects on the render server.
10. Add SEO stuff.
