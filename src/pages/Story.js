import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';

class Story extends React.Component{
    render(){
        return(
            <Grid container alignItems="center" style={{
                height: '100vh'
            }}>
                <Card raised>
                    <CardHeader variant="h1">Our Story</CardHeader>
                </Card>
            </Grid>
        )
    }
};

export default Story