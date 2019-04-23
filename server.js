'use strict';

const express = require('express'),
  app = express(),
  PORT = process.env.PORT || 3000;

app.get('/location', (req, res) => {
  const locationData = searchToLatLong(req.query.data);
  res.send(locationData);
});

const searchToLatLong = query => {
  const geoData = require('./data/geo.json');
  const location = new Location(query, geoData);
  return location;
};

function Location(query, res) {
  this.query = query,
  this.formatted_query = res.results[0].formatted_address,
  this.latitude = res.results[0].geometry.location.lat,
  this.longitude = res.results[0].geometry.location.lng;
}

app.listen(PORT, () => console.log(`App is up and running on ${PORT}`));
