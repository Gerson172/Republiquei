import AnnounceRepublic from "../AnnounceRepublic"

export function FeaturedRepublic() {
    return (
      <main className="flex flex-row w-full flex-wrap bg-gray-100 justify-center gap-4 text-center">
        <div className="py-16">
          <h2 className="p-4 text-5xl md:text-6xl font-bold text-gray-600">
              Republicas em
          <span className="p-4 text-5xl md:text-6xl text-sky-500">
              destaque
          </span>
          </h2>
        </div>
        <div className="my-8 flex flex-row flex-wrap gap-4 justify-center">
        </div>
        </main>
    )
  }