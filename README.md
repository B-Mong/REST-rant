# Project REST-Rant

REST-Rant is an app where users can review restaurants.

This application will be using these methods and paths to take the user to that particular restaurant

| Method | Path             | Purpose                                           |
| ------ | ---------------- | ------------------------------------------------- |
| GET    | /                | Homepage                                          |
| GET    | /places          | Places index page                                 |
| POST   | /places          | Create new place                                  |
| GET    | /places/new      | Form for creating new page                        |
| GET    | /places/:id      | Details about a page                              |
| PUT    | /places/:id      | Update a particular place                         |
| GET    | /places/:id/edit | Form page for editing a place                     |
| DELETE | /places/:id      | Delete a particular page                          |
| POST   | /places/:id/rant | Create a rant comment about a place               |
| DELETE | /places/:id/rant | Delete a rant comment about a place               |
| GET    | *                | 404 page that matches any route not defined above |
|        |                  |                                                   |


Data keys will be as follow

| Field | Data Type |
| ----- | --------- |
| name  | string    |
| city  | string    |
| state  | string    |
| cuisine  | string    |
| pic  | string (url)    |

