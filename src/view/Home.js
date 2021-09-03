import React from "react";
import User from "../image/user1.png";
import "../view/Home.css";
import DataTable from "./dataTable";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Modal from "../view/modal";

function Home() {
  return (
    <>
      <header className="header">
        <h1 className="empresa">empresa</h1>
        <img src={User} className="user" />
      </header>
      <div className="container">
        <Paper className="paper" elevation={5}>
          <div className="superior">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="inputbx">
              <Paper component="form">
                <InputBase placeholder="Busca" classname="search" />
                <Modal />              

                <Divider orientation="horizontal" />
              </Paper>
            </div>
          </div>

          <DataTable />
        </Paper>
      </div>
    </>
  );
}

export default Home;
