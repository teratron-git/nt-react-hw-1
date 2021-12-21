import { Component } from "react"
import { IItem } from "../../App"

class ShopItemClass extends Component<IItem, any> {
  render() {
    return (
      <div className="main-content">
        <h2>{this.props.item.brand}</h2>
        <h1>{this.props.item.title}</h1>
        <h3>{this.props.item.description}</h3>
        <div className="description">{this.props.item.descriptionFull}</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay" />
        </div>
        <div className="divider" />
        <div className="purchase-info">
          <div className="price">£399.00</div>
          <button type="button">Добавить в корзину</button>
        </div>
      </div>
    )
  }
}

export default ShopItemClass
