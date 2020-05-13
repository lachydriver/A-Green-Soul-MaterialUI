import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import background from '../content/background.jpg';
import { NavLink } from 'react-router-dom';

class Landing extends React.Component {
    render() {
        return (
            <div>
            <Grid container alignItems="center" justify="center" style={{
                height: '100vh',
                backgroundImage: `url(${background})`
            }}>
                <Grid item>
                    <Typography variant='h1' style={{color: 'white'}}>
                        A Green Soul
                    </Typography>
                    <Typography variant='subtitle1' style={{color: 'white'}}>
                        Saving the planet. One home at a time.
                    </Typography><br/>
                    <Button variant="contained" color="primary" component={NavLink} to="/story">
                        Learn More
                    </Button>
                </Grid>
            </Grid>
            <Grid container alignItems="Center">
                <Grid item>
                    <Box>
                    <Paper elevation={3}>
                    <Typography variant='h1'>First Item</Typography>
                    </Paper>
                    </Box>
                </Grid>
                <Grid item>
                    <Typography>Second Item</Typography>
                </Grid>
                <Grid item>
                    <Paper>First Item</Paper>
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default Landing;