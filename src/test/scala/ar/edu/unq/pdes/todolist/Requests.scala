package ar.edu.unq.pdes.todolist

import io.gatling.core.Predef._
import io.gatling.http.Predef._

object Requests {
  def createUser(name: String = "user") = {
    http("Create user")
      .post("/api/" + name + "/factory")
      .header("Content-Type", "application/json")
      .body(StringBody(s"""{"name": "${name}", "src": "${name}"}"""))
      .check(status.is(200))
  }
}
