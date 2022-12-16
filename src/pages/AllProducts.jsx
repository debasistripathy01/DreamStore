import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { ProductImages } from './ProductImage';

export const AllProducts = () => {

    //const { id }  = useParams();
    const id =1;
    const [ data, setData ] = useState([]);
    
     const  getData  =async()=>{
      const data = await fetch(`https://frightened-boot-dove.cyclic.app/productsdata`)
      .then((res) => res.json())
      setData(data);
    }

    console.log(data)

    React.useEffect(()=>{
        getData();
        // setData(data)
    }, [])
    //console.log(data)

  return (
    <div>
       <div className="pd3">
          
            <ProductImages
              img1={data.img_url_1}
              img2={data.img_url_2}
              img3={data.img_url_3}
            />
          </div>

    </div>
  )
}
