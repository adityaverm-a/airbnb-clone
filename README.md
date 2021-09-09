# Airbnb Clone 
> for fun and learning purpose

This is an Airbnb Clone build with NextJS, Tailwind And MapBox.

Deployed it to the cloud with [Vercel](https://airbnb-clone-dusky-mu.vercel.app) 

PS~ I've plans to make it a full stack app in the future, with GraphQL and will try to figure out appropriate tech stack for this.

## Learnings

- Static Site Generation: Static Site Generation describes the process of compiling and rendering a website or app at build time. The output is a bunch of static files, including the HTML file itself and assets like JavaScript and CSS. With Static Site Generation, tools like Next.js try to render that page mostly like it would in the browser but at compile time. This gives us the ability to serve the entire content on first load. The scripts still hydrate the page during this process, but ideally with fewer changes or no changes at all.
I've used Static Site Generation for rendering the data on the index page.

- Server Side Rendering: When a user request a webpage, server prepares the page by fetching user-specific data and sends it to the user’s machine. The browser then construes the content and displays the page. Next.js builds the HTML page at build time and serves the pre-rendered page from server to browser with minimal JavaScript code and when page is loaded by browser, its JavaScript code runs and makes the page fully interactive.
I've used Server Side Rendering to render the search data.

- Implementing MapBox with Mapbox GL JS: Mapbox GL JS is a client-side JavaScript library for building web maps and web applications with Mapbox's modern mapping technology. You can use Mapbox GL JS to display Mapbox maps in a web browser or client, add user interactivity, and customize the map experience in your application. Use cases for Mapbox GL JS include:

  1. Visualizing and animating geographic data
  2. Querying and filtering features on a map
  3. Placing your data between layers of a Mapbox style
  4. Dynamically displaying and styling custom client-side data on a map
  5. 3D data visualizations and animations
  6. Adding markers and popups to maps programmatically

The "GL" in Mapbox GL JS refers to Mapbox GL, a graphics library that renders 2D and 3D Mapbox maps as dynamic visual graphics with OpenGL in any compatible web browser, without using additional plugins.
I implemented MapBox for realtime location for every data involved.

- Image Component and Image Optimization: Since version 10.0.0, Next.js has a built-in Image Component and Automatic Image Optimization. The Next.js Image Component, next/image, is an extension of the HTML <img> element, evolved for the modern web. The Automatic Image Optimization allows for resizing, optimizing, and serving images in modern formats like WebP when the browser supports it. This avoids shipping large images to devices with a smaller viewport. It also allows Next.js to automatically adopt future image formats and serve them to browsers that support those formats.
Automatic Image Optimization works with any image source. Even if the image is hosted by an external data source, like a CMS, it can still be optimized.


## Quick Start 🚀

### Install server dependencies

```bash
npm install
# or
yarn
```

### Run the development server

```bash
npm run dev
# or
yarn dev
```

