import { Link } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import { Context } from "./context/Context";

export const App = () => {
    const { store } = useContext(Context);
    return (
        <main>
            <p>Hello React Playground!!</p>
            <section>
                <ul>
                    <li>
                        <Link to={"/pwa"}>PWA検証</Link>
                    </li>
                    <li>
                        <Link to={"/reducer"}>useReducer検証</Link>
                    </li>
                </ul>
            </section>
            <section>
                <span>名前: </span>
                <span>{store.user.name ? store.user.name : "入力なし"}</span>
            </section>
        </main>
    );
};
