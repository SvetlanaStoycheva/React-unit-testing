### React Testing Library and Jest

#### Udemy course: React Testing Library and Jest: The Complete Guide

https://www.udemy.com/share/107RnM3@GLCZoiPcIODQTU3B_NC5OqH1Atz7lYGqNFD8zumiL3ZiTI8AC_muz6BTB68WmxUfVQ==/

1. How to run tests:
   open new terminal => npm test
2. Help to get DOM element => screen.logTestingPlaygroundURL();
3. To see what is rendered in the fake test DOM => write inside the tets: screen.debug()

#### Theory

When we run our tests they will be executed in Node.js environment (there is no browser involved)\
When we render a component, a fake browser enviroment is created by library called jsdom. In the "fake" DOM we can access HTML elements by using the **screen** object, which has properties like getByRole etc.\

React testing library: Renders the component into simulated DOM. Makes the simulated DOM accessible for assertions and interactions. In addition we need a test runner, Jest.
Jest: finds tests, runs tests, makes assertions.

**React testing Library Query System**: React testing library provides ca. 48 functions to find element. (screen.findAllByTitle, screen.getByRole etc; common roles: 'heading', 'list', 'button', 'link', 'textbox')\
Help to find the correct query method: screen.logTestingPlaygroundURL();

**Jest Matchers** They are global functions (we don't neet to import them) They can be provided by Jest (more general perpose) or React testing library\
expect(inputs).toBeInTheDocumnet()

**Mock functions/example in UserForm.test.js** A fake function that records whenever it gets called, and the arguments it was called with. Used very often when we want to make sure a component calls a callback.\
const mock = jest.fn();
expect(mock).toHaveBeenCalled();
expect(mock).toHaveBeenCalledWith({ name: "John", email: "john@mail.com" });

#### Query functions / prove that certain element exists in the DOM / getBy, queryBy, FindBy, getAllBy etc.

When to use them?\
**getBy**: we use to prove that element exists in the DOM
const Button = screen.getByRole('button)\

To select an element that does not have class, role etc.

- add to the html tag an attribute aria-label='testname' and in the test get the element const container = screen.getByLabelText('testname')
- getByTestId("users") with attribute: data-testid="users"

**queryBy**: we use to prove that element does not exist in the DOM.
const element = screen.queryByRole('textbox) //does not throw false in the test
expect element.not.toBeInTheDocument()

#### Jest matchers / we use them to show that the value is what we expect it to be. Projects created with Create React App has access to all matchers included in Jest and testing library.

We can create custom matchers to reuse their logic in different tests.

#### Run tests in the terminal

Jest will find all tests and run them. So the test files must meet at least one of these criteria:

- end with .spec.js
- end with .test.js
- are placed in folder called **test**

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
