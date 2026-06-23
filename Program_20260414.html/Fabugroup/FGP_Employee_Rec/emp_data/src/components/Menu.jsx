import FlexBox from "./containers/FlexBox";

const Box = ({ text }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "10px",
        // background: "blue",
        color: "white",
        borderRadius: "10px",
        width: "fit-content",
        height: "50px",
        textAlign: "start",
      }}
    >
      {text}
    </div>
  );
};

function Menu() {
  return (
    <>
      <FlexBox
        direction="row"
        justify="flex-start"
        align="center"
        wrap="nowrap"
        gap="5px"
        padding="10px"
        // background="lightgreen"
        borderRadius="10px"
        width="auto"
        height="auto"
      >
        <Box text="Menu 1" />
        <Box text="Menu Menu 2" />
        <Box text="Menu 3" />
        <Box text="Menu 4" />
      </FlexBox>
    </>
  );
}

export default Menu;
