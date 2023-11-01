import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background: #007BFF;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

export default function Pagination({ itemsPerPage, totalItems, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {pageNumbers.map((number) => (
        <PageButton key={number} onClick={() => paginate(number)}>
          {number}
        </PageButton>
      ))}
    </PaginationContainer>
  );
}
