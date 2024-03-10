import "./TripStyle.css"
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/9.jpg"


function Trip(){
    return(
        <div className="trip">
          <h1>Recent Trips</h1> 
       
        <p>You can discover unique destination using google maps.</p>
    <div className="tripcard">
        <TripData
        image={Trip1}

        heading="Trip in Indonesia"
        text="Indonesia is home to some of nature's most beautiful natures, including beaches and deep seas, as well as tropical forests and mountains. Be wowed by gorgeous beaches such as those in Bali, Lombok, Nusa Dua, and the tranquil Gili Islands."
        />

<TripData
        image={Trip2}

        heading="Trip in malaysia"
        text="Malaysia has a multicultural heritage, lush rainforests, and beautiful beaches. It has four UNESCO-designated World Heritage Sites. These include the Lenggong Valley, an archaeological heritage site worth mentioning, George Town and Melaka's beautiful cities, Kinabalu Park, and Gunung Mulu National Park."
        />



<TripData
        image={Trip3}

        heading="Trip in France"
        text="France is one of the oldest nations on Earth and the most ethnically diverse country in Europe. These deep and broad influences have made France a world leader throughout history in different aspects of culture, including cuisine, philosophy, music, art, film, fashion, literature and sport."
        />

         </div>
        </div>
    )

}

export default Trip;