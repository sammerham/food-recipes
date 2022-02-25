import React, { useState, useContext } from 'react'
import ReceipeContext from '../receipesContext';
import ReceipeApi from '../api/receipeApi'
import {
  StyledSearchButton,
  StyledSearchForm,
  StyledSearchInput,
  StyledMainTitle
} from './StyledComponents'

function SearchForm() {
  const [formData, setFormData] = useState('')
  const { setRecipes } = useContext(ReceipeContext);
    const { fetchReceipes } = ReceipeApi;

  
    const handleChange = e => {
    const { value } = e.target;
    setFormData(value)
    };
  
    //fn fetch new media data 
  async function fetchReceipeData(formData) {
    const receipesData = await fetchReceipes(formData);
    setRecipes(data => receipesData);
  };

  const handleSubmit = e => {
    e.preventDefault()
    if (formData) 
      fetchReceipeData(formData);
      setFormData('');
  }

  return (
    <div style={{ marginTop: '50px' }}>
      <StyledMainTitle bg={'grey'}>Search for delicious recipes by ingredients </StyledMainTitle>
      <StyledSearchForm onSubmit={handleSubmit}>
        <StyledSearchInput
          type="text"
          name="term"
          id="term"
          placeholder='Enter an ingredient'
          onChange={handleChange}
          value={formData}
        />
        <StyledSearchButton bg={'grey'} onClick={handleSubmit}>Search</StyledSearchButton>
      </StyledSearchForm>
    </div>
  )
}

export default SearchForm





