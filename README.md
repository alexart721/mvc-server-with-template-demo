# MVC Server with Templating Engine Demo

## Goal

To build a MVC server using a templating engine that shows a 'cloud' of thoughts that a user submits on the page

## Requirements

- Build API:
    - `GET` request at `/thought` endpoint that gets all the 'thoughts' from database
    - `POST` request at `/thought` endpoint to add a thought to database
- `Homepage` view that does/has the following:
    - When there's no thoughts yet, has a button to create a new thought.
    - When there's thoughts, adds them as bubbles on random spots on the screen.
    - Has a header with the name 'ThoughtCloud' and an input to the right that lets you add a thought to the DB when the Enter key is pressed.
- `404` view if a user tries to access an endpoint that doesn't exist.
- `500` view that a user sees if a server error has occurred.

## Tech stack

- Koa (server)
- MongoDB/ Mongoose (DB)
- [Pug](https://pugjs.org) (Template engine)