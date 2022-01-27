# Simple SSR (without Next.JS) with React.JS, React Router and Redux

1. Render React components on the server.
2. Hydrate React app.
3. Use `BrowserRouter` for the client and `StaticRouter` for the server.
4. Create separate stores for the client and for the server.
5. Add `loadData` function to components. Call `loadData` on the components that need to be rendered on the requested route, wait for all the data to be fetched and return the markup.
6. Hydrate Redux store.
7. Setup a proxy on the render server which will handle only AJAX requests from our React app.
8. Setup separate instances of Axios for the client and for the server.
9. Add HTTP slice to the store to track the 404 status and the redirects on the render server.
10. Add SEO
