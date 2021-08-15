import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import experiences from './components/images/experiences.jpg'

const App = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">
                    Experiences
                </Typography>
                <img src={experiences} alt="experiences" height="60" />
            </AppBar>
        </Container>
    )
}

export default App;