import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import background from '../content/background.jpg';
import { NavLink } from 'react-router-dom';

class Landing extends React.Component {
    render() {
        return (
            <Grid container alignItems="center" justify="center" style={{
                height: '100vh',
                backgroundImage: `url(${background})`
            }}>
                <Grid item>
                    <Typography variant='h1' style={{color: 'white'}}>
                        <b>A Green Soul</b>
                    </Typography>
                    <Typography variant='subtitle1' style={{color: 'white'}}>
                        Saving the planet. One home at a time.
                    </Typography><br/>
                    <Button variant="contained" color="primary" component={NavLink} to="/story">
                        Learn More
                    </Button>
                </Grid>
            </Grid>
        )
    }
}

export default Landing;