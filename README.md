# Bus-reservation
Supratours filiale du groupe ONCF qui assure des continuations par autocars pour les villes non desservies par le train a besoin de mettre en place un système informatique en créant une base de données pour la gestion de réservation des clients.
Cette solution fait recours aux matériels informatiques et aux logiciels appropriés qui faciliteront le traitement automatique de données.

## Tech Stack

**Client:** React, TailwindCSS ,scss ,(Next sprint)

**Server:** Node, Express

**Database:** Mongo DB 

**ODM:** Mongoose

## API Reference

## user Endpoints

| Method    | Endpoint     | Description                |
| :-------- | :------- | :------------------------- |
| GET | http://localhost:5000/api/users/me | getUser |
| POST | http://localhost:5000/api/users/login | loginUser |
| POST | http://localhost:5000/api/users/register | RegisterUser |

## Ticket Endpoints

| Method    | Endpoint     | Description                |
| :-------- | :------- | :------------------------- |
| GET | http://localhost:5000/api/ticket | getTicket |
| POST | http://localhost:5000/api/ticket | setTicket |
| DELETE | http://localhost:5000/api/ticket/:id | deleteTicket (soft delete) |

## Travel Endpoints

| Method    | Endpoint     | Description                |
| :-------- | :------- | :------------------------- |
| GET | http://localhost:5000/api/travel/all | getAllTravels |
| GET | http://localhost:5000/api/travel/city1/city2 | getTravelByCitySelected |
| POST | http://localhost:5000/api/travel | setTravel |
| POST | http://localhost:5000/api/travel/findTravel| FindTravelById |
| Put | http://localhost:5000/api/travel/:id | UpdateTravel |
| DELETE | http://localhost:5000/api/travel/:id | deleteTravel(soft delete) |
