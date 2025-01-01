# Real Estate Platform (املاک)

## Introduction
This is a full-stack real estate platform built with Next.js 13, allowing users to list and browse properties. The platform features role-based access control (Admin/User), property management, and a dynamic filtering system.

## Key Features
- 🔐 **Authentication System**
  - User registration and login
  - Role-based access (Admin/Regular users)
  - Secure session management using NextAuth

- 👤 **User Dashboard**
  - Personal profile management
  - Property listing management
  - View and edit own listings

- 🏠 **Property Management**
  - Create new property listings
  - Edit existing properties
  - Delete properties
  - Property status tracking (published/unpublished)

- 👨‍💼 **Admin Panel**
  - Review and approve property listings
  - Manage all properties
  - Delete any property
  - User management capabilities

- 🔍 **Search & Filter**
  - Filter properties by category
  - Browse all published listings
  - Detailed property views

## Tech Stack
- **Frontend:**
  - Next.js 13 (App Router)
  - React
  - CSS Modules for styling
  - React Icons
  - React Hot Toast for notifications

- **Backend:**
  - Next.js API Routes
  - MongoDB for database
  - Mongoose ODM
  - NextAuth.js for authentication

## Project Structure

src/
├── app/
│ ├── admin/
│ ├── api/
│ ├── dashboard/
│ └── buy-residential/
├── components/
│ ├── layout/
│ ├── module/
│ └── template/
├── models/
│ ├── Profile.js
│ └── User.js
└── utils/
└── connectDB.js

## Production

You can check this!
Link : https://real-estate-drab-ten.vercel.app

