# Pearlux - Implementation Plan

## Overview

This document outlines the technical implementation plan for converting the NextJS e-commerce template into a simplified website for Pearlux - an embroidery materials business that sells beads, pearls, and other crafting supplies.

## Required Modifications

### 1. Brand Customization

- Update site title, metadata, and favicon
- Replace logo with Pearlux logo
- Update color scheme to match brand

### 2. Remove Unnecessary Features

- Remove cart functionality
- Remove account/login features
- Remove checkout process
- Remove wishlist functionality
- Remove quantity selector on product pages
- Remove "add to cart" buttons

### 3. Add WhatsApp Integration

- Add WhatsApp contact button on product detail pages
- Configure button to open WhatsApp with pre-populated message
- Add business contact information

### 4. Update Product Categories

- Modify category structure to reflect embroidery supplies:
  - Beads
  - Pearls
  - Metallic Threads
  - Embroidery Materials
  - Craft Supplies

### 5. Customize Home Page

- Update hero section with relevant content
- Update featured categories
- Modify new arrivals section to showcase popular products
- Keep testimonials section
- Keep newsletter section

### 6. Content Updates

- Create sample products for each category
- Update product descriptions to reflect embroidery materials
- Add appropriate images for products

## File Modifications

### Essential Files to Modify

1. `src/app/(site)/page.tsx` - Update metadata
2. `src/components/Header/index.tsx` - Remove cart, account, wishlist buttons
3. `src/components/Header/menuData.ts` - Update navigation menu
4. `src/components/ShopDetails/index.tsx` - Replace cart button with WhatsApp
5. `src/components/Home/Hero/index.tsx` - Update hero content
6. `src/components/Home/Categories/index.tsx` - Update categories
7. `src/app/layout.tsx` - Update global metadata

### Optional Files to Modify

1. `src/components/Footer/index.tsx` - Update footer content
2. `src/app/favicon.ico` - Replace favicon
3. `public/images/logo/logo.svg` - Replace logo

## Implementation Approach

1. First modify essential structure and navigation
2. Then implement WhatsApp integration
3. Finally update content and images

## WhatsApp Integration Logic

For the WhatsApp integration, we'll create a button that opens WhatsApp with a pre-filled message containing:

- Product name
- Product code/SKU
- Direct message asking about availability

Example implementation:

```typescript
const handleWhatsAppContact = (productName: string, productSku: string) => {
  const phoneNumber = "923XXXXXXXXX"; // Replace with actual WhatsApp number
  const message = `Hello! I'm interested in purchasing ${productName} (SKU: ${productSku}) from Pearlux. Is it available?`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
};
```

## Testing Plan

1. Verify all pages load correctly
2. Test WhatsApp integration on various devices
3. Ensure responsive design works on mobile and desktop
4. Test all navigation links
