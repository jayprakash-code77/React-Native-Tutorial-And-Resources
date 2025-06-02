
# 📘 React Native APK Build Guide

## 🛠️ Prerequisites

- Ensure you are inside your React Native project directory.
- Android SDK, Java JDK, and environment paths must be properly set.
- Optional: Create a keystore for release signing.

---

## 📦 1. Clean the Project

```bash
cd android
./gradlew clean
```

---

## 🧪 2. Build Debug APK

```bash
./gradlew assembleDebug
```

- ✅ Output Path: `android/app/build/outputs/apk/debug/app-debug.apk`

---

## 🔐 3. Setup for Release APK

### Create a Keystore

```bash
keytool -genkeypair -v -keystore my-release-key.keystore \
  -alias my-key-alias \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000
```

- Copy `my-release-key.keystore` to `android/app/`

### Add to `android/gradle.properties`

```properties
MYAPP_UPLOAD_STORE_FILE=my-release-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=your-store-password
MYAPP_UPLOAD_KEY_PASSWORD=your-key-password
```

### Edit `android/app/build.gradle`

```groovy
android {
    signingConfigs {
        release {
            storeFile file(MYAPP_UPLOAD_STORE_FILE)
            storePassword MYAPP_UPLOAD_STORE_PASSWORD
            keyAlias MYAPP_UPLOAD_KEY_ALIAS
            keyPassword MYAPP_UPLOAD_KEY_PASSWORD
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            shrinkResources false
            minifyEnabled false
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
        }
    }
}
```

---

## 🚀 4. Build Release APK

```bash
./gradlew assembleRelease
```

- ✅ Output Path: `android/app/build/outputs/apk/release/app-release.apk`

---

## 🧳 5. (Optional) Build Android App Bundle (.aab)

```bash
./gradlew bundleRelease
```

- ✅ Output Path: `android/app/build/outputs/bundle/release/app-release.aab`

---

## 📲 6. Install APK on Connected Device

```bash
adb install app/build/outputs/apk/release/app-release.apk
```

---

## 🐞 7. Debugging & Status

```bash
./gradlew --status
./gradlew assembleRelease --info
./gradlew assembleRelease --debug
```
