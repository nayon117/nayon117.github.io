import React from "react";
import { Timeline } from "../ui/Timeline";

export function Education() {
  const data = [
    {
      title: "2021-current",
      cardTitle: "B.Sc. in Statistics",
      cardSubtitle: "Khulna BL College",
      cardDetailedText: "Pursuing advanced statistical methods and theories with a strong GPA of 3.20. Collaborating on research projects and applying statistical techniques to real-world problems.",
    },
    {
      title: "2018-2020",
      cardTitle: "Higher Secondary School Certificate",
      cardSubtitle: "Cantonment College Jashore",
      cardDetailedText: "Achieved a perfect GPA of 5.0, demonstrating exceptional academic performance across all subjects.",
    },
    {
      title: "2016-2018",
      cardTitle: "Secondary School Certificate",
      cardSubtitle: "Akij Collegiate School",
      cardDetailedText: "Earned an impressive GPA of 5.0, showcasing a strong aptitude for mathematics and science.",
    },
  ];
  return (
    <div id="about" className="w-full px-5 sm:px-10">
      <Timeline data={data} />
    </div>
  );
}
