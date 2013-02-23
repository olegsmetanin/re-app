import _root_.data.Data
import play.api._

object Global extends GlobalSettings {
  
  override def onStart(app: Application) {
    Data.generate
  }
  
}
