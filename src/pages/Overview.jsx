import React from "react"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate, Link } from "react-router"
import { ChevronRight, ThumbsUp, ThumbsDown } from "lucide-react"

const Overview = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className="flex flex-1">
      <main className="flex-1 overflow-y-auto bg-white p-6">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          {user.firstName}!
        </h1>

        {/* Welcome card */}
        <div className="relative mb-6 flex items-start gap-4 rounded-lg p-6 shadow-lg">
          <button className="absolute top-3 right-3 text-gray-400">×</button>
          <div className="rounded-full bg-blue-50 p-2">
            <div className="text-3xl">😊</div>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-800">
              You're in the right place for everything client dashboard
            </h2>
            <p className="text-gray-600">
              You can do a quick check on all your products or take a deep dive
              into your Intuit Account features.
            </p>
          </div>
        </div>

        {/* Manage account section */}
        <div className="mb-6 rounded-lg p-6 shadow-lg">
          <h2 className="mb-2 text-xl font-medium text-gray-800">
            Manage your account
          </h2>
          <p className="mb-6 text-gray-600">
            Here's where you control information that spans across all your
            Intuit products.
          </p>

          <div className="mb-4 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center rounded-lg p-6 text-center shadow-sm">
              <div className="mb-2 p-2">🔒</div>
              <div className="text-gray-700">Sign in & security</div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg p-6 text-center shadow-sm">
              <Link to="/profile">
                <div className="mb-2 p-2">👤</div>

                <div className="text-gray-700">Profile</div>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg p-6 text-center shadow-sm">
              <div className="mb-2 p-2">🔒</div>
              <div className="text-gray-700">Data & privacy</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center justify-center rounded-lg p-6 text-center shadow-sm">
              <div className="mb-2 p-2">📚</div>
              <div className="text-gray-700">Products & billing</div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg p-6 text-center shadow-sm">
              <div className="mb-2 p-2">💳</div>
              <div className="text-gray-700">Payment methods</div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg p-6 text-center shadow-sm">
              <div className="mb-2 p-2">📄</div>
              <div className="text-gray-700">Documents</div>
            </div>
          </div>
        </div>
      </main>

      {/* Right side panels */}
      <div className="w-80 p-6 shadow-lg">
        {/* Quick actions */}
        <div className="mb-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-200 p-4">
            <h3 className="font-medium text-gray-800">Quick actions</h3>
            <div className="flex gap-2">
              <ThumbsUp size={16} className="text-gray-500" />
              <ThumbsDown size={16} className="text-gray-500" />
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            <div className="flex items-center justify-between p-4">
              <div className="text-gray-700">Manage subscription</div>
              <ChevronRight size={16} className="text-gray-500" />
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="text-gray-700">Change address</div>
              <ChevronRight size={16} className="text-gray-500" />
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 p-4">
              <div className="text-gray-700">Change password</div>
              <ChevronRight size={16} className="text-gray-500" />
            </div>
          </div>

          <div className="p-4 text-center">
            <button className="text-blue-500">Show more</button>
          </div>
        </div>

        {/* Go right to your products */}
        <div className="mb-6 rounded-lg shadow-sm">
          <div className="border-b border-gray-200 p-4">
            <h3 className="font-medium text-gray-800">
              Go right to your products
            </h3>
          </div>

          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <div className="mr-2 rounded-full bg-green-100 p-2">
                <div className="font-bold text-green-600">QB</div>
              </div>
              <span className="text-gray-700">QuickBooks Online</span>
            </div>
            <ChevronRight size={16} className="text-gray-500" />
          </div>

          <div className="p-4 text-center">
            <button className="text-blue-500">View all Intuit products</button>
          </div>
        </div>

        {/* Products you might like */}
        <div className="rounded-lg shadow-sm">
          <div className="border-b border-gray-200 p-4">
            <h3 className="font-medium text-gray-800">
              Intuit products you might like
            </h3>
          </div>

          <div className="p-4">
            <div className="flex items-center">
              <div className="mr-2 rounded-full bg-green-100 p-2">
                <div className="font-bold text-green-600">QB</div>
              </div>
              <span className="font-medium text-gray-700">QuickBooks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
