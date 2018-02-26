const express = require('express');
const app = express();
const bp = require('body-parser');
const path = require('path');

app.use(bp.json());
app.use(bp.urlencoded({extended: true}));
app.set('port', 1337);

const routeMap = {
  "/api/home": require(__dirname + "/raw-data" + "/home.js"),
  //coaching
  "/api/coaching/activity": require(__dirname + "/raw-data" + "/coaching-activity.js"),
  "/api/coaching/exercise": require(__dirname + "/raw-data" + "/coaching-exercise"),
  "/api/coaching/diet": require(__dirname + "/raw-data" + "/coaching-diet"),
  "/api/coaching/sleep": require(__dirname + "/raw-data" + "/coaching-sleep"),
  "/api/coaching/stress": require(__dirname + "/raw-data" + "/coaching-stress"),
  //insight
  "/api/insights/summary": require(__dirname + "/raw-data/insights" + "/summary.js"),
  "/api/insights/weight": require(__dirname + "/raw-data/insights" + "/weight/weekly.js"),
  "/api/insights/health": require(__dirname + "/raw-data/insights" + "/health/weekly.js"),
  "/api/insights/activity": require(__dirname + "/raw-data/insights" + "/activity/weekly.js"),
  "/api/insights/exercise": require(__dirname + "/raw-data/insights" + "/exercise/weekly.js"),
  "/api/insights/sleep": require(__dirname + "/raw-data/insights" + "/sleep/weekly.js"),
  "/api/insights/stress": require(__dirname + "/raw-data/insights" + "/stress/weekly.js"),
  //goals
};

for (let route in routeMap)
  app.get(route, (req, res) => res.json(routeMap[route]));


app.get('/', (req, res) => {
  res.end("Akila mock APIs" + printRoutes(app));
});

app.listen(app.get('port'), () => console.log(`Server listening on port ${app.get('port')}`));

function printRoutes(app){
  return JSON.stringify(app._router.stack[4].route, null, 4);
}