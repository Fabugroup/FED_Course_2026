import FlexBox from "./containers/FlexBox";

function Projects() {
  return (
    <FlexBox
      direction="column"
      gap="10px"
      padding="1px 30px 20px 30px"
      background="cyan"
      style={{ color: "Red" }}
      grow={1}
    >
      <h1> Projects Overview </h1>
      <h2> Our Projects </h2>
    </FlexBox>
  );
}

export default Projects;
