import Card from "../UI/Card/Card";
import style from "./UserList.module.css";
const UserList = (props) => {
  return (
    <div>
      <ul className={style.li}>
        <Card>
          {props.users.map((data) => (
            <li key={Math.random()}>
              <p>Name: {data.name}</p>
              <p>Age: {data.age}</p>
            </li>
          ))}
        </Card>
      </ul>
    </div>
  );
};

export default UserList;
