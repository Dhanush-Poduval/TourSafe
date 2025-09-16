
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";



const Benefits = () => {
  const benefits = [
    {
      id: "0",
      title: "Real-Time Tourist Monitoring",
      text: "Track tourist health, location, and safety status continuously with wearable IoT wristbands.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      
      
      
    },
    {
      id: "1",
      title: "AI-Powered Anomaly Detection ",
      text: "Detect irregular heartbeat or SOS patterns instantly to identify emergencies early.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      
      light: true,
    },
    {
      id: "2",
      title: "Blockchain-Based Digital ID",
      text:"Secure and tamper-proof tourist safety passports linked to travel plans and emergency contacts.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      
    },
    {
      id: "3",
      title: "Geofencing Safety Zones",
      text:"Set up dynamic safety zones with instant alerts when tourists enter or exit these areas.",
     
      backgroundUrl: "./src/assets/benefits/card-4.svg",
      
      light: true,
    },
    {
      id: "4",
      title: "Automated Incident Alerts",
      text: "Receive instant SOS notifications with detailed location and health data for faster response.",
      backgroundUrl: "./src/assets/benefits/card-5.svg",
      
    },
    {
      id: "5",
      title: "Comprehensive Dashboards & Heatmaps",
      text: "Visualize tourist locations, risk zones, active alarms, and incident trends in real time",
      backgroundUrl: "./src/assets/benefits/card-6.svg",
   
    },
  ];
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Features"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5 text-white">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
