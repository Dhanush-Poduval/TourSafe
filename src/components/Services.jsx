import Section from "./Section";
import Heading from "./Heading";
import { service1,service2,service3 } from "../assets";

import {
 
  Gradient,
  
} from "./design/Services";



const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Services"
          text="Lorem epsium"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Real-Time Notifications & Reporting</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Automated alerts, incident reports, and FIR filings for authorities and travel agencies.


               
              </p>
             
            </div>

            
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Emergency SOS Handling</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                 Direct alerts and escalation management to ensure tourists get help instantly.

                </p>
              </div>

             
            </div>

            <div className="p-4 bg-n-8 rounded-3xl overflow-hidden lg:min-h-[46rem] border-n-1/10 border-solid border">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Digital Identity Management</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Blockchain-secured safety IDs maintaining privacy and authentication.

                </p>

                <ul className="flex items-center justify-between">
                 
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

               
               
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
