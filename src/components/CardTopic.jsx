import { Link } from "react-router";

export const CardTopic = ({ topic: { slug, description, img_url } }) => {
    const img = <img src={img_url} alt={slug} />;

   return (
      <Link to={`/articles?topic=${slug}`}>
         <section className="topic-card">
            <div className="card-img">
               {img_url === "" ? null : img}
            </div>
            <div className="card-text">
               <h3>#{slug}</h3>
               <p>{description}</p>
            </div>
         </section>
      </Link>
   );
};
