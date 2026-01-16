import CourseCardSkeleton from "@/components/skeletons/CourseCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <CourseCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default loading;
