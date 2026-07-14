import FlexBox from "../src/components/FlexBox";

function Solution() {
  return (
      <FlexBox
        direction="row"
        justify="flex-start"
        align="flex-start"
        // padding="2px 2px"
        width="100%"
        // background="#000000"
        // border="1px solid black"
        color="white"
      margin="10px"
        grow={1}
      >
        <div >
        <span className="FG_Title">Engineering Smarter Environments</span>
        <br/><br/>
        <p className="FG_Text1">
        Building upon decades of regional experience, FG System provides design, integration, commissioning and support services for intelligent building technologies across Southeast Asia.
        </p>
     <p className="FG_Text1">
       We collaborate with consultants, developers, contractors and technology partners to deliver scalable solutions for commercial, hospitality, residential and infrastructure projects.
        </p>
        <br/>
        <p className="FG_Text2">
          <span className="FG_Text1">What We Do - Integrated Technology Solutions</span>
          <br/>
          
        <br/><br/>
        <span className="FG_Text1">Lighting Control Systems</span>
        <br/>
     Creating flexible and energy-efficient lighting environments through intelligent control technologies.
        <br/><br/>
        <span className="FG_Text1">Building Automation</span>
        <br/>
        Integrating multiple building systems into a seamless and efficient operating platform.
        <br/><br/>
        <span className="FG_Text1">IPTV & Digital Media Solutions</span>
        <br/>
        Delivering centralized content distribution and management solutions for hospitality and commercial environments.
        <br/><br/>
        <span className="FG_Text1">Technical Services</span>
        <br/>
        Design support, commissioning, training and long-term system maintenance.
        </p>

<br/><br/>
      <span className="FG_Text1">
         FG System supports projects and partners throughout:    
         </span>  
        <p className="FG_Text2">
          Singapore
          <br/>
          Malaysia
          <br/>
          Indonesia
          <br/>
          Philippines
          <br/>
          Vietnam
          <br/>
          Thailand
          <br/>
          Cambodia
          <br/>
          South Asia
        <br/><br />
        </p>
        <span className="FG_Text1">
          Projects That Define Expertise
          </span>
          <p className="FG_Text2">
          Show 4-6 flagship projects.
          <br/>
          Hospitality
          <br/>
          Commercial
          <br/>
          Infrastructure
          <br/>
          Residential
          <br/><br />
          
          </p>
</div>


        {/* Your body page content goes here */}
      </FlexBox>
  );
}

export default Solution;