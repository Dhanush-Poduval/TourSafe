import { Calendar, ChevronDown, ChevronUp, Home, Inbox, Plus, Projector, Search, Settings, User2 } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarSeparator } from '../ui/sidebar'
import { Link } from 'react-router-dom'
import { DropdownMenu, DropdownMenuItem,DropdownMenuTrigger,DropdownMenuContent } from '../ui/dropdown-menu'
import { Collapsible ,CollapsibleContent,CollapsibleTrigger} from '../ui/collapsible'



const items=[
    {
    title:"Home",
    url:'/',
    icon:Home
    },
    {
        title:"Inbox",
        url:'/',
        icon:Inbox
    },
    {
        title:"Calendar",
        url:'/',
        icon:Calendar
    },
    {
        title:"Search",
        url:'/',
        icon:Search
    },
    {
        title:"Settings",
        url:'/',
        icon:Settings
    }
]

function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="bg-black text-gray-100">
      {/* Header */}
      <SidebarHeader >
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/" className="flex items-center gap-2">
                <img
                  src="https://avatars.githubusercontent.com/u/71214249?v=4"
                  alt="Logo"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="font-medium">Dhanush</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Separator */}
      <SidebarSeparator className="bg-gray-800" />

      {/* Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400">Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      className="flex items-center gap-2 hover:bg-gray-800 hover:text-white transition-colors"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.title === "Inbox" && (
                    <SidebarMenuBadge className="bg-gray-700 text-gray-200">
                      26
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Collapsible Projects */}
        <Collapsible>
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex items-center text-gray-400">
                Projects
                <ChevronDown className="ml-auto" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuSub>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link
                          to="/"
                          className="flex items-center gap-2 hover:bg-gray-800 hover:text-white transition-colors"
                        >
                          <Projector />
                          See all projects
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenuSub>
                </SidebarMenu>
              </SidebarGroupContent>

              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuSub>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link
                          to="/"
                          className="flex items-center gap-2 hover:bg-gray-800 hover:text-white transition-colors"
                        >
                          <Plus />
                          Add project
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenuSub>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="mt-6 border-t border-gray-800 pt-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
              <User2 />
              John Doe
              <ChevronUp className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-gray-900 text-gray-100">
            <DropdownMenuItem>Account</DropdownMenuItem>
            <DropdownMenuItem>Sign in</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
export default AppSidebar;