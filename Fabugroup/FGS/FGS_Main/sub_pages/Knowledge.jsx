import FlexBox from "../src/components/FlexBox";  

function Knowledge() {
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
     Sharing Knowledge. Advancing Technology.
        <br/>
        <p className="FG_Text1">
          Technical insights, industry trends and practical guidance from our engineering and support teams.
          <br/><br/>
          
          <p className="FG_Text2">
          <span className="FG_Text1">
          Categories
          </span>
          <br/>
          Lighting Controls
          <br/>
          DALI
          <br/>
          DMX
          <br/>
          Building Automation
          <br/>
          IPTV
          <br/>
          Project Case Studies
          <br/>
          Technical Guides
          <br/>
          Industry News
          <br/>
          Training Materials

          <br/>
          </p> 

          <br/>
          <p className="FG_Text2">
          <span className="FG_Text1">
          Example Articles
          </span>
          <br/>
          What is DALI?
          <br/>
          DALI vs DMX
          <br/>
          Common Lighting Control Mistakes
          <br/>
          Hotel Guestroom Control Design
          <br/>
          How to Commission a Lighting Control System
          <br/>
          Future of Smart Buildings

          </p>
          </p>        

        </div>
        {/* Your body page content goes here */}
      </FlexBox>
  );
}

export default Knowledge;