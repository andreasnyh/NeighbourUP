# NeighbourUP

## Getting started
Clone the project with <code> git clone "https://github.com/SimonNord/NeighbourUP.git"</code><br/>
Run <code>npm install </code> in the project folder to get all the needed dependencies.

## Tools

#### Storybook
Storybook is a user interface development environment and playground for UI components. The tool enables developers to create components independently and showcase components interactively in an isolated development environment.

To run storybook, run <code> run storybook</code> in terminal and a new browser tab will open with storybook. <br/>
Here you can see your individual components and tweak them as you like.
#### Jest

#### ESLint
The project got Eslint installed which will show linting errors in the editor and enforce us to use Airbnb code standard.

#### Prettier
Prettier is used for formating. For best experience you should have Prettier extension for VS-Code.<br/>
This will make VsCode format documents for you in the choosen style.<br/>
It can be found here https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode<br/>
and set the default formatter to Prettier.

###### Set the default formatter to Prettier (If there are multiple formatters installed)
  - Open command palette (Command + Shift + P on Mac, Ctrl + Shift + P on Windows)
  - Select "Format Document With..."
  - Select "Configure Default Formatter..."
  - Choose Prettier
  
#### Husky
#### Lint Staged
To prevent bad code slipping into our codebase, we will run lint staged which will lint all files we have staged to git.<br/>
This will run before the commit is being done, so when running <code>git commit</code> lint staged will step in and check<br/>
the files for linting errors before its possible to commit.

It looks something like this:
![alt tag](https://user-images.githubusercontent.com/53083229/83394453-e5bff180-a3f8-11ea-8b46-bc2149f999d2.png)
