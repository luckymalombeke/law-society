# Law Society Website

This is a [Next.js](https://nextjs.org) project for a Law Society landing page. It includes responsive hero sections, card layouts, a news carousel, and Guardian news integration.

## Setup

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Create a local environment file:

```bash
cp .env.local.example .env.local
```

4. Add your Guardian API key to `.env.local`:

```dotenv
GUARDIAN_API_KEY=your_guardian_api_key_here
```

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000).

## API Used

This site uses the **Guardian Open Platform** API via a server-side route:
- Endpoint: `https://content.guardianapis.com/search`
- This project fetches news data from `/api/news`
- It requests fields: `thumbnail` and `trailText`

## How to get a Guardian API key

1. Visit https://open-platform.theguardian.com/
2. Sign up or log in.
3. Create a new API key under your account.
4. Copy the generated key.
5. Place it in `.env.local` as:

```dotenv
GUARDIAN_API_KEY=your_guardian_api_key_here
```

6. If deploying to Vercel, add the same variable under Project Settings → Environment Variables.

## Deployment on Vercel

If using Vercel, set the environment variable in the Vercel dashboard:
- Name: `GUARDIAN_API_KEY`
- Value: your API key
- Add it for `Production`, `Preview`, and `Development` if needed.

Then redeploy the project.

## Known issues

- `Missing GUARDIAN_API_KEY environment variable.` will occur if the key is not set.
- Do not commit `.env.local`; it contains secrets.
- Windows users may see `LF will be replaced by CRLF` warnings in Git.
- If `public/` contains new images, add only files you intend to track.
- The homepage uses dynamic news content, so the carousel is empty without a valid Guardian key.

## Commit history

For a cleaner commit history, use interactive rebase instead of a single merge commit:

```bash
git rebase -i HEAD~N
```

Replace `N` with the number of commits you want to clean up. Squash or reorder commits to keep history readable.

## Additional notes

- This project is built with Next.js App Router.
- The carousel includes autoplay, pause on hover, and accessible controls.
- The homepage sections use scroll reveal animations for a smoother entrance effect.
