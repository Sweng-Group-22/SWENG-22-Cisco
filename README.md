# SWENG-22-Cisco
# Webex Translate

## Getting Started for React app (Frontend)

Before running the web app, make sure you have Node and NPM installed.
First, run the react application inside the repo folder:

```bash
npm start
# or
npm run start
```

The application should start running the webpage, otherwise open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Getting Started for Gradle and MongoDB app (Backend)

Before running the backend, make sure you have Eclipse and MongoDB installed and running.
1. Go to ```File -> Import``` to open the Import window.
2. Select ```Gradle -> Existing Gradle Project``` in the Import window.
3. For the project root directory, choose the path of the backend folder
4. Click "Finish" and wait for Eclipse to automatically import the project.

The imported project will appear in the "Package Explorer" view in Eclipse.

Also, under the RestController.java file, there is a line of code ```String folder = "/usr/local/tmp/"```, the path specified in this line of code can be any valid directory path, as long as it is accessible.


## Git workflow
In order to submit your code, you should use a workflow like this. This makes sure that the right versions of the code are in the repo, and that we're all working off the same code. 

1. If you haven't already, use `git pull` on the whatever branch you're on. This is especially the case for dev and main branches. 
2. After pulling the branch, use `git checkout` to get on to the dev branch.
3. If you don't have the dev branch on your local machine, use `git fetch` and then `git switch dev` to get the remote dev branch. 
3. When you're adding code(assuming you've just used git pull), you can use `git checkout -b dev-f<BRANCH_NAME>` eg `git checkout -b dev-f-myfeature` The f in this case is for a feature branch.
4. Now in your feature branch you can add your code. 
5. When you're adding code, add it in small pieces, not all at once. 
6. When you've finished a small piece you can add it to staging with `git add myfile.js` You can also do this with vscode or some other editor. 
7. Then commit your code using `git commit -m"Some brief message telling us what the code is doing"`
8. When you've committed your code, then you can push your branch with `git push -u origin dev-f-<BRANCH_NAME>` eg `git push -u origin dev-f-myfeature`
9. Go the repository on github.com, and make a pull request to the DEV BRANCH. ONLY PUSH TO THE DEV BRANCH, unless there is some reason not to. 
10. Assign some other person to review the code, and then they will merge the code in to dev.
11. In your own dev branch you can start all over again by using `git pull`
