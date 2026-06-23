import FlexBox from "./containers/FlexBox";

const Box = ({ text }) => {
  return (
    <div
      style={{
        padding: "10px",
        background: "blue",
        justify: "flex-start",
        align: "center",
        color: "white",
        borderRadius: "10px",
        width: "fit-content",
        // height: "auto",
        // minWidth: "100px",
        // textAlign: "center",
      }}
    >
      {text}
    </div>
  );
};

// card display
function Cards() {
  return (
    <>
      <FlexBox
        direction="row"
        justify="center"
        align="center"
        wrap="nowrap"
        gap="10px"
        padding="20px"
        background="lightgrey"
        borderRadius="10px"
        // width="auto"
        // height="150px"
      >
        <Box text="Card 1" />
        <Box text="Card 2" />
        <Box text="Card 3" />
        <Box text="Card 4" />
      </FlexBox>
    </>
  );
}

export default Cards;
