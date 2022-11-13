import menu from '../assets/menu.jpg';
import entre from '../assets/entre.jpg';
import plat from '../assets/plat.jpg';
import fromage from '../assets/fromage.jpg';
import dessert from '../assets/dessert.jpg';

function Menu() {
  let imgs = [
    [entre, 'Entré'],
    [plat, 'Plat'],
    [fromage, 'Fromage'],
    [dessert, 'Dessert'],
  ];
  return (
    <>
      <div className="divImgMenu">
        <img className="imgMenu" src={menu} alt="menu" />
      </div>
      <div className="menu">
        <h2>MENU UNIQUE 13€</h2>
        <div className="menuContainer">
          {imgs.map((img, index) => (
            <div className="divImgPlat" key={index}>
              <p>{img[1]}</p>
              <img className="imgPlat" src={img[0]} alt="menu" key={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
