import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Image from './pic5.jpg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{background: `url(${Image}) no-repeat center center fixed`,backgroundSize:'100% 100%', height: '100vh', margin: 0}}>
      <Typography
        sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: 10,
            paddingBottom: 0,
        }}
      >
        <Box
            sx={{
                mr: 15,
                padding: "20px",
                backgroundColor: "#B1D4E0",
                width: 450,
                borderRadius: "10px",
                borderTopRightRadius: 0,
                boxShadow: "0 5px 10px 2px black",
                fontFamily: 'Open Sans',
                fontWeight: 1000,
                fontSize: "20px",
            }}
        >
            Let us dive into the amazing concept of Basic Proportionality Theorem (also known as Thale's Theorem)!!
        </Box>
      <Box
        sx={{
            padding: "50px",
        }}
        component="img"
        alt="The house from the offer."
        src="https://media.istockphoto.com/vectors/cartoon-teacher-with-a-complicated-calculation-scientist-professor-vector-id165802151?k=6&m=165802151&s=170667a&w=0&h=vi2P3eLUpZ9nd8Ap-DLbn4frnHrdDz11o2O5kFlSWhI="
      />
      </Typography>
      <Typography sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
        <Button variant="contained" href="#contained-buttons"
            sx={{
                backgroundColor: "#0C2D48",
                padding: "15px 20px",
                fontFamily: 'Open Sans',
                fontWeight: "500",
                wordSpacing: "0.1rem",
                letterSpacing: '0.15rem',
                borderRadius: '10px',
                '&:hover':{
                    backgroundColor: '#003B73'
                }
            }}
        >
            <Link to="/theory" style={{textDecoration: "none", color: "white"}}>Get Started</Link>
            <ArrowRightAltIcon />
        </Button>
      </Typography>
    </div>
  )
}

export default Home
