import { SidebarProvider } from "../components/ui/sidebar";
import AppSidebar from "../components/dashboard/AppSidebar";
import Navbar from "@/components/dashboard/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex bg-black w-full">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main content area */}
        <div className="flex-1 flex flex-col mt-0 mr-0 mb-0 ml-0">
          {/* Navbar always at the top */}
          <Navbar />

          {/* Page content below navbar */}
          <main className="flex-1 p-6 overflow-y-auto mt-0 ml-0 mr-0 mb-0">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
