// server.js
const { Configuration, OpenAIApi } = require("openai");


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up OpenAI API
const openaiKey = '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';

const configuration = new Configuration({
    apiKey: openaiKey,
  });
const openai = new OpenAIApi(configuration);
openai.apiKey = openaiKey;

// Create a route for sending a message to the chatbot
app.post('/chat', async (req, res) => {
  // Get the user's message
    
  let data = req.body;
  const message = req.body.message+` Quiz with 10 mcq in json format like array of questions object and the object will have question key , answer key which will contain option key , options key which will have sub keys 'A','B','C','D'. Your response should only contain a json array nothing else.Sample Question object is {question:question,options:{A:opA,B:OpB,C:opc,D:opD},answer:A}`
    console.log("QUERY RECEIVED: "+ message);
    
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    max_tokens:4000
    });
 
  var completionResponse = completion.data.choices[0].text;
  console.log(completionResponse);
    
  res.status(200);
  res.send(JSON.parse(completionResponse));
  
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});