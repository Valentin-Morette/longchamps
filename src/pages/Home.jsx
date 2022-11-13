import verres from '../assets/verres.jpg';
import Horaires from '../components/horaires';
import Contact from '../components/contact';

function Home() {
  return (
    <>
      <img className="verres" src={verres} alt="verres" />
      <section>
        <Horaires />
        <Contact />
      </section>
    </>
  );
}

export default Home;
