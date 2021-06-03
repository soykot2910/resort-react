import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

class Srevices extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free coktaills",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elt, migoir corips",
      },
      {
        icon: <FaHiking />,
        title: "Endless hiking",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elt, migoir corips",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elt, migoir corips",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elt, migoir corips",
      },
    ],
  };
  render() {
    return (
      <section>
        <div className="services">
          <Title title="services" />
          <div className="services-center">
            {this.state.services.map((item, index) => {
              return (
                <article key={index} className="service">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
export default Srevices;
