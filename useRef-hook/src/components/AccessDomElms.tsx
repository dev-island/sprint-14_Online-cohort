import { useRef, useState } from "react";

function AccessDomElm() {
  const [expanded, setExpanded] = useState(false);
  const inputElm = useRef<HTMLDivElement>(null);

  const expand = () => {
    if (!inputElm?.current) {
      return;
    }

    const size = expanded ? "100px" : "400px";
    inputElm.current.style.height = size;
    inputElm.current.style.width = size;

    setExpanded(!expanded);
  };

  return (
    <>
      <div className="card" ref={inputElm}>
        <p>Watch me!</p>
      </div>
      <button onClick={expand}>{expanded ? 'Collapse' : 'Expand'}</button>
    </>
  );
}

export default AccessDomElm;
