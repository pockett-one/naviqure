# NaviQure - Static Export & Deployment Guide

This guide explains how to generate static HTML/CSS files from the NaviQure Next.js project and deploy them to various hosting platforms.

---

## Prerequisites

- Node.js 18+ installed
- Project dependencies installed (`npm install`)

---

## Building Static Files

### Step 1: Build the Static Site

Run the following command in the project root:

```bash
npm run build
```

This will:
- Generate optimized production files
- Create static HTML for all pages
- Bundle CSS and JavaScript
- Output everything to the `out/` directory

### Step 2: Test Locally (Optional but Recommended)

**⚠️ Important:** You cannot open `index.html` directly from the file system (using `file://` protocol) because Next.js uses absolute paths for assets. You must use a local web server.

**Option 1: Using npm script (Recommended)**
```bash
npm run preview
```

**Option 2: Using serve directly**
```bash
npx serve out -p 3000
```

**Option 3: Using Python (if installed)**
```bash
cd out
python3 -m http.server 3000
```

Then open `http://localhost:3000` in your browser and verify:
- ✅ All pages load correctly
- ✅ Animations work (Framer Motion)
- ✅ Cookie consent banner appears and functions
- ✅ Navigation works
- ✅ Images display properly
- ✅ Responsive design works on mobile
- ✅ CSS and JavaScript load correctly

### Step 3: Package for Delivery

Create a zip file of the static output:

```bash
cd out
zip -r naviqure-static-site.zip .
cd ..
```

Or on Windows:
```powershell
Compress-Archive -Path out\* -DestinationPath naviqure-static-site.zip
```

---

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel:**
- Built specifically for Next.js
- Free tier available
- Automatic HTTPS
- Global CDN
- Zero configuration

**Steps:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts to deploy
4. Get instant production URL

**For Client:**
- Share the Vercel project
- Client can manage via Vercel dashboard
- Automatic deployments on git push

---

### Option 2: Netlify

**Why Netlify:**
- Free tier with generous limits
- Easy drag-and-drop deployment
- Automatic HTTPS
- Form handling built-in

**Steps:**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `out/` folder
3. Site is live instantly

**Or via CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=out
```

---

### Option 3: Traditional Web Server (Apache/Nginx)

**Requirements:**
- Web server with HTTPS enabled
- Access to server root directory

**Apache (.htaccess):**

Create `.htaccess` in the `out/` directory:

```apache
# Enable HTTPS redirect
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle client-side routing
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

**Nginx Configuration:**

```nginx
server {
    listen 80;
    server_name naviqure.ai www.naviqure.ai;
    
    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name naviqure.ai www.naviqure.ai;
    
    # SSL certificates
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    
    root /var/www/naviqure/out;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

**Deployment Steps:**
1. Upload contents of `out/` to server root
2. Configure web server (Apache/Nginx)
3. Ensure HTTPS is enabled
4. Test the deployment

---

### Option 4: AWS S3 + CloudFront

**Why AWS:**
- Highly scalable
- Pay-as-you-go pricing
- Global CDN with CloudFront
- Enterprise-grade reliability

**Steps:**

1. **Create S3 Bucket:**
```bash
aws s3 mb s3://naviqure-website
```

2. **Upload Files:**
```bash
aws s3 sync out/ s3://naviqure-website --delete
```

3. **Enable Static Website Hosting:**
```bash
aws s3 website s3://naviqure-website --index-document index.html --error-document index.html
```

4. **Set Bucket Policy (Public Read):**
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::naviqure-website/*"
  }]
}
```

5. **Create CloudFront Distribution** (for HTTPS and CDN)
6. **Point Domain to CloudFront**

---

### Option 5: GitHub Pages

**Why GitHub Pages:**
- Free for public repositories
- Easy integration with GitHub
- Automatic deployments

**Steps:**

1. Create a new branch: `gh-pages`
2. Copy `out/` contents to `gh-pages` branch
3. Push to GitHub
4. Enable GitHub Pages in repository settings
5. Site will be live at `https://username.github.io/naviqure`

**Or use GitHub Actions for automatic deployment:**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

---

## Post-Deployment Checklist

After deploying, verify:

- [ ] Site loads on HTTPS
- [ ] All pages are accessible
- [ ] Images load correctly
- [ ] Cookie consent banner works
- [ ] Navigation functions properly
- [ ] Mobile responsive design works
- [ ] Forms submit correctly (if applicable)
- [ ] Analytics tracking works (if configured)
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate is valid

---

## Troubleshooting

### Issue: Images not loading
**Solution:** Ensure `images.unoptimized: true` is set in `next.config.ts`

### Issue: 404 errors on page refresh
**Solution:** Configure server to serve `index.html` for all routes (see server configs above)

### Issue: CSS not loading
**Solution:** Check that `trailingSlash: true` is set in `next.config.ts`

### Issue: JavaScript errors
**Solution:** Test the build locally with `npx serve out` before deploying

---

## Client Handoff Package

When delivering to the client, include:

1. ✅ `naviqure-static-site.zip` (the `out/` folder contents)
2. ✅ This deployment guide
3. ✅ `.htaccess` or Nginx config (if using traditional hosting)
4. ✅ List of environment variables (if any)
5. ✅ Contact information for support

---

## Updating the Site

To make changes and redeploy:

1. Make code changes in the source
2. Run `npm run build`
3. Test with `npx serve out`
4. Deploy new `out/` folder contents
5. Clear CDN cache if using CloudFront/Netlify/Vercel

---

## Performance Tips

- ✅ Enable gzip/brotli compression on server
- ✅ Set proper cache headers for static assets
- ✅ Use a CDN (CloudFront, Cloudflare, etc.)
- ✅ Optimize images before building
- ✅ Enable HTTP/2 on server
- ✅ Minify HTML/CSS/JS (done automatically by Next.js)

---

## Support

For questions or issues:
- Check Next.js documentation: https://nextjs.org/docs
- Review this guide's troubleshooting section
- Contact development team

---

**Last Updated:** 2026-01-09
