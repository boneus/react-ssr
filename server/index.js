const Express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;

const Home = require('@client/components/Home').default;

const app = Express();

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  res.send(content);
});

app.listen(3300, () => {
  console.log('Server is running on port 3300');
});
