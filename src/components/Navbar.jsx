import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import CalculateIcon from '@mui/icons-material/Calculate';
import React from 'react'
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AssessmentIcon from '@mui/icons-material/Assessment';

const Navbar = () => {
  return (
    <AppBar sx={{position: 'sticky', margin: 0}}>
      <Container maxWidth="xl" sx={{backgroundColor:'#0C2D48'}}>
        <Toolbar disableGutters>
          <CalculateIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            sx={{
              mr: 0.5,
              display: { xs: 'none', md: 'flex' },
              letterSpacing: '.25rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
          <Link to="/" style={{textDecoration: "none", color: "white", fontFamily: 'Open Sans',
              fontWeight: 800,}}>THALE'S THEOREM</Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              ml: 60,
              display: { xs: 'none', md: 'flex' },
              color: 'white',
              letterSpacing: '.1rem',
              textDecoration: 'none',
              padding: '10px 10px',
              borderRadius: '6px',
              '&:hover':{
                backgroundColor: '#145DA0',
                opacity: '0.5'
              }
            }}
          >
            <span style={{marginTop:'7.5px', marginRight: "5px"}}><HomeIcon/></span>
            <Link to="/" style={{textDecoration: "none", color: "white", marginTop:"5px", fontFamily: 'Open Sans', fontWeight: 500,}}>HOME</Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              ml: 4,
              display: { xs: 'none', md: 'flex' },
              letterSpacing: '.1rem',
              padding: '5px 10px',
              borderRadius: '6px',
              '&:hover':{
                backgroundColor: '#145DA0',
                opacity: '0.5',
              }
            }}
          >
            <span style={{marginTop:'7.5px', marginRight: "5px"}}><TextSnippetIcon/></span>
          <Link to="/theory" style={{textDecoration: "none", color: "white", marginTop:"5px", fontFamily: 'Open Sans', fontWeight: 500,}}>THEORY</Link>
            
          </Typography>
          <Typography
            variant="h6"
            sx={{
              ml: 4,
              display: { xs: 'none', md: 'flex' },
              letterSpacing: '.1rem',
              padding: '5px 10px',
              borderRadius: '6px',
              '&:hover':{
                backgroundColor: '#145DA0',
                opacity: '0.5',
              }
            }}
          >
            <span style={{marginTop:'7.5px', marginRight: "5px"}}><VideoLibraryIcon/></span>
          <Link to="/sim" style={{textDecoration: "none", color: "white", marginTop:"5px", fontFamily: 'Open Sans', fontWeight: 500,}}>SIMULATOR</Link>
            
          </Typography>
          <Typography
            variant="h6"
            sx={{
              ml: 4,
              display: { xs: 'none', md: 'flex' },
              color: 'white',
              letterSpacing: '.1rem',
              padding: '5px 10px',
              borderRadius: '6px',
              '&:hover':{
                backgroundColor: '#145DA0',
                opacity: '0.5'
              }
            }}
          >
            <span style={{marginTop:'7.5px', marginRight: "5px"}}><AssessmentIcon/></span>
            <Link to="/test" style={{textDecoration: "none", color: "white", marginTop:"5px", fontFamily: 'Open Sans', fontWeight: 500,}}> TEST</Link>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
