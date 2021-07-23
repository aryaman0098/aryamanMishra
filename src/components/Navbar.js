import React from 'react'
import "./Navbar.css"
import { AppBar, Toolbar } from "@material-ui/core"

function Navbar() {
    return (
        <div className = "nav">
            <AppBar>
                <Toolbar className = "nav_toolbar">
                    <div className="title">
                        <h3>aryamanMishra</h3>
                    </div>
                    <div className="menu_items">
                        <h4 className = "menu_item">about</h4>
                        <h4 className = "menu_item">experience</h4>
                        <h4 className = "menu_item">education</h4>
                        <h4 className = "menu_item">recentProjects</h4>
                        <h4 className = "menu_item">contactMe</h4>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar
