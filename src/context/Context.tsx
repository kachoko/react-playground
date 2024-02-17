import { createContext, useReducer } from "react";

// Contextの型定義
// 新しくkeyを追加するときなどはこちらにも定義する
type ContextState = {
    user: {
        id: string;
        name: string;
    };
    config: {
        fontSize: "SMALL" | "MEDIUM" | "LARGE";
    };
};

// Contextの初期値
const initialState: ContextState = {
    user: {
        id: "",
        name: "",
    },
    config: {
        fontSize: "MEDIUM",
    },
};

type Action = {
    type: string;
    payload: any;
};

const reducerFunc = (currentState: ContextState, action: Action) => {
    switch (action.type) {
        case "SET_USER":
            return { ...currentState, user: action.payload };
        case "SET_CONFIG":
            return { ...currentState, config: action.payload };
        default:
            console.error(`Not found action.type: ${action.type}`);
            return currentState;
    }
};

type ContextProviderState = {
    state: ContextState;
    // dispatchの引数オブジェクトの型を、React.Dispatch<XXXXX> に定義する。
    dispatch: React.Dispatch<Action>;
};

export const Context = createContext({} as ContextProviderState);

export const ContextProvider = (props: any): JSX.Element => {
    // useReducerで生成した「参照用state」と「更新用dispatch」を、contextに渡す。
    const [state, dispatch] = useReducer(reducerFunc, initialState);

    return (
        <Context.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
