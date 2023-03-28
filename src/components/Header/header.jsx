import React from "react";
import "./style.css";
import moonIcon from "./../../assest/Images/moon.png";
import sunIcon from "./../../assest/Images/sun.png";
import { useDispatch, useSelector } from "react-redux";
import { setToggleValue } from "../../redux/reducers/ThemeReducer/action";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  const dispatch = useDispatch();
  const { toggleValue } = useSelector((state) => state.ThemeReducer);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <h2>
            <Link className="link" to="/">
              Estarta Task
              <span>Organizer</span>
            </Link>
          </h2>
        </div>
        <div className="nav">
          <ul>
            <NavLink className="link" to="/">
              <li>My Tasks</li>
            </NavLink>

            <img
              src={toggleValue ? sunIcon : moonIcon}
              alt=""
              width="30PX"
              id="icon"
              type="button"
              onClick={() => dispatch(setToggleValue())}
            />
          </ul>
        </div>
      </div>
    </header>
  );
}
