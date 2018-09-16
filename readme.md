# Intro
1. `npm i parse-server express`
2.  `cloud/main.js`: Cloud functions definition <br>
3. `app.js`: Server configuration <br>
4. Interact with the server via Parse SDK or REST API 

# Interact with server (and database) via REST API
List of all operations: [API Quick Reference](https://docs.parseplatform.org/rest/guide/#quick-reference)
## Write
```
curl -X POST \
-H "X-Parse-Application-Id: myAppId" \
-H "Content-Type: application/json" \
-d '{"level":100,"playerName":"Sean Plott"}' \
http://localhost:1337/parse/classes/Gamers
```
Response: 
```
// Success
{
    "objectId": "Ac8lfqFl6c",
    "createdAt": "2018-09-16T09:04:38.452Z"
}
```

## Read
Change query by adding parameter to the request: `limit`, `where`, `skip`, `count`, `order`, ...
```
curl -X GET \
-H "X-Parse-Application-Id: myAppId" \
-H "Content-Type: application/json" \
http://localhost:1337/parse/classes/Gamers
```
response: 
```
{
    "results": [
        {
            "objectId": "Ac8lfqFl6c",
            "level": "100",
            "playerName": "Dat",
            "createdAt": "2018-09-16T09:04:38.452Z",
            "updatedAt": "2018-09-16T09:04:38.452Z"
        }
    ]
}
```
## Update
```
curl -X PUT \
  -H "X-Parse-Application-Id: myAppId" \
  -H "Content-Type: application/json" \
  -d '{"level":73453}' \
  https://localhost:3000/classes/Gamers/Ac8lfqFl6c
```
response:
```
// success
{
    "updatedAt": "2018-09-16T09:09:59.941Z"
}
```

## Delete
```
curl -X DELETE \
  -H "X-Parse-Application-Id: myAppId" \
  -H "Content-Type: application/json" \
  https://localhost:3000/classes/Gamers/Ac8lfqFl6c
```
response:
```
// success
{}
```
# How to use Cloud functions (Custom functions)
Parameters is passed in the body of POST request.
```
curl -X POST \
-H "X-Parse-Application-Id: myAppId" \
-H "Content-Type: application/json" \
http://localhost:1337/parse/functions/countGamers
```
