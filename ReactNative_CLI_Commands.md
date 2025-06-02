
# 📱 React Native CLI Command Reference

A quick reference of essential commands for React Native development, especially useful for building apps like **Crude Oil Selling App**.

---

## 🚀 React Native CLI Commands

| Command | Description |
|--------|-------------|
| `npx react-native init CrudeApp` | Initializes a new React Native project named `CrudeApp`. |
| `cd CrudeApp` | Navigates into the newly created project folder. |
| `npx react-native run-android` | Builds and runs the app on an Android device/emulator. |
| `npx react-native run-ios` | Builds and runs the app on an iOS simulator (macOS only). |
| `npx react-native start` | Starts the Metro bundler (JavaScript packager for React Native). |
| `npx react-native doctor` | Diagnoses common environment setup issues. |
| `npx react-native log-android` | Shows logs from a connected Android device. |
| `npx react-native log-ios` | Shows logs from a connected iOS device (macOS only). |

---

## 🔧 Android-Specific Setup Commands

| Command | Description |
|--------|-------------|
| `adb devices` | Lists connected Android devices/emulators. |
| `adb reverse tcp:8081 tcp:8081` | Forwards port 8081 (for Metro) from PC to Android device. |

---

## 🧱 Project Dependencies

| Command | Description |
|--------|-------------|
| `npm install` | Installs all project dependencies listed in `package.json`. |
| `npm install <package-name>` | Installs a specific npm package to your project. |
| `npm install --save-dev <package>` | Installs a package as a dev dependency (e.g. CLI tools). |
| `npm uninstall <package>` | Removes a package from the project. |

---

## 📦 Firebase Setup (if using)

| Command | Description |
|--------|-------------|
| `npm install @react-native-firebase/app` | Installs the core Firebase package. |
| `npm install @react-native-firebase/firestore` | Installs Firestore for database use. |
| `npm install @react-native-firebase/auth` | Installs Firebase Authentication. |

---

## ⚒️ Development Utilities

| Command | Description |
|--------|-------------|
| `npm start` | Starts the Metro bundler (same as `npx react-native start`). |
| `npm run android` | Custom script if defined in `package.json`. |
| `npm cache clean --force` | Clears npm cache (useful when facing install errors). |
| `npx pod-install` | Installs CocoaPods (required for iOS, only on macOS). |

---

## 🌐 API Testing Tools (Optional)

| Tool | Description |
|------|-------------|
| [Postman](https://www.postman.com/) | GUI for testing API endpoints (GET, POST, etc.). |
| [Insomnia](https://insomnia.rest/) | Alternative to Postman for REST API testing. |

---

## 🧪 Useful Extras

| Command | Description |
|--------|-------------|
| `node -v` | Shows installed Node.js version. |
| `npm -v` | Shows installed npm version. |
| `java -version` | Confirms Java is installed (needed for Android builds). |
| `echo %JAVA_HOME%` (Windows) | Prints your JAVA_HOME path. |
| `setx JAVA_HOME "path\to\jdk"` | Sets JAVA_HOME environment variable in Windows. |
