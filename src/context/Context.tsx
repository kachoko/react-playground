import { ReactNode, createContext, useReducer } from "react";

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

// contextを更新するためのactionの方を定義する
type Action = {
    type: string; // actionの名称
    payload: any; // 引数的なものだが
};

const reducerFunc = (currentState: ContextState, action: Action) => {
    // ここにstoreの更新処理を書く
    // ただし、ここでは受け取った値をそのままreturnするだけにすること（この関数を呼ぶ前にデータの形は作ってしまうこと）
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
    store: ContextState;
    dispatch: React.Dispatch<Action>;
};

export const Context = createContext({} as ContextProviderState);
export const ContextProvider = ({
    children,
}: {
    children: ReactNode;
}): JSX.Element => {
    // useReducerで生成した「参照用のstore」と「更新用のdispatch」を、contextに渡す
    const [store, dispatch] = useReducer(reducerFunc, initialState);

    return (
        <Context.Provider
            value={{
                // ここにuserReducerで生成したものを渡す
                store,
                dispatch,
            }}
        >
            {children}
        </Context.Provider>
    );
};
