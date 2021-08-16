import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  checkAllUsersFunc,
  checkFunc,
  chooseAllUsersFunc,
  setUsers,
} from "../redux/reducers/Users";
import "./Home.css";

const Home = () => {
  const tabsParams = useParams();
  const dispatch = useDispatch();
  const companies = useSelector((s) => s.Users.companies);
  const usersList = useSelector((s) => s.Users.usersList);
  const users = useSelector((s) => s.Users.users);
  const mainInputStatus = useSelector((s) => s.Users.mainInputStatus);

  useEffect(() => {
    dispatch(setUsers(companies[tabsParams.name].users));
  }, []);

  return (
    <div className="container">
      <table className="centered highlight">
        <thead>
          <tr>
            <th className="table__title" colSpan="4">
              {companies[tabsParams.name].companyName}
            </th>
          </tr>
          <tr>
            <td>
              <p>
                <label>
                  <input
                    type="checkbox"
                    checked={mainInputStatus}
                    onChange={() => {
                      dispatch(chooseAllUsersFunc());
                      dispatch(checkAllUsersFunc());
                    }}
                  />
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
          {users.map((el, idx) => {
            return (
              <tr key={idx} className={el.isChecked ? "active" : ""}>
                <td key={el.id}>
                  <p>
                    <label>
                      <input
                        type="checkbox"
                        onChange={() => {
                          dispatch(checkFunc(el.id));
                          dispatch(checkAllUsersFunc());
                        }}
                        checked={el.isChecked}
                      />
                      <span className="table__checkbox-text"></span>
                    </label>
                  </p>
                </td>
                <td key={el.name}>{el.name}</td>
                <td key={el.surname}>{el.surname}</td>
                <td key={el.age}>{el.age}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th className="users" colSpan="4">
              Users: {usersList.join(", ")}
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Home;
