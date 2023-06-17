import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Card from '../components/Card';

const ProductsPage = () => {
    const [clothes,setClothes]=useState([]);
    useEffect(()=>{
      axios
      .get('http://localhost:3070/clothes')
      .then((res)=>setClothes(res.data))
      .catch((err)=>{})
    },[])
    console.log(clothes)
    if(clothes === null) return 'Loading...'
  return (
    <div>
      <h3 className='px-5 mt-3 text-info'>{clothes.length} ürün bulundu</h3>

      <div className='cards-container'>
        {clothes.map((item)=>(
          <Card key={item.id} data={item}/>
        ))}
      </div>
    </div>
    );
};

export default ProductsPage