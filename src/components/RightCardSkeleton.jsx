import React from "react";

const RightCardSkeleton = () => {
  return (
    <div>
      <div className="w-full space-y-4">
        {/* Price Range Filter */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="h-5 bg-gray-300 rounded w-20 animate-pulse"></div>
            <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Stops Filter */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="h-5 bg-gray-300 rounded w-12 animate-pulse"></div>
            <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-16 animate-pulse"></div>
          </div>
        </div>

        {/* Airlines Filter */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex justify-between items-center">
            <div className="h-5 bg-gray-300 rounded w-16 animate-pulse"></div>
            <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCardSkeleton;
