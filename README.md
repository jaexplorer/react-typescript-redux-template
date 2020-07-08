## React | Typescript | Redux Template

The purpose of this template is to create a consistent foundation for projects to build upon off as a guide. The idea is to create one for web and one for React Native, with very little interchange between the two.

### Project Structure

The idea is to make code as reuseable and clean as possible. A few tricks to achieving this is by:

- Using index.ts within folders to clean up the import noise
- Containing all components into their respective contexts, styles, tests, queries even + other components (directly related to a page) are all contained in a folder
- All global shared code goes in the lib folder, such as Types
- Supporting theming and localisation, aka no hardcoded strings

```
.
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   └── some-text.otf
│   │   ├── images/
│   │   │   ├── some-img.png
│   │   │   └── index.ts
│   │   ├── strings/
│   │   │   ├── languages/
│   │   │   │   └── en.ts
│   │   │   └── index.ts
│   │   └── themes/
│   │       ├── themes.json
│   │       └── index.ts
│   ├── components/
│   │   └── SomeComponent/
│   │       ├── __tests__
│   │       │   ├── __snapshots__
│   │       │   └── SomeComponent.test.tsx
│   │       ├── index.ts
│   │       ├── SomeComponent.tsx
│   │       └── SomeComponentStyles.ts
│   ├── lib/
│   │   │── Redux/
│   │   │   ├── Actions
│   │   │   │   └── example.ts
│   │   │   ├── Reducers
│   │   │   │   └── example.ts
│   │   │   ├── Store
│   │   │   │   └── index.ts
│   │   │   ├── Types
│   │   │   │   └── example.ts
│   │   │   └── Utils
│   │   │       └── index.ts
│   │   │── Authentication.ts
│   │   │── Constants.ts
│   │   │── Strings.ts
│   │   │── Theme.ts
│   │   │── Types.ts
│   │   └── Utils.ts
│   ├── navigation/
│   │   └── Router.tsx
│   ├── screens/
│   │   └── Home/
│   │       ├── components/
│   │       │   └── SomeComponent/
│   │       │       ├── __tests__
│   │       │       │   ├── __snapshots__
│   │       │       │   └── SomeComponent.test.tsx
│   │       │       ├── index.ts
│   │       │       ├── SomeComponent.tsx
│   │       │       └── SomeComponentStyles.ts
│   │       ├── __tests__
│   │       │   ├── __snapshots__
│   │       │   └── Home.test.tsx
│   │       ├── index.ts
│   │       ├── Home.tsx
│   │       └── HomeStyles.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   └── setupTests.ts
├── .eslintrc.json
├── .gitignore
├── .huskyrc
├── .lintstagedrc
├── .prettierrc
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

### Eslint + Prettier + Husky

Before every commit, Husky will run a pre-commit hook that will ensure that all altered files are formatted and linted correctly. As well as tests all passing.

### Redux

I have created an example Redux Component that utilises an example action, reducer and type. This can be used as a guide for use. I have also included global loading and the foundation for authentication.

### Styling

Most importantly I have set up REM scaling, for those that don't know what that is - as the ViewPort gets smaller, so does the UI. You will find this will save about 70% of media queries needed. For this project I have chosen styledComponents/micro, this enables you to debug more easily. Though if you prefer SASS, thats not too hard to setup either.

### Setup

#### To install

`yarn`

#### To run

`yarn start`

#### To lint

`yarn lint`

#### To format

`yarn format`

- Andrew Sabato
