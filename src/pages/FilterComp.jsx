import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

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
    <div>
       <h1>Sorting</h1>
       <div onChange={handleSort}>
        <input type="checkbox"
          value='asc'
          name="sortBy"
          defaultChecked={sort === 'asc'}
        />
        <label>Price Low to High</label>
        <br />
        <input type="checkbox"
          value='desc'
          name="sortBy"
          defaultChecked={sort === 'desc'}
        />
        <label>Price High to Low</label>
       
       </div>
    </div>
  )
}
