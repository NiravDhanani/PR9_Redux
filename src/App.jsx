import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/download.png";
import "./App.css";
import { FaPlus } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Add_User, Delete_user } from "./action/action";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState();

  const record = useSelector((state) => state.TodoReducer.user);
  const dispatch = useDispatch();

  const formHandler = (e) => {
    e.preventDefault();
    let obj = {
      id: Math.floor(Math.random() * 100),
      title,
      description,
    };
    dispatch(Add_User(obj));
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <nav>
        <div className="d-flex nabBar">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="Head-text">Google Keep</h1>
        </div>
      </nav>
      <section className="main">
        <div className="Card">
          <div className="card-Body">
            <form action="" onSubmit={formHandler}>
              <input
                placeholder="Title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="w-100 TextTilte"
              ></input>
              <textarea
                placeholder="Write a note..."
                className="w-100 TextArea"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              ></textarea>
              <div className="d-flex justify-content-end p-1">
                <button type="submit" className="submitBtn">
                  <FaPlus />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section>
        <Container>
          <div className="mt-5 d-flex flex-wrap justify-content-center">
            {record.map((item) => {
              return (
                <div className="box" key={item.title}>
                  <h3>{item.title}</h3>
                  <p className="mt-2">{item.description}</p>
                  <div className="d-flex justify-content-end p-1 mt-3">
                    <button
                      className="DelBtn"
                      onClick={() => dispatch(Delete_user(item.id))}
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                </div>
              );
            })}

            {record.length == 0 ? (<h4>All Work Done Enjoy your Day</h4>) : ""}
          </div>
        </Container>
      </section>

      <footer>
        <p className="text-white d-flex justify-content-center">
          Copy-Rights-2024
        </p>
      </footer>
    </>
  );
}

export default App;
