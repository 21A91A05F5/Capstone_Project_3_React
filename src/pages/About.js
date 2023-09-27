import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        Since our modest beginnings in 2005 with a little space in Toronto’s stylish 
        Yorkville locale, ‘Organization Name’ ‘s development has been enlivened with the
         energy to cook and serve solid, Indian-roused takeout food.
         

In contrast to other Indian eateries, ‘Organization Name’ was made with the explicit 
expectation to appear as something else.
</p>
<br></br>
<p>

We realize numerous individuals love Indian sustenance, yet a large number of them 
loathe or are unconscious of the regularly unfortunate fixings that make run-of-the-mill 
Indian nourishment taste so great.

Our menu highlights things that utilize the sound and fragrant flavors, however, 
forget the stuffing ghee, spread, oil, and overwhelming cream.
        </p>
        <br />
        
      </Box>
    </Layout>
  );
};

export default About;
