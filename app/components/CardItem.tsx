import { ICard } from "../mockData"

export type ImgItemType = 'sheet' | 'circle'
type CardItemProps = {
    card: ICard
    imgType: ImgItemType
}



export default function CardItem({ card, imgType }: CardItemProps) {

    const getImgClassByType = () => {
        const imgClases = { 'sheet': 'card-item__img--sheet', 'circle': 'card-item__img--circle' }
        return imgClases[imgType]
    }

    return (
        <div className="card-item">
            <div className="card-item__wrapper ">
                <img className={"card-item__img " + getImgClassByType()} src={card.img} alt="Картинка" />
            </div>
            <div className="card-item__content">
                <h3 className="card-item__name">{card.title}</h3>
                <h4 className="card-item__date">{card.date}</h4>
            </div>
        </div>
    )
}