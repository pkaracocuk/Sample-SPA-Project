import React from 'react'
import { Link } from 'react-router-dom'

const Undefined = () => {
  return (
    <div style={{height:'84vh'}} className='d-flex flex-column align-items-center justify-content-center gap-3'>
    <div  className='d-flex align-items-center gap-4'>
        <h1 className='text-warning'>404</h1>
        <p className='lead text-danger'>Üzgünüz :( Aradığınız Sayfa Mevcut Değil </p>
    </div>
    <div>
        <Link className='btn btn-primary' to={'/'}>Anasayfaya Gitmek İçin Tıkla</Link>
    </div>
    </div>
  )
}

export default Undefined