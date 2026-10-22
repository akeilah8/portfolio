# Akeilah Plummer — Portfolio

This is a React and Vite portfolio site. It is prepared to publish as a separate GitHub Pages project site at `https://akeilah8.github.io/portfolio/`.

## Run it on Windows

Open PowerShell in this folder, then run:

```powershell
npm install
npm run dev
```

Open the local address Vite prints, usually `http://localhost:5173/portfolio/`.

## Publish separately on GitHub Pages

1. Create a new public repository named `portfolio` under the `akeilah8` GitHub account. Leave “Add a README” unchecked because this project already has one.
2. In PowerShell, move into this project folder and run these commands:

   ```powershell
   git init -b main
   git add .
   git commit -m "Add my portfolio website"
   git remote add origin https://github.com/akeilah8/portfolio.git
   git push -u origin main
   ```

3. In the new repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys the site when you push. Once it succeeds, the site will be available at `https://akeilah8.github.io/portfolio/`.

Your existing `akeilah8.github.io` repository and site stay as they are.
