import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Image from '../images/pic7.jpg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from "react-router-dom";
import TypeWriterEffect from "react-typewriter-effect"

const Home = () => {
  return (
    <div style={{ background: `url(${Image}) no-repeat center center fixed`, backgroundSize: '100% 100%', height: '100vh', margin: 0 }}>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 15,
          paddingBottom: 10,
          wordSpacing: "0.1rem",
          letterSpacing: '0.15rem',
        }}
      >
        <div style={{
          marginRight: "10px", 
          fontSize: "3em",
          fontFamily: 'Red Hat Display',
          fontWeight: 1000,
        }}>Excited to learn about</div>
        <span>
          <TypeWriterEffect
            textStyle={{
              fontFamily: 'Red Hat Display',
              color: '#3F3D56',
              fontWeight: 1000,
              fontSize: '3em',
            }}
            startDelay={1000}
            cursorColor="#3F3D56"
            multiText={[
              'The Basic Proportionality Theorem!',
              'The Thale\'s Theorem!',
            ]}
            multiTextDelay={1000}
            typeSpeed={50}
            multiTextLoop
          />
        </span>
      </Typography>
      <Typography sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Button variant="contained" href="/theory"
          sx={{
            backgroundColor: "#0C2D48",
            padding: "15px 20px",
            fontFamily: 'Open Sans',
            fontWeight: 500,
            wordSpacing: "0.1rem",
            letterSpacing: '0.15rem',
            borderRadius: '10px',
            fontSize: "18px",
            '&:hover': {
              backgroundColor: '#003B73'
            }
          }}
        >
          GET STARTED
          <ArrowRightAltIcon />
        </Button>
      </Typography>
    </div>
  )
}

export default Home
