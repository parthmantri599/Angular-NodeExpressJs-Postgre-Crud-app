const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post('/api/customers/create', controller.create);

  app.put('/api/customers/updatebyid/:id', controller.updateById);

  app.delete('/api/customers/deletebyid/:id', controller.deleteById);

  app.get('/api/customers/retrieveinfos', controller.retrieveAllCustomers);

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);
  
  app.get("/api/test/admin", [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);

};