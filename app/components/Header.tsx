import {Form, Link} from "react-router";
import {LucideMenu, LucideSearch, LucideShoppingBag, User, UserPlus} from "lucide-react";
import {m,useAnimate} from "motion/react";
import React, {type BaseSyntheticEvent, useCallback, useState} from "react";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "~/components/ui/navigation-menu";
import {NavigationMenuContent, NavigationMenuItem} from "@radix-ui/react-navigation-menu";
import Category from "~/components/Category";
import {Sheet, SheetContent, SheetFooter} from "~/components/ui/sheet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faThreads} from "@fortawesome/free-brands-svg-icons";



export default function Header(){
    const MotionLink = m.create(Link);
    const [ref,animate] = useAnimate();
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);
    const increaseSearchWidth=(ev:BaseSyntheticEvent)=>{
        ev.preventDefault();
        setShow(!show);
    }
   const [expand, setExpand] = useState(false);
    return(
        <>
            <header className={"header"}>
                <div>

                    <Link className={"logo"} to={"/"}><b className={"text-primary-dark"}>U</b><span
                        className={"text-pink-500"}>M</span></Link>

                    <nav>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className={"cat_btn"}>
                                        Categories
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <Category/>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        <Form method={"get"} className={"search"}>
                            <label hidden htmlFor={"search"}>Search</label>
                            <m.input initial={{width: 0}}
                                     animate={{width: show ? 200 : 0, padding: show ? undefined : 0}}
                                     type={"search"} name={"search"} placeholder={"search for items...."}
                                     id={"search"}/>
                            <Link to={"#"} className={"icon "} onClick={increaseSearchWidth}><LucideSearch
                                absoluteStrokeWidth/></Link>
                        </Form>
                        <Link to={"#"} className={"icon"}><LucideShoppingBag absoluteStrokeWidth/></Link>
                        <Link to={"#"} onClick={()=>setExpand(!expand)} className={"icon sm-search "}><LucideSearch
                            absoluteStrokeWidth/></Link>
                        <button onClick={()=>setOpen(!open)} className={"icon sm-bar"}><LucideMenu
                            absoluteStrokeWidth/></button>
                        <MotionLink whileHover={{scale: 1.05}} initial={{scale: 1}}
                                    to={"/account/signup"} className={"sign_btn sign-up"}><span>Sign Up</span> <UserPlus
                            size={18}/></MotionLink>
                        <MotionLink whileHover={{scale: 1.05}} initial={{scale: 1}}
                                    to={"/account/signup"} className={"sign_btn login"}>Login <User
                            size={18}/></MotionLink>
                    </nav>
                </div>

            </header>
            <m.form initial={{height: 0, overflow: "hidden"}} animate={{height: expand?"94":0}} method={"get"}
                    className={"drop-search"+(!expand? "py-0!":"")}>
                <label hidden htmlFor={"search"}>Search</label>
                <input  type={"search"} name={"search"} placeholder={"search for items...."} id={"search"}/>
            </m.form>
            <Sheet open={open} onOpenChange={setOpen} modal>
                <SheetContent className={"sidebar"} side={"top"}>
                    <div className={"contents"}>
                        <Form method={"get"} className={"search"}>
                            <label hidden htmlFor={"search"}>Search</label>
                            <input  type={"search"} name={"search"} placeholder={"search for items...."} id={"search"}/>
                        </Form>
                        <Category/>
                        <div className={"account"}>
                            <MotionLink whileHover={{scale: 1.05}} initial={{scale: 1}}
                                        to={"/account/signup"} className={"sign_btn sign-up"}><span>Sign Up</span> <UserPlus
                                size={18}/></MotionLink>
                            <MotionLink whileHover={{scale: 1.05}} initial={{scale: 1}}
                                        to={"/account/signup"} className={"sign_btn login"}>Login <User
                                size={18}/></MotionLink>
                        </div>
                    </div>
                    <SheetFooter>
                        <div className={"foot"}>
                            <MotionLink  whileHover={{scale: 1.05}} initial={{scale: 1}} to={"#"}>
                                <FontAwesomeIcon icon={faFacebook} size={"lg"}/></MotionLink>
                            <MotionLink  whileHover={{scale: 1.05}} initial={{scale: 1}} to={"#"}>
                                <FontAwesomeIcon icon={faInstagram} size={"lg"}/></MotionLink>
                            <MotionLink whileHover={{scale: 1.05}} initial={{scale: 1}} to={"#"}>
                                <FontAwesomeIcon icon={faThreads} size={"lg"}/></MotionLink>

                        </div>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>

    )
}