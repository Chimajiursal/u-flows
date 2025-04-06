import React, { useState } from 'react';
import IdentityCardForm from './components/IdentityCardForm';
import CreditDebitCardForm from './components/CreditDebitCardForm';
import LabelForm from './components/LabelForm';
import StickerForm from './components/StickerForm';
import DemandDraftForm from './components/DemandDraftForm';
import JerseyForm from './components/JerseyForm';
import Preview from './components/Preview';

function App() {
  const [productType, setProductType] = useState('identity-card');
  const [formData, setFormData] = useState({});

  const handleProductTypeChange = (e) => {
    setProductType(e.target.value);
  };

  const handleFormDataChange = (data) => {
    setFormData(data);
  };

  const renderForm = () => {
    switch (productType) {
      case 'identity-card':
        return <IdentityCardForm onChange={handleFormDataChange} />;
      case 'credit-debit-card':
        return <CreditDebitCardForm onChange={handleFormDataChange} />;
      case 'label':
        return <LabelForm onChange={handleFormDataChange} />;
      case 'sticker':
        return <StickerForm onChange={handleFormDataChange} />;
      case 'demand-draft':
        return <DemandDraftForm onChange={handleFormDataChange} />;
      case 'jersey':
        return <JerseyForm onChange={handleFormDataChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <h1>Variable Data Converter</h1>
      <label>Select Product Type:</label>
      <select value={productType} onChange={handleProductTypeChange}>
        <option value="identity-card">Identity Card</option>
        <option value="credit-debit-card">Credit & Debit Card</option>
        <option value="label">Label</option>
        <option value="sticker">Sticker</option>
        <option value="demand-draft">Demand Draft</option>
        <option value="jersey">Jersey</option>
      </select>
      {renderForm()}
      <Preview productType={productType} formData={formData} />
    </div>
  );
}

export default App;