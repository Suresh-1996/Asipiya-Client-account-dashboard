import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-60 bg-gray-100 flex flex-col gap-2 h-full p-4">
      {[
        { to: "/", label: "Overview" },
        { to: "/signin-security", label: "Sign in & security" },
        { to: "/profile", label: "Profile" },
        { to: "/data-privacy", label: "Data & privacy" },
        { to: "/products-billing", label: "Products & billing" },
        { to: "/payment-methods", label: "Payment methods" },
        { to: "/documents", label: "Documents" },
      ].map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `relative text-gray-600 py-2.5 px-3 rounded-md w-full block transition ${
              isActive
                ? "bg-gray-200 font-medium text-gray-900"
                : "hover:bg-gray-100"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <div className="absolute left-0 top-0 h-full w-[3px] bg-blue-600 rounded-r-md"></div>
              )}
              {label}
            </>
          )}
        </NavLink>
      ))}

      {/* Feedback Box */}
      <div className="mt-auto bg-white p-3 w-11/12 self-center rounded-md shadow-sm border border-gray-300 flex flex-col items-center">
        <p className="text-xs text-gray-600 text-center">Did you find what you need?</p>
        <button className="text-xs text-blue-500 border border-blue-500 rounded px-3 py-1 mt-1 w-full text-center hover:bg-blue-50">
          Feedback
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
