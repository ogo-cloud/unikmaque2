import { SidebarTrigger } from "~/components/ui/sidebar";
import { ArrowLeft, Link2 as LinkIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Link } from "react-router";

export default function Navbar() {
  const pathname = location.pathname.split("/");
  return (
    <div className={"flex justify-between items-center"}>
      <div className={"flex gap-2 items-center"}>
        <button
          className={"p-2 rounded-sm active:bg-gray-200"}
          onClick={() => history.back()}
        >
          <ArrowLeft />
        </button>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={"/account/profile"}>Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <LinkIcon absoluteStrokeWidth />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage
                className={"capitalize text-pink-700 font-medium italic"}
              >
                <h2>{pathname[pathname.length - 1]}</h2>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <SidebarTrigger className={"bg-pink-500 p-2 rounded-sm text-white"} />
    </div>
  );
}
