import FlexBox from "./containers/FlexBox";

function Footer() {
  return (
    <FlexBox
      direction="row"
      justify="space-between"
      align="stretch"
      padding="0 10px"
      background="#a83082"
      style={{ color: "white" }}
    >
      <FlexBox direction="column" gap="5px" align="flex-start">
        <h5> © Copy 2026 My Company. All Rights Reserved.</h5>
      </FlexBox>

      {/* <FlexBox
        direction="row"
        justitfy="flex-end"
        align="flex-end"
        alignSelf="stretch"
        padding="0px 20px 0px 20px"
        background="#a83082"
        style={{ color: "white" }}
      >
        <p> Logo</p>
      </FlexBox> */}
    </FlexBox>
  );
}

export default Footer;
