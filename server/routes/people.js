var express = require('express');
var router = express.Router();
var request = require('request');

//https://www.latlong.net/place/london-the-uk-14153.html London coords
//http://jsfiddle.net/edgren/gAHJB/ Calculating distance between lat/long coords
        
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

router.get('/', function(req, res, next) {

  request
    .get('https://bpdts-test-app.herokuapp.com/users', (error, response, body) => {
      if(error) {
        return console.dir(error);
      }
      var data = JSON.parse(body);

      var arr =  data.filter(function(person) {
        var distance = getDistanceFromLatLonInKm(51.509865, -0.118092, person.latitude, person.longitude);
        console.log(distance)
        return distance <= 80.4672;
      });

      console.dir(arr);

      res.send(arr);
  });

});


module.exports = router;
