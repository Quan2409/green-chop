import { useNavigate } from "react-router-dom";
import Esclipe from "../../Esclipe/Esclipe";
import Button from "../../Button/Button";
import style from "./ProductCard.module.scss";

const ProductCard = ({
  id,
  title_a,
  title_b,
  quantity,
  price,
  thumbnail,
  esclipe_bg,
}) => {
  const nav = useNavigate();

  const navigateToDetail = () => {
    nav(`/product/${id}`, {
      state: { title_a, title_b, quantity, price, thumbnail },
    });
  };

  return (
    <div className={style.productCard}>
      <div className={style.cardImage}>
        <img src={thumbnail} alt="product-img" className={style.image} />
        <div className={style.esclipe}>
          <Esclipe className={"medium-size"} background={esclipe_bg} />
        </div>
      </div>

      <p className={style.cardTitle}>
        <span>{title_a}</span>
        <span>{title_b}</span>
      </p>

      <hr className={style.cardDivider} />

      <div className={style.cardNumber}>
        <span className={style.quantity}>{quantity}</span>
        <span className={style.price}>Giá: {price} vnđ</span>
      </div>

      <Button
        text={"Xem chi tiết"}
        className={"detail-btn"}
        onClick={() => navigateToDetail()}
      />
    </div>
  );
};

export default ProductCard;
