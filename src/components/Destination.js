import Mountain1 from "../assets/1.jpg";

import Mountain2 from "../assets/4.jpg";
import Mountain3 from "../assets/9.jpg";
import Mountain4 from "../assets/10.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css"

const Destination =()=>{
    return (
       
            <div className="destination">
<h1>Taal Volcano, Batangas</h1>
<p>Tours give you thw opportunity to see a lot, withi a time frame.</p>
            
            <DestinationData
              className="first-des"
             heading="Taal Volcano, Batangas"
            text="One the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
            img1={Mountain1}
            img2={Mountain2}
            />


<DestinationData
 className="first-des-reverse"
heading="Taal Volcano, Batangas"
            text="One the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
            img1={Mountain3}
            img2={Mountain4}
            />
            </div>

    )

}

export default Destination;