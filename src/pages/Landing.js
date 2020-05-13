import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import logo from '../content/logo.png';

class Landing extends React.Component {
    render() {
        return (
            <Grid container direction="column">
                <Grid item>
                    <Typography variant='h2'>
                        A Green Soul
                    </Typography>
                    <Typography variant='subtitle1'>
                        Saving the planet. One home at a time.
                    </Typography>
                    <img src={logo}/>
                </Grid>
            </Grid>
        )
    }
}

export default Landing;