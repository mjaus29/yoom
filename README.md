# Yoom - An Enterprise-Ready Video Calling App with Stream

<div align="center">
  <img src="https://markaustria.com/yoom.png" alt="Yoom - Video Calling App" />

[![Portfolio](https://img.shields.io/badge/Portfolio-markaustria.com-darkblue?style=flat&logo=web&logoColor=white)](https://www.markaustria.com/) [![GitHub](https://img.shields.io/badge/GitHub-mjaus29-black?style=flat&logo=github)](https://github.com/mjaus29) [![LinkedIn](https://img.shields.io/badge/LinkedIn-markaustria-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/markaustria/) [![Email](https://img.shields.io/badge/Email-austriamark.mja%40gmail.com-darkred?style=flat&logo=gmail&logoColor=white)](mailto:austriamark.mja@gmail.com)
</div>

## 🌐 Live Site

🚀 Here is a working live site: [yoom.markaustria.com](https://yoom.markaustria.com/)

🗒️ Check out the case study here: [markaustria.com/yoom](https://www.markaustria.com/yoom)

## 📝 Description

Welcome to Yoom! A feature-rich Zoom clone that supports video conferencing with multiple participants, screen sharing, meeting scheduling, and recording capabilities.

Video calling integration is typically perceived as complex and time-consuming, often requiring weeks or months of development. This project aimed to demonstrate how third-party tools like Stream can dramatically reduce development time while still delivering enterprise-grade functionality.

The goal of this project is building a fully functional Zoom clone that supports video meetings with advanced features in just a few hours.

It includes real-time video and audio streaming, meeting scheduling, recording options, and a responsive design that works seamlessly across all devices.

**Technologies Used:** Next.js, TypeScript, Tailwind CSS, Shadcn UI, Clerk, Stream

## 📖 Table of Contents

- [Features](#-features)
- [Installation](#%EF%B8%8F-setup-project)
- [How to Contribute](#%EF%B8%8F-how-to-contribute)
- [Bug / Feature Request](#-bug--feature-request)
- [Future Enhancements](#-future-enhancements)
- [Acknowledgements](#-acknowledgements)

## ✨ Features

- **Seamless Authentication with Clerk:** Secure authentication system with social sign-ins, email/password login, and user profile management
- **Real-time Video Conferencing with Stream:** High-quality video calls with features like screen sharing, emoji reactions, device selection, and support for thousands of participants
- **Meeting Management System:** Start instant meetings, schedule future meetings, join via links, record sessions, and access personal meeting rooms with persistent URLs
- **Responsive Design:** Mobile-first design approach with separate navigation components for mobile and desktop, and dynamic layouts for the video grid

## 🛠️ Setup Project

To get this project up and running in your development environment, follow these step-by-step instructions.

### 🍴 Prerequisites

We need to install or make sure that these tools are pre-installed on your machine:

- [Git](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/en/download/)
- [NPM](https://docs.npmjs.com/getting-started/installing-node)

### 🚀 Install Project

1. Clone the Repository

   ```bash
   git clone https://github.com/mjaus29/yoom.git
   ```

2. Navigate into the project directory

   ```bash
   cd yoom
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Set up environment variables

   Create a `.env.local` file in the root directory with the following variables:

   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
   STREAM_SECRET_KEY=your_stream_secret_key

   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

5. Start the application

   ```bash
   npm run dev
   ```

6. Open your web browser and navigate to <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> to see the project running.

## ⚒️ How to Contribute

Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request

### 📩 Bug / Feature Request

If you find a bug (the website couldn't handle the query and / or gave undesired results), kindly open an issue [here](https://github.com/mjaus29/yoom/issues/new) by including your search query and the expected result.

If you'd like to request a new function, feel free to do so by opening an issue [here](https://github.com/mjaus29/yoom/issues/new). Please include sample queries and their corresponding results.

### ✅ Future Enhancements

- [ ] Implement AI-powered meeting transcription and summarization
- [ ] Add breakout rooms functionality for larger meetings
- [ ] Create a mobile app version using React Native
- [ ] Integrate calendar synchronization with Google Calendar and Outlook

### 📚 Acknowledgements

Special thanks to JSM for the inspiration and guidance on this project.

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-markaustria.com-darkblue?style=flat&logo=web&logoColor=white)](https://www.markaustria.com/) [![GitHub](https://img.shields.io/badge/GitHub-mjaus29-black?style=flat&logo=github)](https://github.com/mjaus29) [![LinkedIn](https://img.shields.io/badge/LinkedIn-markaustria-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/markaustria/) [![Email](https://img.shields.io/badge/Email-austriamark.mja%40gmail.com-darkred?style=flat&logo=gmail&logoColor=white)](mailto:austriamark.mja@gmail.com)
</div>
