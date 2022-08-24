import React from "react";
import { useSelector } from "react-redux";

const GlobalError = () => {

  const globalErrorReducer = useSelector(state => state.globalErrorReducer);

  return (
    <>
      <div className={globalErrorReducer && globalErrorReducer.visibility ? "globalError globalError__show" : "globalError"}> {globalErrorReducer.message}</div>
    </>
  )
}

export default GlobalError;