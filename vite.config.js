import { defineConfig } from 'vite'
import React from 'react'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})

// Vite configuration for shopMe_Ecommerce project
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// export default defineConfig({
//   plugins: [
//     react({
//       babel: {
//         plugins: ['react-refresh/babel'],
//       },
//     }),
//   ],
//   server: {
//     port: 3000,
//     open: true,
//   },
//   build: {
//     outDir: 'dist',
//     sourcemap: true,
//   },
//   resolve: {
//     alias: {
//       '@': '/src',
//     },
//   },
// });

// This configuration sets up Vite for a React project with hot module replacement and other optimizations.