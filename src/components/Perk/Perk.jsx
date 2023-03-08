import './_perk.scss';

export default function Perk({title, description, button, iconUrl}){

    return(
        <div className="perk">
            <img className="perkIcon" srcSet={iconUrl} alt='perk-icon'/>
            <p className="perkTitle">{title}</p>
            <p className="perkDescription">{description}</p>
            <button className="getStartedBtn">{button}</button>
        </div>
    )
}