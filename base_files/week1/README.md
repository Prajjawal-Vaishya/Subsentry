# Week 1 Base Files (Issues 1–3)

This folder contains the **Week 1 snapshot** of SubSentry. It covers the baseline setup for Issues 1–3 and is ready to run locally.

## ✅ Issues Covered

- **Issue 1: Setup Next.js with Clerk Authentication**
  - App Router + ClerkProvider
  - Middleware-based route protection
  - Protected dashboard route

- **Issue 2: Setup Express Server with MongoDB**
  - Express app entrypoint
  - MongoDB connection with error handling
  - No hardcoded credentials

- **Issue 3: Subscription Database Schema**
  - Core subscription model with timestamps
  - Fields for billing cycle, renewal date, trial status, source, and ownership

## 📌 Structure

- `client/` — Next.js + Clerk auth baseline
- `server/` — Express + MongoDB connection + schema

## ▶ How It Works

- The frontend is protected with Clerk middleware and routes.
- The backend connects to MongoDB and exposes a base API response on `/`.

Use this as the baseline before Week 2 features are introduced. [ ALREADY LIVE AS PER 2nd Jan' 26]

## Credits (Merged PRs)

| Issue | Focus | Contributors (PRs) |
| --- | --- | --- |
| Issue 1 | Clerk Auth | amansharma264 (#82), 29kamakshigupta (#97), aaravsingh-3 (#104), Devan019 (#106) |
| Issue 2 | Express + MongoDB | Rehan959 (#83), amansharma264 (#87), Aarav-Jain-official (#92), KaranMagham (#93), aaravsingh-3 (#118) |
| Issue 3 | Subscription Schema | Rehan959 (#84), amansharma264 (#91), Apoorv012 (#102), LevelSilence (#114) |
