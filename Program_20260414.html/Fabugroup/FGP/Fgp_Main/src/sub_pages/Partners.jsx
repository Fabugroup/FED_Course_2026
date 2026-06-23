import FlexBox from "../components/FlexBox";

function Partners() {
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
          Our Partners
          <p className="FG_Text2">
            Fabugroup collaborates with leading international manufacturers, consultants and technology providers to deliver reliable and future-ready solutions.
          </p>

          <p className="FG_Text1"> 
            <br/>
            <span className="FG_Text1">Our Network</span>
            <br/><br/>
              Technology Partners
              <br/>
              Installation Partners
              <br/>
              Regional Dealers
              <br/>
              Consulting Partners
              <br/>
              Project Delivery Partners
            <br/>
            <br/>
            <p className="FG_Text2">
              For public viewing, focus on capabilities.
              <br/>
              For approved partners, provide a login portal.
              <br/>

            </p>
         
          </p>




          </div>
        {/* Your body page content goes here */}
      </FlexBox>
  );
}

export default Partners;