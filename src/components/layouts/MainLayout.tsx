import React from "react";
import {FC} from "react";
import {Link} from "gatsby";
import style from "./mainLayout.module.scss"

interface IMainLayout {
    title: string
    children: React.ReactNode
}


const MainLayout:FC<IMainLayout> = ({
                                        title,
                                        children
}) => {
    return (
        <div className={style.mainLayout}
        >
            <header className={style.header}
            >
                <Link to="/">First Gatsby App</Link>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>


                </nav>
            </header>

            <main>
                <h1>{title}</h1>
                {children}
            </main>
        </div>
    )
}

export default MainLayout
