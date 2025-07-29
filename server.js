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
    numbers: [],
    alphabets: []
  };

  input.forEach(item => {
    if (/^[0-9]+$/.test(item)) {
      response.numbers.push(item);
    } else if (/^[a-zA-Z]+$/.test(item)) {
      response.alphabets.push(item.toUpperCase());
    }
  });

  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

module.exports = app;
