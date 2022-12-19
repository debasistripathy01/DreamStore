import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import "./FilterComp.css"
import { BsStarFill } from "react-icons/bs";

export const FilterComp = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const initialSort = searchParams.getAll('sort');
    console.log('initialSort', initialSort)

    const [sort, setSortBy] = useState(initialSort[0] || "");

     const handleSort = (e) => {
        setSortBy(e.target.value);
     }

     useEffect(() => {
        let params = {};
        // params.category = category;
        // console.log(params);
        sort && (params.sort = sort);
        setSearchParams(params)
     },[setSearchParams, sort])

  return (

    <>
    <div className='filboty76'>
      <h1 className='filhear637578'>Sort Acording to price</h1>
       <div>
       <input type="checkbox"
          value='asc'
          name="sortBy"
          defaultChecked={sort === 'asc'}
          className="soinpuntjubjf126"
          onChange={handleSort}
        />
        Price Low to High
       </div>
       <div>
       <input type="checkbox"
          value='desc'
          name="sortBy"
          defaultChecked={sort === 'desc'}
          className="soinpuntjubjf126"
          onChange={handleSort}
        />
       Price High to Low
       </div>
    </div>
    <div className='filboty76'>
            <h1 className='filhear637578'>Rating</h1>
            <div>
              <input type="radio" className="checkboxes" />
              {[...Array(2)].map((elementInArray, index) => (
                <BsStarFill key={index} />
              ))}
            </div>
            <div>
              <input type="radio" className="checkboxes" />
              {[...Array(3)].map((elementInArray, index) => (
                <BsStarFill key={index} />
              ))}
            </div>
            <div>
              <input type="radio" className="checkboxes" />
              {[...Array(4)].map((elementInArray, index) => (
                <BsStarFill key={index} />
              ))}
            </div>
            <div>
              <input type="radio" className="checkboxes" />
              {[...Array(5)].map((elementInArray, index) => (
                <BsStarFill key={index} />
              ))}
            </div>
          </div>





    
    </>
    
  )
}
