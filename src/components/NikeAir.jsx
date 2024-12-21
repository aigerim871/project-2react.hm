import "./nike-air.css";

export default function NikeAir({ image, price, title,  }) {
  return (
    <div className="nike-max">
      <img src={image} alt="img" className="nike-img" />

      <div className="nike-box">
        <p className="nike-title">{title}</p>
        <p className="nike-text">Цена:</p>
        {price}
        <p></p>
      </div>
    </div>
  );
}
