import './footer.scss';


export default function Footer({button, iconUrl}){
    return(
        <div className="footer">
            <img src={iconUrl} alt='logo-img' />
            <button className="getStartedBtn">{button}</button>

        </div>
    )
}