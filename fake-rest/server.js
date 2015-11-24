var jsonServer = require('json-server')

// Returns an Express server
var server = jsonServer.create()

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults())

// Returns an Express router
var router = jsonServer.router('db.json')

router.render = function (req, res) {
  url=req.url;

  console.log(req.body);

  if(req.method.indexOf('POST') != -1){
    res.jsonp(res.locals.data);
    return;
  }

  else if(url.indexOf('users') != -1)
    res.jsonp({
     user: res.locals.data
    })
  else if(url.indexOf('histories') != -1)
  res.jsonp({
   history: res.locals.data
  })
  else if(url.indexOf('coffees') != -1)
  res.jsonp({
   coffee: res.locals.data
  })
}

server.use(router)

server.listen(3000)
