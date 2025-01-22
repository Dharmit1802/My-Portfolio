"use client";

import React from "react";
import Sectionheading from "./sectionheading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn"
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
    >
      <Sectionheading>contact me</Sectionheading>
      <p className="text-gray-700 dark:text-gray-500">
        Please Contact me directly at{" "}
        <a className="underline" href="mailto:dharmit1802@gmail.com">
          dharmit1802@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        action={async (formData) => {
          const {data,error} = await sendEmail(formData);

          if(error){
            toast.error(error);
            return;
          }

          toast.success("Email send succesfully");
          formData.set('senderEmail'," ");
          formData.set("message"," ");
        }}
        className=" mt-10 flex flex-col"
      >
        <input
          type="email"
          name="senderEmail"
          className="h-14 placeholder:text-gray-700 rounded-lg borderBlack px-4 text-black dark:bg-gray-300"
          required
          placeholder="your email"
        ></input>
        <textarea
          placeholder="your message"
          name="message"
          maxLength={300}
          required
          className="h-52 my-3 placeholder:text-gray-700 rounded-lg borderBlack p-4 text-black dark:bg-gray-300"
        ></textarea>
        <SubmitBtn/>
      </form>
    </motion.section>
  );
}
