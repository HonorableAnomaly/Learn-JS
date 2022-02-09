// This is a string of JSON saved to a variable
const data = `{"ticker":{"base":"BTC","target":"USD","price":"443.7807865468","volume":"31720.1493969300","change":"0.3766203596"},"timestamp":1399490941,"success":true,"error":""}`;

// We can parse it into JS with this
JSON.parse(data);

// This is a JS variable
const dog = {
  breed: "lab",
  color: "black",
  isAlive: true,
  owner: undefined,
};

// We can turn the JS into JSON with this
JSON.stringify(dog);

// XML is pretty ancient now, and JSON is much more commonly used. So AJAX is more like AJAJ now
