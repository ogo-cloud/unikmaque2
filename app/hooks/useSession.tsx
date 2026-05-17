import {useContext, useEffect, useState} from "react";
import {SessionContext} from "~/contexts/Session";

export default function useSession() {
    return useContext(SessionContext);
}