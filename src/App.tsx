import "./App.css";
// import { Pwa } from "./pages/Pwa.page";
import { Reducer } from "./pages/reducer/Reducer.page";

export const App = () => {
    return (
        <div>
            <p>Hello React Playground!!</p>
            {/* TODO: ルーティング欲しい */}

            {/* 1. PWA検証 */}
            {/* <Pwa /> */}

            {/* 2. useReducerの検証 */}
            <Reducer />
        </div>
    );
};
