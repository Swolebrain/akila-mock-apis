module.exports =  {
  "userhealthprofile": [
    {
      "userinfo": [
        {
          "uid": "jsmith123",
          "token": "USER_ACCESS_TOKEN",
          "firstname": "John",
          "middlename": "",
          "lastname": "Smith",
          "image": {
            "url": "https://www.akilahealthapis.com/me?access_token=USER_ACCESS_TOKEN"
          }
        }
      ],
      "caloriedeficit": [
        {
          "type": "food",
          "subtype": "",
          "goal": 400,
          "progress": 212,
          "status": 1,
          "color": "red"
        },
        {
          "type": "activity",
          "subtype": "steps",
          "goal": 75,
          "progress": 68,
          "status": 3,
          "color": "green"
        },
        {
          "type": "exercise",
          "subtype": "running",
          "goal": 400,
          "progress": 212,
          "status": 2,
          "color": "amber"
        }
      ],
      "healthindex": [
        {
          "max": 10,
          "current": 8.2
        }
      ],
      "progress": [
        {
          "type": "activity",
          "recommendations": [
            {
              "type": "activity",
              "message": "Walk for 30 minutes after lunch."
            },
            {
              "type": "activity",
              "message": "Add 15 minutes walk on the way home."
            }
          ],
          "params": [
            {
              "type": "steps",
              "goal": 10000,
              "predicted": 6878,
              "current": 7898,
              "status": 1,
              "color": "green"
            },
            {
              "type": "stairs",
              "goal": 200,
              "predicted": 120,
              "current": 100,
              "status": 2,
              "color": "amber"
            },
            {
              "type": "caloriedeficit",
              "goal": 150,
              "predicted": 108,
              "current": 50,
              "status": 3,
              "color": "red"
            },
            {
              "type": "steps intensity",
              "cluster": [
                {
                  "level": 1,
                  "title": "Light",
                  "percentage": 50,
                  "color": "grey"
                },
                {
                  "level": 2,
                  "title": "Moderate",
                  "percentage": 30,
                  "color": "yellow"
                },
                {
                  "level": 3,
                  "title": "Intense",
                  "percentage": 6,
                  "color": "amber"
                },
                {
                  "level": 4,
                  "title": "Highly Intense",
                  "percentage": 4,
                  "color": "red"
                }
              ]
            }
          ]
        },
        {
          "type": "exercise",
          "subtype": "running",
          "recommendations": [
            {
              "type": "exercise",
              "message": "Try and get the heart rate to 158bpm."
            },
            {
              "type": "exercise",
              "message": "Add 15 minutes to the run today."
            }
          ],
          "params": [
            {
              "type": "duration",
              "goal": 30,
              "unit": "minutes",
              "predicted": 20,
              "current": 24,
              "status": 2,
              "color": "amber"
            },
            {
              "type": "speed",
              "goal": 5,
              "unit": "mph",
              "predicted": 4.9,
              "current": 4,
              "status": 3,
              "color": "green"
            },
            {
              "type": "heartrate",
              "goal": 160,
              "unit": "bpm",
              "predicted": 132,
              "current": 148,
              "status": 2,
              "color": "amber"
            }
          ]
        },
        {
          "type": "dietnutrition",
          "recommendations": [
            {
              "type": "dietnutrition",
              "message": "Eat low carbs and low glycemic index foods."
            },
            {
              "type": "dietnutrition",
              "message": "Substitute snacks with fruits."
            }
          ],
          "params": [
            {
              "type": "calories",
              "subtype": "",
              "goal": 1600,
              "unit": "cals",
              "predicted": 1898,
              "current": 1720,
              "status": 2,
              "color": "amber"
            },
            {
              "type": "macronutrients",
              "cluster": [
                {
                  "type": "macronutrients",
                  "subtype": "carbs",
                  "goal": 30,
                  "unit": "%",
                  "predicted": 60,
                  "current": 50,
                  "status": 1,
                  "color": "green"
                },
                {
                  "type": "macronutrients",
                  "subtype": "protein",
                  "goal": 60,
                  "unit": "%",
                  "predicted": 10,
                  "current": 5,
                  "status": 1,
                  "color": "yellow"
                },
                {
                  "type": "macronutrients",
                  "subtype": "fat grams",
                  "goal": 10,
                  "unit": "%",
                  "predicted": 30,
                  "current": 35,
                  "status": 1,
                  "color": "amber"
                },
                {
                  "type": "macronutrients",
                  "subtype": "others",
                  "goal": 5,
                  "unit": "%",
                  "predicted": 10,
                  "current": 10,
                  "status": 1,
                  "color": "red"
                }
              ]
            },
            {
              "type": "mealplan",
              "caldeficitforday": 400,
              "calbudget": 1600,
              "details": [
                {
                  "subtype": "breakfast",
                  "unit": "cal",
                  "current": 100,
                  "goal": 200,
                  "calbudget": 200,
                  "caldeficit": 100
                },
                {
                  "subtype": "lunch",
                  "unit": "cal",
                  "current": 100,
                  "goal": 200,
                  "calbudget": 600,
                  "caldeficit": 300
                },
                {
                  "subtype": "dinner",
                  "unit": "cal",
                  "current": 100,
                  "goal": 200,
                  "calbudget": 600,
                  "caldeficit": 300
                },
                {
                  "subtype": "snacks",
                  "unit": "cal",
                  "current": 100,
                  "goal": 200,
                  "calbudget": 200,
                  "caldeficit": 100
                }
              ]
            }
          ]
        },
        {
          "type": "sleep",
          "subtype": "",
          "recommendations": [
            {
              "type": "sleep",
              "message": "Set up a bedtime goal."
            },
            {
              "type": "sleep",
              "message": "Get enough exercise and activity for a good night sleep."
            }
          ],
          "params": [
            {
              "type": "duration",
              "goal": 8,
              "unit": "hrs",
              "predicted": 7,
              "current": 6.5,
              "status": 2,
              "color": "amber"
            },
            {
              "type": "bedtime",
              "goal": "11:00 PM",
              "current": "11:45 PM"
            },
            {
              "type": "wakeuptime",
              "goal": "6:00 AM",
              "current": "5:45 AM"
            },
            {
              "type": "sleepquality",
              "cluster": [
                {
                  "type": "asleep",
                  "percentage": 87,
                  "color": "green"
                },
                {
                  "type": "awake",
                  "percentage": 10,
                  "color": "red"
                },
                {
                  "type": "restless",
                  "percentage": 3,
                  "color": "amber"
                }
              ]
            }
          ]
        },
        {
          "type": "stress",
          "subtype": "",
          "recommendations": [
            {
              "type": "stress",
              "message": "Exercise first thing in the morning to beat stress."
            },
            {
              "type": "stress",
              "message": "Try mindful activities to relax."
            }
          ],
          "params": [
            {
              "type": "level",
              "goal": 0,
              "current": 1,
              "status": 1,
              "color": "green",
              "datetime": "02/6/2017 11:00 AM",
              "notes": "feeling good"
            },
            {
              "type": "progression",
              "cluster": [
                {
                  "level": 1,
                  "title": "None",
                  "color": "green"
                },
                {
                  "level": 2,
                  "title": "Low",
                  "color": "yellow"
                },
                {
                  "level": 3,
                  "title": "Medium",
                  "color": "amber"
                },
                {
                  "level": 4,
                  "title": "High",
                  "color": "red"
                },
                {
                  "level": 5,
                  "title": "Very High",
                  "color": "black"
                }
              ]
            }
          ]
        }
      ],
      "recommendations": [
        {
          "type": "activity",
          "message": "Walk for 30 minutes and eat less fat grams."
        },
        {
          "type": "dietnutrition",
          "message": "Keep the calories below 1000 until afternoon."
        }
      ]
    }
  ]
};