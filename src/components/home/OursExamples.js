import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../common/Typography";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

export default function OursExamples() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "secondary.light", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 5 }}>
          Recently added items
        </Typography>

        <div>
          <Box
            component="section"
            sx={{
              display: "flex",
              overflow: "hidden",
              bgcolor: "secondary.light",
            }}
          >
            <Container
              sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}
            >
              <Box
                component="img"
                // src="/static/themes/onepirate/productCurvyLines.png"
                alt="curvy lines"
                sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
              />

              <Grid container spacing={5}>
                <Grid item xs={12} md={4}>
                  <Box sx={item}>
                    <Box
                      component="img"
                      src="https://i.imgur.com/4sHk1Nt.jpg"
                      alt="bell tent"
                      sx={{ height: 300 }}
                    />
                    <Typography variant="h6" sx={{ my: 5 }}>
                      Bell tent
                    </Typography>
                    <Typography variant="h5">
                      {
                        "From the latest trendy boutique hotel to the iconic palace with XXL pool"
                      }

                      {
                        ", go for a mini-vacation just a few subway stops away from your home."
                      }
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={item}>
                    <Box
                      component="img"
                      src="https://i.imgur.com/NdVopJl.jpg"
                      alt="graph"
                      sx={{ height: 300 }}
                    />
                    <Typography variant="h6" sx={{ my: 5 }}>
                      Golf CLubs
                    </Typography>
                    <Typography variant="h5">
                      {
                        "Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… "
                      }

                      {"your Sundays will not be alike."}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={item}>
                    <Box
                      component="img"
                      src="https://i.imgur.com/Ur0z25r.jpg"
                      alt="saw"
                      sx={{ height: 300 }}
                    />
                    <Typography variant="h6" sx={{ my: 5 }}>
                      Circular Saw
                    </Typography>
                    <Typography variant="h5">
                      {
                        "By registering, you will access specially negotiated rates "
                      }
                      {"that you will not find anywhere else."}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </div>
      </Container>
    </Box>
  );
}
