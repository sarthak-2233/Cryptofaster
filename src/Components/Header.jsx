import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Typography color='gold'>
            Crypto Hunter
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header