import React from 'react';
import { ChevronRight, Lock } from 'lucide-react';

const DataPrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-white p-4 rounded-full border border-gray-300 mb-4">
              <Lock className="h-6 w-6 text-blue-700" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Data & privacy</h1>
          <p className="text-gray-600">Stay in control of your data and how it's used.</p>
        </div>

        {/* Main Content Cards */}
        <div className="space-y-1">
          {/* Data Privacy Card */}
          <div className="border border-gray-200 rounded-t-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Data privacy</h2>
            <p className="text-gray-600 text-sm">Manage your data.</p>
          </div>

          {/* Promise Card */}
          <div className="border-x border-b border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">We promise to protect your privacy</h2>
            <p className="text-gray-600 text-sm">
              As technology advances, so do our privacy practices. We keep our
              customers at the center of our innovation as we create new ways to keep
              you and your data safe.
            </p>
          </div>

          {/* Download Card */}
          <div className="border-x border-b border-gray-200">
            <div className="flex items-center p-6">
              <div className="w-1/4">
                <h2 className="text-base font-semibold text-gray-800">Download</h2>
              </div>
              <div className="w-2/3">
                <p className="text-gray-600 text-sm">
                  Download a copy of all your personal data and a guide that helps
                  explain what it includes.
                </p>
              </div>
              <div className="w-1/12 flex justify-end">
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Delete Card */}
          <div className="border-x border-b border-gray-200">
            <div className="flex items-center p-6">
              <div className="w-1/4">
                <h2 className="text-base font-semibold text-gray-800">Delete</h2>
              </div>
              <div className="w-2/3">
                <p className="text-gray-600 text-sm">
                  Permanently delete all or some of your personal data and learn how
                  that will affect your accounts.
                </p>
              </div>
              <div className="w-1/12 flex justify-end">
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Correction Card */}
          <div className="border-x border-b border-gray-200">
            <div className="flex items-center p-6">
              <div className="w-1/4">
                <h2 className="text-base font-semibold text-gray-800">Correction</h2>
              </div>
              <div className="w-2/3">
                <p className="text-gray-600 text-sm">
                  Correct your personal data by visiting the Personal Info section
                  within your Intuit Account Settings or correct your data directly in
                  product.
                </p>
              </div>
              <div className="w-1/12 flex justify-end">
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="border-x border-b border-gray-200 p-6">
            <p className="text-gray-600 text-sm">
              If you have a privacy or security-related question,{" "}
              <a href="#" className="text-blue-500 hover:underline">
                contact us
              </a>.
            </p>
          </div>

          {/* Data Used For Intuit Products Header */}
          <div className="border border-gray-200 rounded-b-lg p-6 mt-4">
            <h2 className="text-xl font-semibold text-gray-800">Data used for Intuit products</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPrivacyPage;