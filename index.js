const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const app = express();
const bp = require('body-parser');
const jwt = require('express-jwt');

let port = 1337;
try {
  port = require('./.port.js');
}
catch(e){
  console.log("EXCEPTION READING PORT FILE!!!");
}
app.set('port', port);
const PRODUCTION = app.get('port') === 443;

if (PRODUCTION) app.all('*', ensureSecure);

app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Method", "*");
	next();
});

app.use(express.static('static'));

app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

const routeMap = {
  "/api/home": require(__dirname + "/raw-data/home.js"),
  "/api/mealchoices": require(__dirname + "/raw-data/mealchoices.js"),
  //coaching
  "/api/coaching/activity": require(__dirname + "/raw-data/coaching-activity.js"),
  "/api/coaching/exercise": require(__dirname + "/raw-data/coaching-exercise"),
  "/api/coaching/diet": require(__dirname + "/raw-data/coaching-diet"),
  "/api/coaching/sleep": require(__dirname + "/raw-data/coaching-sleep"),
  "/api/coaching/stress": require(__dirname + "/raw-data/coaching-stress"),
  //insight
  "/api/insights/summary": require(__dirname + "/raw-data/insights/summary.js"),
  "/api/insights/weight": require(__dirname + "/raw-data/insights/weight/weekly.js"),
  "/api/insights/health": require(__dirname + "/raw-data/insights/health/weekly.js"),
  "/api/insights/activity": require(__dirname + "/raw-data/insights/activity/weekly.js"),
  "/api/insights/exercise": require(__dirname + "/raw-data/insights/exercise/weekly.js"),
  "/api/insights/sleep": require(__dirname + "/raw-data/insights/sleep/weekly.js"),
  "/api/insights/stress": require(__dirname + "/raw-data/insights/stress/weekly.js"),
  //goals
  "/api/goals/currentweek": require(__dirname + "/raw-data/goals/combined.js"),
  "/api/goals/currentweek/monday": require(__dirname + "/raw-data/goals/monday.js"),
  "/api/goals/currentweek/tuesday": require(__dirname + "/raw-data/goals/tuesday.js"),
  "/api/goals/currentweek/wednesday": require(__dirname + "/raw-data/goals/wednesday.js"),
  "/api/goals/currentweek/thursday": require(__dirname + "/raw-data/goals/thursday.js"),
  "/api/goals/currentweek/friday": require(__dirname + "/raw-data/goals/friday.js"),
  "/api/goals/currentweek/saturday": require(__dirname + "/raw-data/goals/saturday.js"),
  "/api/goals/currentweek/sunday": require(__dirname + "/raw-data/goals/sunday.js"),
  //goals - activity plans
  "/api/activitychoices" : require(__dirname + "/raw-data/activitychoices.js"),
  "/api/goals/currentweek/activityplan" : require(__dirname + "/raw-data/activityplans/combined.js"),
  "/api/goals/currentweek/activityplan/monday" : require(__dirname + "/raw-data/activityplans/monday.js"),
  "/api/goals/currentweek/activityplan/tuesday" : require(__dirname + "/raw-data/activityplans/tuesday.js"),
  "/api/goals/currentweek/activityplan/wednesday" : require(__dirname + "/raw-data/activityplans/wednesday.js"),
  "/api/goals/currentweek/activityplan/thursday" : require(__dirname + "/raw-data/activityplans/thursday.js"),
  "/api/goals/currentweek/activityplan/friday" : require(__dirname + "/raw-data/activityplans/friday.js"),
  "/api/goals/currentweek/activityplan/saturday" : require(__dirname + "/raw-data/activityplans/saturday.js"),
  "/api/goals/currentweek/activityplan/sunday" : require(__dirname + "/raw-data/activityplans/sunday.js"),
  //goals - meal plans
  "/api/goals/currentweek/mealplans" : require(__dirname + "/raw-data/mealplans/combined.js"),
  "/api/goals/currentweek/mealplans/monday" : require(__dirname + "/raw-data/mealplans/monday.js"),
  "/api/goals/currentweek/mealplans/tuesday" : require(__dirname + "/raw-data/mealplans/tuesday.js"),
  "/api/goals/currentweek/mealplans/wednesday" : require(__dirname + "/raw-data/mealplans/wednesday.js"),
  "/api/goals/currentweek/mealplans/thursday" : require(__dirname + "/raw-data/mealplans/thursday.js"),
  "/api/goals/currentweek/mealplans/friday" : require(__dirname + "/raw-data/mealplans/friday.js"),
  "/api/goals/currentweek/mealplans/saturday" : require(__dirname + "/raw-data/mealplans/saturday.js"),
  "/api/goals/currentweek/mealplans/sunday" : require(__dirname + "/raw-data/mealplans/sunday.js"),
  //goals-exercise plans
  "/api/exercisechoices" : require(__dirname + "/raw-data/exercisechoices.js"),
  "/api/goals/currentweek/exerciseplan" : require(__dirname + "/raw-data/exerciseplans/combined.js"),
  "/api/goals/currentweek/exerciseplan/monday" : require(__dirname + "/raw-data/exerciseplans/monday.js"),
  "/api/goals/currentweek/exerciseplan/tuesday" : require(__dirname + "/raw-data/exerciseplans/tuesday.js"),
  "/api/goals/currentweek/exerciseplan/wednesday" : require(__dirname + "/raw-data/exerciseplans/wednesday.js"),
  "/api/goals/currentweek/exerciseplan/thursday" : require(__dirname + "/raw-data/exerciseplans/thursday.js"),
  "/api/goals/currentweek/exerciseplan/friday" : require(__dirname + "/raw-data/exerciseplans/friday.js"),
  "/api/goals/currentweek/exerciseplan/saturday" : require(__dirname + "/raw-data/exerciseplans/saturday.js"),
  "/api/goals/currentweek/exerciseplan/sunday" : require(__dirname + "/raw-data/exerciseplans/sunday.js"),
};

for (let route in routeMap)
  app.get(route, (req, res) => res.json(routeMap[route]));

app.post('/api/email', jwt({
    secret: fs.readFileSync('./.cert.pem'),
    issuer: 'https://akila-ai.auth0.com/',
    audience: 'OXla466wNDEw7Y1JZZXE6cwRV5GCI6HQ',
    algorithms: ['RS256', 'RS512']
  }),
  require('./email.js'));

// app.get('/api/email', require('./email.js'));

let httpsOptions = {};
if (PRODUCTION){
  httpsOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/dev.akila.ai/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/dev.akila.ai/fullchain.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/live/dev.akila.ai/chain.pem')
  };
  https.createServer(httpsOptions, app).listen(app.get('port'), listenCB);
  http.createServer(app).listen(80, listenCB);
}
else{
  app.listen(app.get('port'), listenCB);
}



function listenCB(){
  console.log("Web server listening on port " + app.get('port'));
}

function printRoutes(app){
  return JSON.stringify(app._router.stack[4].route, null, 4);
}

function ensureSecure(req, res, next){
  if(req.secure){
    return next();
  };
  res.redirect('https://' + req.hostname + req.url); // express 4.x
};