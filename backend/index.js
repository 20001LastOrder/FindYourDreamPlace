const express = require("express");
const app = express();
var request = require("request");
var cors = require("cors");
var google = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?";
var googleParam = "inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyD71BfCakchtjAdhCVEXm6pOwU-MG4ww3c"
app.use(express.static(__dirname+"/public"));
app.use(cors());
process.env.GOOGLE_APPLICATION_CREDENTIALS = "credential.json";
app.set("view engine", "ejs");
const vision = require('@google-cloud/vision');
// Creates a client
const client = new vision.ImageAnnotatorClient();

app.get('/',(req, res) => {
    // Performs label detection on the image file
  if(!req.query.url) {
    res.send({});
    return;
  }
  client
    .webDetection(req.query.url)
    .then(results => {
      const webResults = results[0].webDetection.webEntities;
      const labels = results[0].labelAnnotations;
      const searchResult = {
        "web" : webResults,
        "labels" : labels
      };
      res.send(searchResult);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
});

app.get("/image",function(req, res){
  console.log("66")
      var requests = {
        "image":
          {
            "source":
            {
              "imageUri":req.query.url
            }
      
          },
        "features":[
        {
          "type":"LABEL_DETECTION"
        },
        {
          "type":"WEB_DETECTION"
        }
        ]
    };
      client
    .annotateImage(requests)
    .then(results => {
      const webResults = results[0].webDetection.webEntities;
      const labels = results[0].labelAnnotations;
      const searchResult = {
        "name": webResults[0].description,
        "Label": labels[0].description,
        "address":"",
        "location":{
          "lat": "",
          "lng": ""
        }
      };
      var url = google + "input="+searchResult.name+"&"+googleParam; 
      request(url, function(err, response, body){
        if(err){
          console.log(err);
          return;
        }
        var body = JSON.parse(body);
        console.log(body);
        
        if(body.candidates.length > 0){
          var candidate = body.candidates[0];
          searchResult.address = candidate.formatted_address;
          searchResult.location = candidate.geometry.location;
        }
        res.send(searchResult);
      })
    })
    .catch(err => {
      console.error('ERROR:', err);
      res.send("error");
    });
})

app.listen(8081, process.env.IP, function(){
    console.log("Listening on port " + 8081);
});
