
# Hotel Management API

## Live Endpoints
Save yourself the strees of running it locally. find below the hosted version

```html

https://dorainn.onrender.com/api/v3/user

https://dorainn.onrender.com/api/v3/roomtype


https://residenceinn.onrender.com/api/v3/room

```

## Introduction
Hotel Management API is an api for managing Rooms and RoomTypes in an Hotel

## Project Support Features
* Authentication and Authorization 
* Create any room and Room Type
* Fetch all rooms and Room Types
* Edit any room and Room Type
* Delete any room and Room Type

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/23888060-ff17f346-7ed7-4ce8-ae62-89f6f4598421?action=collection%2Ffork&collection-url=entityId%3D23888060-ff17f346-7ed7-4ce8-ae62-89f6f4598421%26entityType%3Dcollection%26workspaceId%3D2b06ad48-72f9-47f5-ab0c-b6088331e2f1#?env%5BProduction%5D=W3sia2V5IjoiVVJMIiwidmFsdWUiOiJodHRwczovL2RvcmFpbm4ub25yZW5kZXIuY29tL2FwaS92My8iLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6Imh0dHBzOi8vZG9yYWlubi5vbnJlbmRlci5jb20vYXBpL3YzLyIsInNlc3Npb25JbmRleCI6MH0seyJrZXkiOiJqd3QiLCJ2YWx1ZSI6bnVsbCwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImFueSIsInNlc3Npb25WYWx1ZSI6Im51bGwiLCJzZXNzaW9uSW5kZXgiOjF9XQ==)

find postman documentation [here](https://documenter.getpostman.com/view/23888060/2s93CPrCw2)

# Run Locally

## Installation Guide
* Clone this repository [here](https://github.com/Theawesomedeveloper/Hotel-Management-api-v3.git).
* Configure Mongodb URI for your Database
* Create an .env file in your project root folder and the following variables to it
    * URI - `mongodb uri`
    * SECRET_KEY- `secret key to sign and verify jwt`
    * TOKEN_EXPIRES_IN - `jwt token expiration`

### Usage
* Run `npm run build` to build the javascript file.
* Run `npm start` or `npm run dev` to use `node` or `nodemon` respectively

## Directory Structure

- `/src` contains all folders  related to the api
- `/connections` contains the database connection function
- `/controllers` contains the controller/ business logic for each collection
- `/interface` contains custom typescript types for each collection
- `/middlewares` contains the necessary middlewares
- `/models` contains the schemas for each collection
- `/routes` contains the routing for each collection
- `/services` contains the database query for each collection
- `/utils` contains some helper functions






```bash
Hotel-Management-API-V3
├───app.js
└───src
        ├───connections
        |         └───db.connection.ts
        ├───controllers
        |         ├───room.controller.ts
        |         ├───roomtype.controller.ts
        |         └───user.controller.ts
        ├───interfaces
        |         ├───room.interface.ts
        |         ├───roomtype.interface.ts
        |         ├───typings.interface.ts
        |         └───user.interface.ts
        ├───middlewares
        |         ├───authenticate.middleware.ts
        |         ├───authorise.middleware.ts
        |         └───validation.middleware.ts
        ├───models
        |         ├───room.model.ts
        |         ├───roomtype.model.ts
        |         └───user.model.ts
        ├───routes
        |         ├───health.route.ts
        |         ├───index.route.ts
        |         ├───roomtype.route.ts
        |         ├───roomtype.route.ts
        |         └───user.route.ts
        ├───services
        |       ├───room.service.ts
        |       ├───roomtype.service.ts
        |       └───user.service.ts
        └───utils
                └───config.util.ts

```

## API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| `POST` | /api/v3/roomtypes | Create a new Room Type |
| `POST` | /api/v3/rooms | Create a new Room |
| `GET` | /api/v3/roomtypes | To retrieve all Room Types  |
| `GET` | /api/v3/rooms | To retrieve all Rooms  |
| `GET` | /api/v3/roomtypes/:roomtype | To retrieve a specific Room Type  |
| `GET` | /api/v3/rooms/:roomId | To retrieve a specific room  |
| `PATCH` | /api/v3/roomtypes/:roomtype | To edit the details of a roomtype |
| `PATCH` | /api/v3/rooms/:roomId | To edit the details of a Room |
| `DELETE` | /api/v3/roomtypes/:roomtype | To delete a single Room Type |
| `DELETE` | /api/v3/rooms/roomId | To delete a single Room |
| `POST` | /api/v3/user/login | login a user |
| `POST` | /api/v3/user/register | to register a new user |


## HTTP POST Request Parameters

### user route

#### Example
```html
https://dorainn.onrender.com/api/v3/user/register
https://dorainn.onrender.com/api/v3/user/login

or

http://127.0.0.1:3000/api/v3/user/register
http://127.0.0.1:3000/api/v3/user/login

```

|Object| Description|
|:-----|:-----------|
|`email`|user's email|
|`password`| user's password|

## HTTP GET Request Parameters



### rooms route

#### Example
```html
https://dorainn.onrender.com/api/v3/room?roomId=""&roomType=""

or

http://127.0.0.1:3000/api/v3/room?roomId=""&roomType=""

```

|Object| Description|
|:-----|:-----------|
|`roomId`|[optional] use this parameter to filter response by room id|
|`roomType`| [optional] use this parameter to filter response by room type|



### roomtypes route


#### Example
```html
https://dorainn.onrender.com/api/v3/roomtype?bedCount=""&bedrooms=""&bathrooms=""&maxOccupancy=""

or

http://127.0.0.1:3000/api/v3/roomtype?bedCount=""&bedount=""&bathrooms=""&maxOccupancy=""

```

|Object| Description|
|:-----|:-----------|
|`bedType`|[optional] use this parameter to filter response by bedType|
|`bedrooms`| [optional] use this parameter to filter response by number of bedrooms|
|`pricePerNight`| [optional] use this parameter to filter response by price|
|`maxOccupancy`|[optional] use this parameter to filter response by maxOccupancy|


## HTTP PATCH Request Parameters

### rooms route

#### Example
```html
https://dorainn.onrender.com/api/v3/roomtype/:roomType

or

http://127.0.0.1:3000/api/v3/roomtype/:roomType


```

|Object| Description|
|:-----|:-----------|
|`roomId`| use this to edit a room id|
|`price`| use this to edit the price of a room|


### roomtypes route

#### Example
```html
https://dorainn.onrender.com/api/v3/room/:roomId

or

http://127.0.0.1:3000/api/v3/room/:roomId


```

|Object| Description|
|:-----|:-----------|
|`amenities`|[optional] use this parameter to edit ameities available to a room type|
|`bedType`|[optional] use this parameter to edit the type of bed|
|`pricePerNight`| [optional] use this parameter to edit the price per night|
|`maxOccupancy`|[optional] use this parameter to edit  maxOccupancy|

## Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
* [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.
