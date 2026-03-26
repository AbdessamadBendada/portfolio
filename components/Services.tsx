import React from 'react';
import { 
  RiCodeBoxLine, 
  RiFlashlightLine, 
  RiLineChartLine, 
  RiArrowRightUpLine 
} from "react-icons/ri";

const Services = () => {
  const services =[
    {
      icon: RiCodeBoxLine,
      title: "Website Creation",
      desc: "Building blazing fast, scalable, and fully responsive websites tailored to your specific business needs.",
      tags:["Next.js", "React", "Tailwind CSS", "WordPress"]
    },
    {
      icon: RiFlashlightLine,
      title: "Speed Optimization",
      desc: "Drastically improving load times and Core Web Vitals to provide a buttery-smooth experience for your users.",
      tags: ["Performance", "Lighthouse", "Web Vitals"]
    },
    {
      icon: RiLineChartLine,
      title: "SEO Optimization",
      desc: "Boosting your visibility on Google with technical SEO best practices to drive organic traffic to your site.",
      tags: ["Ranking", "On-Page SEO", "Analytics"]
    }
  ];

  return (
    <>
      {/* SECTION TITLE */}
      <div className="col-span-1 md:col-span-12 mt-4 mb-2 flex items-end justify-between border-b border-white/10 pb-4">
        <h2 className="font-display text-4xl font-bold">My Services</h2>
      </div>

      {/* SERVICES GRID */}
      {services.map((service, i) => (
        <div 
          key={i} 
          className="col-span-1 md:col-span-4 bg-dark-card border border-white/10 rounded-3xl p-8 flex flex-col group hover:border-accent hover:bg-dark-hover transition-all duration-300 cursor-default"
        >
          {/* Top Row: Icon & Arrow */}
          <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
              <service.icon className="text-3xl text-white group-hover:text-accent transition-colors" />
            </div>
            <RiArrowRightUpLine className="text-2xl text-muted opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all -translate-y-2 translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0" />
          </div>

          {/* Text Content */}
          <h3 className="font-display text-2xl font-bold mb-4">{service.title}</h3>
          <p className="text-muted leading-relaxed mb-8 flex-grow">
            {service.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {service.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="text-xs font-bold tracking-wider uppercase bg-white/5 px-3 py-1.5 rounded-full text-muted group-hover:text-white transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Services;