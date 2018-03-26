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
  //insights
  "/api/insights/summary/:weeknum/monday": require(__dirname + "/raw-data/insights/summary.js"),
  "/api/insights/summary/:weeknum/tuesday": require(__dirname + "/raw-data/insights/summary.js"),
  "/api/insights/summary/:weeknum/wednesday": require(__dirname + "/raw-data/insights/summary.js"),
  "/api/insights/summary/:weeknum/thursday": require(__dirname + "/raw-data/insights/summary.js"),
  "/api/insights/summary/:weeknum/friday": require(__dirname + "/raw-data/insights/summary.js"),
  "/api/insights/summary/:weeknum/saturday": require(__dirname + "/raw-data/insights/summary.js"),
  "/api/insights/summary/:weeknum/sunday": require(__dirname + "/raw-data/insights/summary.js"),
  "/api/insights/weight/:weeknum/monday": require(__dirname + "/raw-data/insights/weight/weekly.js"),
  "/api/insights/weight/:weeknum/tuesday": require(__dirname + "/raw-data/insights/weight/weekly.js"),
  "/api/insights/weight/:weeknum/wednesday": require(__dirname + "/raw-data/insights/weight/weekly.js"),
  "/api/insights/weight/:weeknum/thursday": require(__dirname + "/raw-data/insights/weight/weekly.js"),
  "/api/insights/weight/:weeknum/friday": require(__dirname + "/raw-data/insights/weight/weekly.js"),
  "/api/insights/weight/:weeknum/saturday": require(__dirname + "/raw-data/insights/weight/weekly.js"),
  "/api/insights/weight/:weeknum/sunday": require(__dirname + "/raw-data/insights/weight/weekly.js"),
  "/api/insights/health/:weeknum/monday": require(__dirname + "/raw-data/insights/health/weekly.js"),
  "/api/insights/health/:weeknum/tuesday": require(__dirname + "/raw-data/insights/health/weekly.js"),
  "/api/insights/health/:weeknum/wednesday": require(__dirname + "/raw-data/insights/health/weekly.js"),
  "/api/insights/health/:weeknum/thursday": require(__dirname + "/raw-data/insights/health/weekly.js"),
  "/api/insights/health/:weeknum/friday": require(__dirname + "/raw-data/insights/health/weekly.js"),
  "/api/insights/health/:weeknum/saturday": require(__dirname + "/raw-data/insights/health/weekly.js"),
  "/api/insights/health/:weeknum/sunday": require(__dirname + "/raw-data/insights/health/weekly.js"),
  "/api/insights/activity/:weeknum/monday": require(__dirname + "/raw-data/insights/activity/weekly.js"),
  "/api/insights/activity/:weeknum/tuesday": require(__dirname + "/raw-data/insights/activity/weekly.js"),
  "/api/insights/activity/:weeknum/wednesday": require(__dirname + "/raw-data/insights/activity/weekly.js"),
  "/api/insights/activity/:weeknum/thursday": require(__dirname + "/raw-data/insights/activity/weekly.js"),
  "/api/insights/activity/:weeknum/friday": require(__dirname + "/raw-data/insights/activity/weekly.js"),
  "/api/insights/activity/:weeknum/saturday": require(__dirname + "/raw-data/insights/activity/weekly.js"),
  "/api/insights/activity/:weeknum/sunday": require(__dirname + "/raw-data/insights/activity/weekly.js"),
  "/api/insights/exercise/:weeknum/monday": require(__dirname + "/raw-data/insights/exercise/weekly.js"),
  "/api/insights/exercise/:weeknum/tuesday": require(__dirname + "/raw-data/insights/exercise/weekly.js"),
  "/api/insights/exercise/:weeknum/wednesday": require(__dirname + "/raw-data/insights/exercise/weekly.js"),
  "/api/insights/exercise/:weeknum/thursday": require(__dirname + "/raw-data/insights/exercise/weekly.js"),
  "/api/insights/exercise/:weeknum/friday": require(__dirname + "/raw-data/insights/exercise/weekly.js"),
  "/api/insights/exercise/:weeknum/saturday": require(__dirname + "/raw-data/insights/exercise/weekly.js"),
  "/api/insights/exercise/:weeknum/sunday": require(__dirname + "/raw-data/insights/exercise/weekly.js"),
  "/api/insights/sleep/:weeknum/monday": require(__dirname + "/raw-data/insights/sleep/weekly.js"),
  "/api/insights/sleep/:weeknum/tuesday": require(__dirname + "/raw-data/insights/sleep/weekly.js"),
  "/api/insights/sleep/:weeknum/wednesday": require(__dirname + "/raw-data/insights/sleep/weekly.js"),
  "/api/insights/sleep/:weeknum/thursday": require(__dirname + "/raw-data/insights/sleep/weekly.js"),
  "/api/insights/sleep/:weeknum/friday": require(__dirname + "/raw-data/insights/sleep/weekly.js"),
  "/api/insights/sleep/:weeknum/saturday": require(__dirname + "/raw-data/insights/sleep/weekly.js"),
  "/api/insights/sleep/:weeknum/sunday": require(__dirname + "/raw-data/insights/sleep/weekly.js"),
  "/api/insights/stress/:weeknum/monday": require(__dirname + "/raw-data/insights/stress/weekly.js"),
  "/api/insights/stress/:weeknum/tuesday": require(__dirname + "/raw-data/insights/stress/weekly.js"),
  "/api/insights/stress/:weeknum/wednesday": require(__dirname + "/raw-data/insights/stress/weekly.js"),
  "/api/insights/stress/:weeknum/thursday": require(__dirname + "/raw-data/insights/stress/weekly.js"),
  "/api/insights/stress/:weeknum/friday": require(__dirname + "/raw-data/insights/stress/weekly.js"),
  "/api/insights/stress/:weeknum/saturday": require(__dirname + "/raw-data/insights/stress/weekly.js"),
  "/api/insights/stress/:weeknum/sunday": require(__dirname + "/raw-data/insights/stress/weekly.js"),
  //goals
  "/api/goals/:weeknum": require(__dirname + "/raw-data/goals/combined.js"),
  "/api/goals/:weeknum/monday": require(__dirname + "/raw-data/goals/monday.js"),
  "/api/goals/:weeknum/tuesday": require(__dirname + "/raw-data/goals/tuesday.js"),
  "/api/goals/:weeknum/wednesday": require(__dirname + "/raw-data/goals/wednesday.js"),
  "/api/goals/:weeknum/thursday": require(__dirname + "/raw-data/goals/thursday.js"),
  "/api/goals/:weeknum/friday": require(__dirname + "/raw-data/goals/friday.js"),
  "/api/goals/:weeknum/saturday": require(__dirname + "/raw-data/goals/saturday.js"),
  "/api/goals/:weeknum/sunday": require(__dirname + "/raw-data/goals/sunday.js"),
  //goals - activity plans
  "/api/activitychoices" : require(__dirname + "/raw-data/activitychoices.js"),
  "/api/goals/activityplan/:weeknum" : require(__dirname + "/raw-data/activityplans/combined.js"),
  "/api/goals/activityplan/:weeknum/monday" : require(__dirname + "/raw-data/activityplans/monday.js"),
  "/api/goals/activityplan/:weeknum/tuesday" : require(__dirname + "/raw-data/activityplans/tuesday.js"),
  "/api/goals/activityplan/:weeknum/wednesday" : require(__dirname + "/raw-data/activityplans/wednesday.js"),
  "/api/goals/activityplan/:weeknum/thursday" : require(__dirname + "/raw-data/activityplans/thursday.js"),
  "/api/goals/activityplan/:weeknum/friday" : require(__dirname + "/raw-data/activityplans/friday.js"),
  "/api/goals/activityplan/:weeknum/saturday" : require(__dirname + "/raw-data/activityplans/saturday.js"),
  "/api/goals/activityplan/:weeknum/sunday" : require(__dirname + "/raw-data/activityplans/sunday.js"),
  //goals - meal plans
  "/api/goals/mealplans/:weeknum" : require(__dirname + "/raw-data/mealplans/combined.js"),
  "/api/goals/mealplans/:weeknum/monday" : require(__dirname + "/raw-data/mealplans/monday.js"),
  "/api/goals/mealplans/:weeknum/tuesday" : require(__dirname + "/raw-data/mealplans/tuesday.js"),
  "/api/goals/mealplans/:weeknum/wednesday" : require(__dirname + "/raw-data/mealplans/wednesday.js"),
  "/api/goals/mealplans/:weeknum/thursday" : require(__dirname + "/raw-data/mealplans/thursday.js"),
  "/api/goals/mealplans/:weeknum/friday" : require(__dirname + "/raw-data/mealplans/friday.js"),
  "/api/goals/mealplans/:weeknum/saturday" : require(__dirname + "/raw-data/mealplans/saturday.js"),
  "/api/goals/mealplans/:weeknum/sunday" : require(__dirname + "/raw-data/mealplans/sunday.js"),
  //goals-exercise plans
  "/api/exercisechoices" : require(__dirname + "/raw-data/exercisechoices.js"),
  "/api/goals/exerciseplan/:weeknum" : require(__dirname + "/raw-data/exerciseplans/combined.js"),
  "/api/goals/exerciseplan/:weeknum/monday" : require(__dirname + "/raw-data/exerciseplans/monday.js"),
  "/api/goals/exerciseplan/:weeknum/tuesday" : require(__dirname + "/raw-data/exerciseplans/tuesday.js"),
  "/api/goals/exerciseplan/:weeknum/wednesday" : require(__dirname + "/raw-data/exerciseplans/wednesday.js"),
  "/api/goals/exerciseplan/:weeknum/thursday" : require(__dirname + "/raw-data/exerciseplans/thursday.js"),
  "/api/goals/exerciseplan/:weeknum/friday" : require(__dirname + "/raw-data/exerciseplans/friday.js"),
  "/api/goals/exerciseplan/:weeknum/saturday" : require(__dirname + "/raw-data/exerciseplans/saturday.js"),
  "/api/goals/exerciseplan/:weeknum/sunday" : require(__dirname + "/raw-data/exerciseplans/sunday.js"),
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