import Button from "./common/Button";
import Typography from "./common/Typography";
import ProductHeroLayout from "./common/ProductHeroLayout";

const backgroundImage = "https://i.imgur.com/v1V8L5T.jpg";

export default function OursHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Let's share...
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Be part of the community commited to making the most out of anything and
        everything.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/register/"
        sx={{ minWidth: 200 }}
      >
        SIGN ME UP
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover what can be ours.
      </Typography>
    </ProductHeroLayout>
  );
}
