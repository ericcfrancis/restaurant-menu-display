export default function RestaurantHeader(props) {
    const stars = "⭐".repeat(props.rating);

    return (
        <div className="restaurant-header">
            <h1>{props.restaurantName}</h1>
            <p className="tagline">{props.tagline}</p>
            <div className="meta-info">

                <p>Cusine: {props.cuisine}</p>
                <p>Rating: {stars}</p>
            </div>
        </div>
    )
}