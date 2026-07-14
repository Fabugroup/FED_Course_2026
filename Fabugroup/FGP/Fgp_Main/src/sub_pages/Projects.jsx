import FlexBox from "../components/FlexBox";

function Projects() {
  return (
      <FlexBox
        direction="row"
        justify="flex-start"
        align="flex-start"
        padding="10px 10px"
        width="100%"
        background="#000000"
        border="1px solid black"
        color="white"
        grow={1}
      >
        <div className="FG_Title">
          Projects
        <br/><br />
      
        <p className="FG_Text1">
          Residential
          <br/>
          Commercial
          <br/>
          Hospitality
          <br/>
          Public Infrastructure
          <br/>
          Smart Building
          <br/>
          Furniture Installation
        <br/><br />
        </p>
        <p className="FG_Text2">
          Each project should show:
          <br/>
          •	Challenge
          <br/>
          •	Solution
          <br/>
          •	Outcome
          <br/><br />
            Even if clients are confidential. 
          </p>
        </div>
        {/* Your body page content goes here */}
      </FlexBox>
  );
}

export default Projects;