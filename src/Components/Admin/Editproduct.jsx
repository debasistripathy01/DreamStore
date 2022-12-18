import React,{useEffect,useState} from "react";
import { useParams,useNavigate } from 'react-router-dom';


export const Editproduct = () => {
  const navigate = useNavigate();

  const {id}=useParams()
console.log(id)

  return (
    <div>Editproduct</div>
  )
}
