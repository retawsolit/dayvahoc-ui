import { type ReactNode } from "react";
import Navbar from "../layouts/Navbar";

const AuthLayout = ({ children }: { children: ReactNode }) => {
 return (
 <div className="min-h-screen flex flex-col bg-gray-50">
  <Navbar />

<div className="flex-grow flex items-center justify-center">
 <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
 {children}
  </div>
    </div>
  </div>
 );
};

export default AuthLayout;