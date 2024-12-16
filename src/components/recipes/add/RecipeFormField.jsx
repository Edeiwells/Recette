import React from 'react';

const RecipeFormField = ({ name, type, placeholder, value, error, onChange }) => {
  return (
    <div>
      {error && <p className="error">{error}</p>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default RecipeFormField;