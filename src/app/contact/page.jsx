"use client";
import React, { useEffect } from "react";
import { contactUs } from "@/lib/actions";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
export default function ContactPage() {
  const [state, formAction] = useFormState(contactUs, undefined);
  const router = useRouter();
  //content
  useEffect(() => {
    state?.success && router.push("/");
  }, [state?.success, router]);

  return (
    <div className="flex min-h-screen justify-center items-center w-full">
      <form action={formAction} className="flex flex-col sm:grid sm:grid-cols-2 w-[80%] gap-4 items-center">
        <input type="text" placeholder="First Name" name="firstName" required className="w-[75%] h-10 placeholder:text-black placeholder:pl-2 bg-blue-50 rounded-md" />
        <input type="text" placeholder="Middle Name" name="surName" className="w-[75%] h-10 placeholder:text-black placeholder:pl-2 bg-blue-50 rounded-md" />
        <input type="text" placeholder="last Name" name="lastName" className="w-[75%] h-10 placeholder:text-black placeholder:pl-2 bg-blue-50 rounded-md" />
        <input type="email" placeholder="Email Address" name="email" required className="w-[75%] h-10 placeholder:text-black placeholder:pl-2 bg-blue-50 rounded-md" />
        <input type="text" placeholder="City" name="city" required className="w-[75%] h-10 placeholder:text-black placeholder:pl-2 bg-blue-50 rounded-md" />
        <input type="text" placeholder="State" name="state" required className="w-[75%] h-10 placeholder:text-black placeholder:pl-2 bg-blue-50 rounded-md" />
        <input type="text" placeholder="Country" name="country" required className="w-[75%] h-10 placeholder:text-black placeholder:pl-2 bg-blue-50 rounded-md" />
        <input type="text" placeholder="Address" name="address" required className="w-[75%] h-10 placeholder:text-black placeholder:pl-2 bg-blue-50 rounded-md" />
        <textarea
          type="text"
          placeholder="Description"
          name="description"
          required
          rows={5}
          className="w-[75%] h-10 placeholder:text-black placeholder:pl-2 bg-blue-50 rounded-md"
        />
        <input type="text" placeholder="Phone Number" name="phoneNumber" required className="w-[75%] h-10 placeholder:text-black placeholder:pl-2 bg-blue-50 rounded-md" />
        <input type="text" placeholder="WhatsApp Number" name="whatsappNumber" className="w-[75%] h-10 placeholder:text-black placeholder:pl-2 bg-blue-50 rounded-md" />
        {state?.error}
        <button className="border-blue-400 border w-[75%] h-10">Submit</button>
      </form>
    </div>
  );
}
