<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/dub0dpenl/image/upload/v1731780157/Personal%20Logo/logo-white_e6fujz.png">
  <source media="(prefers-color-scheme: light)" srcset="https://res.cloudinary.com/dub0dpenl/image/upload/v1731780152/Personal%20Logo/logo-dark_qqwrqu.png">
  <img alt="Siam Ahnaf" src="https://res.cloudinary.com/dub0dpenl/image/upload/v1731780152/Personal%20Logo/logo-dark_qqwrqu.png" height="auto" width="240">
</picture>

## use-rss-medium
Get your latest medium article in react. A npm package to format medium rss post articles into json formate in a react application.

## Installation
- `npm i use-rss-medium`
- `yarn add use-rss-medium`

## Usage
```tsx
import { useMedium } from 'use-rss-medium';

const Articles = () => {
    const articles = useMedium("cabbageweb");

    return (
      <ul>
        {articles.map(article => (
          <li key={article.guid}>
            <a href={article.link}>{article.title}</a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    );
};
```

## Remarks
### Proxy
This project makes use of a free Proxy service to access the Medium API. If for any reason you want to use another service then you can specify it in the configuration paramters
```ts
const articles = useMedium("cabbageweb", {
  proxy: "https://my-custom-proxy.com/"
});
```
The above configuration will result in the following endpoint: `https://my-custom-proxy.com?url=https://medium.com/feed/@cabbageweb`.
