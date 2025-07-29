const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post('/bfhl', (req, res) => {
  const input = req.body.data;
  const response = {
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    even_numbers: [],
    odd_numbers: [],
    alphabets: [],
    special_characters: [],
    sum: "0",
    concat_string: ""
  };

  let totalSum = 0;
  let alphaChars = [];

  input.forEach(item => {
    if (/^[0-9]+$/.test(item)) {
      const num = parseInt(item);
      if (num % 2 === 0) response.even_numbers.push(item);
      else response.odd_numbers.push(item);
      totalSum += num;
    } else if (/^[a-zA-Z]+$/.test(item)) {
      response.alphabets.push(item.toUpperCase());
      alphaChars.push(...item.split(''));
    } else {
      response.special_characters.push(item);
    }
  });

  response.sum = totalSum.toString();

  const reversed = alphaChars.reverse();
  response.concat_string = reversed
    .map((char, idx) => idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
    .join('');

  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
module.exports = app; // Export the app for testing purposes