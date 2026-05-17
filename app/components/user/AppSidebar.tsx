
import { LogOut,} from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenuItem,
    SidebarRail, useSidebar,
} from "~/components/ui/sidebar"
import {
    SidebarMenu,
    SidebarMenuButton,
} from "~/components/ui/sidebar";


import Header from "~/components/user/Header";
import {faInbox, faStar, faTags, faTruckFast} from "@fortawesome/free-solid-svg-icons";
import {faBoxes} from "@fortawesome/free-solid-svg-icons/faBoxes";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faGear} from "@fortawesome/free-solid-svg-icons/faGear";
import _ from "lodash";
import {useNavigate, useNavigation} from "react-router";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function AppSidebar() {

    const navigate = useNavigate();
    const {state} = useSidebar();

    const Menus = [
        {name: "Inbox", url: "/account/Inbox", icon: faInbox},
        {name: "Orders", url: "/account/Orders", icon: faBoxes},
        {name: "Tracking", url: "/account/Track", icon: faTruckFast},
        {name: "wishlist", url: "/account/Wishlist", icon: faHeart},
        {name: "Coupons", url: "/account/Coupons", icon: faTags},
        {name: "Settings", url: "/account/Settings", icon: faGear},
    ];
    return (
        <Sidebar collapsible="icon">

            <SidebarHeader>
                <Header/>
            </SidebarHeader>
            <SidebarContent >
                    <SidebarMenu
                        className={"gap-3 pt-5 font-medium "+
                            (state==="collapsed" ? "items-center" : "")}>
                            {_.map(Menus, ({name, url, icon},i ) => (
                                <SidebarMenuItem key={i} className={"text-lg"}>
                                <SidebarMenuButton
                                    tooltip={{children: name, className: "tooltip-s"}}
                                    onClick={()=> navigate(url)} className={"text-base" + (
                                    location.href.endsWith(url)? " bg-pink-300/40" : ""
                                )}>
                                    <FontAwesomeIcon icon= {icon}/> {name}
                                </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                    </SidebarMenu>
                </SidebarContent>
            <SidebarFooter>

                    <SidebarMenuButton
                        size="lg"
                        className={"bg-white hover:bg-white/70 text-black! p-2 text-base font-medium"}> <LogOut/> Log out  </SidebarMenuButton>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    );
}