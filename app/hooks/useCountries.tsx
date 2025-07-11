import {useContext} from "react";
import {CountriesContext} from "~/contexts/Countries";

export default function useCountries () {
    return useContext(CountriesContext);
}