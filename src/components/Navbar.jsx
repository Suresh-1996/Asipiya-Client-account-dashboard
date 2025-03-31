import React from "react"
import { Search } from "lucide-react"
import { useAuth } from "../context/AuthContext"

const Navbar = ({ setIsProfileModalOpen, isProfileModalOpen }) => {
  const { user } = useAuth()

  const username = user?.firstName || "User"
  const firstLetter = user.firstName
    ? user.firstName.charAt(0).toUpperCase()
    : "U"

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3">
      <div className="text-2xl font-bold text-blue-600">
        Asipiya Client Center
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search
            className="absolute top-1/2 left-2 -translate-y-1/2 transform text-gray-400"
            size={18}
          />
          <input
            type="text"
            className="rounded-md border border-gray-300 py-1 pr-4 pl-8"
            placeholder="Search..."
          />
        </div>

        <div
          data-profile-trigger="true"
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue-500 text-white"
          onClick={() => setIsProfileModalOpen(!isProfileModalOpen)}
        >
          {user?.profilePicture ? (
            <img
              src={user.profilePicture}
              alt="Profile Pic"
              className="h-full w-full rounded-full"
            />
          ) : (
            firstLetter
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
