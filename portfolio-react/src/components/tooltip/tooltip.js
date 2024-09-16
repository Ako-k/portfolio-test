import React, { useState } from 'react';
import './tooltip.css';

const Tooltip = ({ children, content }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="tooltip-container">
      <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {children}
      </div>
      {show && <div class='bottom-tooltip'>{content}</div>}
    </div>
  );
};

export default Tooltip;