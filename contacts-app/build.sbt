name := """play-java"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava, PlayEbean)

scalaVersion := "2.11.11"

libraryDependencies += javaJdbc
libraryDependencies += cache
libraryDependencies += javaWs
libraryDependencies ++= Seq(
  "org.mongodb" %% "mongo-java-driver" % "3.4.2",
  "org.reactivestreams" %% "reactive-streams" % "1.0.0",
  "org.mongodb" %% "morphia" % "1.3.2"  
)
