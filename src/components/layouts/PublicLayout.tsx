import { type ReactNode } from "react";
import Navbar from "../layouts/Navbar";

const PublicLayout = ({ children }: { children: ReactNode }) => {
 return (
 <div className="min-h-screen flex flex-col">
 <Navbar />

 <main className="flex-grow">
 {children}
 </main>
</div>
);
};

export default PublicLayout;