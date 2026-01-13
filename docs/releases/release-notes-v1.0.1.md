# NaviQure Website - Release Notes

## Version 1.0.1 - Bug Fixes & Content Updates
**Release Date:** January 13, 2026

---

## 🎯 Overview

This release focuses on bug fixes, performance improvements, font loading optimizations, and content updates to enhance user experience across all devices.

---

## 🐛 Bug Fixes

### Font Loading & Performance
- **Fixed Material Symbols font 404 error**: Removed hardcoded font preload URL that was causing console errors
- **Improved font loading in header**: Enhanced font loading strategy to prevent FOUT (Flash of Unstyled Text) in main menu
- **Optimized Google Fonts loading**: Added preconnect hints and improved font display strategies
- **Fixed font display property error**: Removed invalid `fontDisplay` from inline styles (TypeScript build error)

### Mobile Experience
- **Fixed Cookie Preferences modal scrolling**: Added proper flexbox layout to ensure buttons are accessible on mobile
- **Removed Sign In button from mobile menu**: Cleaned up mobile navigation to match desktop design
- **Updated mobile badge styling**: Applied consistent dark blue styling for "DPDP ACT & ABHA COMPLIANT" badge across all devices

### Layout & UI
- **Fixed logo size distortion**: Removed conflicting style properties that caused logo to render incorrectly
- **Removed "View Full Team" button**: Cleaned up landing page by removing redundant CTA button
- **Reduced whitespace**: Adjusted spacing after button removal for better visual balance

### Accessibility
- **Added SheetTitle for mobile menu**: Fixed accessibility warning for screen readers in mobile navigation

---

## ✨ Content Updates

### Badge Updates - Our Offerings Section
Replaced repetitive "AI READY" badges with unique, professional badges:
- **Patient Empowerment Platform**: `PATIENT-CENTRIC`
- **Intelligent Health Locker**: `ABHA READY`
- **Caregiver Co-pilot**: `CAREGIVER SUPPORT`

### Badge Updates - Care Areas Section
Replaced repetitive "SPECIALIZATION" badges with specific care area badges:
- **Oncology (Cancer Care)**: `ONCOLOGY`
- **Neurological Care**: `NEUROLOGY`
- **Metabolic & Cardiovascular**: `CARDIOVASCULAR`

---

## 🔧 Technical Improvements

### Font Loading Strategy
- Removed manual Material Symbols font preload (causing 404 errors)
- Let Google Fonts stylesheet handle Material Symbols loading automatically
- Simplified font loading script to focus on Google Fonts optimization
- Added proper font fallbacks and display strategies

### Build & Development
- **Added preview script**: `npm run preview` command to test static builds locally
- **Updated deployment documentation**: Added instructions for testing static builds with local server
- **Fixed TypeScript errors**: Resolved build errors related to invalid CSS properties

### Code Quality
- Improved error handling for HMR (Hot Module Replacement) chunk load errors
- Enhanced Material Symbols icon CSS to prevent text display before font loads
- Optimized image loading with proper alt text and accessibility attributes

---

## 📱 Device-Specific Fixes

### Mobile
- Cookie Preferences modal now fully scrollable with accessible buttons
- Consistent badge styling across all screen sizes
- Improved font loading performance on mobile devices

### Desktop
- Enhanced font loading in header/navigation menu
- Improved Material Symbols icon rendering
- Better layout stability during font loading

---

## 🚀 Performance Improvements

- Reduced font loading delays in header
- Eliminated 404 errors for Material Symbols font
- Improved initial page render performance
- Better font fallback handling

---

## 📝 Documentation Updates

- Updated deployment guide with static build testing instructions
- Added preview script to package.json
- Enhanced technical documentation for font loading

---

## 🔍 Testing Notes

### Static Build Testing
- Use `npm run preview` to test static builds locally
- Static HTML files must be served via HTTP (not file://) due to absolute paths
- All assets load correctly when served via local server

### Browser Compatibility
- Tested on Chrome, Safari, and Firefox
- Verified mobile responsiveness across devices
- Confirmed font loading on various network conditions

---

## 📦 Files Modified

### Components
- `src/components/layout/Header.tsx` - Mobile menu updates, font loading
- `src/components/ui/CookieConsent.tsx` - Mobile scrolling fixes
- `src/components/features/SolutionsGrid.tsx` - Badge updates
- `src/components/features/CareAreasSection.tsx` - Badge updates
- `src/components/features/TeamSection.tsx` - Removed CTA button
- `src/components/ui/Logo.tsx` - Size fixes
- `src/components/HMRErrorHandler.tsx` - HMR error handling

### Configuration
- `src/app/layout.tsx` - Font loading optimizations
- `src/app/globals.css` - Material Symbols CSS improvements
- `next.config.ts` - No changes (maintained)
- `package.json` - Added preview script

---

## ✅ Quality Assurance

- ✅ All font loading errors resolved
- ✅ Mobile navigation fully functional
- ✅ Cookie modal accessible on all devices
- ✅ Badges display correctly with unique labels
- ✅ Logo renders at correct size
- ✅ Static build tested and working
- ✅ No console errors
- ✅ Accessibility improvements verified

---

## 🔄 Migration Notes

No breaking changes. This is a patch release with bug fixes and content updates.

---

## 📚 Related Documentation

- See `/docs/technical/DEPLOYMENT.md` for static build testing instructions
- See `/docs/releases/release-notes-v1.0.0.md` for initial release details
