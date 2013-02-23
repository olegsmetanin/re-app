package data

import play.api._
import play.api.mvc._
import play.api.data._
import play.api.data.Forms._
import play.api.libs.json._
import Json._

import scala.util.Random
import scala.collection._

import views._


object Data {

  val centrLat = 40.74

  val centrLng = -74.210

  val random = new Random

  var points: List[(Double, Double)] = List()


  def generate = {
    this.points = {
      for {
        i <- Iterator.range(0, 500);
        lat <- Some(centrLat + (0.5 - random.nextDouble) * 1);
        lng <- Some(centrLng + (0.5 - random.nextDouble) * 1)
      } yield (lat, lng)
    } toList
  }

}
