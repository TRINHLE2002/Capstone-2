const { authJwt } = require("../middlewares");
const controller = require("../controllers/exam.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/exam/all", controller.getAllExam);
  app.post("/api/exam", controller.CreateNewExam);
  app.post("/api/exam/:Id", controller.EditExam);
  app.delete("/api/exam/:ID", controller.DeleteExamById);

  app.get("/api/exam/:ID", controller.getExamById);

  app.get("/api/exam/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/exam/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/exam/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
