import PageLayout from "@/components/page-layout";

export default function MenuPage() {
  return (
    <PageLayout
      imageSrc="/images/menu-sushi.png"
      imageAlt="Sushi menu image"
      heading="Reserveren"
    >
      <div className="overflow-auto h-full flex justify-center p-20 border-2 border-gray-400/50 rounded-2xl">
        <div className="flex flex-col gap-12 w-full max-w-2xl">
          <div className="text-center">
            <h1 className="text-4xl">
              Boek jouw sushi- <br /> beleving op maat
            </h1>
            <p className="font-light mt-4">
              Of je nu kiest voor een intiem diner aan huis, een creatieve
              workshop of een stijlvol feest: via dit formulier reserveer je
              eenvoudig jouw gewenste datum. Laat ons weten wat je zoekt — wij
              zorgen voor de rest.
            </p>
          </div>

          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="p-3 rounded-lg bg-transparent border border-gray-400/50 text-white outline-none appearance-none focus:ring-0 focus:outline-none hover:outline-none active:outline-none"
                placeholder="Uw naam"
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col gap-2">
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="p-3 rounded-lg bg-transparent border border-gray-400/50 text-white outline-none appearance-none focus:ring-0 focus:outline-none hover:outline-none active:outline-none"
                placeholder="Uw telefoonnummer"
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col gap-2">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="p-3 rounded-lg bg-transparent border border-gray-400/50 text-white outline-none appearance-none focus:ring-0 focus:outline-none hover:outline-none active:outline-none"
                placeholder="Uw e-mailadres"
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col gap-2">
              <select
                id="reservationType"
                name="reservationType"
                required
                defaultValue=""
                className="p-3 rounded-lg bg-transparent border border-gray-400/50 text-white outline-none appearance-none focus:ring-0 focus:outline-none hover:outline-none active:outline-none"
              >
                <option value="" disabled className="text-black">
                  Wat wil je reserveren?
                </option>
                <option value="private-dining" className="text-black">
                  Private Dining
                </option>
                <option value="direct-reserve" className="text-black">
                  Direct Reserveren
                </option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <input
                type="date"
                id="date"
                name="date"
                required
                className="p-3 rounded-lg bg-transparent border border-gray-400/50 text-white outline-none appearance-none focus:ring-0 focus:outline-none hover:outline-none active:outline-none"
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-white text-black py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-300 text-xl cursor-pointer"
            >
              Reserveren
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
}
