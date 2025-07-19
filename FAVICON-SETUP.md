# Favicon Generator Script

This script helps you generate proper favicon files from your logo.jpg

## Manual Steps (Recommended):

1. Go to https://favicon.io/favicon-converter/
2. Upload your `/public/logo.jpg` file
3. Download the generated favicon package
4. Extract and place these files in your `/public` folder:
   - favicon.ico (16x16, 32x32, 48x48)
   - apple-touch-icon.png (180x180)
   - favicon-16x16.png
   - favicon-32x32.png
   - android-chrome-192x192.png
   - android-chrome-512x512.png

## Alternative Online Tools:
- https://realfavicongenerator.net/
- https://www.favicon-generator.org/

## What we've already set up:
- Your layout.tsx now includes all the necessary favicon meta tags
- It's configured to use your logo.jpg as a fallback
- Includes support for Apple Touch Icons, Android Chrome, and Microsoft Tiles

## Current Browser Support:
✅ Chrome, Firefox, Safari, Edge - will display your logo.jpg
✅ Mobile browsers - Apple Touch Icon configured
✅ Android Chrome - Icon configured for home screen
✅ Microsoft Edge/IE - Tile icon configured
