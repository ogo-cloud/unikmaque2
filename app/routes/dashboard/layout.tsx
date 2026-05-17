
import {Outlet} from "react-router";
import Footer from "~/components/Footer";
import Session from "~/contexts/Session";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "~/components/ui/sidebar";
import AppSidebar from "~/components/user/AppSidebar";
import Navbar from "~/routes/dashboard/Navbar";

export default function Layout(){
    return(
        <Session>
            <SidebarProvider>
                <AppSidebar/>
                <SidebarInset className={"p-5"}>
                   <Navbar/>
                    <Outlet/>
                </SidebarInset>
            </SidebarProvider>
        </Session>


    );
}
