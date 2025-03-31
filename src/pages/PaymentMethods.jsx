import { CirclePlus } from "lucide-react"
import React from "react"
import { Link } from "react-router"

const PaymentMethods = () => {
  return (
    <div className="mx-auto flex w-[80%] flex-col items-center text-gray-800">
      <img
        src="https://img.icons8.com/?size=100&id=68333&format=png&color=000000"
        alt=""
        className="mt-7 h-14 w-14"
      />
      <h1 className="mt-1 text-4xl font-bold">Payment methods</h1>
      <span className="mt-3 text-lg">
        Manage payment methods across all your Asipiya products.
      </span>
      <div className="mt-10 flex w-[65%] flex-col items-center rounded-sm bg-gray-100 p-10 font-semibold">
        <span>You don't have any payment methods stored in your account.</span>
        <span className="mt-6">
          Payment methods help you quickly purchase or upgrade your Intuit
          products
        </span>
        <button className="mt-4 flex items-center gap-2 rounded-md bg-blue-700 px-4 py-2 text-white">
          <CirclePlus />
          <span>Add Payment Method</span>
        </button>
      </div>
      <div className="mt-8 flex w-[65%] flex-col rounded-sm border border-gray-300 p-4">
        <span className="font-bold">Looking for something else?</span>
        <span>
          Do you want to manage subscriptions?{" "}
          <Link
            to={"/products-and-billing"}
            className="font-semibold text-blue-600"
          >
            Go to Products & billing
          </Link>
        </span>
      </div>
    </div>
  )
}

export default PaymentMethods
