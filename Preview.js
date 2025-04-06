import React from 'react';

function Preview({ productType, formData }) {
  return (
    <div>
      <h2>Preview</h2>
      <pre>{JSON.stringify({ productType, formData }, null, 2)}</pre>
    </div>
  );
}

export default Preview;