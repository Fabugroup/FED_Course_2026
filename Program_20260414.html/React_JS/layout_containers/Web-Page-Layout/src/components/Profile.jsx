import FlexBox from "./containers/FlexBox";

function Profile() {
  return (
    <FlexBox
      direction="column"
      gap="10px"
      padding="1px 30px 20px 30px"
      background="cyan"
      style={{ color: "Yellow" }}
      grow={1}
    >
      <h1> Profile Overview </h1>
      <h1> Our Profile </h1>
    </FlexBox>
  );
}

export default Profile;
