# Byteex Test Task — Full Landing + Sanity CMS Integration

This project is a full implementation of the Byteex test task:  
a multi-section landing page fully powered by **Next.js**, **TypeScript**, **Tailwind CSS**, and **Sanity CMS** for all dynamic content.

The entire site is fully responsive for desktop computers and mobile devices. The entire content is editable from Sanity Studio — section content, all images, texts, icons, carousels, FAQ items, reviews, brand logos and more.

## 🚀 Tech Stack

### Frontend
- **Next.js 16 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Embla Carousel**
- **Well organized code with custom Components (Accordion, Review, Carousels, Cards, Auto Scroll, etc.)**

### Backend / CMS
- **Sanity v3**
- Custom schemas for every section:
  - `heroSection`
  - `brandsSection`
  - `aboutSection`
  - `comfortSection`
  - `impactSection`
  - `findLoveSection`
  - `faqSection`
  - `testimonialsSection`
  - Reusable `reviewObject`
---

## 📦 Project Features

### ✨ Fully Dynamic Content
All content comes directly from Sanity:
- All text content of the sections
- Photos and galleries
- Reviews
- Brands logos
- FAQ (accordion)

No hardcoded text or images — everything is editable by content managers.

## ⚙️ Setup project 

### Installation
```bash
git clone https://github.com/yiwywo18ypwtp1/byteex-product-page.git
npm install
```

### Start in dev mode
```bash
npm run dev
```

## 🟢 Project is running

### To visit main page visit `http://localhost:3000/`

### To upload content via CMS go to `http://localhost:3000/studio/`
