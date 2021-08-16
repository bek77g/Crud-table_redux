import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const companies = useSelector((s) => s.Users.companies);

  return (
    <main>
      <aside>
        <div className="nav">
          <ul className="nav-items">
            <li className="nav-title">Companies</li>
            {Object.values(companies).map((item, idx) => {
              return (
                <li className="nav-link waves-effect waves-light" key={idx}>
                  <Link className="tolink" to={Object.keys(companies)[idx]}>
                    {item.companyName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
      <section className="content">
        <table className="centered highlight">
          <thead>
            <tr>
              <th className="table__title" colSpan="4">
                Your`s company name
              </th>
            </tr>
            <tr>
              <td>
                <p>
                  <label>
                    <input type="checkbox" defaultChecked={!!false} />
                    <span className="table__checkbox-text"></span>
                  </label>
                </p>
              </td>
              <th>Name</th>
              <th>Surname</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr className="active">
              <td>
                <p>
                  <label>
                    <input type="checkbox" defaultChecked />
                    <span className="table__checkbox-text"></span>
                  </label>
                </p>
              </td>
              <td>Harrython</td>
              <td>Suchanov</td>
              <td>22</td>
            </tr>
            <tr className="active">
              <td>
                <p>
                  <label>
                    <input type="checkbox" defaultChecked />
                    <span className="table__checkbox-text"></span>
                  </label>
                </p>
              </td>
              <td>Dmitriy</td>
              <td>Kulishenko</td>
              <td>25</td>
            </tr>
            <tr>
              <td>
                <p>
                  <label>
                    <input type="checkbox" defaultChecked={false} />
                    <span className="table__checkbox-text"></span>
                  </label>
                </p>
              </td>
              <td>Eduard</td>
              <td>Ignatiev</td>
              <td>27</td>
            </tr>
            <tr>
              <td>
                <p>
                  <label>
                    <input type="checkbox" defaultChecked={false} />
                    <span className="table__checkbox-text"></span>
                  </label>
                </p>
              </td>
              <td>Ivan</td>
              <td>Bukin</td>
              <td>29</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th className="users" colSpan="4">
                Users: Harrython, Dmitriy
              </th>
            </tr>
          </tfoot>
        </table>
      </section>
    </main>
  );
};

export default Main;
