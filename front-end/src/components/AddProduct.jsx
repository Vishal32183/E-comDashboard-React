import React from 'react';


const AddProduct = () => {
    const [name,setName]=React.useState('')
    const [price,setPrice]=React.useState('')
    const [category,setCategory]=React.useState('')
    
   
    const[error,setError]=React.useState(false)

    const addProduct= async()=>{
       console.log(!name);
       if(!name || !price || !category){
        setError(true)
        return false;
       }
       
        
        const userId= JSON.parse(localStorage.getItem('user'))._id
      let result = await fetch('http://localhost:5000/add-product',{
        method:'post',
        body:JSON.stringify({name,price,category,userId}),
        headers:{
            "Content-Type":"application/json"
        }
        
      });
      result= await result.json()
      console.log(result);
      setName('');
      setPrice('');
      setCategory('');
      setError(false);
        
        
    }
    return (
        <div className='product'>
            <h1 style={{ paddingLeft: '88px' }}>Add product</h1>
            <input type="text" placeholder='Enter product name' className='inputBox' 
            value={name} onChange={(e)=>{setName(e.target.value)}}/> 
            {error && !name && <span className='invalid-input'>Enter valid name</span>}

            <input type="text" placeholder='Enter product price' className='inputBox'
            value={price} onChange={(e)=>{setPrice(e.target.value)}} /> 
              {error && !price && <span className='invalid-input1'>Enter valid price</span>}

            <input type="text" placeholder='Enter product category' className='inputBox'
            value={category} onChange={(e)=>{setCategory(e.target.value)}} /> 
              {error && !category && <span className='invalid-input2'>Enter valid category</span>}
           
            <button onClick={addProduct} className='appButton'>Add Product</button>
        </div>
    );
}

export default AddProduct;
