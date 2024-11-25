const fs = require('fs');
require('dotenv').config();

const config = {
  apiKey: process.env.API_KEY,
};

fs.writeFileSync(
  'src/config.json',
  JSON.stringify(config, null, 2)
);

console.log('Config file generated successfully!');