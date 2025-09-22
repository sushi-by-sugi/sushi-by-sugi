import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import PageLayout from "@/components/page-layout";
import { Service } from "@/app/types/service";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

async function getService(slug: string): Promise<Service | null> {
  const filePath = path.join(process.cwd(), "app", "data", "services.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const services: Service[] = JSON.parse(jsonData);
  return services.find((s) => s.slug === slug) || null;
}

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "app", "data", "services.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const services: Service[] = JSON.parse(jsonData);

  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const service = await getService(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <PageLayout
      imageSrc={service.mainImage}
      imageAlt={service.title}
      heading={service.title}
    >
      <div className="lg:h-full overflow-y-auto">
        <div className="grid lg:grid-rows-[2fr_1fr_2fr] lg:h-full gap-6">
          {/*text image*/}
          <div className="grid">
            {/*<div className="grid grid-cols-2 gap-6">*/}
            <div className="border-2 border-gray-400/50 rounded-2xl p-8">
              <h1 className="text-4xl font-medium mb-4">
                Een exclusief diner in je eigen huis
              </h1>
              <p>
                Laat je gasten genieten van een verfijnde sushi-ervaring, bereid
                en geserveerd door een professionele chef. Van amuse tot
                dessert, alles wordt tot in detail verzorgd.
              </p>
            </div>
            {/*<div className="relative h-full">*/}
            {/*  <Image*/}
            {/*    src={service.mainImage}*/}
            {/*    alt={service.title}*/}
            {/*    fill*/}
            {/*    priority*/}
            {/*    className="object-cover rounded-2xl"*/}
            {/*  />*/}
            {/*</div>*/}
          </div>
          {/*reviews*/}
          <div className={"gap-6 grid grid-cols-2"}>
            <div
              className={
                "flex flex-col gap-6 p-8 border-2 border-gray-400/50 rounded-2xl"
              }
            >
              <div className={"flex gap-2"}>
                {[...Array(5)].map((_, i) => (
                  <p key={i}>
                    <FaStar />
                  </p>
                ))}
              </div>
              <blockquote>{service.reviews.review_1}</blockquote>
            </div>
            <div
              className={
                "flex flex-col gap-6 p-8 border-2 border-gray-400/50 rounded-2xl"
              }
            >
              <div className={"flex gap-2"}>
                {[...Array(5)].map((_, i) => (
                  <p key={i}>
                    <FaStar />
                  </p>
                ))}
              </div>
              <blockquote>{service.reviews.review_2}</blockquote>
            </div>
          </div>
          {/*image text*/}
          <div className="grid">
            {/*<div className="grid grid-cols-2 gap-6">*/}
            {/*<div className="relative h-full">*/}
            {/*  <Image*/}
            {/*    src={service.mainImage}*/}
            {/*    alt={service.title}*/}
            {/*    fill*/}
            {/*    priority*/}
            {/*    className="object-cover rounded-2xl"*/}
            {/*  />*/}
            {/*</div>*/}
            <div className="border-2 border-gray-400/50 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <h1 className="text-4xl font-medium mb-4">
                  {service.pricing?.priceTitle}
                </h1>
                <p>{service.pricing?.priceInfo}</p>
              </div>
              <Link className={"pt-8"} href="/reserveren">
                <button
                  className={
                    "font-medium text-xl cursor-pointer px-6 py-2 border-2 border-gray-400/50 hover:bg-white transition-all duration-300 rounded-lg hover:text-black"
                  }
                >
                  {service.pricing?.priceCtaText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
