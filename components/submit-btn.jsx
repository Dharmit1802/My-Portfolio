import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {

  const {pending} = useFormStatus();  

  return (
    <button
      type="submit"
      className="group w-[8rem] bg-gray-900 dark:bg-gray-800 rounded-full h-[3rem] text-white flex gap-2 items-center justify-center outline-none hover:scale-110 active:scale-105 focus:scale-110 text-md transition-all disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {
        pending ? (<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>):(<>Submit{" "}
        <FaPaperPlane className="text-xs opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />{" "}</>)
      }  
      
    </button>
  );
}
