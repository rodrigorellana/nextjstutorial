This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

________________________________________________________________

https://nextjs.org/learn/basics/data-fetching/blog-data


https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticprops


https://nextjs.org/learn/basics/dynamic-routes/render-markdown

https://nextjs.org/learn/basics/dynamic-routes/polishing-index-page


DEBUG: 
https://platzi.com/clases/1991-next/30611-creando-y-consumiendo-nuestra-propia-api/
dev : node-options=--'inspect' next
chrome://inspect
devtools


restart typescript when modifinc tsconfigjson
https://platzi.com/clases/1991-next/30614-path-alias/



isomorphic-unfetch
para reemplazar el fetch para que funke en otros y todos los navegadores
https://platzi.com/clases/1991-next/30616-finalizando-las-paginas/


start contentful-airtable-nestjs tutorial
https://app.contentful.com/spaces/1prviluf4wt3/content_types/ataraxiaForm/fields

contentful create account, create content model, go to settings - api keys

done:
https://egghead.io/lessons/cloudflare-deploy-a-next-js-and-contentful-project-to-cloudflare-pages

linked cloudflare pages with github nextjstutorial created and env variables setted from contentful into cloudflare pages configuration

solution for /images akami:
https://stackoverflow.com/questions/65487914/no-exportpathmap-found-in-next-config-js-generating-map-from-pages
https://github.com/vercel/next.js/issues/18356
https://uploadcare.com/blog/next-js-image-optimization/
https://nextjs.org/docs/basic-features/image-optimization
https://nextjs.org/docs/api-reference/next/image#built-in-loaders

https://community.cloudflare.com/t/next-js-app-showing-error-while-deploying-to-cloudflare-pages/280183/1

________________________________________________


add deploy hook (no funciono como el video pero si tiene interaccion con el hook de deploy)
https://egghead.io/lessons/cloudflare-set-up-a-deploy-webhook-in-cloudflare-pages


airtable
https://egghead.io/lessons/cloudflare-create-environment-variables-with-cloudflare-wrangler

wrangler generate airtable-function
cd airtable-function  
wrangler whoami

wrangler dev

edit tomls add the account id


env values
https://egghead.io/lessons/cloudflare-create-environment-variables-with-cloudflare-wrangler

generate api key 
https://airtable.com/account

then create:
wrangler secret put AIRTABLE_API_KEY 


make post to airtable api (without try)
https://egghead.io/lessons/cloudflare-make-a-post-request-to-the-airtable-api-with-a-handler-function

form submission:
https://egghead.io/lessons/cloudflare-create-an-airtable-form-submission-function

wrangler publish
https://egghead.io/lessons/cloudflare-publish-a-cloudflare-worker-and-submit-data-with-an-html-form
✨  Successfully published your script to
 https://airtable-function.rorellana.workers.dev

 