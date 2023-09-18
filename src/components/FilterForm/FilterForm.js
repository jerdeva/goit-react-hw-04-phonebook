import React from 'react';
import Wrapper from './FormList.styled';
import LabelSt from './FormList.styled';



export const FilterForm = ({ filter, onSearch }) => {
  return (
    <Wrapper>
      <LabelSt htmlFor="filter">
        Find contacts by name
        <input
          name="filter"
          type="text"
          placeholder="Enter name"
          value={filter}
          onChange={onSearch}
        />
      </LabelSt>
    </Wrapper>
  );
};