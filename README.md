# Oculus Systems - Premium CCTV Landing Page

A premium, multilingual landing page for a private CCTV installation business.

## Features

- 🌍 **Multilingual Support**: English, Spanish, Catalan, and Russian
- 📱 **Mobile-First Design**: Optimized for screens as narrow as 360px
- 🎨 **Dark Technical Theme**: Professional Obsidian Black (#0A0A0A) with Amber accents
- ⚡ **Smooth Animations**: Powered by Framer Motion
- 🎯 **Language Switcher**: Easy language selection with persistent storage
- 💬 **AI Chat Widget**: Interactive support widget with quick actions
- 📡 **Telegram Integration**: Contact form sends messages to Telegram
- 🔍 **SEO Optimized**: Full metadata, OpenGraph, and structured data

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add:
- `TELEGRAM_BOT_TOKEN` - Your Telegram bot token
- `TELEGRAM_CHAT_ID` - Your Telegram chat ID
- `NEXT_PUBLIC_SITE_URL` - Your site URL (for SEO)
- `WHATSAPP_PHONE` (optional) - WhatsApp number for fallback

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Telegram Bot Setup

1. Create a Telegram bot:
   - Open Telegram and search for `@BotFather`
   - Send `/newbot` and follow instructions
   - Copy the bot token

2. Get your Chat ID:
   - Start a chat with your bot
   - Send a message to the bot
   - Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
   - Find your `chat.id` in the response

3. Add credentials to `.env.local`:
```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

## Project Structure

```
├── app/
│   ├── api/
│   │   └── telegram/
│   │       └── route.ts    # Telegram API endpoint
│   ├── layout.tsx          # Root layout with SEO & ChatWidget
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation with language switcher
│   ├── Hero.tsx            # Hero section
│   ├── QualitySlider.tsx   # Before/After comparison slider
│   ├── SystemCalculator.tsx # Storage calculator
│   ├── InstallationGallery.tsx # Image carousel
│   ├── WhyMe.tsx           # Why Me section
│   ├── Truth.tsx           # Comparison section
│   ├── UseCases.tsx        # Use cases section
│   ├── ContactForm.tsx     # Contact form (Telegram integration)
│   ├── ChatWidget.tsx      # AI chat widget
│   └── Footer.tsx          # Footer
├── contexts/
│   └── LanguageContext.tsx # Language context provider
└── constants/
    ├── translations.ts     # All translations (EN, ES, CA, RU)
    └── config.ts           # Configuration (WhatsApp, etc.)
```

## Customization

- **Text Content**: Edit `constants/translations.ts` to update content in all languages
- **SEO**: Update metadata in `app/layout.tsx`
- **Colors**: Modify `tailwind.config.js` and `app/globals.css`
- **Chat Widget**: Customize messages in `components/ChatWidget.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Environment Variables

See `.env.example` for all required environment variables.
