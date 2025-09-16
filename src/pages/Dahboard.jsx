/* eslint-disable no-unused-vars */
// src/pages/Dashboard.jsx
import HeartRateChart from "@/components/dashboard/Heartrate";
import KycCard from "@/components/dashboard/Kyccard";
import Map from "@/components/dashboard/Map";
import SosButton from "@/components/dashboard/Sos";
import Timeline from "@/components/dashboard/Timeline";
import React from "react";

const Dashboard = () => {
  return (
   <div className='grid grid-cols-1 lg:grid-col-2 2xl:grid-cols-4 gap-4'>
      <div className='p-4 rounded-lg lg:col-span-2 h-[500px] bg-black '>
         <Map />
      </div>
      <div className=' p-4 rounded-lg col-span-2 bg-black'><HeartRateChart /></div>
      <div className='p-4 rounded-lg bg-black'><SosButton /></div>
      <div className='  p-4 rounded-lg lg:col-span-2 bg-black'><KycCard /></div>
      <div className=' p-4 rounded-lg bg-black'><Timeline /></div>
     
      
     
      
    </div>
  );
};

export default Dashboard;
