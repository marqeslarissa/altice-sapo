import * as React from "react";
import './styles.scss';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Done from "@mui/icons-material/Done";
import Typography from "@mui/material/Typography";

function Contact() {
  return (
    <div className="contact">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} minHeight={80} className="input">
          <fieldset className="text">
            <Typography variant="h6" gutterBottom>
              Quer saber mais?
            </Typography>
            <Typography variant="overline" gutterBottom>
              Nos deixe o seu contacto!
            </Typography>
          </fieldset>
          <fieldset>
            <Grid display="flex">
              <TextField
                sx={{
                  "& .MuiFormLabel-root": {
                    color: 'secondary.main'
                  },
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: 'primary.main'
                  }
                }}
                id="standard-basic"
                label="Deixe o seu contacto"
                variant="standard"
                placeholder="(351) 999999999"
              />
              <IconButton sx={{ color: 'secondary.main' }} aria-label="Deixe o seu contacto">
                <Done />
              </IconButton>
            </Grid>
          </fieldset>

        </Grid>
      </Box>
    </div>
  );
}
export default Contact;