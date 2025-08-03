"use client";
import React from "react";

export function PixelArt({ type, size = "md", className = "" }) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const pixelElements = {
    flower: (
      <div className={`${sizeClasses[size]} ${className} relative`}>
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-px">
          <div className="bg-transparent"></div>
          <div className="bg-pink-400"></div>
          <div className="bg-pink-400"></div>
          <div className="bg-transparent"></div>
          <div className="bg-pink-400"></div>
          <div className="bg-yellow-300"></div>
          <div className="bg-yellow-300"></div>
          <div className="bg-pink-400"></div>
          <div className="bg-pink-400"></div>
          <div className="bg-yellow-300"></div>
          <div className="bg-yellow-300"></div>
          <div className="bg-pink-400"></div>
          <div className="bg-transparent"></div>
          <div className="bg-green-500"></div>
          <div className="bg-green-500"></div>
          <div className="bg-transparent"></div>
        </div>
      </div>
    ),
    bunny: (
      <div className={`${sizeClasses[size]} ${className} relative`}>
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-px">
          <div className="bg-white border border-gray-300"></div>
          <div className="bg-transparent"></div>
          <div className="bg-transparent"></div>
          <div className="bg-white border border-gray-300"></div>
          <div className="bg-white border border-gray-300"></div>
          <div className="bg-black"></div>
          <div className="bg-black"></div>
          <div className="bg-white border border-gray-300"></div>
          <div className="bg-white border border-gray-300"></div>
          <div className="bg-white border border-gray-300"></div>
          <div className="bg-white border border-gray-300"></div>
          <div className="bg-white border border-gray-300"></div>
          <div className="bg-transparent"></div>
          <div className="bg-pink-300"></div>
          <div className="bg-pink-300"></div>
          <div className="bg-transparent"></div>
        </div>
      </div>
    ),
    heart: (
      <div className={`${sizeClasses[size]} ${className} relative`}>
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-px">
          <div className="bg-transparent"></div>
          <div className="bg-red-400"></div>
          <div className="bg-red-400"></div>
          <div className="bg-transparent"></div>
          <div className="bg-red-400"></div>
          <div className="bg-red-500"></div>
          <div className="bg-red-500"></div>
          <div className="bg-red-400"></div>
          <div className="bg-red-400"></div>
          <div className="bg-red-500"></div>
          <div className="bg-red-500"></div>
          <div className="bg-red-400"></div>
          <div className="bg-transparent"></div>
          <div className="bg-red-400"></div>
          <div className="bg-red-400"></div>
          <div className="bg-transparent"></div>
        </div>
      </div>
    ),
    cloud: (
      <div className={`${sizeClasses[size]} ${className} relative`}>
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-px">
          <div className="bg-transparent"></div>
          <div className="bg-white border border-gray-200"></div>
          <div className="bg-white border border-gray-200"></div>
          <div className="bg-transparent"></div>
          <div className="bg-white border border-gray-200"></div>
          <div className="bg-gray-100"></div>
          <div className="bg-gray-100"></div>
          <div className="bg-white border border-gray-200"></div>
          <div className="bg-white border border-gray-200"></div>
          <div className="bg-gray-100"></div>
          <div className="bg-gray-100"></div>
          <div className="bg-white border border-gray-200"></div>
          <div className="bg-white border border-gray-200"></div>
          <div className="bg-white border border-gray-200"></div>
          <div className="bg-white border border-gray-200"></div>
          <div className="bg-white border border-gray-200"></div>
        </div>
      </div>
    ),
    butterfly: (
      <div className={`${sizeClasses[size]} ${className} relative`}>
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-px">
          <div className="bg-purple-400"></div>
          <div className="bg-black"></div>
          <div className="bg-black"></div>
          <div className="bg-purple-400"></div>
          <div className="bg-purple-300"></div>
          <div className="bg-black"></div>
          <div className="bg-black"></div>
          <div className="bg-purple-300"></div>
          <div className="bg-purple-300"></div>
          <div className="bg-black"></div>
          <div className="bg-black"></div>
          <div className="bg-purple-300"></div>
          <div className="bg-purple-400"></div>
          <div className="bg-black"></div>
          <div className="bg-black"></div>
          <div className="bg-purple-400"></div>
        </div>
      </div>
    ),
    bee: (
      <div className={`${sizeClasses[size]} ${className} relative`}>
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-px">
          <div className="bg-transparent"></div>
          <div className="bg-yellow-400"></div>
          <div className="bg-yellow-400"></div>
          <div className="bg-transparent"></div>
          <div className="bg-yellow-400"></div>
          <div className="bg-black"></div>
          <div className="bg-black"></div>
          <div className="bg-yellow-400"></div>
          <div className="bg-yellow-400"></div>
          <div className="bg-yellow-400"></div>
          <div className="bg-yellow-400"></div>
          <div className="bg-yellow-400"></div>
          <div className="bg-transparent"></div>
          <div className="bg-yellow-400"></div>
          <div className="bg-yellow-400"></div>
          <div className="bg-transparent"></div>
        </div>
      </div>
    ),
    star: (
      <div className={`${sizeClasses[size]} ${className} relative`}>
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-px">
          <div className="bg-yellow-400"></div>
          <div className="bg-yellow-300"></div>
          <div className="bg-yellow-400"></div>
          <div className="bg-yellow-300"></div>
          <div className="bg-yellow-400"></div>
          <div className="bg-yellow-400"></div>
          <div className="bg-yellow-400"></div>
        </div>
      </div>
    ),
  };

  return pixelElements[type] || null;
}
