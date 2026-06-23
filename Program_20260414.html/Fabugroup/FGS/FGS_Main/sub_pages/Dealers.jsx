import FlexBox from "../src/components/FlexBox";

function Dealers() {
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
          Building Success Through Collaboration
          <p className="FG_Text1">
            FG System works with technology providers, consultants, contractors and regional partners to deliver innovative solutions throughout Southeast Asia.
          </p>

          <p className="FG_Text1"> 
            <br/>
              Technology Partners
              <br/>
              Regional Dealers
              <br/>
              System Integrators
              <br/>
              Consulting Partners
              <br/>
              Project Delivery Partners
            <br/>
            <br/>  <br/><br/>
            <span className="FG_Text1">Become a Partner</span>
            <br/>
            <p className="FG_Text2">
              Dealer application form.
              <br/>

            </p>
         
          </p>




          </div>
        {/* Your body page content goes here */}
      </FlexBox>
  );
}

export default Dealers;