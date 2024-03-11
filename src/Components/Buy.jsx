import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import axios from 'axios';
import { Box, Button, TextField } from '@mui/material';
// add to card modal
// import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Category, Password } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
// modal end

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
export default function Buy() {

let navigate=useNavigate();


  let { id } = useParams();
  console.log(id)

  const [count, setCount] = React.useState(1)




  const [data, setData] = React.useState({
    Title: "",
    Category: "",
    price: "",
    MRP: "",
    images: "",
    Description: "",
    quantity:"",
    
  })

  
 

  function buygetdata() {

    axios.get("https://65b8a27bb71048505a890a90.mockapi.io/addproduct/" + id)
      .then((res) => {
        console.log(res.data)
        setData({
          Title: res.data.Title,
          Category: res.data.Category,
          price: res.data.price,
          MRP: res.data.MRP,
          images: res.data.images,
          Description: res.data.Description,
        })
      })

  }
  console.log(data);
  useEffect(() => {
    if (id) {
      buygetdata();
    }
  }, [])

  let alltotal = data.price * count

  function HandleDecrement() {
    if (count > 1) {
      setCount(prevcount => prevcount - 1)
    }
  }
  function HandleIncrement() {
    if (count < 10) {
      setCount(prevcount => prevcount + 1)
    }


  }
  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // modal end


// add to card js

const[user,setUser]=useState();
const[pass,setPass]=useState();


let order={
  name:data.Title,
  Category:data.Category,
  Price:data.price,
  MRP:data.MRP,
  images:data.images,
  subtotal:alltotal,
  quantity:count

}
 function Addsumit(){
if( user==="shambhavi"&& pass==="9999"){
localStorage.setItem("username",user);
localStorage.setItem("password",pass);
    
axios.post('https://65b8a27bb71048505a890a90.mockapi.io/orders',order)
.then((res)=>{
setData(res.data)
console.log(setData);
})

navigate("/buy/ordernow")

}
else(
  alert('enter valid user')
)

 }


  return (
    < div>
      <hr />
      <Paper className='mt-5 bg-white colour-dark shadow '
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 800,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item >
            <ButtonBase sx={{ width: 400, height: 300 }}>
              < img src={data.images} className='w-50'></img>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  <b> {data.Title} </b>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  M.R.P :$<del>{data.MRP}</del>

                </Typography>
              <Typography variant="body2" color="text-danger">
                  <b className='text-danger'><h6>PRICE: {alltotal}$ </h6> </b>
                </Typography>

              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                  {data.Description}

                </Typography>
                <br />
                <Box>
                 
                  <Button variant='contained' onClick={HandleDecrement} className='bg-danger'>-</Button>
                  <Button className='text-dark'>{data.quantity}{count}</Button>
                  <Button onClick={HandleIncrement} variant='contained'className='bg-danger'>+</Button>
                </Box>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <button className='btn btn-danger ms-5' onClick={handleOpen} >Orader Now </button>
      </Paper>

      {/* PRODUCT INFORMATIOM IMAGES  */}
      <br />
      <br />
      <div className='d-inline-flex d-grid ' style={{ marginLeft: "350px" }}>
        <Box className="me-3">
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334305_small.svg?v=1682336123" alt="" /><br />
          Made by <b>Indians</b>
        </Box>
        <Box className="me-3">
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334304_small.svg?v=1682336123" alt="" /><br />
          1 Year<b> Warranty</b>
        </Box>
        <Box className="me-3">
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334303_small.svg?v=1682336123" alt="" /><br />
          Fast<b> Delivery</b>
        </Box>
        <Box className="me-3">
          <img src="https://www.boat-lifestyle.com/cdn/shop/files/Group_334302_small.svg?v=1682336123" alt="" /><br />
          Exclusive<b> Benefits</b>

        </Box>

      </div>
      <hr />
      <div>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}  >
            <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
              LOGIN
            </Typography>
            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>

              <TextField fullWidth label="Username" id="username" onChange={(e)=> setUser(e.target.value)} />
              <br />
              <br />
              <TextField fullWidth label="Password" id="password"onChange={(e)=> setPass(e.target.value)}  />



            </Typography>
            <Button className='btn btn- mt-4 me-5'onClick={(e)=>Addsumit(e.target.value)}>OK</Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

