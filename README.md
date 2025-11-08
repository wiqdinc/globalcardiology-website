# Global Cardiology Website

## Overview
A professional, launch-ready static website for Global Cardiology, inspired by the Ontario Cardiology Center structure and designed with the brand's professional medical aesthetic.

## Website Structure

### Pages
1. **Home (index.html)** - Hero section with tagline, services preview, and call-to-action
2. **Services (services.html)** - Detailed information about all cardiac services:
   - Echocardiogram
   - ECG (Electrocardiogram)
   - Stress Echocardiogram
   - Holter Monitor
3. **Contact (contact.html)** - Contact form and clinic information
4. **Requisition (requisition.html)** - EMR forms download section

## Brand Identity

### Tagline
"Compassionate Heart Care for Every Beat"

### Color Palette
- Primary Blue: #1e5ba8
- Accent Blue: #2876c9
- Light Blue: #e8f4ff
- Teal Accent: #2c9dad

### Typography
- Headings: Poppins (Bold, Semi-Bold)
- Body: Inter (Regular, Semi-Bold)

## Contact Information
- **Phone:** +1 613-917-0905
- **Email:** info@globalcardiology.ca
- **Address:** 150 Marketplace Ave, Ottawa, ON K2J 6V2
- **Fax:** +1-844-593-1472

## Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Professional medical branding with blue color scheme
- ✅ Smooth animations and transitions
- ✅ Sticky navigation with active states
- ✅ Contact form with email integration
- ✅ Favicon integration (multiple sizes)
- ✅ Social media links (Facebook, Instagram)
- ✅ Stock medical images integrated
- ✅ SEO-friendly meta tags
- ✅ Accessible design

## Local Preview
To preview the website locally:

1. Open a terminal in the project directory
2. Run: `python3 -m http.server 8080`
3. Open browser to: `http://localhost:8080`

Or simply open `index.html` in your web browser.

## Deployment Options

### GitHub Pages
1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings > Pages
4. Select main branch and save
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify (Recommended)
1. Sign up at netlify.com
2. Drag and drop the entire folder
3. Site goes live instantly with custom domain support

### Traditional Web Hosting
1. Upload all files via FTP/SFTP to your web host
2. Ensure `index.html` is in the root directory
3. Files needed:
   - index.html
   - services.html
   - contact.html
   - requisition.html
   - styles.css
   - script.js
   - assets/ (entire folder)

## File Structure
```
GlobalCardiology-v2/
├── index.html              # Home page
├── services.html           # Services page
├── contact.html            # Contact page
├── requisition.html        # Requisition forms page
├── styles.css              # All styling
├── script.js               # Interactive features
├── brand-kit.md            # Brand guidelines
├── README.md               # This file
└── assets/
    ├── favicon/            # Favicon files (all sizes)
    └── images/             # Stock medical images + logo
```

## Customization Guide

### Updating Images
Replace images in `assets/images/` and update references in HTML files.

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-blue: #1e5ba8;
    --accent-blue: #2876c9;
    /* etc... */
}
```

### Adding Pages
1. Create new HTML file
2. Copy header and footer from existing pages
3. Update navigation links in all pages
4. Add new styles to `styles.css` if needed

### Social Media Links
Update social media URLs in footer sections (currently set to `#`)

### Requisition Forms
Replace the placeholder download links in `requisition.html` with actual file URLs or Google Drive links

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Next Steps for Launch

1. **Domain Setup**
   - Purchase domain name
   - Configure DNS settings
   - Setup SSL certificate (most hosts provide free Let's Encrypt)

2. **Content Review**
   - Double-check all contact information
   - Verify services descriptions
   - Add actual requisition form download links
   - Update social media links

3. **SEO Enhancement**
   - Add Google Analytics
   - Submit sitemap to Google Search Console
   - Add structured data markup
   - Create robots.txt

4. **Testing**
   - Test all forms
   - Verify mobile responsiveness
   - Check all links
   - Test on multiple browsers
   - Validate HTML/CSS

5. **Legal**
   - Add privacy policy page
   - Add terms of service
   - Ensure HIPAA compliance for any patient data collection

## Support
For any questions or modifications needed, contact the development team.

---

**Website Status:** ✅ Launch Ready  
**Last Updated:** November 8, 2025  
**Version:** 1.0
