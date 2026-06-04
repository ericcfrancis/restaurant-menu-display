import MenuItem from "./MenuItem";

export default function MenuCategory(props){
    return (
        <div className="menu-category-section">
            <h2 className="category-title">{props.categoryName}</h2>

            {props.items.length === 0 ? (
                <p className="no-items">No items available in this category</p>
            ) : (
                <div className="menu-items-grid">
                    {props.items.map((item) =>(
                        <MenuItem
                        key = {item.id}
                        name = {item.name}
                        description = {item.description}
                        price = {item.price}
                        category = {item.category}
                        isVegetarian = {item.isVegetarian}
                        isSpicy = {item.isSpicy}
                        image = {item.image}
                        onOrder = {props.onItemOrder}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}