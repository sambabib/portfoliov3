import './PortfolioImages.scss'

const PortfolioImages = ({ img, clicked }) => {
    return (
        <div className="portfolio__images">
            <div className="portfolio__images__container">
                <img src={clicked} alt="portfolio work" />
            </div>      
        </div>
    )
}

export default PortfolioImages
