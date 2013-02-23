package controllers

import _root_.data.Data
import play.api._
import play.api.mvc._
import play.api.data._
import play.api.data.Forms._
import play.api.libs.json._
import Json._

import scala.util.Random
import scala.collection

import views._


object API extends Controller {

  def getrecords = Action {
    request =>

    /*

    {"map":{"bounds":{"_southWest":{"lat":40.713955826286046,"lng":-74.24440383911131},"_northEast":{"lat":40.76598152771282,"lng":-74.17573928833008}},"zoom":13}}

    */

      val json_in = request.body.asJson.get

      val latmin = (json_in \ "map" \ "bounds" \ "_southWest" \ "lat").as[Double]
      val latmax = (json_in \ "map" \ "bounds" \ "_northEast" \ "lat").as[Double]
      val lngmin = (json_in \ "map" \ "bounds" \ "_southWest" \ "lng").as[Double]
      val lngmax = (json_in \ "map" \ "bounds" \ "_northEast" \ "lng").as[Double]

      val filtredPoints = Data.points.filter(x => (((x._1 < latmax) && (x._1 > latmin)) && ((x._2 < lngmax) && (x._2 > lngmin))))

      val json = Json.toJson(
        Map[String, JsValue](
          "points" ->
            JsArray(
              filtredPoints.map(x =>
                toJson(
                  Map(
                    "lat" -> toJson(x._1),
                    "lng" -> toJson(x._2)
                  )
                )
              )
            )

        )
      )

      Ok(json)
  }


}
