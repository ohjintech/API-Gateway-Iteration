import React, { useState, useRef } from 'react';
// import useStyles from './ribbonButtons';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'


function getModalStyle() {

  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
  
const useStyles = makeStyles((theme) => ({
  
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #7BDFF2',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
  
const LoginButton = () => {

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [showModal, setShow] = useState(false);
  // const [textInputs, e.target.value] = useState('')

  const userTextField = useRef();
  const pwTextField = useRef();
  const emailTextField = useRef();

  // returns all text values from the text fields to return to back end
  // when the complete button is clicked
  // return all the field values and put them into the state
  const getTextFieldValues = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      // need to package this into the a prop or state to take out
      console.log(userTextField.current.value)
      console.log(pwTextField.current.value)
      console.log(emailTextField.current.value)
    }
  }
  
  const handleOpen = () => {
    setShow(true);
  };
  
  const handleClose = () => {
    setShow(false);
  };
  
  const signUpModalBody = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="signup-modal-title">Welcome Back! Log In</h2>
      <form className={classes.root} noValidate autoComplete="off">

        <div>
          
          <TextField 
            required 
            id="field-username" 
            label="Username" 
            variant="outlined" 
            // onChange={(e) => handleChange(e)}
            inputRef={userTextField}
          />

          <TextField 
            required 
            id="field-password" 
            label="Password" 
            type="password" 
            autoComplete="current-password" 
            variant="outlined" 
            // onChange={(e) => handleChange(e)}
            onKeyDown={(e) => getTextFieldValues(e)}
            inputRef={pwTextField}
          />
        </div>
        
        <Button 
          variant="contained" 
          color="primary"
          // onClick={(e) => getFieldValues(e)}
          onClick={(e) => getTextFieldValues(e)}
          >
            Complete
        </Button>

      </form>
    </div>
  );

    return(
      <div>
        <Button 
          onClick={handleOpen} 
          variant="outlined" 
          color="primary"
        >
          Log In
        </Button>


        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={showModal}
          onClose={handleClose}
        >
          {signUpModalBody}
        </Modal>
      </div>
    )
}


  // <button className="login">
  //    <Link to='login'>
  //     <i className="fas fa-sign-in-alt" > Login</i>
  //   </Link>
  // </button>

  


export default LoginButton;