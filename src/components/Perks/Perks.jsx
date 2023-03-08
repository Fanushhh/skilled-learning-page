import Perk from "../Perk/Perk";
import './Perks.scss';

export default function Perks({props}){
    return(
        <section className="perksContainer">
            <div className="perksHeading">
                <p>{props.perksHeading}</p>
            </div>
            {props.perks.map((perk, index) => {
                return <Perk key={index} title={perk.title} description={perk.description} button={perk.button} iconUrl={perk.iconUrl} />
            })}
        </section>
    )
}