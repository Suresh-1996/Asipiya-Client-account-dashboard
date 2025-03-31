import React from "react"
import { ChevronRight, User } from "lucide-react"
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useAuth } from "../context/AuthContext"

const Profile = () => {
  // const { user } = useContext(AuthContext)
  const { googleLogin, isAuthenticated, updateUser, user, login } = useAuth()
  const [isEditingField, setIsEditingField] = useState(null)

  const [date, setDate] = useState("")
  const [occupation, setOccupation] = useState("")
  const [address, setAddress] = useState("")

  const handleEdit = (field) => {
    setIsEditingField(field)
  }

  const handleSave = async (filedLable, value) => {
    // console.log(filedLable)
    try {
      await updateUser(user.id, { [filedLable]: value }) // Send updated data
      setIsEditingField(null)
      console.error("updated success")
    } catch (error) {
      console.error("Error updating user:", error)
    }
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Main content */}
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="mb-4 rounded-full border border-gray-300 bg-white p-4">
              <User className="h-6 w-6 text-blue-700" />
            </div>
          </div>
          <h1 className="mb-2 text-3xl font-bold text-gray-800">Profile</h1>
          <p className="text-gray-600">
            This info helps us personalize your experience across your Intuit
            products.
          </p>
        </div>

        {/* Profile Information */}
        <div className="rounded-lg border border-gray-200">
          {/* Name */}
          <div className="flex items-center border-b border-gray-200 p-6">
            <div className="w-1/4">
              <h2 className="text-base font-medium text-gray-600">Name</h2>
            </div>
            <div className="w-2/3">
              <p className="text-gray-800">
                {user.firstName} {user.lastName}
              </p>
            </div>
            <div className="flex w-1/12 justify-end">
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Date of birth */}
          <div className="flex items-center border-b border-gray-200 p-6">
            <div className="w-1/4">
              <h2 className="text-base font-medium text-gray-600">
                Date of birth
              </h2>
            </div>
            <div className="w-2/3">
              {isEditingField === "birthdate" ? (
                <input
                  type="date"
                  className="w-full rounded border px-2 py-1 text-gray-600"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  onBlur={() => handleSave("birthdate", date)} // Save on blur
                  autoFocus
                />
              ) : (
                <>
                  {user.birthdate ? (
                    <p className="text-gray-600">{user.birthdate}</p>
                  ) : (
                    <p className="text-blue-500">Add birthday</p>
                  )}
                </>
              )}
            </div>
            <div className="flex w-1/12 justify-end">
              <ChevronRight
                className="h-5 w-5 cursor-pointer text-gray-400"
                onClick={() => handleEdit("birthdate")}
              />
            </div>
          </div>

          {/* Occupation */}
          <div className="flex items-center border-b border-gray-200 p-6">
            <div className="w-1/4">
              <h2 className="text-base font-medium text-gray-600">
                Occupation
              </h2>
            </div>
            <div className="w-2/3">
              {isEditingField === "occupation" ? (
                <input
                  type="text"
                  className="w-full rounded border px-2 py-1 text-gray-600"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  onBlur={() => handleSave("occupation", occupation)} // Save on blur
                  autoFocus
                />
              ) : (
                <>
                  {user.occupation ? (
                    <p className="text-gray-600">{user.occupation}</p>
                  ) : (
                    <p className="text-blue-500">Add your occupation</p>
                  )}
                </>
              )}
            </div>
            <div className="flex w-1/12 justify-end">
              <ChevronRight
                className="h-5 w-5 cursor-pointer text-gray-400"
                onClick={() => handleEdit("occupation")}
              />
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center border-b border-gray-200 p-6">
            <div className="w-1/4">
              <h2 className="text-base font-medium text-gray-600">Address</h2>
            </div>
            <div className="w-2/3">
              {isEditingField === "address" ? (
                <input
                  type="text"
                  className="w-full rounded border px-2 py-1 text-gray-600"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  onBlur={() => handleSave("adress", address)} // Save on blur
                  autoFocus
                />
              ) : (
                <>
                  {user.adress ? (
                    <p className="text-gray-600">{user.adress}</p>
                  ) : (
                    <p className="text-blue-500">Add your address</p>
                  )}
                </>
              )}
            </div>
            <div className="flex w-1/12 justify-end">
              <ChevronRight
                className="h-5 w-5 cursor-pointer text-gray-400"
                onClick={() => handleEdit("address")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
