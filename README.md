# akila-mock-apis

*This repository requires additional data. You need a .sendmail-apikey.js file containing the sendmail api key, a .port.js file with the https port number, and a .cert.pem file with the auth0 certificate.*


## Authorization overview

The following document lists authorization details (jwt using Auth0):

https://docs.google.com/document/d/1T3K9PaR-AdMibTYfE1LKPVnve-IWDKLRX0Lpcc0r7cs/edit?usp=sharing

## SendinBlue email service

Seninblue is the cloud-based solution we use for sending transactional emails in this project. The username for sendinblue is akilalabnyc@gmail.com.

## List of endpoints:

home:

https://dev.akila.ai/api/home  

meal choices:  

https://dev.akila.ai/api/mealchoices  


coaching: 

https://dev.akila.ai/api/coaching/activity  
https://dev.akila.ai/api/coaching/exercise  
https://dev.akila.ai/api/coaching/diet  
https://dev.akila.ai/api/coaching/sleep  
https://dev.akila.ai/api/coaching/stress  

insights:

https://dev.akila.ai/api/insights/summary/:weeknum/monday  
https://dev.akila.ai/api/insights/summary/:weeknum/tuesday  
https://dev.akila.ai/api/insights/summary/:weeknum/wednesday  
https://dev.akila.ai/api/insights/summary/:weeknum/thursday  
https://dev.akila.ai/api/insights/summary/:weeknum/friday  
https://dev.akila.ai/api/insights/summary/:weeknum/saturday  
https://dev.akila.ai/api/insights/summary/:weeknum/sunday  
https://dev.akila.ai/api/insights/weight/:weeknum/monday  
https://dev.akila.ai/api/insights/weight/:weeknum/tuesday  
https://dev.akila.ai/api/insights/weight/:weeknum/wednesday  
https://dev.akila.ai/api/insights/weight/:weeknum/thursday  
https://dev.akila.ai/api/insights/weight/:weeknum/friday  
https://dev.akila.ai/api/insights/weight/:weeknum/saturday  
https://dev.akila.ai/api/insights/weight/:weeknum/sunday  
https://dev.akila.ai/api/insights/health/:weeknum/monday  
https://dev.akila.ai/api/insights/health/:weeknum/tuesday  
https://dev.akila.ai/api/insights/health/:weeknum/wednesday  
https://dev.akila.ai/api/insights/health/:weeknum/thursday  
https://dev.akila.ai/api/insights/health/:weeknum/friday  
https://dev.akila.ai/api/insights/health/:weeknum/saturday  
https://dev.akila.ai/api/insights/health/:weeknum/sunday  
https://dev.akila.ai/api/insights/activity/:weeknum/monday  
https://dev.akila.ai/api/insights/activity/:weeknum/tuesday  
https://dev.akila.ai/api/insights/activity/:weeknum/wednesday  
https://dev.akila.ai/api/insights/activity/:weeknum/thursday  
https://dev.akila.ai/api/insights/activity/:weeknum/friday  
https://dev.akila.ai/api/insights/activity/:weeknum/saturday  
https://dev.akila.ai/api/insights/activity/:weeknum/sunday  
https://dev.akila.ai/api/insights/exercise/:weeknum/monday  
https://dev.akila.ai/api/insights/exercise/:weeknum/tuesday  
https://dev.akila.ai/api/insights/exercise/:weeknum/wednesday  
https://dev.akila.ai/api/insights/exercise/:weeknum/thursday  
https://dev.akila.ai/api/insights/exercise/:weeknum/friday  
https://dev.akila.ai/api/insights/exercise/:weeknum/saturday  
https://dev.akila.ai/api/insights/exercise/:weeknum/sunday  
https://dev.akila.ai/api/insights/sleep/:weeknum/monday  
https://dev.akila.ai/api/insights/sleep/:weeknum/tuesday  
https://dev.akila.ai/api/insights/sleep/:weeknum/wednesday  
https://dev.akila.ai/api/insights/sleep/:weeknum/thursday  
https://dev.akila.ai/api/insights/sleep/:weeknum/friday  
https://dev.akila.ai/api/insights/sleep/:weeknum/saturday  
https://dev.akila.ai/api/insights/sleep/:weeknum/sunday  
https://dev.akila.ai/api/insights/stress/:weeknum/monday  
https://dev.akila.ai/api/insights/stress/:weeknum/tuesday  
https://dev.akila.ai/api/insights/stress/:weeknum/wednesday  
https://dev.akila.ai/api/insights/stress/:weeknum/thursday  
https://dev.akila.ai/api/insights/stress/:weeknum/friday  
https://dev.akila.ai/api/insights/stress/:weeknum/saturday  
https://dev.akila.ai/api/insights/stress/:weeknum/sunday  

goals:

https://dev.akila.ai/api/goals/currentweek/monday  
https://dev.akila.ai/api/goals/currentweek/tuesday  
https://dev.akila.ai/api/goals/currentweek/wednesday  
https://dev.akila.ai/api/goals/currentweek/thursday  
https://dev.akila.ai/api/goals/currentweek/friday  
https://dev.akila.ai/api/goals/currentweek/saturday  
https://dev.akila.ai/api/goals/currentweek/sunday  

meal plans:  

https://dev.akila.ai/api/goals/currentweek/mealplans
https://dev.akila.ai/api/goals/currentweek/mealplans/monday
https://dev.akila.ai/api/goals/currentweek/mealplans/tuesday
https://dev.akila.ai/api/goals/currentweek/mealplans/wednesday
https://dev.akila.ai/api/goals/currentweek/mealplans/thursday
https://dev.akila.ai/api/goals/currentweek/mealplans/friday
https://dev.akila.ai/api/goals/currentweek/mealplans/saturday
https://dev.akila.ai/api/goals/currentweek/mealplans/sunday