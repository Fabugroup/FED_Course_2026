import FlexBox from "../components/FlexBox";

function Contact() {
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
          Contact Us
        <br/>
        <p className="FG_Text1">
          <br/>
          Contact Information
          <br/>
          Inquiry Form
          <br/>
          Business Development
          <br/>
          Technical Support
          <br/>
          Dealer Application
          <br/>
Partnership Opportunities

        </p>
          </div>
        {/* Your body page content goes here */}
      </FlexBox>
  );
}

export default Contact;