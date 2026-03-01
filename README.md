# PersonalWebsite
I guess I can't rely on my junior year web assignment as my "personal website" anymore huh

This is where I am attempting to transfer the personal webpage located on people.tamu.edu/~sevanisk to somewhere I can actually update and maintain.

I will be using React.js

- Steps
1. Install Python, Git, WSL, Docker, and Node.js, in that order
https://ubuntu.com/desktop/wsl
https://docs.docker.com/desktop/setup/install/windows-install/?uuid=152A5A78-3238-4BED-A94C-0E5F122F1D96#system-requirements
https://nodejs.org/en/download/current

2. Add to PATH
    a. Start -> Edit system environment variables -> Environment variables -> Path -> Edit -> New
    b. Add `C:\ProgramFiles\nodejs`

3. Run `npm create vite@latest` in a Powershell window and follow the prompts. Choose React for the type of app

4. Create folders to have an actual project structure. Move base page into the pages directory.

5. Change App.jsx to be a Router (make sure to do npm install react-router-dom) that points to our home page. Create HomePage.jsx in the pages directory.

6. Create empty shells for each page I am going to create and add them to the Router. See AboutMe.jsx, Actuary.jsx, CompSci.jsx,etc.

7. Create the .css file for my background on the main page. It is going to be old windows themed similar to my people.tamu page.

Notes:
run with `npm run dev`

Vite Notes:

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
mFiles\nodejs`
