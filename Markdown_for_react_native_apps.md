# My Awesome React Native App

---

This is the boilerplate for my React Native project. This `README.md` provides essential information to get the project up and running, as well as common troubleshooting steps.

## Table of Contents

* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Running the App](#running-the-app)
        * [Android](#android)
        * [iOS](#ios)
* [Troubleshooting](#troubleshooting)
    * [Android Build Issues: Clean and Rebuild](#android-build-issues-clean-and-rebuild)
    * [Other Common Issues](#other-common-issues)
* [Project Structure](#project-structure)
* [Scripts](#scripts)
* [Contributing](#contributing)
* [License](#license)

---

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js**: [LTS version recommended](https://nodejs.org/en/download/)
* **npm** or **Yarn**: npm comes with Node.js; Yarn can be installed via `npm install -g yarn`
* **React Native CLI**: `npm install -g react-native-cli`
* **Java Development Kit (JDK)**: JDK 11 or newer is typically required for React Native.
* **Android Studio**: For Android development (includes Android SDK, platform tools).
    * Set up `ANDROID_HOME` environment variable.
* **Xcode**: For iOS development (macOS only).
* A physical device or emulator/simulator for running the app.

### Installation

1.  **Clone the repository (if applicable):**
    ```bash
    git clone [your-repo-url]
    cd [your-project-folder]
    ```

2.  **Install JavaScript dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the App

#### Android

1.  **Start an Android emulator** or connect a physical Android device with debugging enabled.
2.  **Run the app:**
    ```bash
    npx react-native run-android
    ```
    This command will build the Android app, install it on your device/emulator, and start the Metro bundler.

#### iOS

1.  **Install CocoaPods (if needed):**
    ```bash
    cd ios
    pod install
    cd ..
    ```
    (Run this if `npx react-native run-ios` fails due to missing pods)
2.  **Start an iOS simulator** or connect a physical iOS device.
3.  **Run the app:**
    ```bash
    npx react-native run-ios
    ```
    This command will build the iOS app, install it on your simulator/device, and start the Metro bundler.

---

## Troubleshooting

### Android Build Issues: Clean and Rebuild

If you're encountering persistent Android build errors, native module linking problems, or unexpected behavior, performing a deep clean and rebuild often resolves these issues.

**When to use this:**
* Persistent build errors (`Could not resolve` errors, `duplicate resources`, etc.)
* After upgrading React Native or major dependencies.
* Issues with native modules not linking correctly.
* Stale caches causing unexpected behavior.

**Steps:**

1.  **Close all running emulators/simulators and Metro bundler instances.**
2.  **Execute the following commands in your project's root directory:**

    **For Windows PowerShell/CMD:**
    ```bash
    Remove-Item -Recurse -Force android\.gradle
    Remove-Item -Recurse -Force android\app\build
    Remove-Item -Recurse -Force node_modules
    ```

    **For macOS/Linux/Git Bash (on Windows):**
    ```bash
    rm -rf android/.gradle
    rm -rf android/app/build
    rm -rf node_modules
    ```

3.  **Reinstall JavaScript dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

4.  **Clean Android project build:**
    ```bash
    cd android
    ./gradlew clean
    cd ..
    ```

5.  **Run the app again:**
    ```bash
    npx react-native run-android
    ```

### Other Common Issues

* **Metro Bundler Not Starting/Connecting:**
    * Try killing any existing Node.js processes on port 8081.
    * Run `npx react-native start --reset-cache`.
* **Xcode Build Errors (iOS):**
    * Open `ios/[YourAppName].xcworkspace` in Xcode, then go to Product > Clean Build Folder.
    * Ensure your Pods are up-to-date (`cd ios && pod install && cd ..`).
* **`Environment variable ANDROID_HOME not set`:**
    * Ensure you have configured `ANDROID_HOME` and `PATH` environment variables pointing to your Android SDK installation. Refer to React Native's official environment setup guide.

---

## Project Structure

A brief overview of the project's key directories and files:

* `android/`: Android native project files.
* `ios/`: iOS native project files.
* `node_modules/`: Installed JavaScript packages.
* `src/` (or similar): Your main application source code (components, screens, utilities).
* `App.js`: The main entry point of your React Native application.
* `package.json`: Project metadata and JavaScript dependencies.
* `app.json`: React Native specific configurations.
* `babel.config.js`: Babel configuration for JavaScript transpilation.
* `metro.config.js`: Metro bundler configuration.

---

## Scripts

Useful `npm` scripts defined in `package.json`:

* `npm start`: Starts the Metro bundler.
* `npm run android`: Runs the app on Android.
* `npm run ios`: Runs the app on iOS.
* `npm test`: Runs your tests.

---

## Contributing

Feel free to open issues or submit pull requests. Please adhere to the project's coding standards and guidelines.

---

## License

This project is licensed under the [Your License Here] - see the [LICENSE.md](LICENSE.md) file for details.