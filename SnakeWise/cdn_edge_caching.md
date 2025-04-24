# CDN and Edge Caching

## What is a CDN?

A Content Delivery Network (CDN) is a group of servers placed in different locations around the world.

These servers store copies of your website files like images, styles, or scripts.

When a user visits your website:
- They get the files from the **closest** server (not the main one).
- This makes your app load **much faster**!

## What is Edge Caching?

Edge caching stores content at the "edge" (closer to the user).

- For example, Vercel automatically caches content at its edge locations.
- This helps reduce load time and improves performance.

## How I use it:

Since I use **Vercel**, it automatically enables CDN and edge caching.

To improve performance:
- I avoid unnecessary re-renders in my React app.
- I enable caching headers in my project settings (if needed).
- I test using tools like [https://pagespeed.web.dev](https://pagespeed.web.dev) to confirm performance.

This helps users around the world load the app quickly and smoothly.
