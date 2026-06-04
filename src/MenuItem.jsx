export default function MenuItem(props) {
    return (
        <div className="menu-item-card">
            <div className="image-container">
                <img src={props.image} alt="" width="150" />

                <div className="badges">
                    {props.isVegetarian && <span className="badge veg">🫛</span>}
                    {props.isSpicy && <span className="badge spicy">🌶️</span>}
                </div>
            </div>

            <div className="card-content">
                <div className="card-header">
                    <h3>{props.name}</h3>
                    <span className="price">MYR {props.price.toFixed(2)}</span>
                </div>
                {props.description && <p className="description">{props.description}</p>}
                <button className="order-btn" onClick={() => props.onOrder(props.name, props.price)}>
                    Order Now
                </button>
            </div>
        </div>
    )
}