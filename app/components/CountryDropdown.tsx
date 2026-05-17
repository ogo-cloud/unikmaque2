import _ from "lodash";
import React, {type Dispatch, memo, type SetStateAction, useTransition} from "react";
import useCountries from "~/hooks/useCountries";
import type {PhoneNumber} from "libphonenumber-js";

type CTR = {
    phone: string | PhoneNumber
    country: string
    code: string
    short: string
}
type Props = {setCtr: Dispatch<SetStateAction<CTR>>, ctr: CTR, setOpen: Dispatch<SetStateAction<boolean>> };
function CountryDropdown({setCtr, ctr, setOpen}:Props ) {
    const countries = useCountries();
  const[isPending, startTransition]   = useTransition();

  return  <div
          id={"dropdown"}
          className={
            "absolute w-72 top-full rounded-lg bg-white overflow-y-auto max-h-96 p-5 z-[5] "
           }
    >
        <h5 className={"bg-gray-200 py-1 px-3 mb-3 font-semibold"}>
            Select country
        </h5>
        <div id={"countries"}>
            {_.map(countries, (country, i) => (
                <div
                    role={"button"}
                    key={i}
                    className={
                        "flex items-center justify-between px-1" +
                        (country.name == ctr.country ? "bg-gray-200" : "")
                    }
                    onClick={()=> {

                            startTransition(() => {
                                setCtr((prevState) => ({
                                    ...prevState,
                                    country: country.name,
                                    code: `+${country.phoneCode}`,
                                    short: country.iso2,
                                }));
                        });
                    }}
                >
                    <div className={"flex items-center gap-2 text-sm"}>
                        <img
                            src={country.icon}
                            alt={country.name}
                            style={{
                                width: 16,
                                height: 12,
                            }}
                        />
                        {""}
                        {country.name}
                    </div>
                    <span className={"text-gray-500 text-sm"}>
                      +{country.phoneCode}
                    </span>
                </div>
            ))}
        </div>
    </div>
}

export default memo(CountryDropdown);