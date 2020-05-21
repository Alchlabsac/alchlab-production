import React, { Component } from "react";
import { headerItems } from "../Header/headerItems";
import styles from "./RespNavigation.module.css"

class RespNavigation extends Component {

  state = {
    openDrawer: false  // nothing selected by default, but this is up to you...
  }

  handleDrawer = () => {
    this.setState(prevState => ({ openDrawer: !prevState.openDrawer }));
  };

  render() {
    return (
      <div className={styles.navigation}>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="navi-toggle"
          value={this.state.openDrawer}
          onChange={this.handleDrawer}
        />

        <label htmlFor="navi-toggle" className={styles.button}>
          <span className={!this.state.openDrawer ? styles.icon : `${styles.icon} ${styles.iconOpen}`}>&nbsp;</span>
        </label>

        <div className={!this.state.openDrawer ? styles.background : `${styles.background} ${styles.drawerBackgroundOpen}`}>&nbsp;</div>

        <nav className={!this.state.openDrawer ? `${styles.nav} ${styles.drawerNavClosed}` : `${styles.nav} ${styles.drawerNavOpen} ${styles.navShow}`}>
          <ul className={styles.list}>
            {headerItems.map((item) => {
              return (
                <li className={styles.item} key={item.link}>
                  <a href={item.link} onClick={this.handleDrawer} className={styles.link}>
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
};

export default RespNavigation;
