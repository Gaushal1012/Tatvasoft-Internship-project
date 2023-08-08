import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const BookCard = ({ title, price, author, img }) => {
  const Style = {
    display: "flex",
    gap: "15px",
    border: "2px solid pink",
    margin: "10px",
  };
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia component="img" alt="green iguana" height="140" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {author}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant="h4">Rs. {price}</Typography>
        <Button size="small" variant="contained" sx={{ marginLeft: "10px" }}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
