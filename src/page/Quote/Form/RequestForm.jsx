import { Button, Paper, TextField } from '@mui/material';
import React from 'react';

const RequestForm = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Paper elevation={3} style={{ padding: "2rem", width: "50%",display:"flex",flexDirection:"column", gap:"1rem" }}>
        <div style={{ color: "#4273C1", fontWeight: 900, fontSize: "25px", marginBottom: "1rem" }}>Request Form</div>
        <TextField
          label="Full Name"
          fullWidth
          size="small"
          InputLabelProps={{
            shrink: false,
          }}
        />
        <TextField
          label="Email Address"
          fullWidth
          size="small"
          InputLabelProps={{
            shrink: false,
          }}
        />
        <TextField
          label="Contact Number"
          fullWidth
          size="small"
          InputLabelProps={{
            shrink: false,
          }}
        />
        <TextField
          label="Service title"
          fullWidth
          size="small"
          InputLabelProps={{
            shrink: false,
          }}
        />
        <TextField
          label="Service Description"
          fullWidth
          multiline
          rows={4}
          InputLabelProps={{
            shrink: false,
          }}
          sx={{ '& input': { fontSize: '8px' } }}
        />
        <Button variant='contained' style={{ marginTop: "1rem" }}>Submit</Button>
      </Paper>
    </div>
  );
}

export default RequestForm;
