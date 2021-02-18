# What's Cookin'?

What's Cookin' is a Mod2 project in the [Turing School of Software and Design](https://turing.io/). **add description of app**

[Original Project Specifications and Game Rules](https://frontend.turing.io/projects/whats-cookin.html)


## Demo of the program
![screenshot](./assets/flashcards.gif)


## Setup

Clone down the repo:

```
git clone git@github.com:rdtho2525/whats-cookin.git
```

Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```
npm install
```

Run the below in the terminal to open the application in a browser: 

```
open src/index.html
```

## Contributors
##### Jeff Shepherd: [GitHub](https://github.com/JeffShepherd)

##### Reggie Thompson: [GitHub](https://github.com/rdtho2525)


## Programming Languages
  <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/><img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/><img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>






















The details of this project are outlined in the <a href="https://frontend.turing.io/projects/whats-cookin.html" target="\__blank">project spec</a>.

## Set Up 

1. Within your group, decide on one person to have the project repository on their Github account. This person will *fork* this repository - on the top right corner of the page, click the fork button. 
2. Both group members should then clone down the forked repository (make sure that everyone is added as a collaborator as well). Since you don't want your project to be named "whats-cookin-starter-kit", add an optional argument after the repo url when cloning. The command should look like this: `git clone [remote-address] [what you want to name the repo]`.
3. Once you have cloned the repo, change into the directory and install the project dependencies. Run npm install to install project dependencies.
4. Run open src/index.html in the terminal to see the HTML page (you should see some boilerplate HTML displayed on the page)
5. Make sure both members of your team are collaborators on the forked repo.

## Testing 

There is no boilerplate for testing in this starter-kit repo. You will need to set this up yourself. However, if you ran npm install, then the tooling you need to start testing is already installed (mocha and chai).

## Linting Your Code 

Run the command in your terminal npm run lint to run the linter on your JavaScript code. There will be errors and warnings right from the start in this starter kit, but that's ok - the linter is still running successfully.

Your linter will look only at the JavaScript files you have within the src and the test directories.


## Data Model
### Users
```js
{
  "id": [number],
  "name": [string],
  "pantry": [array of objects with amount and ingredient id properties]
},
```

### Recipes
```js
{
  "ingredients" [array of objects with ingredients ids(connection to ingredients), ingredient names, and quantity data],
  "instructions": [array of objects with instructions properties and numbered steps],
  "name": [string],
  "tags": [array of strings representing info about the recipes]
}
```

### Ingredients
```js
{
  "estimatedCostInCents": [number],
  "id": [number -- connection to users and recipes],
  "name": [string]
}
```
