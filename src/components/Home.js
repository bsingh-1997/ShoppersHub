import React, { useState } from 'react';
import data from './data.json';
import styled from 'styled-components';
import Pagination from './Pagination';
import Header from './Header';
export default function Home() {

  const Product = styled.div` width: 80%;
  height:auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: #f9f9f9;
  text-align: center;
  margin-left:auto;  
  margin-right:auto;  

  img {
    width: 100%;
  }

  h1 {
    font-size: 18px;
  }
  &:hover {
    background: #ececec;
  }
  
`;

  const Productssection = styled.div`
    display: grid;
  grid-template-columns: repeat(4, 1fr); 
  row-gap: 20px;
  width:80%;
  margin-left:auto;
  margin-right:auto;
  @media (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }
  `

  const Navbar = styled.div`
  display:flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 450px;
  @media(max-width: 750px){
    width:70vw;   
  }
  `
  const Prodimg = styled.div`
  width:12vw;
  margin-left:auto;
  margin-right:auto;
  @media(max-width: 750px){
    width:50vw;   
  }
  `
  const [filterCategory, setFilterCategory] = useState('');
  const [sortOption, setSortOption] = useState('');

  const filteredData = data.filter((item) =>
    filterCategory ? item.category === filterCategory : true
  );

  const sortedData = [...filteredData];
  if (sortOption === 'priceLowToHigh') {
    sortedData.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'priceHighToLow') {
    sortedData.sort((a, b) => b.price - a.price);
  }

  const categories = [...new Set(data.map((item) => item.category))];
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Header />
      <h3>ShoppersHub - Your One-Stop Shopping Destination.</h3>
      <Navbar>
        <div>
          <label>Filter by Category: </label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Sort by: </label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">None</option>
            <option value="priceLowToHigh">Price Low to High</option>
            <option value="priceHighToLow">Price High to Low</option>

          </select>
        </div>
      </Navbar>
      <Productssection>
        {/* {sortedData.map((item) => ( */}
        {currentItems.map((item) => (
          <Product key={item.id}>
            <Prodimg><img src={item.image} /></Prodimg>
            <br></br>
            Product name: {item.title}
            <br></br>
            Description: {item.description}
            <br></br>
            Price : {item.price} ₹
            <br></br>
            <br></br>
          </Product>
        ))}
      </Productssection>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={sortedData.length}
        paginate={paginate}
      />

    </>
  );
}
