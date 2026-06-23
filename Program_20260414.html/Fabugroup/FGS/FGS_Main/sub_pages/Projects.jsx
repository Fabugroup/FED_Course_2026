import FlexBox from "../src/components/FlexBox";

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
         Solutions Tailored for Every Environment
        <br/><br />
      
        <p className="FG_Text2">
          <span className="FG_Text1">Hospitality</span>
          <br/>
        Hotels
        <br/>
        Resorts
        <br/>
        Serviced Apartments
        <br/><br />
        </p>

        <p className="FG_Text2">
        <span className="FG_Text1">
        Commercial
        </span>
        <br/>
        Office Buildings<br/>
        Mixed Developments<br/>
        Retail<br/><br />
        </p>

 <p className="FG_Text2">
        <span className="FG_Text1">
        Residential
        </span>
        <br/>
       Luxury Homes<br/>
       Condominiums<br/>
       Smart Homes<br/><br />
        </p>

 <p className="FG_Text2">
        <span className="FG_Text1">
        Infrastructure
        </span>
        <br/>
        Airports<br/>
        Transportation Hubs<br/>
        Government Facilities<br/><br />
        </p>

 <p className="FG_Text2">
        <span className="FG_Text1">
        Education
        </span>
        <br/>
       Universities<br/>
       Schools<br/>
       Research Facilities<br/><br />
        </p>

 <p className="FG_Text2">
        <span className="FG_Text1">
        Healthcare
        </span>
        <br/>
        Hospitals<br/>
        Medical Centres<br/>
        Senior Care Facilities<br/><br />
        </p>

        </div>
        {/* Your body page content goes here */}
      </FlexBox>
  );
}

export default Projects;