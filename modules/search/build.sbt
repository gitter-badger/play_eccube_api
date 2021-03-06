name := """search"""

version := "1.0-SNAPSHOT"

lazy val search = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.1"

libraryDependencies ++= Seq(
  jdbc,
  anorm,
  cache,
  ws,
  "org.elasticsearch" % "elasticsearch" % "1.3.1",
  "org.postgresql" % "postgresql" % "9.3-1102-jdbc41"
)
