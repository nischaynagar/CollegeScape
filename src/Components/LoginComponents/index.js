import React from 'react';
import design from './loginComponents.module.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '35ch',
            '& .MuiInput-underline:after': {
                borderBottomColor: 'black',
            },
        },
    },
}));

const StyledButton = withStyles({
    root: {
        background: '#393e46',
        borderRadius: 7,
        border: 0,
        color: 'white',
        width: 310,
        height: 35,
        padding: '0 30px',
        boxShadow: 'grey',
        '&:hover': {
            background: "black",
        }
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

function AppContainer() {

    const classes = useStyles();

    return (
        <div className={design.ContainerBox}>

            <div className="column">
                <p className={design.heading}>Create account</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Email" />
                    <br></br>
                    <br></br>
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                    />
                </form>
                <StyledButton className={design.submitbutton}>
                    Sign up
                </StyledButton>
                <br></br>
                <br></br>
                <br></br>
                <p className={design.foot}>Already have an account? <a href="www.google.com" className={design.link}>Log In here</a></p>

            </div>
            <div className="column">
                <h1>ok</h1>
            </div>
        </div>
    )
};

export default AppContainer;