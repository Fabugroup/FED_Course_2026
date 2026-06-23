// Reusable React flexible component with configuratoino properties
// no / minimal css required

const FlexBox = ({
  children,

  // flex container properties
  direction = "column",
  justify = "flex-start",
  align = "stretch",
  wrap = "nowrap",

  // size
  width = "auto",
  height = "auto",

  // spacing
  padding = "0px",
  margin = "0px",
  gap = "0px",

  // extra Styling
  background = "transparent",
  border = "none",
  borderRadius = "0px",
  style = {},
  className = "",

  // Flex Item properties
  flex = " 0 1 auto",
  grow,
  shrink,
  basis,

  // position
  display = "flex",

  ...props
}) => {
  const flexstyle = {
    display,

    // container properties
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap,
    gap,

    // size
    width,
    height,

    // spacing
    padding,
    margin,

    // extra Styling
    background,
    border,
    borderRadius,

    // item styles
    flex,
    flexGrow: grow,
    flexShrink: shrink,
    flexBasis: basis,

    ...style,
  };
  return (
    <div className={className} style={flexstyle} {...props}>
      {children}
    </div>
  );
};

export default FlexBox;
