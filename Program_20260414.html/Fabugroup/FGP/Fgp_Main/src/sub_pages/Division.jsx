import FlexBox from "../components/FlexBox";

function Division() {
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
          Our Division
        <br/><br/>
        <p className="FG_Text2">
            <span className="FG_Text1">Fabugroup Services</span>
            <br/>
            <span>Property support</span>
            <br/><br/>
            <span className="FG_Text1">Specialist Installation</span>
            <br/>
            <span>Furniture systems.</span>
            <br/><br/>
            <span className="FG_Text1">FG System</span>
            <br/>
              <span>Building technologies.</span>
        </p>

            <p className="FG_Text2">
              <br/>
              •	Overview
              <br/>
              •	Services
              <br/>
              •	Case Studies
              <br/>
              •	FAQ
            </p>
                 
        </div>
      </FlexBox>
  );
}

export default Division;