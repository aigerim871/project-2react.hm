import NikeAir from "./components/NikeAir";
import "./App.css"
import kross1 from "./assets/images/kross1.jpg";
import kross2 from "./assets/images/kross2.jpg";
import kross3 from "./assets/images/kross3.jpg";
import kross4 from "./assets/images/kross4.jpg";
import kross5 from "./assets/images/kross5.jpg";
import kross6 from "./assets/images/kross6.jpg";
import kross7 from "./assets/images/kross7.jpg";
import kross8 from "./assets/images/kross8.jpg";
import kross9 from "./assets/images/kross9.jpg";
import kross10 from "./assets/images/kross10.png";
import kross11 from "./assets/images/kross11.png";
import kross12 from "./assets/images/kross12.jpg";

const products = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    image: kross1,
    price: "12 999 som",
    id: 1,
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    image: kross2,
    price: "9 999 som",
    id: 2,
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    image: kross3,
    price: "10 499 som",
    id: 3,
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    image: kross4,
    price: "8 499 som",
    id: 4,
  },
  {
    title: "Мужские Кроссовки Under Armour Curry 8",
    image: kross5,
    price: "11 999 som",
    id: 5,
  },
  {
    title: "Мужские Кроссовки Nike Kyrie 7",
    image: kross6,
    price: "12 999 som",
    id: 6,
  },
  {
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    image: kross7,
    price: "9 999 som",
    id: 7,
  },
  {
    title: "Мужские Кроссовки Nike LeBron XVIII",
    image: kross8,
    price: "10 499 som",
    id: 8,
  },
  {
    title: "Мужские Кроссовки Nike Lebron XVIII Low",
    image: kross9,
    price: "8 499 som",
    id: 9,
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    image: kross10,
    price: "11 999 som",
    id: 10,
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    image: kross11,
    price: "8 499 som",
    id: 11,
  },
  {
    title: "ссовки Nike Kyrie Fly",
    image: kross12,
    price: "11 999 som",
    id: 12,
  },
];

const App = () => {
  return (
    <div className="nike-container">
      {products.map(({ image, title, price, id }) => {
        return <NikeAir key={id} image={image} title={title} price={price} />;
      })}
    </div>
  );
};

export default App;
