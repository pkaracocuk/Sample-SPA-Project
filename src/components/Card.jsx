import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
  return (
        <div className='card shadow rounded p-1'>
            <img className='rounded' src={data.image}/>
          <div className='card-body'>
            <h4 className='text-success'>{data.name}</h4>
            <p className='text-danger'>
                Fiyat: {data.price} TL
            </p>
          </div>
          <Link to={`/ürün-detay/${data.id}`} className='btn btn-warning text-light'>Detay Gör</Link>
        </div>
  )
}

export default Card