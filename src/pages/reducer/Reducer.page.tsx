/**
 * 参考: https://qiita.com/seira/items/2fbad56e84bda885c84c
 */

import { useContext, useReducer, useRef } from "react";
import { Context } from "../../context/Context";

// counterの初期値を0に設定
const initialCount = 0;
// reducer関数を作成
// countStateとactionを渡して、新しいcountStateを返すように実装する
const reducerCount = (countState: number, action: string) => {
    // reducer関数にincrement、increment、reset処理を書く
    // どの処理を渡すかはactionを渡すことによって判断する
    switch (action) {
        case "increment":
            return countState + 1;
        case "decrement":
            return countState - 1;
        case "reset":
            return initialCount;
        default:
            return countState;
    }
};

type User = {
    name: string;
    mail: string;
};

const initialUser: User = {
    name: "",
    mail: "",
};

const reducerUser = (
    currentState: User,
    newItem: { [key: string]: string }
) => {
    return { ...currentState, ...newItem };
};

const intialPokemon = ["ピカチュウ"];

type action = {
    type: string;
    payload: string;
};

const reducerPokemon = (currentPokemon: string[], action: action) => {
    switch (action.type) {
        case "SET":
            return [...currentPokemon, action.payload];
        default:
            return intialPokemon;
    }
};

export const Reducer = () => {
    // 作成したreducerFunc関数とcountStateをuseReducerに渡す
    // useReducerはcountStateとdispatchをペアで返すので、それぞれを分割代入
    const [count, dispatchCount] = useReducer(reducerCount, initialCount);
    const [user, dispatchUser] = useReducer(reducerUser, initialUser);
    const [pokemon, dispatchPokemon] = useReducer(
        reducerPokemon,
        intialPokemon
    );
    const userName = useRef<HTMLInputElement | null>(null);
    const { dispatch } = useContext(Context);
    const changeUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatchUser({ [name]: value });
    };

    return (
        <main>
            <h1>useReducerの検証</h1>
            <section>
                <h2>シンプルな数値の場合</h2>
                <p>カウント：{count}</p>
                <div>
                    <button onClick={() => dispatchCount("increment")}>
                        +1
                    </button>
                    <button onClick={() => dispatchCount("decrement")}>
                        -1
                    </button>
                    <button onClick={() => dispatchCount("reset")}>
                        リセット
                    </button>
                </div>
            </section>
            <section>
                <h2>シンプルなオブジェクトの場合</h2>
                <p>お名前: {user.name}</p>
                <p>メールアドレス: {user.mail}</p>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={changeUserInfo}
                />
                <input
                    type="email"
                    name="mail"
                    value={user.mail}
                    onChange={changeUserInfo}
                />
            </section>
            <section>
                <h2>複雑なオブジェクトの場合</h2>
                <p>手持ち: {pokemon}</p>
                <button
                    onClick={() => {
                        const pokes = [
                            "プリン",
                            "ピッピ",
                            "コラッタ",
                            "ポッポ",
                            "コイキング",
                            "イシツブテ",
                            "ニャース",
                            "ガーディ",
                        ];
                        const catched =
                            pokes[Math.floor(Math.random() * pokes.length)];
                        dispatchPokemon({ type: "SET", payload: catched });
                    }}
                >
                    ポケモンを捕まえた！
                </button>
            </section>
            <section>
                <h2>Contextを用いたuseReducer</h2>
                <input type="text" ref={userName} />
                <button
                    onClick={() => {
                        if (!userName.current) {
                            return;
                        }
                        const { value } = userName.current;
                        console.log("set name is: ", value);
                        const payload = {
                            id: "001",
                            name: value,
                        };
                        dispatch({ type: "SET_USER", payload: payload });
                    }}
                >
                    SET to context
                </button>
            </section>
        </main>
    );
};
