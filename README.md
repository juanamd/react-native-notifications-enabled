# react-native-notifications-enabled

Android-only, New Architecture (TurboModule) check for whether notifications are enabled.

## Install

```sh
npm install https://github.com/juanamd/react-native-notifications-enabled.git
```

Autolinking does the rest. Rebuild the Android app afterwards.

## Usage

```ts
import { areNotificationsEnabled } from 'react-native-notifications-enabled';

const enabled = await areNotificationsEnabled(); // boolean
```

Uses `NotificationManagerCompat.areNotificationsEnabled()`. On Android 13+ it returns `false`
until the `POST_NOTIFICATIONS` permission is granted (request it with `PermissionsAndroid`).
