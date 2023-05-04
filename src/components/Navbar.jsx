import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import CalculateIcon from '@mui/icons-material/Calculate';
import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar sx={{position: 'sticky', margin: 0}}>
      <Container maxWidth="xl" sx={{backgroundColor:'#0C2D48'}}>
        <Toolbar disableGutters>
          <CalculateIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Open Sans',
              fontWeight: 500,
              letterSpacing: '.2rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
          <Link to="/" style={{textDecoration: "none", color: "white"}}>Thale's Theorem</Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 102,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Open Sans',
              fontWeight: 500,
              color: 'white',
              letterSpacing: '.1rem',
              textDecoration: 'none',
              padding: '5px 10px',
              borderRadius: '6px',
              '&:hover':{
                backgroundColor: '#145DA0',
                opacity: '0.5'
              }
            }}
          >
            <Link to="/sim" style={{textDecoration: "none", color: "white"}}>Simulator</Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              ml: 4,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Open Sans',
              fontWeight: "500",
              letterSpacing: '.1rem',
              padding: '5px 10px',
              borderRadius: '6px',
              '&:hover':{
                backgroundColor: '#145DA0',
                opacity: '0.5',
              }
            }}
          >
          <Link to="/theory" style={{textDecoration: "none", color: "white"}}>Theory</Link>
            
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 4,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Open Sans',
              fontWeight: 500,
              color: 'white',
              letterSpacing: '.1rem',
              textDecoration: 'none',
              padding: '5px 10px',
              borderRadius: '6px',
              '&:hover':{
                backgroundColor: '#145DA0',
                opacity: '0.5'
              }
            }}
          >
            Test
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
