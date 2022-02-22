Setup project
1. npm init         - init project with package.json
2. tsc --init       - init TypeScript compilation with tsconfig.json
                    - set "moduleResolution": "node"
                    - set "rootDir": "./src",
                    - set "outDir": "./dist",
3. npm install express 
4. npm install body-parser  - to parsed body
5. npm install --save-dev nodemon  - to automatically restart server when changes happens
6. npm install --save-dev @types/node - dev-dependecies types for node 
7. npm install --save-dev @types/express - dev-dependencies types for express
8. tsc --w          - using watch mode for compilation
9. npm start        - set "start": "nodemon dist/app.js" 