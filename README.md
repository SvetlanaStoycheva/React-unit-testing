## React Testing Library and Jest

#### Udemy course

1. How to run tests:
   open new terminal => npm test

#### Theory

    When we run our tests they will be executed in Node.js environment (there is no browser involved)
    When we render a component, a fake browser enviroment is created by library called jsdom. In the "fake" DOM we can access HTML elements by using the __screen__ object, which has properties like getByRole etc.

    **React testing Library Query System**: React testing library provides ca. 48 functions to find element. (screen.findAllByTitle, screen.getByRole etc; common roles: 'heading', 'list', 'button', 'link', 'textbox')
        Help to find the correct query method:  screen.logTestingPlaygroundURL();

    **Jest Matchers** They are global functions (we don't neet to import them) They can be provided by Jest (more general perpose) or React testing library
    expect(inputs).toBeInTheDocumnet()

    **Mock functions** A fake function that records whenever it gets called, and the arguments is was called with. Used very often when we want to make sure a component calls a callback.
    jest.fn()

#### Run tests in the terminal

    Jest will find all tests and run them. So the test files must meet at least one of these 	criteria:
    - end with .spec.js
    - end with .test.js
    - are placed in folder called __test__

    npm test
    to run tests in only one specific file => press w => press p => type file name (no case sensitive, for ex. userlist)

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
