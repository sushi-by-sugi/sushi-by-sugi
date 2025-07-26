import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import PageLayout from "@/components/page-layout";
import type { Service } from "@/app/types/service";

export default async function ServicesPage() {
  const filePath = path.join(process.cwd(), "app", "data", "services.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const services: Service[] = JSON.parse(jsonData);

  return (
    <PageLayout
      imageSrc="/images/services-banner.jpg"
      imageAlt="Our Services"
      heading="Services"
    >
      <div className="grid gap-8 p-8">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group relative h-[300px] rounded-2xl overflow-hidden"
          >
            <Image
              src={service.mainImage}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-6">
              <h2 className="text-white text-3xl font-medium">
                {service.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
