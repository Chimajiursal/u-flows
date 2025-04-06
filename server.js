const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { generatePreview } = require('./utils/previewGenerator');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/generate-preview', (req, res) => {
  const { productType, formData } = req.body;
  const previewData = generatePreview(productType, formData);
  res.json(previewData);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});