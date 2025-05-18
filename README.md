This is a [Next.js](https://nextjs.org) project# weather-map

## ArcGIS Integration

This project integrates the [ArcGIS JavaScript API](https://developers.arcgis.com/javascript/latest/) for interactive mapping.

### How it works
- The ArcGIS JS API is loaded dynamically in the browser (client-side only).
- The map is displayed via the `ArcGISMap` React component, centered on Hanoi, Vietnam by default.
- The component is rendered on the main page (`src/app/page.tsx`).

### Customizing the Map
- To change the initial map center or zoom, edit the `center` and `zoom` properties in `src/app/ArcGISMap.tsx`.
- You can further customize the map by following the [ArcGIS JS API documentation](https://developers.arcgis.com/javascript/latest/sample-code/).

### Troubleshooting
- The map only loads in the browser (not during server-side rendering).
- If you encounter issues, ensure you have a stable internet connection (the API is loaded from the Esri CDN).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
