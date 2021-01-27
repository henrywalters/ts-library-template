# TypeScript Library Template
A generic typescript library template to help you get started right away. Includes a demo application served with express.

## Getting Started
You will want to start by changing the name of the library in `package.json`. For local development, before publishing, it is nice to locally link the project.

Run this command in the root of the project to create a symbolic link for npm.

```npm link```

Then, to use the library in another project, such as the demo folder, run this command:

```npm link [library_name]```

replacing `[library_name]` with the name you set in `package.json`.

To start serving static files run (from root of project):

```npm run demo-serve```

To build the javascript for the demo you may use either

```npm run demo-build``` 

or 

```npm run demo-watch```

Finally, to build the TypeScript library, you may use either:

```npm run build```

or

```npm run watch```