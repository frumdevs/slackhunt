import * as express from 'express'

const app = express();

const port = process.env.PORT || 3001

app.listen(port, () => console.log(`api server listening on ${port}`))
