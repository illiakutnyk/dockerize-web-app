const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title": "Sun and Steel",
      "author": "Yukio Mishima"
    },
    {
      "id":"2",
      "title": "Why We Sleep",
      "author": "Matthew Walker"
    },
    {
      "id":"3",
      "title": "Spark",
      "author": "John J. Ratey"
    },
    {
      "id":"4",
      "title": "The Power of Habit",
      "author": "Charles Duhigg"
    },
    {
      "id":"5",
      "title": "Can't hurt me",
      "author": "David Goggins"
    }
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})