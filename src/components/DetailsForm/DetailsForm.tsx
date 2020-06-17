import React from 'react';
import './DetailsForm.css';
import { BsPersonFill } from "react-icons/bs";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export const DetailsForm = () => {
    const classes = useStyles();

    return (
        <div className={'shopper'}>
            <div className={'formContainer'}>
                <BsPersonFill size={50} className={'Person'} />
                <form className={`${classes.root} detailsForm`} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Contact Name" />
                    <TextField id="standard-basic" label="Phone NO" />
                    <TextField id="standard-basic" label="Email ID" />
                    <TextField id="standard-basic" label="Delivery Address" />
                </form>
                <div className={'finish'}>Finish</div>
            </div>
        </div>
        )
}