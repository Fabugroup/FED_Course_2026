import Grid from "./containers/Grid";

const Box = ({ text, b_color }) => {
  return (
    <div
      style={{
        padding: "20px",
        background: b_color,
        color: "white",
        borderRadius: "10px",
        textAlign: "center",
        minWidth: "100px",
        // height: "50vh",
      }}
    >
      {text}
    </div>
  );
};

function Cards() {
  return (
    <>
      <Grid
        //   columns="repeat(1, 1fr)"
        rows="repeat(1,1fr)"
        gap="40px"
        margin="50px"
      >
        <Box text="Card 1" b_color="lightgreen" />
        <Box text="Card 2" b_color="lightgreen" />
      </Grid>

      <Grid columns="repeat(4, 1fr)" gap="1px" minWidth="200px" margin="20px">
        <Box text="Card 1" b_color="red" />
        <Box text="Card 2" b_color="blue" />
        <Box text="Card 3" b_color="red" />
        <Box text="Card 4" b_color="red" />
        <Box text="Card 5" b_color="red" />
        <Box text="Card 6" b_color="red" />
        <Box text="Card 7" b_color="red" />
        <Box text="Card 8" b_color="red" />
      </Grid>

      <Grid
        // columns="repeat(1, 1fr)"
        rows="repeat(1,1fr)"
        gap="40px"
        margin="10px"
      >
        <Box text="Card 1" b_color="cyan" />
        <Box text="Card 2" b_color="yellow" />
        <Box text="Card 3" b_color="green" />
        <Box text="Card 4" b_color="purple" />
      </Grid>
    </>
  );
}

export default Cards;
