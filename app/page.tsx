"use client";
import React, { useState } from "react";

const page = () => {
  const [loading, isLoading] = useState(false);
  return (
    <div className="flex justify-center items-center h-screen">
      <button className="bg-slate-400 text-black font-semibold p-4 rounded-md">
        Show Magic
      </button>
    </div>
  );
};

export default page;
