<div align="center">
  <br />
    <div align="center"> 
  <img src="https://github.com/LongHoangNguyenH/g-weather-exam/blob/main/assets/image.png"   alt="screenshot" />
</div>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Nestjs-black?style=for-the-badge&logoColor=white&logo=express&color=000000" alt="express" />
    <img src="https://img.shields.io/badge/-JavaScript-black?style=for-the-badge&logoColor=black&logo=javascript&color=F7DF1E" alt="javascript" />
    <img src="https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logoColor=white&logo=node.js&color=339933" alt="nodejs" />
    <img src="https://img.shields.io/badge/-React-20232A?style=for-the-badge&logoColor=61DAFB&logo=react&color=61DAFB" alt="react" />
  </div>

  <h3 align="center">G Weather Application</h3>

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🤸 [Deployment](#deploymentt)

## <a name="introduction">🤖 Introduction</a>

This website is a Golden Owl Interview Assignment 

## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js
- Nestjs
- Javascript
- Mysql
- Nodejs

## <a name="features">🔋 Features</a>

👉 **Subcribe**:

👉 **Unsubcribe**

👉 **Verify Email**

👉 **Automatically send daily email**

👉 **Search weather by location**

👉 **Get weather from current location**

👉 **Display Weather and show more**
## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/LongHoangNguyenH/g-weather-exam

```

**Installation**

Install the project dependencies using npm:

```bash
cd g-weather-exam/server
npm install
```

```bash
cd g-weather-exam/client
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your server and client directory and add the following content:

For Server
```env
# database
DATABASE_URL=

#Key
API_KEY= weather api key
LOCAL_DEV_HOSTNAME=localhost
LOCAL_DEV_PORT=3000

#Url
APP_URL= backend url app
CLIENT_URL= frontend url app

# mail
MAIL_HOST=smtp.example.com
MAIL_USER=example@example.com
MAIL_PASSWORD= app password
MAIL_FROM=example@example.com


```
For Client

```env
VITE_LOCAL_API_ROOT=
```
<!-- Replace the placeholder values with your actual Appwrite credentials. You can obtain these credentials by signing up on the [Appwrite website](https://appwrite.io/). -->

**Running the Project**

run this command below from both client and server to start the application

```bash
npm run start
```

Open [http://localhost:5173/weather](http://localhost:5173/weather) in your browser to view the project.

## <a name="deployment">🤖 Deployment</a>

To try this application, you can visit this link:

[g-weather-app-demo](https://g-weather-exam-client-5z48fi7oh-longnhhs-projects.vercel.app/weather)
