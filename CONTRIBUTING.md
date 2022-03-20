# Contributing to React Image Selector

PRs accepted in the [the Github repository](https://github.com/brownieboy/react-image-selector). Please include a few words about what it is you're trying to add or fix. Refer to an existing issue from the Issues section.

## Cloning and Dependency Installation

Clone [the repository from Github](https://github.com/brownieboy/react-image-selector). Click on the green "Code" button at that link and then follow the instructions.

Then run either:

```bash
yarn
```

or

```bash
npm install
```

in a terminal window to install the component's dependencies.

So something like this:

```bash
git clone git@github.com:brownieboy/react-image-selector.git
cd react-image-selector
yarn
```

## Component Source

The source code for the component is the /src/components/React-Image-Selector/react-image-selector folder, split between the files react-image-selector.tsx and image.tsx.

## Running in Storybook

To see the component in Storybook, run either

```bash
yarn storybook
```

or

```bash
npm run storybook
```

from a terminal. This will open the Story in a browser on port 6006.

Storybook imports directly from the source code, and the browser Story will update immediately you change that code.

The Storybook story source for React Image Selector is in file src/stories/React-Image-Selector.stories.mdx. If you're not familiar with MDX then you might want to [read up on it](https://storybook.js.org/docs/react/api/mdx) before editing that file.

## Tests

Run

```bash
yarn test
```

or

```bash
npm run test
```

in a terminal to run the unit tests.

These will tie up a terminal tab/window as the tests run continuously and will run every time you change the component source code. 💡 I like to keep this running in the Terminal tab in VSCode.

The tests themselves are in the file src/components/React-Image-Selector/react-image-selector.test.tsx. They use the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (@testing-library/react).

## Building a Distribution Version

To build a distribution version of the component, it's:

```bash
yarn build
```

or

```bash
npm run build
```

The built version wil be put in the /dist folder.
