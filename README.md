# Bakery - React + TypeScript + Vite

Welcome to the Bakery project! This repository provides a minimal setup to get React working with TypeScript and Vite, including Hot Module Replacement (HMR) and some ESLint rules.

## Overview

This project leverages the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A fast build tool and development server.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Plugins

Currently, two official plugins are available for React:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses [SWC](https://swc.rs/) for Fast Refresh.

## Expanding the ESLint Configuration

For production applications, we recommend updating the ESLint configuration to enable type-aware lint rules:

1. Configure the top-level `parserOptions` property as follows:

   ```js
   export default tseslint.config({
     languageOptions: {
       // other options...
       parserOptions: {
         project: ['./tsconfig.node.json', './tsconfig.app.json'],
         tsconfigRootDir: import.meta.dirname,
       },
     },
   });
   ```

2. Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.
3. Optionally, add `...tseslint.configs.stylisticTypeChecked`.
4. Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the configuration:

   ```js
   // eslint.config.js
   import react from 'eslint-plugin-react';

   export default tseslint.config({
     // Set the React version
     settings: { react: { version: '18.3' } },
     plugins: {
       // Add the React plugin
       react,
     },
     rules: {
       // other rules...
       // Enable its recommended rules
       ...react.configs.recommended.rules,
       ...react.configs['jsx-runtime'].rules,
     },
   });
   ```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-username/bakery.git
   cd bakery
   ```

2. **Install dependencies**:

   ```sh
   yarn install
   ```

3. **Run the development server**:

   ```sh
   yarn dev
   ```

4. **Build the project**:

   ```sh
   yarn build
   ```

5. **Preview the production build**:
   ```sh
   yarn preview
   ```

## Project Structure

The project structure is as follows:

```
├── public/
│   ├── assets/
│   └── favicon.png
├── src/
│   ├── components/
│   ├── App.tsx
│   ├── Data.json
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Contact

For any inquiries, please contact [nickbenz007@gmail.com](mailto:nickbenz007@gmail.com).
