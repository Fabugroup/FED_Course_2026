function Child() {
  useEffect(() => {
    console.log("Child Component Mounted");
    return () => console.log("Child Component Unmounted");
  });

  return (
    <div>
      <h2>Child Component</h2>
    </div>
  );
}

export default Child;
