import FlexBox from "../src/components/FlexBox";


function Support() {
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
          Technical Support Beyond Delivery
        <p className="FG_Text2">
            <span className="FG_Text1">Supporting our partners and clients throughout the entire project lifecycle.</span>
            <br/><br/><br/>
            <span className="FG_Text1">Downloads</span>
            <br/><br/>
            Datasheets
            <br/>
            Manuals
            <br/>
            Software
            <br/>
            Firmware
            <br/>
            CAD Files
            <br/>
            BIM Files
            <br/>
            Certificates
            <br/><br/><br/><br/>
            <span className="FG_Text1">Training</span>
            <br/>
            Online Training
            <br/>
            Certification Programs
            <br/>
            Workshops
            <br/>
            Webinars
           <br/><br/><br/><br/>
            <span className="FG_Text1">Technical Support</span>
            <br/>
           Submit Support Ticket
           <br/>
           Request Remote Assistance
           <br/>
           Schedule Technical Consultation
           <br/><br/><br/><br/>
            <span className="FG_Text1">FAQ</span>
            <br/>
            Most common technical questions.  
            <br/>
        </p>
        </div>
      </FlexBox>
  );
}

export default Support;