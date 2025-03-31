import React, { useState } from "react"
import { Link } from "react-router"

const Documents = () => {
  const [view, setView] = useState(1)
  return (
    <div className="mx-auto flex w-[80%] flex-col items-center text-gray-800">
      <img
        src="https://img.icons8.com/?size=100&id=65355&format=png&color=000000"
        alt=""
        className="mt-7 h-10 w-10"
      />
      <h1 className="mt-4 text-4xl font-bold">Documents</h1>
      <span className="mt-3 mb-5 text-lg">
        Quickly access documents from across your intuit products.
      </span>
      <div className="w-full rounded-lg border border-gray-300 pt-5">
        <div className="flex">
          <button
            className="cursor-pointer border-b-3 border-white px-5 pb-1 font-semibold text-gray-500 focus:border-blue-600 focus:text-gray-800"
            onClick={() => setView(1)}
          >
            Business
          </button>
          <button
            className="cursor-pointer border-b-3 border-white px-5 pb-1 font-semibold text-gray-500 focus:border-blue-600 focus:text-gray-800"
            onClick={() => setView(2)}
          >
            Personal
          </button>
        </div>
        <div className="flex justify-center border-t border-gray-300">
          <div className="flex w-[25%] flex-col items-center py-10">
            {view === 1 && (
              <>
                <div className="flex h-15 w-15 items-center justify-center rounded-lg bg-blue-100">
                  <img
                    src="https://img.icons8.com/?size=100&id=47480&format=png&color=000000"
                    alt=""
                    className="h-10 w-10"
                  />
                </div>
                <span className="mt-3 text-center text-2xl font-bold">
                  Select a business to view documents
                </span>
                <button className="mt-4 cursor-pointer rounded-md bg-blue-700 px-4 py-2 text-white">
                  Select business
                </button>
              </>
            )}
            {view === 2 && <></>}
          </div>
        </div>
      </div>
      <span className="mt-4 font-medium">
        Do you have feedback on our Documents experience?{" "}
        <Link className="border-b border-black text-blue-600" to={""}>
          Leave us a comment here.
        </Link>
      </span>
    </div>
  )
}

export default Documents
