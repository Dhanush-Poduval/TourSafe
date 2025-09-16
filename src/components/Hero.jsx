'use client'
import { curve, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const slides = [
    { img: "dashboard.png", title: "AI Robot 1" },
    { img: "watch.jpeg", title: "AI Robot 2" },
    { img: "map.png", title: "AI Robot 3" },
    { img: "Heart.png", title: "AI Robot 4" },
  ];

  const loopSlides = [...slides, ...slides, ...slides];
  const middleIndex = slides.length; 
  const [active, setActive] = useState(middleIndex);

  const containerRef = useRef(null);


  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const activeCard = container.children[active];
    if (!activeCard) return;

    container.scrollTo({
      left: activeCard.offsetLeft - container.offsetWidth / 2 + activeCard.offsetWidth / 2,
      behavior: "smooth",
    });
    if (active === slides.length * 2) {
      setTimeout(() => {
        setActive(middleIndex);
        const resetCard = container.children[middleIndex];
        container.scrollTo({
          left: resetCard.offsetLeft - container.offsetWidth / 2 + resetCard.offsetWidth / 2,
          behavior: "auto",
        });
      }, 700); 
    }
  }, [active, slides.length, middleIndex]);

  return (
    <Section className="pt-[12rem] -mt-[5.25rem]" customPaddings id="hero">
      <div className="container relative">
        {/* Hero Text */}
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
           
            <span className=" relative text-[200px]">
              Tour Safe 
              
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
             Beacuse Peace Of mind Travels with You 
          </p>
          <Button href="/signup" white>
            Get started
          </Button>
        </div>

        {/* Horizontal Cards */}
        <div
          ref={containerRef}
          className="flex items-center gap-6 overflow-x-hidden px-6"
        >
          {loopSlides.map((slide, idx) => {
            const isActive = idx === active;
            return (
              <div
                key={idx}
                className={`flex-shrink-0 w-[300px] md:w-[400px] lg:w-[500px] transition-transform duration-500`}
                style={{ transform: `scale(${isActive ? 1 : 0.8})` }}
              >
                <div className="p-1 rounded-2xl bg-conic-gradient">
                  <div className="bg-n-8 rounded-[1rem] overflow-hidden">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="w-full object-cover rounded-[1rem]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Hero;