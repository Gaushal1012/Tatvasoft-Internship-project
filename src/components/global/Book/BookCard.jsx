import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Chip, Stack } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

//=====================================================================================================
//   Ye Card vala Component copy nahi karna hai khud ka vaparana hai
//====================================================================================================

const BookCard = ({ name, price, description, category, img }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        gap: "1rem",
        height: "100%",
        overflow: "hidden",
        borderRadius: "1rem",
        border: "1px solid #d4d4d4",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          width: "40%",
          backgroundColor: "#eeee",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={img}
          alt="book image"
          style={{ height: "12rem", objectFit: "cover" }}
        />
      </div>
      <Stack
        alignItems="flex-start"
        useFlexGap
        spacing={1}
        sx={{ height: "100%", paddingY: "0.5rem", width: "50%" }}
      >
        <Typography variant="h5">{name}</Typography>
        <Chip label={category} sx={{ backgroundColor: "#e0e8eb" }} />

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6">&#8377; {price}</Typography>
        <Button
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          sx={{
            marginTop: "auto",
            backgroundColor: "#ea3c53",
            "&:hover": {
              backgroundColor: "#e60026",
            },
          }}
        >
          Add
        </Button>
      </Stack>
    </Box>
  );
};

export default BookCard;
