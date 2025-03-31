import React from "react"
import { ChevronRight } from "lucide-react"

import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const SignInSecurity = () => {
  const { user } = useContext(AuthContext)
  const securityOptions = [
    { label: "User ID", value: user.email },
    {
      label: "Email address",
      value: user.email,
      action: "Verify email",
    },
    { label: "Password", value: "••••••••" },
    {
      label: "Phone",
      value: "+94 77495699",
      verified: true,
      subtitle: "(text messages)",
    },
    {
      label: "Authenticator",
      value: "Use an app as an alternate way to generate a secure code",
      action: "Add",
    },
    { label: "2-step verification", value: "Off", action: "Turn on" },
    {
      label: "Linked identities",
      value: "You do not have any linked identities.",
    },
    {
      label: "Passkeys",
      value:
        "Sign in across multiple devices using face, fingerprint, or screen lock.",
    },
    {
      label: "Account activity",
      value: "Check in on your latest account activity.",
    },
  ]

  return (
    <div className="min-h-screen flex-1 overflow-y-auto bg-white p-8 pb-10">
      {/* Page Header */}
      <div className="mb-10 text-center">
        <div className="mb-4 inline-block rounded-full border border-gray-300 bg-white p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Sign in & security</h1>
        <p className="mt-2 text-gray-600">
          Update the way you sign in to your Intuit products.
        </p>
      </div>

      {/* Security Info Card */}
      <div className="mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-800">Sign in info</h2>
          <p className="mt-1 text-sm text-gray-600">
            We'll use this info to help make sure only you can sign in to your
            account.
          </p>
        </div>

        {/* Security Options */}
        {securityOptions.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-200 p-6 pb-6 last:pb-4"
          >
            <div className="flex w-full items-center justify-between">
              {/* Label */}
              <h3 className="w-1/3 text-sm font-medium text-gray-500">
                {item.label}
              </h3>

              {/* Value & Actions */}
              <div className="flex flex-1 flex-col">
                <div className="flex items-center">
                  <p className="text-gray-700">{item.value}</p>
                  {item.verified && (
                    <span className="ml-2 text-sm text-green-500">
                      Verified
                    </span>
                  )}
                </div>
                {item.subtitle && (
                  <p className="text-xs text-gray-500">{item.subtitle}</p>
                )}
                {item.action && (
                  <p className="mt-1 cursor-pointer text-sm text-blue-500">
                    {item.action}
                  </p>
                )}
              </div>

              {/* Arrow Icon */}
              <button className="text-gray-400">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SignInSecurity
