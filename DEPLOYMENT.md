# Deployment Guide - GitHub Actions to Render

This guide explains how to set up automatic deployment from GitHub to Render using GitHub Actions.

## Prerequisites

1. A GitHub repository with your Angular portfolio
2. A Render account (https://render.com)
3. A Render service already created (Static Site or Web Service)

## Setup Instructions

### Step 1: Get Your Render API Key

1. Log in to your Render dashboard
2. Go to **Account Settings** → **API Keys**
3. Click **Create API Key**
4. Copy the API key (you'll need this for GitHub secrets)

### Step 2: Get Your Render Service ID or Webhook URL

**Option A: Using Service ID (for API deployment)**
1. In your Render dashboard, go to your service
2. The Service ID is in the URL: `https://dashboard.render.com/web/[SERVICE_ID]`
   - Or you can find it in the service settings
3. Copy the Service ID

**Option B: Using Webhook URL (Simpler - Recommended)**
1. In your Render dashboard, go to your service
2. Navigate to **Settings** → **Webhooks**
3. Copy the **Deploy Hook URL** (or create one if it doesn't exist)
4. This is simpler than using API keys

### Step 3: Add GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add ONE of the following options:

   **Option A: Using Webhook (Simpler)**
   - **Name:** `RENDER_WEBHOOK_URL`
     **Value:** Your Render Deploy Hook URL from Step 2

   **Option B: Using API (More control)**
   - **Name:** `RENDER_API_KEY`
     **Value:** Your Render API key from Step 1
   - **Name:** `RENDER_SERVICE_ID`
     **Value:** Your Render Service ID from Step 2

### Step 4: Configure Render Service

#### Option A: Static Site (Recommended for Angular)

1. In Render dashboard, create a **Static Site**
2. Connect your GitHub repository
3. Configure:
   - **Build Command:** `npm ci && npm run build`
   - **Publish Directory:** `dist/angular-my-portfolio/browser` (or check your actual output directory)
   - **Node Version:** `20`

#### Option B: Web Service

1. Create a **Web Service** in Render
2. Use the `render.yaml` file in the repository
3. Or manually configure:
   - **Build Command:** `npm ci && npm run build`
   - **Start Command:** `npx serve -s dist/angular-my-portfolio/browser` (or use a static file server)

### Step 5: Verify Build Output Directory

Check where Angular outputs your build files:

```bash
npm run build
ls -la dist/
```

Update the `render.yaml` file if the output path is different.

### Step 6: Test the Workflow

1. Push a commit to your `master` or `main` branch
2. Go to **Actions** tab in GitHub
3. You should see the workflow running
4. Once complete, check your Render dashboard for the deployment

## Manual Deployment Trigger

You can also manually trigger the workflow:

1. Go to **Actions** tab in GitHub
2. Select **Deploy to Render** workflow
3. Click **Run workflow**
4. Select the branch and click **Run workflow**

## Troubleshooting

### Build Fails

- Check Node.js version matches (should be 20)
- Verify all dependencies are in `package.json`
- Check build logs in GitHub Actions

### Deployment Doesn't Trigger

- Verify secrets are set correctly
- Check Service ID is correct
- Ensure API key has proper permissions

### Wrong Output Directory

- Run `npm run build` locally
- Check the `dist/` folder structure
- Update `render.yaml` with correct path

## Alternative: Render Native GitHub Integration

If you prefer not to use GitHub Actions, Render has native GitHub integration:

1. In Render dashboard, connect your GitHub repository
2. Render will automatically deploy on every push
3. No GitHub Actions needed

This is simpler but doesn't use GitHub Actions as requested.

## Notes

- The workflow triggers on pushes to `master` or `main` branches
- You can modify the workflow to trigger on other branches
- The build runs in GitHub Actions, then triggers Render to deploy
- Make sure your Render service is configured to accept API-triggered deployments

