# react-example
React + Webpack + Babel + React-Router


#### Issue record:
1. Refreshing page gives Cannot GET /page_url in react-router 2.
 
* Configuring your Webpack server to expect the routes
```js
 devServer: {
    contentBase: './',
    historyApiFallback: true
  };
```
* Can also be set from CLI with the flag --history-api-fallback.

[see Resources](http://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually)