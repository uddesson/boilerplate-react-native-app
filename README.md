# React Native App Boilerplate

Boilerplate for a React Native App project with some basic navigation setup.

## Requirements

- React Native CLI installed. Run `npm install -g react-native-cli`
- Setup for your development- and target OS. Follow the React Native CLI section (not the Expo one) of the [React Native Getting Started guide.](https://facebook.github.io/react-native/docs/getting-started.html)

## Setup

1. Clone this repository
2. Install dependencies with `yarn` or `npm install`
3. `cd` into the project folder
4. Link native dependencies with `react-native link`
5. Depending on your target OS, run either

```
react-native run-ios
```

or

```
react-native run-android
```

### Main dependencies used

- [Typescript](https://www.npmjs.com/package/typescript)
- [React Navigation](https://reactnavigation.org/en/)
- [React Native Elements](https://react-native-training.github.io/react-native-elements/)

### Project Structure

- `App.tsx` The root of your app.
- `src`
  - `components` Create app components here.
  - `navigators` Used for setting up navigation in your app.
  - `ui` Contains a theme file for customizing react-native-elements.
- `_tests_`
- `android`
- `ios`
- `node_modules`
- `setup, config, lockfiles etc.`
