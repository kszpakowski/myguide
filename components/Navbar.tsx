export default function Navbar() {
    return (
        <nav className="flex w-full p-4 border-b">
            <div className="flex grow">
                <p className="">My Guide</p>
            </div>
            <div className="flex gap-6">
                <p className="text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Top guides</p>
                <p className="text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Create your guide</p>
                <p className="text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Profile</p></div>
        </nav>
    )
}