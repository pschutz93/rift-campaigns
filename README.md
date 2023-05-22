# Rift Take Home: Campaign Table

## Overview
I used `create-react-app` to bootstrap app setup with React and project structure. I used the [Material UI Library](https://mui.com/)
to style the app.

For the table itself I utilized [React Virtuoso](https://github.com/petyosi/react-virtuoso) to virtualize table rendering.
This really isn't necessary for the size of the campaign dataset I am rendering in this exercise, but it is a best practice
and becomes necessary very quickly as the dataset grows.

### Data
For this contrived exercise, I converted the Sample CSV dataset provided in the instructions to static JS objects located
in `src/data.ts`. In a real world scenario, I would pull data from an API endpoint. I do not consider utilizing a CSV file 
in the browser to be a good practice and so simulating the JSON that would be received from an API seemed to
be a reasonable alternative for a take-home exercise.

## To Run
I have the repo configured to run locally. To see it in action, clone the repo, and run the following commands in the 
root directory:

```bash
Run:
```bash
npm install
npm start
```

I built this project using Node v19.6.0. I added a `.node-version` file to the repo so if you use a versioning tool like `fnm` or `nodenv` it will
be set automatically for you.

You can also get a production build by running:
```bash
npm run build
```

This will perform a build optimized for production that can then be deployed to be served statically.

