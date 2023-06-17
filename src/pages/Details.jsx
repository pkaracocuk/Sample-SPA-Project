import React, { useEffect,useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';

const Details = () => {
  const [detail,setDetail]=useState();
 const {productId}= useParams();
 const navigate = useNavigate()

 useEffect(()=>{
  axios.get(`http://localhost:3070/clothes/${productId}`)
  .then((res)=>setDetail(res.data))
  .catch((err)=>navigate("/404"))
 },[])
 if(!detail) return 'Loading...'
  return (
    <div style={{height:'84vh'}} className='row justify-content-center align-items-center'>
      <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
      <img className='rounded shadow' src={detail.image}/>
      </div>
      <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
        <h1 className='text-success'>{detail.name}</h1>
        <p className='text-danger'>{detail.price} TL</p>
        <p className='text-primary'>{detail.desc}</p>
        <p className='text-warning'>Taksit Sayısı: {detail.installment}</p>
      </div>
      <button style={{width:'200px',padding:'10px'}} className='btn btn-warning text-light'>Satın Al</button>
    </div>
  )
}

export default Details