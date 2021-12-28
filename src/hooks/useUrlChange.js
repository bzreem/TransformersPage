import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const useHistoryChange = () => {
  let [historyChange, setHistoryChange] = useState(null);
  let variableHistory = useHistory();
  let { location } = variableHistory;

  useEffect(() => {
    if (location.path !== "/") {
      setHistoryChange(false);
    } else {
      setHistoryChange(true);
    }
  }, [location.path]);

  return[historyChange]
};

export { useHistoryChange };
