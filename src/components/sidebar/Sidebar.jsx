import React from "react"
import "./sidebar_style/Sidebar.css"
import { NavLink } from "react-router-dom"; 
import { Button, ButtonBase } from "@mui/material";

function Sidebar() {
  return (
    <div className='sidebar'>
            <div className="sidebarOption">
              <Button>
                <NavLink exact activeClassName="active" to="/calendar">
                  Calendar 
                </NavLink>
                </Button>
              <Button>
                <NavLink exact activeClassName="active" to="/note">
                  Note
                </NavLink>
                </Button>
                <Button>
                <NavLink exact activeClassName="active" to="/taskcards">
                  TaskCards
                </NavLink>
                </Button>
            </div>
    </div>
  )
}

export default Sidebar