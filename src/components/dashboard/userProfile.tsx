"use client";

import { useEffect, useState } from "react";
import { Account } from "@/tipos/account";
import { GetAccount } from "@/CRUD/account/getById";

interface UserProfileProps {
  id: string;
}

export default function UserProfile({ id }: UserProfileProps) {
  const [user, setUser] = useState<Account | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function userAccount() {
      try {
        const account: Account = await GetAccount(id);
        setUser(account);
      } catch (error) {
        console.error("Error loading your Account:", error);
      } finally {
        setLoading(false);
      }
    }
    if (id) {
      userAccount();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user data available</div>;
  }

  const { user_: userData } = user;

  return (
    <div className="flex justify-end">
      {/* Contenedor principal que ocupa 5/6 de la pantalla a la derecha */}
      <div className="w-5/6 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-500 mb-4">User Information</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          {/* Información del usuario */}
          <div className="col-span-2">
            <h3 className="font-bold text-lg">General Information</h3>
          </div>
          <div>
            <p><span className="font-semibold">ID:</span> {user.id}</p>
            <p><span className="font-semibold">Username:</span> {user.userName}</p>
            <p><span className="font-semibold">Role:</span> {user.roll}</p>
          </div>

          <div>
            <p><span className="font-semibold">Name:</span> {userData.name} {userData.lastName}</p>
            <p><span className="font-semibold">Email:</span> {userData.email}</p>
            <p><span className="font-semibold">Phone:</span> {userData.phone}</p>
          </div>

          {/* Información adicional */}
          <div>
            <h3 className="font-bold text-lg mt-4">Additional Information</h3>
            <p><span className="font-semibold">Nationality:</span> {userData.nationality}</p>
            <p><span className="font-semibold">DNI:</span> {userData.dni}</p>
            <p><span className="font-semibold">Date of Birth:</span> {new Date(userData.DOB).toLocaleDateString()}</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mt-4">Status</h3>
            <p><span className="font-semibold">Civil Status:</span> {userData.civilStatus}</p>
            <p><span className="font-semibold">Employment:</span> {userData.employmentStatus}</p>
            <p><span className="font-semibold">ID:</span> {userData.id}</p>

          </div>
        </div>
      </div>
    </div>
  );
}
