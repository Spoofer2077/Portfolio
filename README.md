# 🎨 Portfolio Website

A minimalist, modern portfolio website for UI/UX designers. Built with pure HTML, CSS, and JavaScript - no frameworks required!

![Portfolio Preview](https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80)

## ✨ Features

- **Modern Minimalist Design** - Clean, professional aesthetic
- **Fully Responsive** - Looks great on all devices
- **No Frameworks** - Pure HTML/CSS/JS for easy customization
- **Fast Loading** - Optimized for performance
- **Easy to Deploy** - GitHub Pages ready

## 📁 Project Structure

```
portfolio/
├── index.html          # Homepage
├── works.html          # Portfolio/Projects page
├── about.html          # About me page
├── contact.html        # Contact page with form
├── css/
│   ├── style.css       # Main styles
│   └── additional.css  # Additional page-specific styles
├── js/
│   └── main.js         # Interactive features
└── README.md           # This file
```

## 🚀 Quick Start

### Local Development

1. **Open the project folder**
   ```bash
   cd portfolio
   ```

2. **Open `index.html` in your browser**
   - Simply double-click the file
   - Or use a live server extension in VS Code

### Customization Guide

#### 1. Update Personal Information

**In `index.html`:**
- Hero section: Change "Crafting digital experiences..." text
- Stats section: Update project counts, client numbers, years experience

**In `works.html`:**
- Replace placeholder images with your actual work
- Update project titles, descriptions, and links
- Modify category tags as needed

**In `about.html`:**
- Update your bio text
- Change work experience timeline
- Update skills lists
- Add your photo

**In `contact.html`:**
- Update email address
- Change location
- Modify social media links

#### 2. Change Images

All images are currently using Unsplash placeholders. To use your own:

1. Add images to the project folder (or use external URLs)
2. Update the `src` attributes in HTML files:
   ```html
   <img src="images/your-image.jpg" alt="Project name">
   ```

**Recommended image sizes:**
- Hero image: 1200x600px
- Work cards: 800x500px
- About photo: 400x500px

#### 3. Change Colors

In `css/style.css`, modify the CSS variables:

```css
:root {
    --color-bg: #ffffff;           /* Background color */
    --color-text: #1a1a1a;         /* Text color */
    --color-accent: #2563eb;       /* Accent color */
    --color-text-secondary: #666666; /* Secondary text */
}
```

#### 4. Add/Remove Pages

To add a new page:
1. Copy `contact.html` and rename it
2. Update the navigation in ALL HTML files
3. Add new CSS in `additional.css` if needed

To remove a page:
1. Delete the HTML file
2. Remove the link from navigation in all remaining pages

## 🎯 Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a GitHub repository**
   - Go to [GitHub](https://github.com)
   - Create a new public repository (e.g., "portfolio")

2. **Upload your files**
   - Click "uploading an existing file"
   - Drag and drop all files from your `portfolio` folder
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Under "Source", select "main" branch
   - Click Save

4. **Your site will be live at**
   ```
   https://yourusername.github.io/portfolio/
   ```

### Method 2: Using Git CLI

```bash
# Navigate to your project
cd portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio setup"

# Create repository on GitHub, then:
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main

# Enable GitHub Pages in repository settings
```

### Method 3: Using GitHub Desktop

1. Open GitHub Desktop
2. File → Add Local Repository
3. Select your `portfolio` folder
4. Publish to GitHub
5. Go to repository Settings → Pages → Enable

## 📱 Custom Domain (Optional)

To use a custom domain:

1. Go to your repository Settings → Pages
2. Under "Custom domain", enter your domain
3. Create appropriate DNS records:
   - For apex domain: A record pointing to GitHub IPs
   - For subdomain: CNAME record

## 🛠️ Tools Used

- **Design**: Figma, Sketch
- **Development**: VS Code
- **Fonts**: Inter (Google Fonts)
- **Icons**: CSS-styled elements (no external icon library)

## 📄 License

This template is free to use for personal and commercial projects.

## 🤝 Contributing

Suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

---

Made with ❤️ by [Your Name]
