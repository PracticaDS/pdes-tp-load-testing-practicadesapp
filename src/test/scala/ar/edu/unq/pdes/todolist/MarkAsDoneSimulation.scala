package ar.edu.unq.pdes.todolist

import ar.edu.unq.pdes.todolist.Requests._
import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._

class MarkAsDoneSimulation extends TodosBaseSimulation {

  val scn = scenario("Create user") // A scenario is a chain of requests and pauses
    .exec(session => session.set("ids", Seq[Int]()))
    .repeat(10)  {
      exec(createUser("user")).pause(500.milliseconds);
    }

  setUp(
    scn.inject(rampUsers(200).during(10.seconds)).protocols(httpProtocol),
  )
}
