# react-native-instagram-app

<p align="center">
  <img alt="React Native Instagram App"
        src="assets/app-review.gif" />
</p>

# What's Included?

- _Navigation System_
  - React Navigation _V6_
- _HTTP Network Management_
  - Axios
- _Local Storage Ready to Use Util Functions_
  - MMKV Storage
- _Built-in Custom Font Implementation_

# How to Run the App?

### Install Pods (iOS Only)

- `npm i`
- `cd ios && pod install`
- `cd .. && react-native run-ios/android`

### Android local.properties (Android Only)

- `npm i`
- `cd android && mkdir local.properties`
- `nano local.properties`

## Android local.properties

- Go to `Android -> local.properties`
- Change the your local android sdk

#### Example of MacOS Android SDK Path

Make sure that set your right path of _Android SDK_

Replace your machine name instead of `username`

sdk.dir=/Users/username/Library/Android/sdk