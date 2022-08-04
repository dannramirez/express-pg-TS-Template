# TypeScript project structure

This repo it's a typescript structure project for express including eslint, unit testing with
jasmine

```
.
├── .env 				//File to set enviroment variables
├── package.json			//node project structure with scripts and dependencies
├── spec
│   └── support
│       └── jasmine.json		//Jasmine configuration
├── src					//Project Folder
│   ├── controllers			//Express controllers files Folder
│   │   └── main.ts
│   ├── index.ts			//Index file
│   ├── middlewares			//Express middlewares Folder
│   │   └── logger.ts
│   ├── routes				//Express routes Folder
│   │   └── index.ts
│   ├── tests				//Unit test folder.
│   │   ├── helpers
│   │   │   └── resporter.ts
│   │   └── indexSpec.ts
│   └── utilities			//Utilities functions folders
└── tsconfig.json			//TypeScript folder

```

### Dev-Dependencies

| Dependencie                      | Version |
| -------------------------------- | ------- |
| @types/debug                     | 4.1.7   |
| @types/express                   | 4.17.13 |
| @types/jasmine                   | 4.0.3   |
| @types/node                      | 18.6.3  |
| @types/supertest                 | 2.0.12  |
| @typescript-eslint/eslint-plugin | 5.32.0  |
| @typescript-eslint/parser        | 5.32.0  |
| eslint                           | 8.21.0  |
| eslint-config-airbnb-base        | 15.0.0  |
| eslint-config-prettier           | 8.5.0   |
| eslint-plugin-import             | 2.26.0  |
| eslint-plugin-prettier           | 4.2.1   |
| nodemon                          | 2.0.19  |
| onchange                         | 7.1.0   |
| prettier                         | 2.7.1   |
| supertest                        | 6.2.4   |
| ts-node                          | 10.9.1  |
| typescript                       | 4.7.    |

### Dependencies

| Dependencie           | Version |
| --------------------- | ------- |
| chalk                 | 4.1.2   |
| debug                 | 4.3.4   |
| dotenv                | 16.0.1  |
| express               | 4.18.1  |
| jasmine               | 4.3.0   |
| jasmine-spec-reporter | 7.0.    |

### Scripts

| Script       | Code                                                    | Description                                                       |
| ------------ | ------------------------------------------------------- | ----------------------------------------------------------------- |
| _build_      | npx tsc                                                 | Build TS code to JS in `./dist` folder                            |
| _lint_       | eslint . --ext .ts                                      | Lint code with `eslint` rules                                     |
| _prettier-f_ | prettier --config .prettierrc 'src/\*_/_.ts' --write    | Prettier TS files in `./src` folder                               |
| _prettier-w_ | onchange 'src/\*_/_.ts' -- prettier --write {{changed}} | Prettier TS files in `./src` folder inmediatly when file changes  |
| _fbuild_     | npm run prettier-f && npm run lint && npx tsc           | Run all command at once                                           |
| _jasmine_    | jasmine                                                 | Run unit tests                                                    |
| _test_       | npm run build && npm run jasmine                        | Transpille code and run unit tests                                |
| _dev_        | DEBUG=API:\* nodemon src/index.ts                       | Run nodemon and debug to debug code                               |
| _start_      | nodemon src/index.ts                                    | Start the project withouth logs in console                        |
