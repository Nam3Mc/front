"use client";

import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import AdminMenu from "@/components/dashboard/adminMenu";
import MemberMenu from "@/components/dashboard/memberMenu";
import { Roll } from "@/enums/rolls";
import OwnerMenu from "@/components/dashboard/ownerMenu";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [roll, setRoll] = useState<Roll>(Roll.MEMBER);

  useEffect(() => {
    const checkRoll = () => {
      const storedRoll = localStorage.getItem("roll");
      if (storedRoll && Object.values(Roll).includes(storedRoll as Roll)) {
        setRoll(storedRoll as Roll);
      }
    };

    checkRoll();
  }, []);

  const renderDashboard = () => {
    if (roll === Roll.ADMIN) {
      return <AdminMenu />;
    } else if (roll === Roll.OWNER) {
      return <OwnerMenu />;
    } else {
      return <MemberMenu />;
    }
  };

  return (
    <div>
      <div className="flex">
        {renderDashboard()}
        {children}
      </div>

    </div>
  );
}
