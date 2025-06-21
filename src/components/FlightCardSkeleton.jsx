import React from "react";

export default function FlightCardSkeleton() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 w-full mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
        </div>
        <div className="h-4 bg-gray-300 rounded w-16 animate-pulse"></div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="space-y-2">
            <div className="h-5 bg-gray-300 rounded w-32 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-8 animate-pulse"></div>
          </div>
        </div>

        <div className="flex-1 mx-8">
          <div className="flex items-center justify-between mb-2">
            <div className="text-center">
              <div className="h-4 bg-gray-300 rounded w-16 mb-1 animate-pulse"></div>
              <div className="h-6 bg-gray-300 rounded w-12 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-8 mt-1 animate-pulse"></div>
            </div>

            <div className="flex-1 mx-4">
              <div className="h-4 bg-gray-300 rounded w-16 mx-auto mb-2 animate-pulse"></div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="flex-1 h-0.5 bg-gray-300 animate-pulse"></div>
                <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="flex-1 h-0.5 bg-gray-300 animate-pulse"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
              </div>
              <div className="h-3 bg-gray-300 rounded w-12 mx-auto mt-2 animate-pulse"></div>
            </div>

            <div className="text-center">
              <div className="h-4 bg-gray-300 rounded w-16 mb-1 animate-pulse"></div>
              <div className="h-6 bg-gray-300 rounded w-12 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-8 mt-1 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Right side - Price and select */}
        <div className="text-right space-y-3">
          <div className="space-y-1">
            <div className="h-4 bg-gray-300 rounded w-8 ml-auto animate-pulse"></div>
            <div className="h-5 bg-gray-300 rounded w-16 animate-pulse"></div>
          </div>
          <div className="h-10 bg-gray-300 rounded-full w-20 animate-pulse"></div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-16 animate-pulse"></div>
        </div>
        <div className="h-4 bg-gray-300 rounded w-20 animate-pulse"></div>
      </div>
    </div>
  );
}
