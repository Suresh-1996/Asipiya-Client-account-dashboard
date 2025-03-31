import React, { useEffect, useRef } from "react"
import { ChevronRight } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const ProfileModal = ({ onClose }) => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const modalRef = useRef(null)

  const handleLogout = () => {
    logout()
    navigate("/login")
    onClose() // Close the modal after logout
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the modal
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        // Ensure the click is not on the profile picture/trigger
        !event.target.closest('[data-profile-trigger="true"]')
      ) {
        onClose()
      }
    }

    // Add click event listener to the document
    document.addEventListener("mousedown", handleClickOutside)

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  return (
    <div
      ref={modalRef}
      className="absolute top-20 right-2 z-50 flex w-[350px] flex-col items-center rounded-md bg-white pt-5 text-gray-800 shadow-[0_4px_8px_0_rgba(0,0,0,0.2)]"
      onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing
    >
      <div className="flex h-15 w-15 items-center justify-center rounded-full bg-blue-400 text-3xl font-bold text-white">
        {user?.profilePicture ? (
          <img
            src={user.profilePicture}
            alt="Profile Pic"
            className="h-full w-full rounded-full"
          />
        ) : (
          user?.name?.charAt(0).toUpperCase() || "U"
        )}
      </div>
      <h1 className="mt-2 text-xl font-bold">{user?.firstName || "User"}</h1>
      <span className="text-gray-500">{user?.email || "user@example.com"}</span>
      <Link to="/profile" className="mt-5 font-medium text-blue-500">
        Manage your Account
      </Link>
      <div className="mt-10 mb-4 flex w-full cursor-pointer items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <img
            src="https://banner2.cleanpng.com/20180918/ehv/kisspng-using-quickbooks-accounting-software-invoice-1713939852806.webp"
            alt="QuickBooks logo"
            className="h-7 w-7"
          />
          <span className="font-semibold">QuickBooks Online</span>
        </div>
        <ChevronRight size={13} className="font-bold" />
      </div>
      <div className="flex w-full justify-center border-y border-gray-300 py-5">
        <Link to="/products-billing" className="text-blue-500">
          View all Intuit products
        </Link>
      </div>
      <div className="my-4 w-[90%]">
        <button
          className="w-full cursor-pointer rounded-sm bg-gray-300 py-1 font-bold hover:bg-gray-400"
          onClick={handleLogout}
        >
          Sign out
        </button>
      </div>
    </div>
  )
}

export default ProfileModal
