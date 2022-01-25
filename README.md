# Simple SSR (without Next.JS) with React.JS, React Router and Redux

1. Render React components on the server.
2. Hydrate React app.
3. Use `BrowserRouter` for the client and `StaticRouter` for the server.
4. Create separate stores for the client and for the server.
5. Add `loadData` function to components. Call `loadData` on the components that need to be rendered on the requested route, wait for all the data to be fetched and return the markup.
6. Hydrate Redux store.
