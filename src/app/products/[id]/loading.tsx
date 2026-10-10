export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Breadcrumb Skeleton */}
      <div className="lg:w-7xl mx-auto mt-10 mb-6 flex gap-3">
        <div className="h-4 w-12 rounded bg-gray-200" />
        <div className="h-4 w-3 rounded bg-gray-200" />
        <div className="h-4 w-20 rounded bg-gray-200" />
        <div className="h-4 w-3 rounded bg-gray-200" />
        <div className="h-4 w-28 rounded bg-gray-200" />
      </div>

      {/* Product Details Skeleton */}
      <div className="lg:w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 items-start md:items-center rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
        {/* Left Side */}
        <div className="flex items-center gap-4 w-full">
          <div className="h-20 w-20 shrink-0 rounded-2xl bg-gray-200" />

          <div className="flex-1 space-y-3">
            <div className="h-6 w-48 max-w-full rounded bg-gray-200" />
            <div className="h-4 w-40 max-w-full rounded bg-gray-200" />
            <div className="h-4 w-64 max-w-full rounded bg-gray-200" />
          </div>
        </div>

        {/* Right Side: Today's Price */}
        <div className="w-full md:w-40 rounded-2xl bg-gray-100 p-5 space-y-3">
          <div className="mx-auto h-3 w-20 rounded bg-gray-200" />
          <div className="mx-auto h-9 w-24 rounded bg-gray-200" />
          <div className="mx-auto h-3 w-24 rounded bg-gray-200" />
          <div className="mx-auto h-4 w-12 rounded bg-gray-200" />
        </div>
      </div>

      {/* Price Summary Skeleton */}
      <div className="lg:w-7xl mx-auto mt-10 rounded-2xl bg-white p-7">
        <div className="mb-6 ml-7 h-5 w-36 rounded bg-gray-200" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-100 p-5"
            >
              <div className="h-4 w-28 rounded bg-gray-200" />
              <div className="mt-4 h-7 w-32 rounded bg-gray-200" />
              <div className="mt-3 h-4 w-24 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
