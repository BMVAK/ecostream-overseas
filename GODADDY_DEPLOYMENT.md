# Complete GoDaddy Deployment Guide

## Prerequisites
- GoDaddy hosting account with cPanel access
- Node.js installed on your local machine
- FTP client (optional, FileZilla recommended) or use cPanel File Manager

## Quick Start (5 Steps)

1. **Build:** `npm install && npm run build`
2. **Login:** Access your GoDaddy cPanel
3. **Upload:** Upload all files from `dist` folder to `public_html`
4. **Configure:** Ensure `.htaccess` is uploaded
5. **Test:** Visit your domain

---

## Detailed Deployment Steps

### Step 1: Build Your Project Locally

Open terminal in your project directory and run:

```bash
# Install dependencies (if not already installed)
npm install

# Build the production version
npm run build
```

This creates a `dist` folder with optimized files ready for production.

### Step 2: Access Your GoDaddy Hosting

1. Log in to your GoDaddy account at https://www.godaddy.com
2. Navigate to "My Products"
3. Find your hosting plan and click "Manage"
4. Click on "cPanel Admin" to access the control panel

### Step 3: Prepare the Hosting Directory

In cPanel File Manager:

1. Navigate to `public_html` directory
2. **Delete default files** (coming-soon.html, park page files, default index.html)
3. Leave `public_html` empty (or backup if you have existing content)

### Step 4: Upload Your Files

**Method A: Using cPanel File Manager (Recommended for beginners)**

1. In cPanel, open "File Manager"
2. Navigate to `public_html`
3. Click "Upload" button at the top
4. Select ALL files from your `dist` folder:
   - `index.html`
   - `.htaccess` (important!)
   - `assets` folder (entire folder)
   - All image files (favicon.svg, *.jpeg, *.png, etc.)
   - `robots.txt`
   - Any other files in `dist`
5. Wait for upload to complete (check progress bar)
6. Verify all files are present in `public_html`

**Method B: Using FTP Client (FileZilla)**

1. Download and install FileZilla from https://filezilla-project.org
2. Get your FTP credentials from GoDaddy:
   - In cPanel, search for "FTP Accounts"
   - Use the main account or create a new FTP account
3. Connect to your server:
   - Host: `ftp.yourdomain.com` (or IP provided by GoDaddy)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (FTP) or 22 (SFTP if supported)
4. In FileZilla:
   - Left side: Navigate to your project's `dist` folder
   - Right side: Navigate to `public_html`
   - Select all files in `dist` folder
   - Drag and drop to `public_html`
5. Wait for transfer to complete

### Step 5: Verify File Structure

Your `public_html` directory should now look like this:

```
public_html/
├── .htaccess                     # React Router configuration (CRITICAL!)
├── index.html                    # Main HTML file
├── robots.txt                    # SEO file
├── favicon.svg                   # Site icon
├── assets/
│   ├── index-[hash].css         # Styles
│   ├── index-[hash].js          # JavaScript bundle
│   └── [other assets]
├── 1.jpg.jpeg                   # Your images
├── 2.jpg.jpeg
├── 3.jpg.jpeg
├── 4.jpg.jpeg
├── Blush_Pink_World_Map_Travel_Agency_Logo.jpg.jpeg
├── image-copy.png
├── image-removebg-preview_(2).png
├── image.png
├── Screenshot_2026-03-25_at_11.26.33_PM.png
├── Screenshot_2026-03-25_at_11.31.25_PM.png
├── WhatsApp_Image_2026-03-30_at_12.47.31_PM.jpeg
├── WhatsApp_Image_2026-03-30_at_12.47.32_PM_(1).jpeg
├── WhatsApp_Image_2026-03-30_at_12.47.32_PM_(2).jpeg
└── WhatsApp_Image_2026-03-30_at_12.47.33_PM.jpeg
```

**CRITICAL:** Make sure `.htaccess` is uploaded! This file handles React Router routing.

### Step 6: Enable SSL Certificate (HTTPS)

1. In GoDaddy cPanel, search for "SSL/TLS Status" or "SSL Certificates"
2. Click "Install" or "Enable" for your domain
3. GoDaddy offers free SSL certificates through Let's Encrypt
4. Wait 10-15 minutes for the certificate to activate
5. After SSL is active, edit `.htaccess` in cPanel to force HTTPS:

Uncomment these lines in `.htaccess`:

```apache
# Force HTTPS (uncomment after SSL is installed)
<IfModule mod_rewrite.c>
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

### Step 7: Test Your Website

1. Visit your domain: `https://yourdomain.com`
2. Test all pages:
   - Home page
   - About section
   - Destinations
   - Gallery
   - Contact form
3. Test functionality:
   - Navigation links
   - Consultation form submission
   - WhatsApp chatbot button
   - Image loading
4. Test on different devices and browsers

---

## Environment Variables

Your website uses Supabase for the backend. The environment variables are automatically embedded during the build process.

**What happens:**
- Your `.env` file contains `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- When you run `npm run build`, Vite replaces all `import.meta.env.VITE_*` references with actual values
- The built JavaScript files in `dist/assets/` contain these values
- You DO NOT upload the `.env` file to GoDaddy
- The credentials are safely embedded in the JavaScript bundle

**Security:**
- The Supabase anon key is safe to expose in frontend code
- Your database is protected by Row Level Security (RLS) policies
- Never expose the service role key

---

## Troubleshooting

### Problem: Blank White Page

**Possible Causes:**
- Missing `.htaccess` file
- JavaScript errors in console

**Solutions:**
1. Check browser console (F12) for errors
2. Verify `.htaccess` is uploaded to `public_html`
3. Clear browser cache (Ctrl+Shift+Delete)
4. Check that `index.html` is in `public_html` root (not in a subfolder)

### Problem: 404 Error on Page Refresh

**Cause:** `.htaccess` not working or missing

**Solutions:**
1. Verify `.htaccess` is uploaded
2. Ensure mod_rewrite is enabled on your hosting (it usually is by default on GoDaddy)
3. Contact GoDaddy support if issue persists

### Problem: Images Not Loading

**Causes:**
- Images not uploaded
- Incorrect file paths

**Solutions:**
1. Verify all image files are in `public_html`
2. Check that image filenames match exactly (case-sensitive)
3. Open browser console to see which images are failing
4. Re-upload missing images

### Problem: Consultation Form Not Working

**Causes:**
- Supabase connection issues
- Database tables not created

**Solutions:**
1. Check browser console for errors
2. Verify Supabase is running (check Supabase dashboard)
3. Ensure database migrations were applied
4. Test Supabase connection directly

### Problem: WhatsApp Chatbot Not Working

**Causes:**
- Edge functions not deployed
- Missing environment variables in Supabase

**Solutions:**
1. Verify Edge Functions are deployed in Supabase dashboard
2. Check browser console for API errors
3. Test Edge Function endpoints directly

### Problem: Site Works on www but Not on Root Domain

**Solution:**
1. In GoDaddy Domain Settings
2. Add a redirect from root domain to www (or vice versa)
3. Or set up both in DNS settings

### Problem: Mixed Content Errors (HTTPS)

**Cause:** Loading HTTP resources on HTTPS page

**Solution:**
1. Ensure all external resources use HTTPS
2. Check that Supabase URL uses HTTPS
3. Force HTTPS in `.htaccess` (see Step 6)

---

## Updating Your Website

When you make changes to your code:

1. **Build Locally:**
   ```bash
   npm run build
   ```

2. **Backup Current Version (Optional):**
   - In cPanel File Manager, compress `public_html` folder
   - Download the backup

3. **Upload New Files:**
   - Delete old files from `public_html` (EXCEPT `.htaccess`)
   - Upload new files from fresh `dist` folder

4. **Clear Cache:**
   - Clear your browser cache
   - Test the changes

**Pro Tip:** Only upload changed files to save time. Compare file hashes to see what changed.

---

## Performance Optimization

### Already Configured (via .htaccess)

The `.htaccess` file includes:
- GZIP compression for faster loading
- Browser caching for images (1 year)
- Browser caching for CSS/JS (1 month)
- Security headers

### Additional Optimizations

1. **Image Optimization:**
   - Use compressed images (TinyPNG, ImageOptim)
   - Convert to WebP format for better compression
   - Use appropriate image sizes

2. **CDN (Optional):**
   - Consider Cloudflare for free CDN
   - Speeds up global loading times

3. **Monitoring:**
   - Use Google PageSpeed Insights: https://pagespeed.web.dev
   - Check loading times and get recommendations

---

## DNS and Domain Configuration

### Using a Domain You Already Own

If your domain is registered elsewhere but hosted on GoDaddy:

1. Update nameservers to GoDaddy's nameservers
2. Or update A record to point to GoDaddy server IP
3. Wait 24-48 hours for DNS propagation

### Using a GoDaddy Domain

If your domain is registered with GoDaddy:

1. Domain should automatically point to your hosting
2. In cPanel, add the domain under "Addon Domains" if needed
3. Ensure the domain document root is `/public_html`

---

## Supabase Configuration

Your app uses Supabase for:
- Consultation form submissions (database)
- Chat messages (realtime database)
- Edge functions (email sending, WhatsApp integration)

**Ensure Supabase is Configured:**

1. Verify database tables exist:
   - `consultation_requests`
   - `chat_messages`

2. Verify RLS policies are enabled

3. Verify Edge Functions are deployed:
   - `send-consultation-email`
   - `send-whatsapp-message`

Check these in your Supabase dashboard at https://supabase.com

---

## Security Checklist

- [ ] SSL certificate installed and HTTPS enforced
- [ ] `.env` file NOT uploaded to server
- [ ] Using anon key (not service role key) in frontend
- [ ] Database has Row Level Security enabled
- [ ] `.htaccess` includes security headers
- [ ] File permissions are correct (644 for files, 755 for directories)
- [ ] No sensitive data in frontend code
- [ ] CORS configured correctly for API calls

---

## Cost Considerations

**GoDaddy Hosting:**
- Shared hosting: ~$2-10/month
- Supports unlimited traffic (usually)
- Free SSL certificate included

**Supabase:**
- Free tier: 500MB database, 2GB bandwidth
- Should be sufficient for small to medium traffic
- Monitor usage in Supabase dashboard

---

## Support Resources

**GoDaddy Support:**
- Live chat: Available in your GoDaddy account
- Phone: Check GoDaddy website for current number
- Help Center: https://www.godaddy.com/help

**Technical Issues:**
- Check browser console (F12) for errors
- Review this guide's troubleshooting section
- Check Supabase status: https://status.supabase.com

**Supabase Support:**
- Documentation: https://supabase.com/docs
- Community: https://github.com/supabase/supabase/discussions
- Status page: https://status.supabase.com

---

## Success Checklist

- [ ] Site loads at your domain
- [ ] All pages accessible (Home, About, Destinations, Gallery, Contact)
- [ ] Navigation works correctly
- [ ] Images load properly
- [ ] Consultation form submits successfully
- [ ] WhatsApp button works
- [ ] Site works on mobile devices
- [ ] HTTPS enabled
- [ ] No console errors
- [ ] Fast page load times (test with PageSpeed Insights)

---

## Next Steps After Deployment

1. **Submit to Search Engines:**
   - Google Search Console: https://search.google.com/search-console
   - Bing Webmaster Tools: https://www.bing.com/webmasters

2. **Set Up Analytics:**
   - Google Analytics
   - Monitor traffic and user behavior

3. **Set Up Monitoring:**
   - UptimeRobot (free uptime monitoring)
   - Get alerts if site goes down

4. **Create Backups:**
   - Regular backups of `public_html`
   - Export Supabase database regularly

5. **Test Everything:**
   - Test on different browsers (Chrome, Firefox, Safari, Edge)
   - Test on mobile devices (iOS, Android)
   - Ask friends/family to test

---

**Congratulations!** Your EcoStream Overseas website is now live on GoDaddy!
