import FlexBox from "../components/FlexBox";

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
          Building Better Spaces Through
        <br/>Technology, Craftsmanship and Service

            <p className="FG_Text2">  
            <br/><br/>
            <span className="FG_Text1">Property Services</span>
            <br/>
            Electrical troubleshooting, lighting maintenance, waterproofing.
            <br/><br/>
              <span className="FG_Text1">Specialist Installation</span>
            <br/>
            Premium furniture and modular system installation.
            <br/><br/>
            <span className="FG_Text1">Smart Building Solutions</span>
            <br/>
            Lighting control, automation and system integration.

        </p>

        <p className="FG_Text2">
            <br/><br/>
            This becomes your "news" section.
            <br/><br/>
            Articles such as:
            <br/>
            •	Why LED drivers fail before LED chips
            <br/>
            •	Understanding DALI lighting controls
            <br/>
            •	How to select lighting scenes for residential spaces
            <br/>
            •	Common causes of waterproofing failures
            <br/>
            •	Lighting design principles for luxury homes
            <br/><br/>
            This is excellent for SEO.
        </p>
          </div>
        {/* Your body page content goes here */}
      </FlexBox>
  );
}

export default Home;