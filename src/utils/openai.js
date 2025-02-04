import OpenAI from "openai";

//initialising api
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_APIKEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default openai;
