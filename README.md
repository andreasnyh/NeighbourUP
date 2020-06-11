# NeighbourUP

## Getting started

Clone the project with `git clone "https://github.com/SimonNord/NeighbourUP.git"`
Run `npm install` in the project folder to get all the needed dependencies.

## Tools

### Storybook

Storybook is a user interface development environment and playground for UI components.
The tool enables developers to create components independently and showcase components
interactively in an isolated development environment.

To run storybook, run `run storybook` in terminal and a new browser tab will open with storybook.
Here you can see your individual components and tweak them as you like.

### ESLint

The project got Eslint installed which will show linting errors in the editor and
enforce us to use Airbnb code standard.

### Prettier

Prettier is used for formating. For best experience you should have Prettier extension for VS-Code.
This will make VsCode format documents for you in the choosen style.
It can be found here <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>
and set the default formatter to Prettier.

#### Set the default formatter to Prettier (If there are multiple formatters installed)

- Open command palette (Command + Shift + P on Mac, Ctrl + Shift + P on Windows)
- Select "Format Document With..."
- Select "Configure Default Formatter..."
- Choose Prettier

### Husky

#### Lint Staged

To prevent bad code slipping into our codebase, we will run lint staged which will lint all files we have staged to git.
This will run before the commit is being done, so when running `git commit` lint staged will step in and check the files for linting errors before its possible to commit.

It looks something like this:
![alt tag](https://user-images.githubusercontent.com/53083229/83394453-e5bff180-a3f8-11ea-8b46-bc2149f999d2.png)

## Testing

### Jest

### Mocha

### Chai

### Mongodb-memory-server

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: <https://facebook.github.io/create-react-app/docs/code-splitting>

### Analyzing the Bundle Size

This section has moved here: <https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size>

### Making a Progressive Web App

This section has moved here: <https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app>

### Advanced Configuration

This section has moved here: <https://facebook.github.io/create-react-app/docs/advanced-configuration>

### Deployment

This section has moved here: <https://facebook.github.io/create-react-app/docs/deployment>

### `npm run build` fails to minify

This section has moved here: <https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify>
