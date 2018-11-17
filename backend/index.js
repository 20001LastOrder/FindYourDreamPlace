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

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Listening on port " + 8081);
});
{
  "type": "service_account",
  "project_id": "codejam2018-222803",
  "private_key_id": "f44be4c24d7842d57404dfb8b6f38dffa968d05a",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDraqsMBn/DUi1S\ns7yJbQxjFqINs83PRlUlUljPp3oXJg+RNEjjjURMO86pHCLFn1/Wywiq0l4xp+nw\newwp0PN2AeQVWeJ5j7R+qqfiex40xX/d6Z5mJZTlBSts1MGvosm2yvpNEV5k1w7m\nLxM5k59wViHAeZdf6bXN7z4dXwwivNQaxuqsWPrvJRmpw2//amHE2cP+kcZ4OC8i\nDO8wWAhtExzcsTQqJKP90dQ5yQeUeZhfetpTTf4kOl/Eg9CEI1XNdr1opOdsBvIX\nsb3iIujTgZ6izqZkdDhNIWgNfuFG/Bb+ju31aPwtYoNVMzGhAgThS7LCwv07Krkp\nm0myrBqhAgMBAAECggEACcuzeFmg4Vi/CAzwkGtYM5tSfO15Z+GOU3I8vc9DNklg\nJnOdgNJ1ABMRA1pnW//ItiBWqPz97GUHR/lmxSqrpsJnYjgOQ26mXQru1262EA4T\nxwEclTWFH456gxnLQWqtqAyEI8bQPbPxK8TTsPaikMMUvnSQxu3robkNxZ0Z3SwX\n2OW+kgEIr45DJdYi1IxP33bYNZErMITsOFgQiZaKZ1+KRLtzCgz92PbbZ2Blzbqi\ng09Y6pEsF4Zudlmn9vewxPRM/x0g7xh78lcCk5MZDvNpQRu85GO6Ri3vvZ9TySaw\nTP/tsf+xzJcoGlDR/rTMqvICc8JkpbJGOLHPMJ0fQQKBgQD/nw/dK1vz41vYVQHb\nbI5QeoYifFdNDQ6trrxDXZdJA0u0QseJR2YGPDNmJpnBlc1H7/kijl+qquRONNLc\ndQhClJJJKYXfvQo65vJAhXXvVr8B3CtVdHun/P52Wfr8s7zhBSMVapxeOQ+CEupx\nron4qsj9lpkrR6/iayZ+MYX02QKBgQDrw/GublgdzXUTgqKJ5sV/bY6FlsB1UT3m\nt7lapy/l0QxA3be/Nbpmv8TidZXc74SU+GQgKt8+eWGFzOMlwTiTrZLhYrBAdR7J\n42XwlkCVCQ+STpI7DWPNP1AbJFkMDVXK5BcCswkXl0wWPikto4nZWycMH5k2e+Oc\nu0L1JU8XCQKBgQDveT+ubtF9YbGIsNLFkyScZrzFEAHlkGcA9aMv5T02zJyeqrUu\nebIuAzYP6/e9sS6Yx0t6QTGEvQaX8crdd9KeNXv6iKj/m6U622N2aNG8wGK/Rlle\nfHrgPRbTH6cQGP7JPDvK8468gu5xaHE0wVRGnxEe6XhjYIx5LPLp5FFfuQKBgBUE\nKH0WFQDDGdadZIPKcHyFdZju8UUD8vKoGfu8v4ZK9j6qBQEkdvNF0PUm6i8Bot3s\nrnA3oiLdixX0R6NL8BEp/dfdhjyYtB/nB2VE34jpf9vY6Swea3EWXbutp8ptPeKS\nJoL1FrBlqkCpVd5dn6Iif/6SqoOy031bLALSSpSRAoGAYDz/U5UX0odkIadbMEt3\nZuHJyLb018MTPSsB8wT/NW7LpHQTBTrR8/jDmQQOKOlUEmRWxooblfWmPYulyENC\niBRIJHdUC8qtXp/VXvUlJbJwH/eAI7LbkxuCfYbYZ9B0+o79gO6IffK/0Gfv9u7b\nEobvM74RLahxJPrbjJZlAyc=\n-----END PRIVATE KEY-----\n",
  "client_email": "vision-quickstart@codejam2018-222803.iam.gserviceaccount.com",
  "client_id": "116004607056287251452",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/vision-quickstart%40codejam2018-222803.iam.gserviceaccount.com"
}