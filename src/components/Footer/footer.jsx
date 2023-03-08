import './footer.scss';


export default function Footer({button, iconUrl}){
    return(
        <section className="footer">
            <img src={iconUrl} alt='logo-img' />
            <button className="getStartedBtn">{button}</button>

        </section>
    )
}