# BOSAH LABS DEPLOYMENT GUIDE

## Recommended Deployment Platform

- Use **Vercel** for this Next.js App Router project.
- Vercel provides first-class support for App Router, server components, and preview deployments.

## GitHub Repository Setup

1. Create a GitHub repository for `bosah-labs`.
2. Push the local repository to GitHub if not already connected.
3. Verify that the `main` branch is the primary deployment branch.

### Example Git commands

```bash
git remote add origin git@github.com:<org-or-user>/bosah-labs.git
git push -u origin main
```

## Vercel Project Linking

1. Log in to Vercel.
2. Create a new project and import the GitHub repository.
3. Select the `main` branch for production deploys.
4. Confirm the selected framework is `Next.js`.

## Auto-deploy on Push to Main

- Enable automatic deployments for the `main` branch in Vercel.
- Every push to `main` triggers a new deployment.
- Preview URLs are generated automatically for pull requests.

## Build Command

- Build command: `next build`
- Vercel automatically detects `next build` for Next.js, but explicitly configure it if needed.

## Output Directory Handling

- Output directory is managed by Next.js and Vercel.
- No custom `distDir` is required for standard App Router deployments.
- Vercel handles server and static output internally.

## Environment Variables Handling

1. In Vercel, open the project dashboard.
2. Go to `Settings` → `Environment Variables`.
3. Add required variables for production and preview environments.
4. Use the same variable names in local development and Vercel if the application expects them.

### Example environment variables

- `NEXT_PUBLIC_API_BASE_URL`
- `NEXT_PUBLIC_FEATURE_FLAG`
- `NODE_ENV`

## Validation

- After linking the GitHub repository, confirm that the first deployment succeeds.
- Review the deployment logs for build and runtime errors.
- Verify that the live OS interface is reachable on the Vercel URL.
