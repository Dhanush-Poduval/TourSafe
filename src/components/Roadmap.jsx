
import Heading from "./Heading";
import Section from "./Section";
import {  grid, } from "../assets";
import { Gradient } from "./design/Roadmap";
const roadmap = [
  {
    id: "0",
    title: "SWAWY",
    text: "SWAWY is a lightweight IoT-enabled wearable designed to ensure real-time safety for tourists. It acts as a digital guardian, continuously monitoring vital signs and location, and instantly triggering alerts during emergencies.",
    date: "May 2023",
    status: "done",
    imageUrl:'swawy.jpeg',
    colorful: true
  },
  {
    id: "2",
    title: "Emergency SOS",
    text: "Your safety is just one press away.The Emergency SOS button on the SWAWY instantly alerts your emergency contacts, nearby authorities, and the central safety network.",
    date: "May 2023",
    status: "done",
    imageUrl:'sosalert.png',
    colorful: true
  },
  {
    id: "2",
    title: "GEOLOCATION",
    text: "Stay safe with real-time location tracking and intelligent geo-fencing technology. The SWAWY constantly monitors your position to ensure you’re always within safe travel zones.",
    date: "May 2023",
    status: "done",
    imageUrl:'geolocation.png',
    
    colorful: true
  },
    {
    id: "3",
    title: "Digital Safety – Powered by Blockchain",
    text: "Travel with confidence and trust.The Digital Safety  gives every tourist a secure blockchain-based ID that protects your identity and emergency details wherever you go.",
    date: "May 2023",
    status: "done",
    imageUrl:'blockchain2.png',
    
    colorful: true
  },
  
];

const Roadmap = () => (
  <Section className="overflow-hidden"id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="What we’re working on" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                   

                   
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      
    </div>
  </Section>
);

export default Roadmap;
