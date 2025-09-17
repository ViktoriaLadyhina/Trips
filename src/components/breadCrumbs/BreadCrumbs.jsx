import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import './breadCrumbs.scss';

const BreadCrumbs = ({ crumbs }) => {
  return (
    <nav className="breadCrumbs">
      <ul>
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;

          return (
            <React.Fragment key={index}>
              <li className={isLast ? "active" : ""}>
                {isLast ? (
                  <span>{crumb.label}</span>
                ) : (
                  <Link to={crumb.path}>{crumb.label}</Link>
                )}
              </li>
              {!isLast && <span className="arrow"><FaLongArrowAltRight /></span>}
            </React.Fragment>
          )
        })}
      </ul>
    </nav>
  );
}

export default BreadCrumbs;
