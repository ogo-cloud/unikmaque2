import useSession from "~/hooks/useSession";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import _ from "lodash";
import { Copy, Edit } from "lucide-react";
import { useState } from "react";
import { DateTime } from "luxon";
import BadgeCopy from "~/components/BadgeCopy";



export default function Profile() {
  const {
    email,
    full_name,
    avatar,
    uid,
    bonus,
    verified,
    phone,
    address,
    country,
    createdAt,
    phoneNumber,
    created_at,
  } = useSession();
  const [copied, setCopied] = useState(false);
  const lens = _.split(full_name, " ");
  console.log(created_at);

  const copy = async () => {
    await navigator.clipboard.writeText(uid);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  console.log(created_at);
  return (
    <div
      className={
        "max-w-lg! mx-auto flex items-center flex-col w-full h-full bg-white rounded-lg p-5"
      }
    >
      <Avatar
        className={
          "bg-pink-100 text-pink-800 rounded-full border border-pink-600 size-20"
        }
      >
        <AvatarImage src={avatar as string} alt={"full_name"} />
        <AvatarFallback>
          {_.upperCase(lens.length > 1 ? lens[0][0] + lens[1][0] : lens[0][0])}
        </AvatarFallback>
      </Avatar>
      <div className={"flex flex-col w-full items-center gap-2"}>
        <h1>
          <span className={"text-pink-500 font-medium"}>Welcome,</span>{" "}
          <b className={"text-2xl"}>{full_name} !</b>
        </h1>
        <div className={"flex gap-3 items-center"}>
          user_id:{" "}
          <BadgeCopy text={uid}/>
        </div>
      </div>

      {/* User Details */}
      <div
        className={
          "flex flex-col gap-3 items-center w-full max-w-sm md:max-w-md p-2 md:p-4 bg-gray-100 mt-5"
        }
      >

          <div className={"flex justify-between w-full"}>
            <div className={"flex flex-col grow-1"}>
              <small className={"text-pink-500 font-medium "}>Email</small>
              <p className={"text-truncate"}>
                {" "}
                {email ?? <i>Email not provided</i>}
              </p>
            </div>
          </div>

          <div className={"flex justify-between w-full"}>
            <div className={"flex flex-col grow-1"}>
              <small className={"text-pink-500 font-medium "}>Phone</small>
              <p>
                {!_.isEmpty(phone) && phone ? (
                  phone
                ) : !_.isEmpty(phoneNumber) && phoneNumber ? (
                  phoneNumber
                ) : (
                  <i className={"text-sm text-gray-500"}>Phone not provided</i>
                )}
              </p>
            </div>
          </div>

        <div className={"flex justify-between w-full"}>
          <div className={"flex flex-col grow-1"}>
            <small className={"text-pink-500 font-medium "}>Address</small>
            <i className={"truncate"}>{address ?? <i>Not provided</i>}</i>
          </div>
        </div>

        <div className={"flex justify-between w-full "}>
          <div className={"flex flex-col grow-1"}>
            <small className={"text-pink-500 font-medium "}>Country</small>
            <p className={"truncate"}>{country ?? <i>Not provided</i>}</p>
          </div>
        </div>
      </div>
      <div className={"p-2 bg-pink-100 w-full mt-2 text-center"}>
        <p>
          {DateTime.fromJSDate(
            new Date(createdAt as unknown as string),
          ).toLocaleString(DateTime.DATETIME_MED)}
        </p>
      </div>
      <button
        className={
          "bg-pink-500 px-3 py-2 font-medium mx-auto mt-2 flex items-center text-white gap-2"
        }
      >
        Edit profile <Edit size={16} /> {" "}
      </button>
    </div>
  );
}
