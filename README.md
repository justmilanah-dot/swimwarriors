# Swim Warriors — Static Website

This workspace contains a simple static website for Swim Warriors.

Getting started

- Serve locally with Python 3's simple HTTP server:

```bash
cd /workspaces/swimwarriors
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Notes and next steps

- CSS and JS have been split into `styles.css` and `scripts.js`.
- A contact form is included in `index.html` and uses Formspree; replace the placeholder `your_form_id` with your Formspree form ID.
- A GitHub Actions workflow is included to publish the site to a `gh-pages` branch when you push to `main` (file: `.github/workflows/deploy.yml`).

Deploy to GitHub Pages

1. Commit and push your code to the `main` branch of the `justmilanah-dot/swimwarriors` repository.
2. The workflow will run on push and create/update the `gh-pages` branch with the site contents.
3. In your repository settings -> Pages, set the source to the `gh-pages` branch and the root folder.

Form notes

- Sign up at https://formspree.io and create a form to get your `form_id`.
- Replace the action URL in the contact form with `https://formspree.io/f/your_form_id` (replace `your_form_id`).

Local preview

```bash
cd /workspaces/swimwarriors
python3 -m http.server 8000
# open http://localhost:8000
```



