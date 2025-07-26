import PageLayout from "@/components/page-layout";

export default function AboutPage() {
  return (
    <PageLayout
      imageSrc="/images/home-image.png"
      imageAlt="Our Team"
      heading="About Our Vision"
    >
      <div className="h-full flex items-center justify-center p-12">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We are a creative studio dedicated to transforming spaces through
            innovative design and thoughtful architecture. Our team brings
            together decades of experience in creating environments that inspire
            and elevate the human experience.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Founded in 2010, we have completed over 200 projects ranging from
            residential homes to commercial spaces, each one reflecting our
            commitment to excellence and attention to detail.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-black rounded-full mr-4"></div>
              <span className="text-gray-700">Sustainable Design</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-black rounded-full mr-4"></div>
              <span className="text-gray-700">Innovative Solutions</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-black rounded-full mr-4"></div>
              <span className="text-gray-700">Client-Centered Approach</span>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
