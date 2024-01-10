import { useRef, useState } from "react";

function AccessDomElm() {
  const [expanded, setExpanded] = useState(false);
  const elm = useRef<HTMLDivElement>(null);

  const expand = () => {
    if (!elm?.current) {
      return;
    }

    const size = expanded ? "100px" : "400px";
    elm.current.style.height = size;
    elm.current.style.width = size;

    setExpanded(!expanded);
  };

  return (
    <>
      <div className="card" ref={elm}>
        <p>Watch me!</p>
      </div>
      <button onClick={expand}>{expanded ? 'Collapse' : 'Expand'}</button>
    </>
  );
}

export default AccessDomElm;
