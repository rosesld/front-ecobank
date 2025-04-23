import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-white/70">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
    </div>
  );
};

export default Loader;
