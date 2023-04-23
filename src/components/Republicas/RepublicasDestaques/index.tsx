import CardRepublicas from "../CardRepublicas"
import Link from "next/link";
import Loading from "../../Funcionalidade/Loading";
import getRepublica from "../../../service/republicas/getRepublicas";

export function RepublicasDestaques() {

  const { data, isFetching } = getRepublica();

  console.log(data)

  return (
    <main className={`flex ${isFetching ? "flex-col" : "flex-row"} w-full flex-wrap bg-gray-100 justify-center gap-4 text-center py-16`}>
      <div className="py-16">
        <h2 className="p-4 text-5xl md:text-6xl font-bold text-gray-600">
          Repúblicas em
          <span className="p-4 text-5xl md:text-6xl text-sky-500">
            destaque
          </span>
        </h2>
      </div>

      <div className={`flex ${isFetching ? "flex-col" : "flex-row"} flex-wrap mb-8 justify-center`}>
        {isFetching ? <Loading /> :
          data?.slice(0, 6).map(props => {
            return <CardRepublicas {...props} />
          })}
      </div>
      <div>
        <Link href="/buscarRepublica">
          <a className="px-12 py-4 bg-sky-500 text-white">Ver mais repúblicas</a>
        </Link>
      </div>
    </main>
  )
}
