import FlexBox from "./containers/FlexBox";

function About() {
  return (
    <FlexBox
      direction="column"
      gap="10px"
      padding="1px 30px 20px 30px"
      background="cyan"
      style={{ color: "Blue" }}
      grow={1}
    >
      <h1> About Us </h1>
      <h2> Who you gonna call? </h2>
    </FlexBox>
  );
}

export default About;
