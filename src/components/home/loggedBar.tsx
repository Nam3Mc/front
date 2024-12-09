"use client";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Para manejar redirección

export default function LoggedBar() {
  const router = useRouter();
  const profilePicture = "https://img.freepik.com/vector-premium/icono-perfil-usuario-estilo-plano-ilustracion-vector-avatar-miembro-sobre-fondo-aislado-concepto-negocio-signo-permiso-humano_157943-15752.jpg"
  // localStorage.getItem("picture")

  const handleLogout = () => {
    // Elimina el token de localStorage
    localStorage.clear();
    window.dispatchEvent(new Event("storage"));
    router.push("/signin");
  };

  return (
    <nav className="bg-gray-900 bg-opacity-80">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-white text-2xl font-bold">
            <Link href="/">Logo</Link>
          </div>
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <Link href="/book" className="text-gray-300 hover:text-white transition-colors duration-200">
              Book
            </Link>
            <Link href="/help" className="text-gray-300 hover:text-white transition-colors duration-200">
              Help
            </Link>
            <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors duration-200">
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="text-gray-300 hover:text-white transition-colors duration-200 flex"
            >
              Log Out
            <img src={profilePicture} 
              alt="profile" 
              className="w-8 h-8 ml-2 -mt-1 rounded-full"
              />
              </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
