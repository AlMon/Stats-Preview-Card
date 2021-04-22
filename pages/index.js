import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stats Preview Card Component</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="bg-[#090b1a] min-h-screen flex flex-wrap items-center justify-center text-white font-body">
        <div className="bg-[#1b1938] max-w-6xl rounded-lg grid grid-cols-2 mx-12 my-16 overflow-hidden">
          <div
            className="col-span-2 lg:col-span-1 min-w-full bg-cover max-h-full h-72 block lg:hidden"
            style={{
              backgroundImage: `url('/image-header-mobile.jpg')`,
              backgroundColor: "rgba(170,92,219,1)",
              backgroundBlendMode: "multiply",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center, center",
            }}
          ></div>
          <div className="lg:px-20 px-10 lg:pt-20 pt-9 pb-12 col-span-2 lg:col-span-1 text-center lg:text-left">
            <h1 className="lg:text-4xl text-3xl font-bold mb-7">
              Get <span className="text-[#aa5cdb] leading-3">insights</span>{" "}
              that help your business grow.
            </h1>
            <p className="mb-2 lg:mb-7 opacity-75 leading-7 text-[15px]">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
            <div className="grid grid-cols-3">
              <h2 className="text-2xl font-bold lg:mt-14 mt-8 col-span-3 lg:col-span-1">
                10k+{" "}
                <span className="block uppercase text-sm font-medium opacity-60 font-display mt-1">
                  companies
                </span>
              </h2>
              <h2 className="text-2xl uppercase font-bold lg:mt-14 mt-8 col-span-3 lg:col-span-1">
                314{" "}
                <span className="block text-sm font-medium opacity-60 font-display mt-1">
                  templates
                </span>
              </h2>
              <h2 className="text-2xl uppercase font-bold lg:mt-14 mt-8 col-span-3 lg:col-span-1">
                12m+{" "}
                <span className="block text-sm font-medium opacity-60 font-display mt-1">
                  queries
                </span>
              </h2>
            </div>
          </div>
          <div
            className="bg-cover col-span-2 lg:col-span-1 min-w-full md:min-h-full hidden lg:block"
            style={{
              backgroundImage: `url('/image-header-desktop.jpg')`,
              backgroundColor: "rgba(170,92,219,1)",
              backgroundBlendMode: "multiply",
            }}
          ></div>
        </div>
      </main>
    </div>
  )
}
