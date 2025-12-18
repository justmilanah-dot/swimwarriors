# swimwarriors

This repository now contains a simple static website served from the `docs/` directory and a GitHub Actions workflow that deploys `docs/` to GitHub Pages on pushes to `main`.

## How to preview locally

- Open `docs/index.html` directly in your browser to preview the site locally.
- Or run a simple local server (Python):

  ```bash
  python3 -m http.server --directory docs 8000
  # Open http://localhost:8000
  ```

## Deployment

- The workflow `.github/workflows/pages.yml` publishes the `docs/` folder to GitHub Pages automatically when you push to `main`.
- If you prefer a custom domain, add a `CNAME` file in `docs/` and configure the domain in your GitHub Pages settings.

## Next steps

- If you'd like, I can create a development branch and open a PR with these changes, or commit directly to `main` and trigger the deployment. Which do you prefer?

---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Swim Warriors | Lessons & Shop</title>
  <meta name="description" content="Swim Warriors provides swim lessons in Dawsonville, GA and offers merchandise online. Join lessons or shop our gear today.">
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f4f8fb;
      color: #222;
      line-height: 1.6;
    }
    header {
      background: url('https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/330901403_1234567890_n.jpg') center/cover no-repeat;
      color: white;
      text-align: center;
      padding: 5rem 1rem;
    }
    header h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
      text-shadow: 2px 2px 6px rgba(0,0,0,0.5);
    }
    header p {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
    }
    .btn {
      background: #0077b6;
      color: white;
      padding: 0.9rem 2rem;
      text-decoration: none;
      font-weight: bold;
      border-radius: 5px;
      margin: 0.5rem;
      display: inline-block;
    }
    section {
      padding: 3rem 1.5rem;
      max-width: 1100px;
      margin: auto;
    }
    h2 {
      text-align: center;
      margin-bottom: 2rem;
    }
    .grid {
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    .card {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 6px 15px rgba(0,0,0,0.05);
    }
    .gallery {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    .gallery img {
      width: 100%;
      border-radius: 8px;
    }
    iframe {
      width: 100%;
      border: none;
      border-radius: 8px;
    }
    footer {
      background: #0077b6;
      color: white;
      text-align: center;
      padding: 2rem 1rem;
      font-size: 0.9rem;
    }
    footer a {
      color: #ffdd00;
      text-decoration: none;
      margin: 0 0.5rem;
    }
  </style>
</head>
<body>

<header>
  <h1>Swim Warriors</h1>
  <p>Learn to swim safely in Dawsonville, GA | Join our classes or shop gear online</p>
  <a href="#lessons" class="btn">View Lessons</a>
  <a href="#shop" class="btn">Visit Shop</a>
</header>

<section id="lessons">
  <h2>Swim Lessons & Programs</h2>
  <p style="text-align:center; max-width:850px; margin:auto;">
    Swim Warriors provides year-round swim lessons in Dawsonville, GA. Our certified instructors teach survival swimming, stroke technique, and water safety for all ages. Join our classes today and gain confidence in the water.
  </p>
  <div class="grid">
    <div class="card">
      <h3>Beginner Lessons</h3>
      <p>Start swimming with foundational skills in a safe and supportive environment.</p>
    </div>
    <div class="card">
      <h3>Intermediate & Advanced</h3>
      <p>Enhance strokes, build endurance, and learn water safety skills.</p>
    </div>
    <div class="card">
      <h3>Private Lessons</h3>
      <p>One-on-one instruction tailored to individual needs and pace.</p>
    </div>
  </div>
</section>

<section id="gallery">
  <h2>Photos From Our Classes</h2>
  <div class="gallery">
    <!-- Replace these src links with actual Instagram images from public posts -->
    <img src="https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/330901403_1234567890_n.jpg" alt="Swim class 1">
    <img src="https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/331234567_1234567891_n.jpg" alt="Swim class 2">
    <img src="https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/331345678_1234567892_n.jpg" alt="Swim class 3">
    <img src="https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/331456789_1234567893_n.jpg" alt="Swim class 4">
  </div>
</section>

<section id="shop">
  <h2>Shop Our Gear</h2>
  <p style="text-align:center;">Check out our official Swim Warriors merchandise. Click any item to purchase directly from our online store.</p>
  <div class="grid">
    <div class="card">
      <h3>Swim Cap</h3>
      <a href="https://www.swimwarriorsshop.com/product/swim-cap" target="_blank">
        <img src="https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/332234567_1234567894_n.jpg" alt="Swim Cap">
      </a>
    </div>
    <div class="card">
      <h3>T-Shirt</h3>
      <a href="https://www.swimwarriorsshop.com/product/swim-shirt" target="_blank">
        <img src="https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/332345678_1234567895_n.jpg" alt="Swim T-Shirt">
      </a>
    </div>
    <div class="card">
      <h3>Swim Goggles</h3>
      <a href="https://www.swimwarriorsshop.com/product/goggles" target="_blank">
        <img src="https://instagram.fatl1-1.fna.fbcdn.net/v/t51.2885-15/332456789_1234567896_n.jpg" alt="Swim Goggles">
      </a>
    </div>
  </div>
</section>

<section id="location">
  <h2>Our Dawsonville Location</h2>
  <p style="text-align:center;">Visit our indoor swim facility in Dawsonville, GA for year-round classes and programs.</p>
  <iframe src="https://www.google.com/maps?q=Dawsonville,+GA+indoor+swim+facility&output=embed" height="400"></iframe>
</section>

<section style="text-align:center;">
  <h2>Contact & Registration</h2>
  <p>Email: <a href="mailto:info@swimwarriors.com">info@swimwarriors.com</a> | Phone: (706) 123-4567</p>
  <a href="#lessons" class="btn">Register for Lessons</a>
  <a href="#shop" class="btn">Shop Gear</a>
</section>

<footer>
  <p>© 2025 Swim Warriors | <a href="#location">Our Location</a> | <a href="#contact">Contact</a></p>
</footer>

</body>
</html>

