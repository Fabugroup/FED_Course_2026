// iife - immdiately Invoked Function Execution
// it only be used only onece
// disposable
// one time use
// cannot be reused

(function () {
  console.log("Hello IIFE");
})();

(function (a, b) {
  console.log(a + b);
})(10, 20);
