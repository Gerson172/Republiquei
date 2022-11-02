import { AnnounceRepublicData } from "../../pages/searchRepublic"
import AnnounceRepublic from "../AnnounceRepublic"

export function FeaturedRepublic() {
    return (
      <main className="flex flex-row w-full flex-wrap bg-gray-200 justify-center gap-4 text-center">
        <div className="py-16">
          <h2 className="p-4 text-5xl md:text-6xl font-bold text-gray-600">
              Republicas em
          <span className="p-4 text-5xl md:text-6xl text-sky-600">
              destaque
          </span>
          </h2>
        </div>
        <div className="my-8 flex flex-row flex-wrap gap-4 justify-center">
          {AnnounceRepublicData.slice(0,3).map((data, id) => <AnnounceRepublic key={id} id={id} images={data.images}
            accessibility={data.acessibility}
            title={data.title}
            location={data.location}
            price={data.price}
            sex={data.sex} />
          )}
        </div>
        </main>
    )
  }