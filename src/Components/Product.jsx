import { Box, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Product() {


  let {id} = useParams();
  console.log(id);


  let Navigate = useNavigate();


const[data ,setData]=useState({
  Title:"",
  Category:"",
  price:"",
  MRP:"",
  images:"",
  Description:"",
})




function handelData(e){
  e.preventDefault()
  setData({ ...data, [e.target.name]: e.target.value })
}


function handleSubmit() {
  if (id===undefined) {
    axios.post("https://65b8a27bb71048505a890a90.mockapi.io/addproduct",data)
    .then((res) =>{
      setData(res.data)
Navigate('/login/appbar/producttable')
    });
  } else {
    axios.put("https://65b8a27bb71048505a890a90.mockapi.io/addproduct/"+id,data)
    .then((res)=>{
       console.log(res.data);
       Navigate('/login/appbar/producttable')
    })
  }
 

    }

console.log(setData);


function editdata(){

  axios.get('https://65b8a27bb71048505a890a90.mockapi.io/addproduct/'+id)
  .then((res)=>{
    console.log(res.data);
    setData({
      Title: res.data.Title,
      Category: res.data.Category,
      price: res.data.price,
      MRP:res.data.MRP,
      images:res.data.images,
      Description:res.data.Description ,     
    })
  })
}
console.log(data);

useEffect(()=>{
  if(id){
    editdata();
  }
},[])
  return (
    <>

    <div className='container mt-5 borderd-box'>
    <h1>Product :</h1>
      <div className="row">
        <div className="col-lg-6">
        <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Title" value={data.Title}  name="Title" onChange={((e) => handelData(e))}/>
    </Box>
        </div>

        <div className="col-lg-6">
        <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth value={data.Category} label="Category"name="Category"onChange={((e) => handelData(e))} />
    </Box>
        </div>
        <div className="row">
        
        <div className="col-lg-3 mt-5">
        <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth value={data.price} label="Price"name="price" onChange={((e) => handelData(e))}/>
    </Box>
        </div>
<br />
        <div className="col-lg-3 mt-5">
        <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="MRP" value={data.MRP} name="MRP"onChange={((e) => handelData(e))} />
    </Box>
        </div>
        <div className="col-lg-3 mt-5">
        <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
   
      <TextField fullWidth label="Images" value={data.images}  name="images" onChange={((e) => handelData(e))}/>
    </Box>
        </div> 

        <div className="row mt-5">
          <div className="col-lg-12 ">
          <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth  value={data.Description} label="Description"name="Description"onChange={((e) => handelData(e))} />
    </Box>
          </div>
        </div>

        </div>

      </div>

      <button className='btn btn-danger mt-5'onClick={(e)=>handleSubmit(e)}>Submit</button>
  

  </div>
  </>
  )
}
