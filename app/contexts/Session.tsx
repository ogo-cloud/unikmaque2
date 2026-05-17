import {createContext, type ReactNode, useEffect, useState, useTransition} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "~/auth/firebaseDB";
import {useNavigate} from "react-router";
import type {User} from "~/lib/types";
import {Drizzle} from "~/db/clientDB";
import {eq} from "drizzle-orm";
import {Others, Users} from "~/db/schema";



type Cred = User & {[type: string]: any; loading: boolean };

export const SessionContext = createContext<Cred>({ loading: true} as Cred);

export default function Session({children}: {children: ReactNode}) {
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();

  const [user, setUser]= useState<Cred>({loading: true} as Cred);

  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth,async (user)=>{
      try {
          if (!user){
              navigate("/account/login");
          }else {
              const data = (await Drizzle.query.Users.findFirst({
                  where:eq(Users.uid, user.uid),
              }));
              const data2 = (await Drizzle.query.Others.findFirst({
                  where:eq(Others.userid, user.uid),
              }));

              if (data&&data2) {
                  startTransition(()=>{
                      setUser(pervState=>({...pervState,...user, ...data, ...data2, loading: false}));
                  });
              }else {
                  navigate("/account/login");
              }

          }
      } catch (err) {
          console.error(err);
          navigate("/account/login");

      }
    });
    return () => {
        unsubscribe();
    }
  }, []);
  return (
      <SessionContext value={{...user}}>
       <>{user.loading || isPending ? <>Loading...</> :  children}</>
        </SessionContext>
  );

}
