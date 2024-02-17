import "./App.css";
import { ReactComponent as TelIcon } from "../src/img/tel.svg";
import clockPath from "../src/img/clock.svg";
import vkPath from "../src/img/vk.svg";
import telegramPath from "../src/img/telegram.svg";
import logo from "../src/img/logo.svg";
import businkaPhoto from "../src/img/businka.png";
import { useState } from "react";

let businka = {
  name: "Бусинка",
  photo: <img src={businkaPhoto}></img>,
  age: "8 месяцев",
  breed: "Без породы",
  health: "Здорова",
  gender: "Девочка",
};

const isHealth = (health) => {
  if (health === "Здорова") {
    return <div className="health healthy"></div>;
  }
  if (health === "Лечится") {
    return <div className="health reabilitating"></div>;
  }
  if (health === "Нужна помощь") {
    return <div className="health sick"></div>;
  }
};

function ContactsAndTime() {
  const telephone = "+7(000)000-00-00";
  const weekDays = "ПН-ПТ:9:00-20:00";
  const weekends = "СБ-ВС: 9:00-20:00";

  return (
    <ul className="ContactsAndTime">
      <li className="ContactsAndTime-item--1">
        <a href="tel:+70000000000">
          <TelIcon />
          {telephone}
        </a>
      </li>
      <li className="ContactsAndTime-item">
        <img src={clockPath} alt="Картинка"></img>
        {weekDays}
      </li>
      <li className="ContactsAndTime-item">
        <img src={clockPath} alt="Картинка"></img>
        {weekends}
      </li>
    </ul>
  );
}

function Messengers() {
  return (
    <ul className="messengers">
      <li>
        <a href="#">
          <img src={vkPath} alt="Картинка"></img>
        </a>
      </li>
      <li href="#">
        <a>
          <img src={telegramPath} alt="Картинка"></img>
        </a>
      </li>
    </ul>
  );
}

function HeaderTopLeft() {
  return (
    <div className="header-top--left">
      <ContactsAndTime />
      <Messengers />
    </div>
  );
}

function HeaderTopRight() {
  return (
    <div className="header-top--right">
      <a href="#">Вход</a>
      <a href="#">Регистрация</a>
    </div>
  );
}

function HeaderTop() {
  return (
    <div className="header-top">
      <HeaderTopLeft />
      <HeaderTopRight />
    </div>
  );
}

function ListMenu() {
  return (
    <ul className="list-menu">
      <li>
        <a href="#">Как помочь</a>
      </li>

      <li>
        <a href="#">Проекты</a>
      </li>

      <li>
        <a href="#">Поступившие</a>
      </li>

      <li>
        <a href="#">Выбывшие</a>
      </li>

      <li>
        <a href="#">О приюте</a>
      </li>

      <li>
        <a href="#">Контакты</a>
      </li>
    </ul>
  );
}

function WantToHelp() {
  return <button className="button-help">Хочу помочь!</button>;
}

function HeaderBottomRight() {
  return (
    <div className="header-bottom--right">
      <ListMenu />
      <WantToHelp />
    </div>
  );
}

function HeaderBottom() {
  return (
    <div className="header-bottom">
      <img src={logo} alt="картинка"></img>
      <HeaderBottomRight />
    </div>
  );
}
function PageHeader() {
  return (
    <header>
      <section className="container">
        <HeaderTop />
        <div className="line"></div>
        <HeaderBottom />
      </section>
    </header>
  );
}

//Main
//1section

function CatCard() {
  return (
    <div className="cat-card">
      {businka.photo}
      <span>
        <h2 className="cat-name">{businka.name}</h2>
        {isHealth(businka.health)}
      </span>
      <p>
        {businka.gender}, {businka.age}, {businka.breed}
      </p>
    </div>
  );
}

function NewPost() {
  return (
    <a>
      <div className="new">
        {businka.photo}
        <p>Новости</p>
      </div>
    </a>
  );
}

function News() {
  return (
    <div className="news">
      <NewPost />
      <NewPost />
      <NewPost />
      <NewPost />
    </div>
  );
}

function CardAndNews() {
  return (
    <section className="container card-and-news">
      <CatCard />
      <News />
    </section>
  );
}

// section2

function Project() {
  return (
    <>
      <div className="card-project">
        {businka.photo}
        <h3>Cбор средств на отделку вирусного отделения</h3>
        <p>
          К сожалению, наше кожное отделение совсем скоро не сможет принимать
          пациентов, которые так нуждаются в помощи... Поэтому было принято
          решение делать ремонт!
        </p>
        <div className="collect"></div>
        <div className="remaining">
          <span>85%</span>
          <span>$$:$$$</span>
        </div>
      </div>
    </>
  );
}

function Projects() {
  return (
    <section className="container projects">
      <h2>Проекты</h2>
      <div className="project-list">
        <Project />
        <Project />
      </div>
    </section>
  );
}

// section3

function Status() {
  return (
    <ul className="status">
      <li className="status--item">
        <p>Здорова</p>
        {isHealth("Здорова")}
      </li>
      <li className="status--item">
        <p>Лечится</p>
        {isHealth("Лечится")}
      </li>
      <li className="status--item">
        <p>Нужна помощь</p>
        {isHealth("Нужна помощь")}
      </li>
    </ul>
  );
}

function OurPetCard() {
  return (
    <li className="pets-card">
      {businka.photo}
      <span>
        <h2 className="cat-name">{businka.name}</h2>
        {isHealth(businka.health)}
      </span>
      <p>
        {businka.gender}, {businka.age}, {businka.breed}
      </p>
    </li>
  );
}

function OurPetsCards() {
  return (
    <ul className="our-pets-list">
      <OurPetCard />
      <OurPetCard />
      <OurPetCard />
    </ul>
  );
}

function OurPets() {
  return (
    <section className="container our-pets">
      <h2>Наши животные</h2>
      <Status />
      <OurPetsCards />
    </section>
  );
}

// section3

function SendMoney() {
  return (
    <form method="post" className="send-money">
      <h2>Оказать помощь животным</h2>
      <label>
        <intput
          type="number"
          name="money"
          id="money"
          placeholder="300руб."
          className="summ"
        />
      </label>

      <intput
        type="email"
        name="ebail"
        id="name"
        placeholder="300руб."
        className="summ"
      />

      <div className="submit-summ">
        <WantToHelp type="submit" />
        <a href="#">Зарегестрируйтесь!</a>
      </div>
    </form>
  );
}

function OtherHelp() {
  return (
    <div className="other-help">
      <h2>Помочь вещами</h2>
      <p>Приюту СРОЧНО необходимы:</p>
      <ul>
        <li>Медикаменты</li>
        <li>Корм</li>
      </ul>
      <p>
        Если вы можете помочь приюту чем-то из списка выше, пожалуйста,
        обратитесь по номеру телефона 8(000)000-00-00
      </p>
    </div>
  );
}

function HelpPets() {
  return (
    <section className="container help-pets">
      <SendMoney />
      <OtherHelp />
    </section>
  );
}

function PageMain() {
  return (
    <main>
      <CardAndNews />
      <Projects />
      <OurPets />
      <HelpPets />
    </main>
  );
}

function App() {
  return (
    <>
      <PageHeader />
      <PageMain />
    </>
  );
}

export default App;
