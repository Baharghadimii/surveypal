import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Error from '../status/Error'
import Confirmation from '../status/Success'

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState('BASIC')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //handle error
  const openError = () => {
    setStatus('ERROR')
  }
  const closeMessage = () => {
    setStatus('BASIC');
  }
  //handle success
  const openSuccess = () => {
    setStatus('SUCCESS')
  }

  return (
    <div>
      <Button variant="outlined" color="default" style={{ marginLeft: '10px', marginTop: '5px', color: 'white', borderColor: 'white' }} onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Enter your Email and Password.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Login
          </Button>
          {/* {status === 'SUCCESS' && (<Confirmation onClick={closeMessage} />)}
          {status === 'ERROR' && (<Error onClick={closeMessage} />)} */}
        </DialogActions>
      </Dialog>
    </div>
  );
}