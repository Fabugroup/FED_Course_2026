// FG System - Homepage
import FlexBox from "../src/components/FlexBox";

function Home() {
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
        Intelligent Control for Modern Buildings

            <p className="FG_Text2">  
            <br/><br/>
            <span className="FG_Text1">
              FG System delivers intelligent lighting control, building automation and integrated technology solutions that enhance operational efficiency, occupant experience and long-term sustainability.
            </span>
            </p>

            <br/>
            <p className="FG_Text2"> 
            <span className="FG_Text1">CTA Buttons</span>
            <br/>
            <p>
            Explore Solutions
            <br/>
            View Projects
            <br/>
            Become a Partner
            </p>
          </p>    
          
          </div>
        {/* Your body page content goes here */}
      </FlexBox>
  );
}

export default Home;