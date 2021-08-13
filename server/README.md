### Dependencies

- ~~body-parser to enable sending post requests~~
- body-parser is deprecated, express.json and express.urlEncoded(/* */) can now
 be used.
- cors to enable cross-origin requests
- express framework for the routing of the app
 mongoose for the models for our posts (models are responsible for creating and
 reading docs from the underlying MongoDB database)
 - nodemon so that we don't need to reset the server each time