import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import mongoose from "mongoose";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Dr. M Satya Prakash",
    template: "%s Satya",
  },
  description: "Generated by create next app",
};

const connection = {};

const connectToDb = async () => {
  try {
    // if (connection.isConnected) {
    //   console.log("using existing connection");
    //   return;
    // }

    const db = await mongoose.connect(process.env.MONGODB_URI);
    // console.log(db.connections[0].readyState);
    // connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

connectToDb();

async function createNewContact() {}

createNewContact();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`relative min-h-screen ${inter}`} suppressHydrationWarning={true}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
