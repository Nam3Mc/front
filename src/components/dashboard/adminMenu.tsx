import Link from "next/link";
import MemberMenu from "./memberMenu";

export default function AdminMenu() {
  return (
    <div className="bg-gray-100 h-screen w-auto p-5 rounded-lg shadow-sm border border-gray-200">
      <ul className="space-y-4">
        <li>
          <MemberMenu />
        </li>
        <li>
          <Link
            href="/dashboard/properties"
            className="block bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-900 rounded-lg py-2 px-4 transition-colors duration-300 border border-blue-200"
          >
            Properties
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/contracts"
            className="block bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-900 rounded-lg py-2 px-4 transition-colors duration-300 border border-blue-200"
          >
            Contracts
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/users"
            className="block bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-900 rounded-lg py-2 px-4 transition-colors duration-300 border border-blue-200"
          >
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
}
