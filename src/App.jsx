import './app.scss';
import { Navbar } from './components/Navbar/Navbar';
import { Test } from './Test';

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
      </section>
      <section id="Service">Parallax</section>
      <section>Service</section>
      <section id="Portofolio">Parallax</section>
      <section>Portofolio1</section>
      <section>Portofolio2</section>
      <section>Portofolio 3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
