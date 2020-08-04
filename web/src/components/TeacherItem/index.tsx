import React from 'react';

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css';

const TeacherItem: React.FC = () => (
  <article className="teacher-item">
    <header>
      <img
        src="https://avatars0.githubusercontent.com/u/10366880?s=460&u=59e93e1752e9d2ece4b7d8e129d60caba9c94207&v=4"
        alt="Guilerme Rodz"
      />
      <div>
        <strong>Guilerme Rodz</strong>
        <span>Matemática</span>
      </div>
    </header>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
      placeat eveniet alias perferendis debitis enim consequatur quaerat
      <br />
      <br />
      quod officia, unde beatae, eum laboriosam maxime, aspernatur natus
      dolorem molestiae possimus fugit?
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
);

export default TeacherItem;