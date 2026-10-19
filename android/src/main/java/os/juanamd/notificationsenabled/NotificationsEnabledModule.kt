package os.juanamd.notificationsenabled

import androidx.core.app.NotificationManagerCompat
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = NotificationsEnabledModule.NAME)
class NotificationsEnabledModule(reactContext: ReactApplicationContext) :
  NativeNotificationsEnabledSpec(reactContext) {

  override fun getName() = NAME

  override fun areNotificationsEnabled(promise: Promise) {
    try {
      promise.resolve(NotificationManagerCompat.from(reactApplicationContext).areNotificationsEnabled())
    } catch (e: Exception) {
      promise.reject("E_NOTIFICATIONS_CHECK", e)
    }
  }

  companion object {
    const val NAME = "NotificationsEnabled"
  }
}
