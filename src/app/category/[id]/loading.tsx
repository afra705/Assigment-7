export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Category header skeleton */}
      <div className="mx-auto mt-10 flex gap-3 rounded-2xl bg-white p-5 lg:w-7xl">
        <div className="h-10 w-10 rounded-xl bg-gray-200" />

        <div className="flex-1 space-y-3">
          <div className="h-5 w-40 rounded bg-gray-200" />
          <div className="h-3 w-64 max-w-full rounded bg-gray-200" />
        </div>
      </div>

      {/* Product skeleton */}
      <div className="mx-auto mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:w-7xl">
        {Array.from({ length: 8 }, (_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="h-36 rounded-xl bg-gray-200" />
            <div className="mt-5 h-5 w-3/4 rounded bg-gray-200" />
            <div className="mt-3 h-4 w-1/2 rounded bg-gray-200" />
            <div className="mt-5 h-6 w-2/5 rounded bg-gray-200" />
            <div className="mt-4 h-10 w-full rounded-xl bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}