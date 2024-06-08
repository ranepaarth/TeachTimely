# Online Lecture Scheduling Module 📚
📖 A full stack MERN web application for managing and assigning course lectures to instructors 🧑‍🏫 

[Live Demo](https://teach-timely.vercel.app/)



## Features

- Role based routing
- Image upload
- Secure Authentication



## Tech Stack
- [ReactJs](https://react.dev/learn)
- [Redux-toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [Shadcn/ui](https://ui.shadcn.com/docs/installation/next)
- [Zod for Typescript](https://zod.dev/?id=table-of-contents)
- [React-hook-form](https://react-hook-form.com/get-started)
- [TailwindCSS](https://tailwindcss.com/docs/installation)

## Installation
1. Clone the repository: `git clone https://github.com/ranepaarth/TeachTimely.git`
2. Navigate to the project directory: `cd TeachTimely`
3. Install the dependencies: `npm install`
#### Environment Variables
Add a .env file in the root directory and follow  
```

# Your backend API URL
VITE_API_URL

```

## Usage
1. Start development server `npm run dev`
3. Open your Browser and visit [http://localhost:5173](http://localhost:5173) to view the website

## Deploy on Vercel

Create a `vercel.json` file inside your project's root directory and paste the following code

```
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}

```
