import {createContext, type ReactNode} from "react";
import {z} from "zod";
import countries from "~/lib/countries.json";
import _ from "lodash";


export const Country = z.object({
    name: z.string(),
    iso2: z.string(),
    phoneCode: z.string(),
    icon: z.string(),
}).required();

export const CountriesContext =createContext<z.infer<typeof Country>[]>([]);
export default function Countries ({children}: {children:ReactNode})  {
   const processCountries = _.map(countries, country => ({
       name: country.name,
       iso2: country.iso2,
       phoneCode: country.phonecode,
       icon: `https://flagcdn.com/32x24/${_.lowerCase(country.iso2)}.png`

   })).sort((a, b) =>  a.name.localeCompare(b.name));

    return (
        <CountriesContext value={processCountries}>
       {children}
        </CountriesContext>
    )
}