import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { Login } from '@mui/icons-material';
// cards imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// footer imports

// import Link from "";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
// badges
 import Badge from '@mui/material/Badge';
 import { styled } from '@mui/material/styles';
 import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

 const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },

 }));

 function Firstpage() {


  const [id, setId] = React.useState()

  let navigate = useNavigate()

  const [data, setData] = React.useState([])

  function Catchdata() {
    axios.get("https://65b8a27bb71048505a890a90.mockapi.io/addproduct")
      .then((res) => {
        setData(res.data)
        console.log(setData);

      })
  }
  React.useEffect(() => {
    Catchdata();
  }, [])



  // button

  function Buynow(e, id) {
    e.preventDefault();
    setId(id);
    navigate('/buy/' + id)
  }

  // add to card

  function hanadleadd(eachdata) {

    let existingData = localStorage.getItem("name1")

    if (existingData) {
      existingData = JSON.parse(existingData);
      existingData.push(eachdata)
      localStorage.setItem("name1", JSON.stringify(existingData));
    }
    else {
      localStorage.setItem("name1", JSON.stringify([eachdata]));
    }
    console.log(JSON.parse(localStorage.getItem("name1")));
    location.reload();
  }



  let count = 0;
  let local = JSON.parse(localStorage.getItem("name1"));
  if (local === null) {
    count = 0
  }
  else {
    count = local.length;
  }


  // navbar start
  return (
    <>
      <div className="container-fliud w-100">
        <AppBar position="sticky" className='d-grid'>
          <div maxWidth="600px" style={{ backgroundColor: "#0d6efd", color: "black", width: "" }}>
            <Toolbar disableGutters>
              <img src="https://hindubabynames.info/wp-content/themes/hbn_download/download/electronics-companies/boat-logo.png" alt="" style={{ width: "100px" }} />
              <IconButton aria-label="cart" >
                <StyledBadge badgeContent={count} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
              <div className="input-group rounded">

                <Link to={"/Login"}>
                  <  Button type="button"  className="btn  text-bg-danger ms-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Login
                  </Button>
                </Link>
              </div>



            </Toolbar>


          </div>
        </AppBar>

        {/* carousel start*/}

        <div id="carouselExampleControls" className="carousel slide w-100" data-bs-ride="carousel" >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://ciyashop.potenzaglobalsolutions.com/stationery/wp-content/uploads/sites/65/2017/08/blog-img-04.jpg" className="d-block w-100 " style={{ height: "500px" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://png.pngtree.com/background/20230617/original/pngtree-back-to-school-abstract-background-with-3d-rendered-stationery-supplies-picture-image_3681262.jpg" className="d-block w-100" style={{ height: "500px" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://5.imimg.com/data5/VZ/PJ/OT/SELLER-13685268/stationery.jpg" className="d-block w-100" style={{ height: "500px" }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>



        {/* card start */}



        <div className='container row mx-auto' style={{ padding: "5px", borderRadius: "50px", width: "100" }}>
          <h1 style={{ textAlign: "center" }}></h1>
          <hr />
          {
            data.map((eachdata) => {

              return (
                <Card sx={{ maxWidth: 345 }} xs={12} sm={6} md={2} lg={4} className='mb-3'>
                  <CardMedia
                    sx={{ height: 300 }}
                    image={eachdata.images}
                    title="earbuds"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <b>  {eachdata.Title}</b>


                    </Typography>
                    <b className='text-danger'>Price:-{eachdata.price}$</b>

                  </CardContent>
                  <CardActions>
                  </CardActions>
                  <Button className='btn bg-danger text-light m-3' onClick={((e) => Buynow(e, eachdata.id))}>Buy Now</Button>
                  <Button className='btn bg-danger text-light' onClick={((e) => hanadleadd(eachdata))}><ShoppingCartIcon /></Button>
                </Card>
              )
            })
          }
        </div>


        {/* footer start */}

        <hr />
        <Box
          component="footer"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
            p: 6,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  About Us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We are XYZ company, dedicated to providing the best service to our
                  customers.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Contact Us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  123 Main Street, Anytown, USA
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: info@example.com
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone: +1 234 567 8901
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Follow Us
                </Typography>
                <Link href="https://www.facebook.com/" className='text-danger'>
                  <Facebook />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  className='text-danger'
                  sx={{ pl: 1, pr: 1 }}
                >
                  <Instagram />
                </Link>
                <Link href="https://www.twitter.com/" className='text-danger'>
                  <Twitter />
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Typography variant="body2" color="text.secondary" align="center">
                {"Copyright © "}
                <Link color="inherit" href="https://your-website.com/">
                  Your Website
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
              </Typography>
            </Box>
          </Container>
        </Box>
      </div>

    </>
  );
}
export default Firstpage;