var Router = require("vertx-apex-js/router");
var TemplateHandler = require("vertx-apex-js/template_handler");
var HandlebarsTemplateEngine = require("vertx-apex-js/handlebars_template_engine");
var StaticHandler = require("vertx-apex-js/static_handler");


var router = Router.router(vertx);


var engine = HandlebarsTemplateEngine.create();
var handler = TemplateHandler.create(engine);

// Serve the dynamic pages


router.route().handler(function (routingContext) {

  routingContext.put("testdata", "test data");

  routingContext.next();
});

router.route().handler(handler.handle);

vertx.createHttpServer().requestHandler(router.accept).listen(8080);

