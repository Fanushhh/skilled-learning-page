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
                    <picture>
                        <source media="(min-width: 1024px)" srcSet={props.heroImgDesktop} />
                        <source media="(min-width:768px)" srcSet={props.heroImgTablet}/>
                        <source media="(max-width: 767px)" srcSet={props.heroImgMobile}/>
                        <img src={props.heroImgMobile} alt='hero image'/>
                    </picture>
                </div>
            </div>
        </section>
    )
}