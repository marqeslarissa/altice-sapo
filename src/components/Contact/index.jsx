import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Done from "@mui/icons-material/Done";
import Typography from "@mui/material/Typography";


function Contact() {
    return (
        <Box sx={{ flexGrow: 1, padding: 5 }}>
            <Typography variant="h6" gutterBottom>
                Quer saber mais?
            </Typography>
            <Typography variant="overline" gutterBottom>
                Nos deixe o seu contacto!
            </Typography>
            <Grid container spacing={2} minHeight={80}>
                <Grid display="flex" justifyContent="center" alignItems="center">
                    <TextField
                        id="standard-basic"
                        label="Deixe o seu contacto"
                        variant="standard"
                        placeholder="(351) 999999999"
                    />
                    <IconButton color="primary" aria-label="Deixe o seu contacto">
                        <Done />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    );
}
export default Contact;