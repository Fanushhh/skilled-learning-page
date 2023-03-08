import './hero.scss';

export default function Hero({props}){
    return(
        <section className='heroSection'>
            <div className="heroTopBar">
                <img src={props.logoDark} alt="logo-img" />
                <button className="getStartedBtn">{props.getStartedBtn}</button>
            </div>
            <div className="heroSectionContainer">
                <div className='heroDescription'>
                    <h1>{props.heroHeading}</h1>
                    <p>{props.heroDescription}</p>
                    <button className='getStartedBtn'>{props.getStartedBtn}</button>
                </div>
                <div className='heroImgContainer'>
                    
                </div>
            </div>
        </section>
    )
}