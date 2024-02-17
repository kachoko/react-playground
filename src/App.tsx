import { Link } from "react-router-dom";
import "./App.css";

export const App = () => {
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
        </main>
    );
};
