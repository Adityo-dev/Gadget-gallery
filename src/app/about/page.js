import Image from "next/image";
import Link from "next/link";
import DynamicBreadcrumb from "@/components/dynamicBreadcrumb";

// import image

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "about", href: "/about" },
];

const About = () => {
  return (
    <main>
      <section>
        <DynamicBreadcrumb breadcrumbItems={breadcrumbItems} />
      </section>
    </main>
  );
};

export default About;
