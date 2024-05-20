import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex w-full p-4 border-b">
            <div className="flex grow">
                <p className="">My Guide</p>
            </div>
            <div className="flex gap-6">
                <Link href='' className="text-gray-700 hover:text-gray-400">Top guides</Link>
                <Link href='' className="text-gray-700 hover:text-gray-400">Create your guide</Link>
                <Link href='' className="text-gray-700 hover:text-gray-400">Profile</Link>
            </div>
        </nav>
    )
}