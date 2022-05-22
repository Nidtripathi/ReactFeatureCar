import React from 'react';
import {useState} from 'react';
import './SearchBar.css'
// import {data} from '../Helpers/SearchData';

const SearchBar = () => {
    const [search, setSearch] = useState('');

    const searchCar =(event)=>{
      setSearch(event.target.value);
    }
    // let carSearch = data.allSearchData.search(item=>{
    //   return Object.keys(item).some(key =>{
    //     item[key].toString().toLowerCase().includes(search.toString().toLowerCase())
    //   })
    // })
  return (
    <div>
        <form id="searchbar" role="search">
        <input 
                    type="text"
                    className='form-control'
                    name="search"
                    placeholder="Enter car name..." 
                    value={search}
                    onChange={searchCar.bind(this)}
                    // onChange={(e) => setSearch(e.target.value)}
                    />
          <div className='button'>
          <button type="submit">SEARCH</button>
          </div>
          </form>
    </div>
  )
}

export default SearchBar