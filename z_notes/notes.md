Beyond Static With Gatsby & Apollo (Jason Lengstorf)
https://www.youtube.com/watch?v=wNUg1jpj9T0

- load data from anywhere using APIs
- use multiple data sources
- JAM stack

==

tame content mesh

- centralize data with graphql
- optimize assets

==

go static

- blazing fast
- put files on can, and let can handle scaling

==

gatsby

- node APIs load any data source into GraphQL
- bind data at build time when generating static assets
- optimize static assets - prefetching, code splitting, lazy loading
- deploy to CDN
- rehydrate to a React app in the browser

==

static assets != static app

gatsby sites are react apps

gatsby apps are dynamic

==

gatsby store

- at build time, pull in shopify product info
  - early bind product info, optimize images, product info is SEO available
- client side
  - auth0 for user management
  - shopify buy SDK to handle adding things to cart, and shopify checkout
- user pages
  - make async calls to GitHub that show what issues need help and user contributions
  - user pages not built on server
  - use react routes, react app

==

gatsby comes with a router

gatsby uses files in the pages directory as routes

can’t use apollo provider on a page, because we would end up mounting and unmounting the provider on every route change

gatsby allows for wrapped root element API call

when gatsby app starts, it wraps entire app in an apollo provider
