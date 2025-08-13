import PageLayout from "@/components/page-layout";
import Image from "next/image";

const openingHours = [
  { day: "Maandag", hours: "16:00-23:00" },
  { day: "Dinsdag", hours: "16:00-23:00" },
  { day: "Woensdag", hours: "16:00-23:00" },
  { day: "Donderdag", hours: "16:00-23:00" },
  { day: "Vrijdag", hours: "16:00-23:00" },
  { day: "Zaterdag", hours: "16:00-23:00" },
  { day: "Zondag", hours: "16:00-23:00" },
];

export default function ContactPage() {
  return (
    <PageLayout
      imageSrc="/images/sushi-contact.png"
      imageAlt="Contact"
      heading="Contact"
    >
      <div className="lg:h-full overflow-y-auto">
        <div className="grid lg:h-full gap-6">
          {/*<div className="grid grid-rows-2 h-full gap-6">*/}
          <div className={"grid"}>
            {/*<div className={"grid grid-cols-2 gap-6"}>*/}
            {/*opening hours*/}
            <div
              className={
                "border-2 border-gray-400/50 rounded-2xl p-8 flex flex-col justify-between"
              }
            >
              <h1 className={"text-center text-3xl"}>Openingstijden</h1>
              <ul>
                {openingHours.map(({ day, hours }) => (
                  <li
                    key={day}
                    className="grid grid-cols-[auto_1fr_auto] items-baseline gap-4"
                  >
                    <p className="text-xl">{day}</p>
                    <div className="border-b border-dashed border-gray-400/50 opacity-50 self-end mb-1" />
                    <span className="text-lg">{hours}</span>
                  </li>
                ))}
              </ul>
              <p>
                Let op: ons restaurant is alleen op zondag geopend voor diner.
                De rest van de week zijn wij uitsluitend beschikbaar op aanvraag
                voor private dining, workshops of catering op locatie.
              </p>
            </div>
            {/*image grid*/}
            {/*<div className={"grid grid-cols-2 grid-rows-2 gap-6 h-full"}>*/}
            {/*  <div className="relative w-full h-full">*/}
            {/*    <Image*/}
            {/*      src="/images/home-image.png"*/}
            {/*      alt="home-sushi-image"*/}
            {/*      fill*/}
            {/*      className="object-cover rounded-2xl"*/}
            {/*      priority*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*  <div className="relative w-full h-full">*/}
            {/*    <Image*/}
            {/*      src="/images/home-image.png"*/}
            {/*      alt="home-sushi-image"*/}
            {/*      fill*/}
            {/*      className="object-cover rounded-2xl"*/}
            {/*      priority*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*  <div className="relative w-full h-full">*/}
            {/*    <Image*/}
            {/*      src="/images/home-image.png"*/}
            {/*      alt="home-sushi-image"*/}
            {/*      fill*/}
            {/*      className="object-cover rounded-2xl"*/}
            {/*      priority*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*  <div className="relative w-full h-full">*/}
            {/*    <Image*/}
            {/*      src="/images/home-image.png"*/}
            {/*      alt="home-sushi-image"*/}
            {/*      fill*/}
            {/*      className="object-cover rounded-2xl"*/}
            {/*      priority*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
          <div className="grid">
            {/*<div className="grid grid-cols-2 gap-6">*/}
            {/*<div className="relative h-full">*/}
            {/*  <Image*/}
            {/*    src="/images/home-image.png"*/}
            {/*    alt="home-sushi-image"*/}
            {/*    fill*/}
            {/*    className="object-cover rounded-2xl"*/}
            {/*    priority*/}
            {/*  />*/}
            {/*</div>*/}
            <div className="border-2 border-gray-400/50 rounded-2xl p-8">
              <h1 className="text-3xl font-medium mb-4">Contact</h1>
              <ul className={"text-lg"}>
                <li className={"flex justify-between"}>
                  <p>Adres</p>
                  <div className={"text-right"}>
                    <p>De Nieuwe Erven</p>
                    <p>35431 NV Cuijk</p>
                  </div>
                </li>
                <li className={"flex justify-between"}>
                  <p>Telefoonnummer</p>
                  <a
                    className={"hover:opacity-50 transition"}
                    href={"tel:+31612345678"}
                  >
                    +31 6 12 34 56 78
                  </a>
                </li>
                <li className={"flex justify-between"}>
                  <p>E-mailadres</p>
                  <a
                    className={"hover:opacity-50 transition"}
                    href={"mailto:info@sushibysugi.nl"}
                  >
                    info@sushibysugi.nl
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
