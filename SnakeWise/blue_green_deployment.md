# Blue-Green Deployment Strategy

## What is it?

Blue-Green Deployment is a method to safely update apps without downtime.

You run two versions of your app:
- 🟦 Blue = Current version (live)
- 🟩 Green = New version (testing)

You first deploy updates to the Green version.
- You test it to make sure everything works.
- If it works well, you switch all user traffic to Green.

If something goes wrong, you can easily go back to Blue.

## Why it’s useful:
- No downtime
- Easy rollback if something breaks
- Safe way to push new changes

## How I would use it in real life:

In a real-world setup with a proper cloud host (like AWS), I would:

1. Set up Blue and Green environments
2. Use a load balancer to control which version users see
3. Deploy updates to Green
4. Test it fully
5. Switch traffic to Green
6. If needed, switch back to Blue quickly

For this project, since I’m using Vercel (which doesn’t support full Blue-Green setup), I simulate this using different Git branches (dev, staging, main) to test and release code step by step.
