import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = ({ items, listClasses, itemClasses, socialClasses }) => {
  return (
    <nav className={listClasses}>
      <ul>
        {items.map((item) => {
          if (item.img) {
            return (
              <li>
                <a href={item.link}>
                  <img class={socialClasses} src={item.img} alt={item.alt} />
                </a>
              </li>
            );
          }
          return (
            <NavigationItem classes={itemClasses} link={item.link}>
              {item.name}
            </NavigationItem>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationItems;
