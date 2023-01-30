import React, { Component } from "react";
import "./DarkMode.css";

class DarkMode extends Component {
    render() {

        const setDark = () => {
            localStorage.setItem("theme", "dark");
            document.documentElement.setAttribute("data-theme", "dark");
        };

        const setLight = () => {
            localStorage.setItem("theme", "light");
            document.documentElement.setAttribute("data-theme", "light");
        };

        const storedTheme = localStorage.getItem("theme");

        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

        const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark);

        if (defaultDark) {
            setDark();
        }

        const toggleTheme = (e) => {
            if (e.target.checked) {
                setDark();
            } else {
                setLight();
            }
        };

        return (
            <div className="toggle-theme-wrapper">
                <span role="img" aria-label="light">☀️</span>
                <label className="toggle-theme" htmlFor="checkbox">
                    <input
                        type="checkbox"
                        id="checkbox"
                        onChange={toggleTheme}
                        defaultChecked={defaultDark}
                    />
                    <div className="slider round"></div>
                </label>
                <span role="img" aria-label="dark">🌒</span>
            </div>
        );
    };
}

// const DarkMode = () => {

//     const setDark = () => {
//         localStorage.setItem("theme", "dark");
//         document.documentElement.setAttribute("data-theme", "dark");
//         // window.localStorage.setItem("theme", "dark");
//         // window.dispatchEvent(new Event("storage"));
//         window.addEventListener("storage",(e) => {
//             this.setState({ theme: "dark"});
//         });
//     };

//     const setLight = () => {
//         localStorage.setItem("theme", "light");
//         document.documentElement.setAttribute("data-theme", "light");
//         // window.localStorage.setItem("theme", "light");
//         // window.dispatchEvent(new Event("storage"));
//         window.addEventListener("storage",(e) => {
//             this.setState({ theme: "light"});
//         });
//     };

//     const storedTheme = localStorage.getItem("theme");

//     const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

//     const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark);

//     if (defaultDark) {
//         setDark();
//     }

//     const toggleTheme = (e) => {
//         if (e.target.checked) {
//             setDark();
//         } else {
//             setLight();
//         }
//     };

// 	return (
// 		<div className="toggle-theme-wrapper">
// 			<span role="img" aria-label="light">☀️</span>
// 			<label className="toggle-theme" htmlFor="checkbox">
// 				<input
// 					type="checkbox"
// 					id="checkbox"
// 					onChange={toggleTheme}
// 					defaultChecked={defaultDark}
// 				/>
// 				<div className="slider round"></div>
// 			</label>
// 			<span role="img" aria-label="dark">🌒</span>
// 		</div>
// 	);
// };

export default DarkMode;
