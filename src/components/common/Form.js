import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Button';

function BasicTextFields({
  title, setPassword, setEmail, handleAction,
}) {
  return (
    <div>
      <div className="heading-container">
        <h3>
          {title}
          {' '}
          Form
        </h3>
      </div>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="email" label="Enter the Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
        <TextField id="password" label="Enter the Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
      </Box>
      <Button title={title} handleAction={handleAction} />
    </div>

  );
}

BasicTextFields.propTypes = {
  title: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  handleAction: PropTypes.func.isRequired,
};

export default BasicTextFields;
