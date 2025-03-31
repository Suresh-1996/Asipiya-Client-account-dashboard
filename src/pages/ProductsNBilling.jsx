import { ChevronRight } from "lucide-react"
import React from "react"

const ProductsNBilling = () => {
  return (
    <div className="mx-auto flex w-[80%] flex-col items-center text-gray-800">
      <img
        src="https://img.icons8.com/?size=100&id=9IhqJ5d5YCTG&format=png&color=000000"
        alt=""
        className="mt-7 h-10 w-12"
      />
      <h1 className="mt-4 text-4xl font-bold">Products & billing</h1>
      <span className="mt-3 text-lg">
        Manage your products, subscriptions and payments in one place.
      </span>
      <div className="mt-5 flex w-full flex-col rounded-md border-2 border-gray-300">
        <div className="pt-10 pb-5 pl-10">
          <h3 className="mb-2 text-2xl font-bold">Your products</h3>
          <span>
            Manage your product details like payment info and subscription
            settings.
          </span>
        </div>
        <div className="flex items-center gap-3 border-t-2 border-gray-300 py-5 pl-10">
          <img
            src="https://banner2.cleanpng.com/20180918/ehv/kisspng-using-quickbooks-accounting-software-invoice-1713939852806.webp"
            alt="QuickBooks logo"
            className="h-7 w-7"
          />
          <span className="font-bold">QuickBooks</span>
        </div>
        <div className="flex items-center justify-between border-t-2 border-gray-300 py-5 pl-10">
          <span className="ml-10 font-semibold">test ab</span>
          <span className="w-100 font-semibold">
            QuickBooks Online Simple Start
          </span>
          <ChevronRight className="mr-5 cursor-pointer text-gray-500" />
        </div>
      </div>
    </div>
  )
}

export default ProductsNBilling
