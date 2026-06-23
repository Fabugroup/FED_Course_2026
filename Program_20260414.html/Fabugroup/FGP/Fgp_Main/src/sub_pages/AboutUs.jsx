import FlexBox from "../components/FlexBox";

function AboutUs() {
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
        <span className="FG_Title">About Us</span>
        <br/>
        <span className="FG_Text2">This page should tell your story.</span>
        <br/><br/><br/>
        <p className="FG_Text2">
          <span className="FG_Text1">Who we Are</span>
          <br/>
          Company background.
        <br/><br/>
        <span className="FG_Text1">Our Mission</span>
        <br/>
        To improve the quality, functionality and intelligence of built environments through innovative solutions and dependable service.
        <br/><br/>
        <span className="FG_Text1">Our Vision</span>
        <br/>
        To become Southeast Asia's trusted partner for smart building technologies and specialist installation services.
        <br/><br/>
        <span className="FG_Text1">Our Journey</span>
        <br/>
        Timeline:
        <br/>
        2022 - Fabugroup founded
        <br/>
        2023 - Expansion of installation services
        <br/>
        2026 - FG System established
        <br/>
        Future milestones

        </p>

</div>


        {/* Your body page content goes here */}
      </FlexBox>
  );
}

export default AboutUs;