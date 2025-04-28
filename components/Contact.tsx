 "use client";
 import React, { useRef, useState } from "react";
 import emailjs from "@emailjs/browser";
 
 const Contact: React.FC = () => {
   const [success, setSuccess] = useState<boolean>(false);
   const [error, setError] = useState<boolean>(false);
 
   const form = useRef<HTMLFormElement>(null);

   const sendEmail = (e: React.FormEvent) => {
     e.preventDefault();
     setError(false);
     setSuccess(false);

     if (form.current) {
       emailjs
         .sendForm(
           process.env.NEXT_PUBLIC_SERVICE_ID!,
           process.env.NEXT_PUBLIC_TEMPLATE_ID!,
           form.current,
           process.env.NEXT_PUBLIC_PUBLIC_KEY
         )
         .then(
           () => {
             setSuccess(true);
             form.current?.reset();
           },
           () => {
             setError(true);
           }
         );
     }
   };

   return (
     <div className=" flex justify-center">
       <div className="flex   flex-col border-1 rounded-2xl mb-20 w-full  lg:w-1/2 mx-3">
         <h2 className="font-oswald text-center text-3xl md:text-4xl lg;text-6xl py-10 ">
           Hire Me / Intern Me!
         </h2>

         <form
           onSubmit={sendEmail}
           ref={form}
           className="  font-roboto rounded-xl text-xl flex flex-col gap-5 justify-start   "
         >
           <span className="font-bold uppercase px-2">Dear Baskiki Reda </span>
           <textarea
             rows={5}
             className="bg-transparent border-b-2 border-b-white outline-none pb-2 m-2 resize-none"
             placeholder="Your message here ...."
             name="user_message"
           />
           <span className="px-2">My mail address is:</span>
           <input
             name="user_email"
             type="text"
             placeholder="Your email  ...."
             className="bg-transparent border-b-2 pb-2 px-2 border-b-white outline-none"
           />
           <p className="px-2">Regards</p>
           <button
             className="bg-purple-200 rounded font-semibold text-gray-600 p-4 hover:bg-#2C5364"
             type="submit"
           >
             Send
           </button>
           {success && (
             <span className="text-green-600 font-semibold">
               Your message has been sent successfully!
             </span>
           )}
           {error && (
             <span className="text-red-600 font-semibold">
               Something went wrong!
             </span>
           )}
         </form>
       </div>
     </div>
   );
 };

 export default Contact;