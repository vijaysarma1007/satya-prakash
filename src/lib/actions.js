"use server";
import { Contact } from "./model";

export const contactUs = async (previousState, formData) => {
  const { firstName, surName, lastName, email, city, country, address, phoneNumber, whatsappNumber, description, state } = Object.fromEntries(formData);

  console.log(firstName, surName, lastName, email, city, country, address, phoneNumber, whatsappNumber, description, state);

  const contact = await Contact.findOne({ email });

  if (contact) {
    return { error: "already found" };
  }

  try {
    const newContact = new Contact({
      firstName,
      surName,
      lastName,
      email,
      city,
      country,
      description,
      state,
      address,
      phoneNumber,
      whatsappNumber,
    });

    await newContact.save();
    return { success: true };
  } catch (error) {
    console.log(error);
    return;
  }
};
