import React from 'react'
import "./loginPage.css"
import settingsImg from "./Settings.png"
// import footer

function accountPage() {
    return(
        // how do i get the name of the person themselves??
        <div className="accountPage">
            <h1>
            My Account
            </h1>
            <settings>
            settingsImg
            </settings>
            <h2>
            Firstname Lastname
            </h2>
            <h3>
            netID@rice.edu
            </h3>
            <h2>
            Venmo   <h3> @first-lastname</h3>
            </h2>
        </div>
    )
}

export default accountPage;