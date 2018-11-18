import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import MyGoogleMap from "./MyGoogleMap";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import 'whatwg-fetch';


class HomePage extends Component{
    state={
        url: "https://d3n8a8pro7vhmx.cloudfront.net/bnaibrithcanada/pages/2436/attachments/original/1518020966/MAR22_POTTER_POST02.jpg?1518020966",
        name:"Kreyser Avrora",
        address:"",
        error: "",
        center:{
            lat:59.955413,
            lng:30.337844
        },
        inProgress:false
    }
    
    handleChange = event =>{
        this.setState({url: event.target.value});
    }
    
    componentDidUpdate(){
        
    }
    
    callBackend = () =>{
        const {url} = this.state;
        console.log(`try calling api using url ${url}`);
        this.setState({inProgress: true});
        window
        .fetch("https://vision-backend-codejam.herokuapp.com/image?url="+url)
        .then(res => res.json())
        .then(
            (result) => {
                const {Label, address, location, name} = result;
                this.setState({
                    center: location,
                    address,
                    name
                });
                this.setState({inProgress: false});
                console.log(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({error: "call failed"});
            }
         )
         .catch(
             error => 
              console.log(`catch error ${error}`)
            );
    }
    
    render(){
        return  (
        <Fragment>
        <AppBar position="static" color="primary">
               <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Take a picture to find where you are!
                    </Typography>
                </Toolbar>
        </AppBar>
        
        <Grid container>
            <Grid item xs={12}>
                <Paper style={{padding: "10px", margin:"10px", minWidth: "80%"}}>
                <form noValidate autoComplete="off">
                    <TextField
                        fullWidth
                        id="standard-name"
                        label="Enter picture URL:"
                        value={this.state.url}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </form>
                <Button variant="contained" color="primary" onClick={this.callBackend}>
                    Submit
                </Button>
                </Paper>
            </Grid>
            {this.state.inProgress &&
                (<Grid item xs={12}>
                    <CircularProgress color="secondary"/>
                </Grid>)
            }
            <Grid item xs={12}>
                <MyGoogleMap 
                    url={this.state.url} 
                    center={this.state.center}
                    name={this.state.name} 
                    address={this.state.address}
                    zoom={16}
                />
            </Grid>
        </Grid>
        </Fragment>
        );
    }
}

export default HomePage;