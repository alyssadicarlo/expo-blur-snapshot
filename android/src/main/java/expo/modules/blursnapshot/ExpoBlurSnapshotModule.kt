package expo.modules.blursnapshot

import android.view.WindowManager
import expo.modules.kotlin.exception.Exceptions
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoBlurSnapshotModule : Module() {
  private val currentActivity
    get() = appContext.currentActivity ?: throw Exceptions.MissingActivity()

  override fun definition() = ModuleDefinition {
    Name("ExpoBlurSnapshot")

    OnCreate {
      currentActivity.runOnUiThread {
        currentActivity.window.addFlags(WindowManager.LayoutParams.FLAG_SECURE)
      }
    }

    OnActivityEntersForeground {
      currentActivity.runOnUiThread {
        currentActivity.window.addFlags(WindowManager.LayoutParams.FLAG_SECURE)
      }
    }

    Function("getTheme") {
      return@Function "system"
    }
  }
}