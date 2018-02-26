module.exports =  {
  "exercisecoaching": [
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
      "type": "running",
      "duration": [
        {
          "unit": "minutes",
          "goal": 45,
          "predicted": 30,
          "current": 42.5,
          "status": 3,
          "color": "green"
        }
      ],
      "speed": [
        {
          "unit": "mph",
          "goal": 6,
          "predicted": 4,
          "current": 5,
          "status": 2,
          "color": "amber"
        }
      ],
      "avgheartrate": [
        {
          "unit": "bpm",
          "goal": 162,
          "predicted": 140,
          "current": 152,
          "status": 3,
          "color": "green"
        }
      ],
      "caloriedeficit": [
        {
          "unit": "cals",
          "goal": 550,
          "predicted": 300,
          "current": 425,
          "status": 2,
          "color": "amber"
        }
      ],
      "avgcalsburnt": [
        {
          "unit": "cals/min",
          "goal": 15,
          "predicted": 10,
          "current": 13,
          "status": 3,
          "color": "green"
        }
      ],
      "cluster": [
        {
          "type": "heartratezone",
          "coached": true,
          "zone": 1,
          "color": "red",
          "title": "peak",
          "duration": 35,
          "unit": "minutes"
        },
        {
          "type": "heartratezone",
          "coached": true,
          "zone": 2,
          "color": "amber",
          "title": "cardio",
          "duration": 7,
          "unit": "minutes"
        },
        {
          "type": "heartratezone",
          "coached": true,
          "zone": 3,
          "color": "yellow",
          "title": "fatburn",
          "duration": 1,
          "unit": "minutes"
        }
      ],
      "actionplanlist": [
        {
          "type": "high intensity",
          "title": "Running",
          "duration": "45 minutes",
          "calsburnt": "550 cals",
          "color": "red"
        },
        {
          "type": "moderate intensity",
          "title": "Walking",
          "duration": "60 minutes",
          "calsburnt": "250 cals",
          "color": "yellow"
        }
      ],
      "substitutionlist": [
        {
          "type": "high intensity",
          "title": "Swimming",
          "duration": "45 minutes",
          "calsburnt": "450 cals",
          "color": "red"
        },
        {
          "type": "moderate intensity",
          "title": "Hiking",
          "duration": "60 minutes",
          "calsburnt": "250 cals",
          "color": "yellow"
        }
      ],
      "recommendations": [
        {
          "type": "exercise",
          "message": "Walk for 30 minutes at lunch time."
        },
        {
          "type": "exercise",
          "message": "Get off at grandcentral and walk home."
        }
      ]
    }
  ]
};