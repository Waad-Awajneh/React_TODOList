import React from "react";
import "./style.css";
import moonIcon from "./../../assest/Images/moon.png";
import sunIcon from "./../../assest/Images/sun.png";
import { useDispatch, useSelector } from "react-redux";
import { setToggleValue } from "../../redux/reducers/ThemeReducer/action";
import { Link } from "react-router-dom";
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
            <li>My Tasks</li>
            <li>
              Priority
              <div className="DL ">
                <p className="drop-list" id="critical">
                  Critical
                </p>
                <p className="drop-list">Normal</p>
                <p className="drop-list"> Low priority</p>
              </div>
            </li>
            <li>
              State
              <div className="DL ">
                <p className="drop-list">Complete</p>
                <p className="drop-list">Uncompleted</p>
              </div>
            </li>

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
