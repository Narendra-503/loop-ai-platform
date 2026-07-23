# 🚀 Project LOOP – AI Customer Feedback Intelligence Platform

An AI-powered customer feedback management platform that helps businesses collect, analyze, and manage customer feedback using sentiment analysis and intelligent insights.

## 📌 Overview

Project LOOP enables organizations to:

- Collect customer feedback
- Analyze customer sentiment using AI
- Manage feedback workflow
- Upload feedback through CSV
- Generate reports
- Visualize analytics through dashboards

Built with **Next.js**, **Prisma**, **PostgreSQL**, and **NextAuth**.

---

# ✨ Features

### 🔐 Authentication
- User Registration
- User Login
- Secure Authentication with NextAuth

### 📝 Feedback Management
- Add Feedback
- View Feedback
- Update Status
- Delete Feedback
- Search Feedback
- Filter by Sentiment

### 🤖 AI Features
- AI Sentiment Analysis
- Positive / Neutral / Negative Classification
- AI-generated Insights

### 📊 Analytics Dashboard
- Total Feedback
- Positive Feedback
- Negative Feedback
- Neutral Feedback
- Status Summary
- AI Insights

### 📂 CSV Support
- Upload CSV
- Export CSV

### 📄 Reports
- Generate PDF Reports
- Download Reports

### ⚙️ Settings
- Profile Settings
- Security Settings
- Notification Preferences
- Application Information

---

# 🛠 Tech Stack

## Frontend

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Lucide React

## Backend

- Next.js API Routes
- Prisma ORM
- PostgreSQL
- NextAuth

## AI

- Sentiment Analysis API

---

# 📁 Project Structure

```
src/
│
├── app/
│   ├── api/
│   ├── dashboard/
│   ├── login/
│   ├── register/
│
├── components/
│
├── lib/
│
prisma/
│
public/
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/Narendra-503/loop-ai-platform.git
```

Go to project

```bash
cd loop-ai-platform
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
DATABASE_URL=your_database_url

NEXTAUTH_URL=http://localhost:3000

NEXTAUTH_SECRET=your_secret_key
```

Run Prisma

```bash
npx prisma generate

npx prisma migrate dev
```

Start the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# 📷 Screenshots

Add screenshots here after deployment.

Example:

- Login Page
- Register Page
- Dashboard
- Feedback Management
- Analytics
- Reports
- Settings

---

# 📈 Future Improvements

- Email Notifications
- Dark Mode
- AI Theme Detection
- Advanced Charts
- Role-Based Access
- Multi-user Support
- Export to Excel
- Cloud Storage Integration

---

# 👨‍💻 Developer

**Narendra Reddy**

GitHub

https://github.com/Narendra-503

LinkedIn

https://www.linkedin.com/in/narendra-reddy-435856259

---

# 📄 License

This project is created for educational and internship purposes.
