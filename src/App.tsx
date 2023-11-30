import "./App.css";
import { getOsType } from "./logics/pwa";

export const App = () => {
    return (
        <div>
            <p>Hello React Playground!!</p>

            {/* 以下直接検証したいコードを記述 */}
            {/* コード増えてきたら適当にルーティングする */}
            <section>
                <p>PWA検証</p>
                <span>OS: {getOsType()}</span>
            </section>
        </div>
    );
};
