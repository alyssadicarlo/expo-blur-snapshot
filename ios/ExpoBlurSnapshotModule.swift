import ExpoModulesCore
import UIKit

public class ExpoBlurSnapshotModule: Module {
  private var blurView: UIVisualEffectView?

  public func definition() -> ModuleDefinition {
    Name("ExpoBlurSnapshot")

    Function("getTheme") { () -> String in
      "system"
    }

    OnCreate {
      NotificationCenter.default.addObserver(
        forName: UIApplication.willResignActiveNotification,
        object: nil,
        queue: .main
      ) { [weak self] _ in
        self?.applyBlur()
      }

      NotificationCenter.default.addObserver(
        forName: UIApplication.didBecomeActiveNotification,
        object: nil,
        queue: .main
      ) { [weak self] _ in
        self?.removeBlur()
      }
    }
  }

  private func applyBlur() {
    guard let window = UIApplication.shared
      .connectedScenes
      .compactMap({ $0 as? UIWindowScene })
      .flatMap({ $0.windows })
      .first(where: { $0.isKeyWindow }) else {
        return
    }

    if blurView == nil {
      let blur = UIVisualEffectView(effect: UIBlurEffect(style: .light))
      blur.frame = window.bounds
      blur.autoresizingMask = [.flexibleWidth, .flexibleHeight]
      blur.tag = 999
      blurView = blur
      window.addSubview(blur)
    }
  }

  private func removeBlur() {
    blurView?.removeFromSuperview()
    blurView = nil
  }
}
