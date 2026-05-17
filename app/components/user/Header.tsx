import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@radix-ui/react-dropdown-menu";
import {SidebarMenu, SidebarMenuButton, SidebarMenuItem} from "~/components/ui/sidebar";
import {Avatar, AvatarImage,AvatarFallback} from "~/components/ui/avatar";
import {BadgeCheck, Bell, ChevronsUpDown, CreditCard, LogOut,} from "lucide-react";
import {useIsMobile} from "~/hooks/use-mobile";



export default function Header() {
    const isMobile = useIsMobile();
    return (
           <SidebarMenu>
             <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className={"bg-white text-black"} >
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage
                                    src={"https://uniqmaque.netlify.app/favicon.ico"}
                                    alt={"unique"}
                                />
                                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium">Aguobi Ogochukwu</span>
                                <span className=" truncate text-xs">ogonyedi@gmail.com  </span>

                            </div>
                            <ChevronsUpDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg bg-white text-black"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <Avatar className="h-8 w-8 rounded-lg">
                                    <AvatarImage src = {"https://uniqmaque.netlify.app/favicon.ico"}
                                                 alt={"unique"}
                                    />
                                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium">Aguobi Ogochukwu</span>
                                    <span className=" truncate text-xs">
                                        ogonyedi@gmail.com
                                    </span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <BadgeCheck />
                                Account
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <CreditCard />
                                Billing
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Bell />
                                Notifications
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <LogOut />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>

    );
}

