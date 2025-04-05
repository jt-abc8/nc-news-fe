import { Link } from "react-router";
import "../styling/card.css"

export const CardTopic = ({ topic: { slug, description, img_url } }) => {
   img_url = img_url === "" ? null : img_url;

   return (
      <Link to={`/articles?topic=${slug}`}>
         <section className="topic-card interactable"
         style={img_url ? {backgroundImage: `url(${img_url})`} : {backgroundColor: "#4b2222"}}>
            <div className="card-text">
               <h3>#{slug}</h3>
               <p>{description}</p>
            </div>
         </section>
      </Link>
   );
};
