import Link from "next/link";
import MemberMenu from "./memberMenu";

export default function OwnerMenu() {
  return (
    <div className="bg-gray-100 h-screen w-1/6 p-5">
      <div>
        <ul className="space-y-4">
          <li>
            <div className="bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-200">
              <MemberMenu />
            </div>
          </li>
          <li>
            <Link
              href="/dashboard/myproperties"
              className="block bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-900 rounded-lg py-2 px-4 transition-colors duration-300 border border-blue-200"
            >
              My Properties
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/guests"
              className="block bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-900 rounded-lg py-2 px-4 transition-colors duration-300 border border-blue-200"
            >
              Guests
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/addproperty"
              className="block bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-900 rounded-lg py-2 px-4 transition-colors duration-300 border border-blue-200"
            >
              Add Property
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
