import { useState } from "react";
import './ErrorBox.scss';

const ErrorBox = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="error-box">
      <span>⚠</span>
      <button onClick={() => setVisible(false)}>×</button>
    </div>
  );
};

export default ErrorBox;