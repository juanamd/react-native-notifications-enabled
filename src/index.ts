import NativeNotificationsEnabled from './NativeNotificationsEnabled';

/**
 * Resolves `true` if the user has notifications enabled for this app.
 *
 * On Android 13+ this also returns `false` while the POST_NOTIFICATIONS
 * runtime permission has not been granted.
 *
 * Android only: rejects on other platforms.
 */
export function areNotificationsEnabled(): Promise<boolean> {
  if (!NativeNotificationsEnabled) {
    return Promise.reject(
      new Error('react-native-notifications-enabled is only available on Android.')
    );
  }
  return NativeNotificationsEnabled.areNotificationsEnabled();
}
