import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => {
  toast("Updated Successfully", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    theme: "dark",
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
function Toastr() {
  return (
    <>
      <button onClick={notify}>Submit</button>

      <ToastContainer />
    </>
  );
}
export default Toastr;
