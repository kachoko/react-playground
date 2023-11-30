import { useEffect, useState } from "react";
import "./App.css";
import { useAddToHomescreenPrompt } from "./hook/useAddToHomescreenPrompt";
import { getOsType, isPwaMode } from "./logics/pwa";

export const App = () => {
    const [prompt, promptToInstall] = useAddToHomescreenPrompt();
    const [isGuide, setIsGuide] = useState(false);

    useEffect(() => {
        if (prompt) {
            setIsGuide(true);
        }
    }, [prompt]);

    return (
        <div>
            <p>Hello React Playground!!</p>

            {/* 以下直接検証したいコードを記述 */}
            {/* コード増えてきたら適当にルーティングする */}
            <section>
                <p>PWA検証</p>
                <div>
                    <span>OS: {getOsType()}</span>
                </div>
                <div>
                    <span>
                        現在PWAモードで
                        {isPwaMode() ? `動作しています` : `動作していません`}
                    </span>
                </div>
                <div>
                    {isGuide && (
                        <button onClick={promptToInstall}>
                            インストール！！
                        </button>
                    )}
                </div>
            </section>
        </div>
    );
};
