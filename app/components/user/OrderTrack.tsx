import {Button} from "~/components/ui/button";
import {Input} from "~/components/ui/input";
import {useCallback, useState} from "react";
import {useNavigate} from "react-router";


export default function OrderTrack () {
    const [track, setTrack] = useState("");
    const navigate = useNavigate();
    const handleTracking = useCallback(() => {
   navigate(track);
    },[track, navigate]);


    return(

            <section id="order-tracking">
                <div className={"container max-w-lg mx-auto mt-20 bg-white shadow-lg p-3 md:p-5 flex flex-col justify-center gap-y-5"}>

                    <div className={"tracking"}>
                        <label htmlFor={"track"}>Track your order</label>
                        <div className={"flex"}>
                            <Input id={"track"} name="track" type={"text"} placeholder={"Order id (e.g. 125678999)"} value={track} onChange={(ev)=>setTrack(ev.target.value)} className={"grow"}/>
                            <Button onClick={handleTracking}>
                                Track
                            </Button>
                        </div>
                    </div>
                    <div id={"steps"}>
                        <h3>Steps:</h3>
                        <div className={"step-list"} data-id={1}><p>Enter your order ID, e .g.<strong>125678999</strong></p></div>
                        <div className={"step-list"} data-id={2}><p>Click on the <em>Track</em>button to submit.</p></div>
                        <div className={"step-list"} data-id={3}><p>You will be redirected to view the status of your order</p></div>

                    </div>
                </div>
            </section>
    )
};