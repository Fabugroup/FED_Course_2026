import { useState, useCallback } from "react";

const OP_LABEL = { "+": "+", "-": "−", "*": "×", "/": "÷" };

export default function Calculator() {
  const [cur, setCur] = useState("0");
  const [prev, setPrev] = useState(null);
  const [op, setOp] = useState(null);
  const [fresh, setFresh] = useState(false);
  const [mem, setMem] = useState(0);
  const [hasMemory, setHasMemory] = useState(false);
  const [expression, setExpression] = useState("");

  const updateDisplay = useCallback((val) => {
    const s = String(val);
    return s.length > 14 ? parseFloat(val).toExponential(6) : s;
  }, []);

  const handleNumber = (n) => {
    if (fresh) {
      setCur(n);
      setFresh(false);
    } else {
      setCur((c) => (c === "0" ? n : c.length < 15 ? c + n : c));
    }
  };

  const handleDot = () => {
    if (fresh) {
      setCur("0.");
      setFresh(false);
    } else {
      setCur((c) => (c.includes(".") ? c : c + "."));
    }
  };

  const compute = (a, b, operator) => {
    const fa = parseFloat(a);
    const fb = parseFloat(b);
    switch (operator) {
      case "+": return fa + fb;
      case "-": return fa - fb;
      case "*": return fa * fb;
      case "/": return fb === 0 ? "Error" : fa / fb;
      default: return fb;
    }
  };

  const handleOperator = (newOp) => {
    if (op && !fresh) {
      const result = compute(prev, cur, op);
      const r = typeof result === "number"
        ? String(parseFloat(result.toPrecision(12)))
        : result;
      setCur(r);
      setPrev(parseFloat(r));
      setExpression(`${parseFloat(r)} ${OP_LABEL[newOp]}`);
    } else {
      setPrev(parseFloat(cur));
      setExpression(`${cur} ${OP_LABEL[newOp]}`);
    }
    setOp(newOp);
    setFresh(true);
  };

  const handleEqual = () => {
    if (op === null || prev === null) return;
    const result = compute(prev, cur, op);
    const r = typeof result === "number"
      ? String(parseFloat(result.toPrecision(12)))
      : result;
    setExpression(`${prev} ${OP_LABEL[op]} ${cur} =`);
    setCur(r);
    setPrev(null);
    setOp(null);
    setFresh(true);
  };

  const handleClear = () => {
    setCur("0");
    setPrev(null);
    setOp(null);
    setFresh(false);
    setExpression("");
  };

  const handleSign = () => {
    setCur((c) => c !== "Error" && c !== "0" ? String(-parseFloat(c)) : c);
  };

  const handlePercent = () => {
    setCur((c) => c !== "Error" ? String(parseFloat(c) / 100) : c);
  };

  // Memory functions
  const handleMC = () => { setMem(0); setHasMemory(false); };
  const handleMS = () => { setMem(parseFloat(cur)); setHasMemory(true); };
  const handleMR = () => {
    if (hasMemory) { setCur(String(mem)); setFresh(true); }
  };
  const handleMAdd = () => {
    const newMem = mem + parseFloat(cur);
    setMem(newMem);
    setHasMemory(true);
  };

  const BtnHover = ({ className, children, onClick, style }) => {
    return (
      <button
        className={`btn ${className}`}
        style={style}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

  const displayFontSize = cur.length > 12 ? "20px" : cur.length > 9 ? "26px" : "36px";

  return (
    <div className="calculator-wrapper">
      <div className="calculator-container">
        {/* Display */}
        <div className="calculator-display">
          <div className="mem-indicator">
            {hasMemory ? `M = ${mem}` : ""}
          </div>
          <div className="expression">{expression}</div>
          <div className="main-display" style={{ fontSize: displayFontSize }}>
            {updateDisplay(cur)}
          </div>
        </div>

        {/* Button Grid */}
        <div className="button-grid">
          {/* Row 1: Memory */}
          <BtnHover className="btn-memory" onClick={handleMC}>MC</BtnHover>
          <BtnHover className="btn-memory" onClick={handleMS}>MS</BtnHover>
          <BtnHover className="btn-memory" onClick={handleMR}>MR</BtnHover>
          <BtnHover className="btn-memory" onClick={handleMAdd}>M+</BtnHover>

          {/* Row 2 */}
          <BtnHover className="btn-clear" onClick={handleClear}>C</BtnHover>
          <BtnHover className="btn-operator" onClick={handleSign}>+/−</BtnHover>
          <BtnHover className="btn-operator" onClick={handlePercent}>%</BtnHover>
          <BtnHover className="btn-operator" onClick={() => handleOperator("/")}>÷</BtnHover>

          {/* Row 3 */}
          <BtnHover className="btn-number" onClick={() => handleNumber("7")}>7</BtnHover>
          <BtnHover className="btn-number" onClick={() => handleNumber("8")}>8</BtnHover>
          <BtnHover className="btn-number" onClick={() => handleNumber("9")}>9</BtnHover>
          <BtnHover className="btn-operator" onClick={() => handleOperator("*")}>×</BtnHover>

          {/* Row 4 */}
          <BtnHover className="btn-number" onClick={() => handleNumber("4")}>4</BtnHover>
          <BtnHover className="btn-number" onClick={() => handleNumber("5")}>5</BtnHover>
          <BtnHover className="btn-number" onClick={() => handleNumber("6")}>6</BtnHover>
          <BtnHover className="btn-operator" onClick={() => handleOperator("-")}>−</BtnHover>

          {/* Row 5 */}
          <BtnHover className="btn-number" onClick={() => handleNumber("1")}>1</BtnHover>
          <BtnHover className="btn-number" onClick={() => handleNumber("2")}>2</BtnHover>
          <BtnHover className="btn-number" onClick={() => handleNumber("3")}>3</BtnHover>
          <BtnHover className="btn-operator" onClick={() => handleOperator("+")}>+</BtnHover>

          {/* Row 6 */}
          <BtnHover
            className="btn-number"
            style={{ 
              gridColumn: "span 2", 
              justifyContent: "flex-start", 
              paddingLeft: "20px" 
            }}
            onClick={() => handleNumber("0")}
          >
            0
          </BtnHover>
          <BtnHover className="btn-number" onClick={handleDot}>.</BtnHover>
          <BtnHover className="btn-equal" onClick={handleEqual}>=</BtnHover>
        </div>
      </div>
    </div>
  );
}
