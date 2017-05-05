# React Native Demo
### Requirements

  Node, Python2, JDK
- [Nodejs](https://nodejs.org/en/download/).
- [Python2](https://www.python.org/downloads/).
- [jdk8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).

The React Native CLI 
``` sh
  $ npm install -g react-native-cli
```

Android Development Environment
- Follow [this guide](https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment)

Starting the Android Virtual Device
- Opening the "AVD Manager" from within Android Studio.
- Once in the "AVD Manager", select your AVD and click "Edit...". Choose "Android 6.0 - API Level 23" under Device, and "Intel Atom (x86_64)" under CPU/ABI. Click OK, then select your new AVD and click "Start...", and finally, "Launch".

### Prepare source

```sh
  $ git clone https://github.com/tuvalusoftware/ReactNativeDemo.git
```

### Build and Running

```sh
  $ cd ReactNativeDemo
  $ react-native run-android
```
