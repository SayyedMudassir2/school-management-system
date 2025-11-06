import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeader from "./section-header";

export function GridFeatures() {
  const features = [
    {
      title: "Student Management",
      description:
        "Manage student profiles, attendance, and academic records in one centralized platform.",
      image: "/images/placeholder.jpg",
    },
    {
      title: "Teacher Management",
      description:
        "Track teacher information, manage workloads, and schedule classes efficiently.",
      image: "/images/placeholder.jpg",
    },
    {
      title: "Class & Section Management",
      description:
        "Organize classes, assign subjects, and handle sections with flexible configuration.",
      image: "/images/placeholder.jpg",
    },
    {
      title: "Attendance Tracking",
      description:
        "Automate attendance recording for students and staff with analytics support.",
      image: "/images/placeholder.jpg",
    },
    {
      title: "Examination & Grading",
      description:
        "Simplify exam creation, result entry, and grade report generation.",
      image: "/images/placeholder.jpg",
    },
    {
      title: "Fee Management",
      description:
        "Manage billing, fee payments, and generate detailed financial reports.",
      image: "/images/placeholder.jpg",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <SectionHeader
          title="Features"
          heading="All-in-one School Management Platform"
          description="Streamline your entire school operations with our comprehensive suite of integrated modules designed specifically for modern educational institutions."
        />

        {/* Dynamically render all features */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Image
                  src={feature.image}
                  width={600}
                  height={400}
                  alt={feature.title}
                  className="rounded-md w-full object-cover"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
