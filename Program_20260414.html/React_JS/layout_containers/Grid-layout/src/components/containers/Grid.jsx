function Grid({
  children,
  columns = "repeat(3,1fr)",
  rows,
  gap = "0px",
  columnGap,
  rowGap,
  justifyItems,
  alignItems,
  justifyContent,
  alignContent,
  margin,
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
        gap: gap,
        columnGap: gap,
        rowGap: gap,
        justifyItems,
        alignItems,
        justifyContent,
        alignContent,
        margin: margin,
      }}
    >
      {children}
    </div>
  );
}

export default Grid;
