import React from "react";

const EmptyComponent = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center py-2">
        <img className="h-60" src="/empty_illustration.svg" alt="Empty list illustration" />
      </div>
      <div className="py-4">No results found...</div>
    </div>
  );
};

export default EmptyComponent;