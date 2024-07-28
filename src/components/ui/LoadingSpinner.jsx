import {PulseLoader} from "react-spinners";

const LoadingSpinner = () => {

  return (
    <>
      <div style={{display: "flex", justifyContent: "center", margin: "3rem"}}>
        <PulseLoader color={"#68dcc3"} size={15} />
      </div>
    </>
  )
};

export default LoadingSpinner;