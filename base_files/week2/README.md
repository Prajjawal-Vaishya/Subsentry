# 🚀 Week 2 Base Files — SubSentry (Issues 4–7)

Welcome to the **Week 2 snapshot** of **SubSentry** ✅  
This build **extends Week 1** and contains the reference implementation for **Issues 4–7**.

---

## 🧩 What’s Included

### ✅ Issue 4 — Constants & Enums Setup
- Centralized subscription constants in:  
  `server/src/constants/subscription.constants.js`
- **Models + validators reuse the same enums**, preventing drift and magic strings.

### ✅ Issue 5 — Create Subscription API (POST)
- `POST /api/subscriptions`
  - Validates input ✅
  - Uses **authenticated user only** ✅
  - Saves a subscription to MongoDB ✅
- Validator lives here:  
  `server/src/validators/subscription.validator.js`

### ✅ Issue 6 — Fetch Subscriptions API (GET)
- `GET /api/subscriptions`
  - Returns **only the authenticated user's subscriptions**
  - Sorted by **renewal date** (soonest first) 📅

### ✅ Issue 7 — Basic Dashboard Layout (UI)
- Dashboard layout + navigation:  
  `client/src/app/dashboard/page.tsx`
- Future pages show placeholders via the `ComingSoon` component 🧱
- Branding assets:
  - `client/public/logo.png`
  - `client/public/logo.svg`

---

## 🔐 Auth Note (Backend)

All subscription routes are protected by:

📍 `server/src/middleware/requireAuth.js`

### Important behavior
- Middleware expects: `req.user.id`
- The API **does NOT trust** `userId` sent in the request body ❌  
  (prevents impersonation / spoofing ✅)

> Plug in your auth layer (Clerk / Passport / custom JWT) such that it sets `req.user.id`.

---

## 🗂️ Project Structure

```txt
client/   → Next.js UI (Dashboard + Navigation)
server/   → Express + MongoDB (Subscription APIs + Constants)
```

---

## ▶️ How It Works

### 🖥️ Frontend
- Visit: `/dashboard`
- You’ll see the **Week 2 dashboard layout** with navigation
- Non-implemented routes show **Coming Soon** sections

### 🧠 Backend
- Subscription endpoints live at: `/api/subscriptions`
  - `POST` → create subscription
  - `GET`  → fetch subscriptions

### 🔁 Data Consistency (Core Improvement)
Subscription fields remain consistent across:
- ✅ constants  
- ✅ validation  
- ✅ database model  

---

## 🧪 API Overview

### ➕ Create Subscription
**POST** `/api/subscriptions`
- Uses: `req.user.id`
- Ignores: `userId` from body ❌

### 📥 Fetch Subscriptions
**GET** `/api/subscriptions`
- Returns only authenticated user's data
- Sorted by renewal date 📅

---

## 🤝 Credits (Merged PRs)

> Huge shoutout to everyone who contributed to Week 2! 💙  
> Below is the mapping of Issues → PR contributors.

| ✅ Issue | Focus Area | Contributors (PRs) |
|---:|---|---|
| **4** | Constants & Enums | Krishna200608 (**#112**), amansharma264 (**#117**), AkshaTGA (**#124**) |
| **5 / 6** | Subscription APIs | Aarav-Jain-official (**#125**), Krishna200608 (**#126**), dwivediprashant (**#128**), amansharma264 (**#131**) |
| **7** | Dashboard UI | dwivediprashant (**#144**) |
| **Logo** | Branding Assets | dwivediprashant (**#108**), AkshaTGA (**#123**), suzzzal (**#133**), Apoorv012 (**#139**) |

---

## 📌 Notes for Contributors

- Please reuse enums/constants from:  
  `server/src/constants/subscription.constants.js`

- Keep validation inside:  
  `server/src/validators/subscription.validator.js`

- Avoid `userId` in request body logic — **auth is the source of truth** ✅

---