import { FC } from 'react';
import './style.scss';

export const About: FC = () => {
  return (
    <section className="about">
      <h1 className="about__title">About us</h1>
      <p className="about__text">
        Avira caters to thoughtful shoppers who appreciate unique designs and top quality pieces you
        just can’t find elsewhere. We are constantly curating fresh new collections and looking for
        the next big thing our customers will love. Founded in Vienna in 2019, we are proud to be
        your Online Clothing Shop that you can rely on for our expert service and care.
      </p>
      <p className="about__text">
        We are here to serve you and make sure you find the Perfect Look for every occasion. Our
        passion for fashion is the reason why we are here. We absolutely love what we do, and our
        goal is to help our customers by providing them with unique outfit and accessories that make
        them stand-out from the crowd.
      </p>
      <ul className="about__list">
        <li className="item">
          <h3 className="item__title">50k+</h3>
          <span className="item__text">Happy Customers</span>
        </li>
        <li className="item">
          <h3 className="item__title">60+</h3>
          <span className="item__text">Top Partners</span>
        </li>
        <li className="item">
          <h3 className="item__title">5+</h3>
          <span className="item__text">Years of Trust</span>
        </li>
      </ul>
    </section>
  );
};
