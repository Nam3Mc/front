"use client";

import { useEffect, useState } from "react";
import UserProfile from "@/components/dashboard/userProfile";

const HomePage: React.FC = () => {
  const [id, setId] = useState("");

  useEffect(() => {
    const storedId = localStorage.getItem("userId");
    if (storedId) {
      setId(storedId);
    }
  }, []); // Se ejecuta solo una vez al montar el componente.

  return (
    <div className="flex">
      <UserProfile id={id} /> {/* Pasar la variable id correctamente */}
    </div>
  );
};

export default HomePage;
