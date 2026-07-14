import FlexBox from "../components/FlexBox";

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
          Knowledge Centre
        <br/>
        <p className="FG_Text2">
          This may become one of your most powerful marketing tools.
          <br/><br/>
          
          <p className="FG_Text1">
          Categories
          <br/>
          Lighting Design
          <br/>
          Lighting Controls
          <br/>
          Building Automation
          <br/>
          Electrical Systems
          <br/>
          Furniture Systems
          <br/>
          Waterproofing
          <br/>
          Industry News
          <br/>
          Technical Guides
          <br/>
          Product Insights
          <br/>
          </p> 

          <br/>
          <p className="FG_Text2">

          Think of it as a hybrid between:
          <br/>
          •	Blog
          <br/>
          •	Learning Centre
          <br/>
          •	Technical Resource Hub
          <br/>
          This positions Fabugroup as an authority.
          </p>
          </p>        

        </div>
        {/* Your body page content goes here */}
      </FlexBox>
  );
}

export default Knowledge;