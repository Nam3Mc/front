import Link from "next/link";

export default function MemberMenu() {
  return (
    <div>
      <ul>
        <li>
          <Link
            href="/dashboard/myprofile"
            className="block text-blue-700 hover:bg-blue-200 hover:text-blue-900 rounded-lg py-2 px-4 transition-colors duration-300"
          >
            My Profile
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/reservations"
            className="block text-blue-700 hover:bg-blue-200 hover:text-blue-900 rounded-lg py-2 px-4 transition-colors duration-300"
          >
            Reservations
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/settings"
            className="block text-blue-700 hover:bg-blue-200 hover:text-blue-900 rounded-lg py-2 px-4 transition-colors duration-300"
          >
            Settings
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/notifications"
            className="block text-blue-700 hover:bg-blue-200 hover:text-blue-900 rounded-lg py-2 px-4 transition-colors duration-300"
          >
            Notifications
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/imbox"
            className="block text-blue-700 hover:bg-blue-200 hover:text-blue-900 rounded-lg py-2 px-4 transition-colors duration-300"
          >
            Imbox
          </Link>
        </li>
      </ul>
    </div>
  );
}