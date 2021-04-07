import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// const [ details, setDetails ] = useState({});


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));




const SignupButton = () => {

  const [showModal, setShow] = useState(true);
  
  const handleOpen = () => {
    setShow(true);
  };
  
  const handleClose = () => {
    setShow(false);
  };
    
    return(
      <div>
        <Button onClick={handleOpen} variant="outlined" color="primary">
          Sign Up
        </Button>


        <Modal style = {{display: 'flex', alignContent: 'center', justifyContent: 'center', height: '50em'}}
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={showModal}
          onClose={handleClose}
        >
          <div className="modalStyle" style={{maxWidth: '50em'}}>
            hello
          </div>
        </Modal>
      </div>

      //   function handleClick(e) {
      //     e.preventDefault();
      // }
      //  <button className="signup" onClick={handleClick}>
      //   <Link to='/signup'>
      //     <i className="fas fa-user-plus"></i>Sign Up
      //   </Link>
      //  </button>
       
     
    )
}

export default SignupButton

