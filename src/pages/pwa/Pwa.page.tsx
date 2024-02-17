import { useState, useEffect } from "react";
import { useAddToHomescreenPrompt } from "../../hook/useAddToHomescreenPrompt";
import { getOsType, isPwaMode } from "./pwa-logic";

export const Pwa = () => {
    const [prompt, promptToInstall] = useAddToHomescreenPrompt();
    const [isGuide, setIsGuide] = useState(false);
    useEffect(() => {
        if (prompt) {
            setIsGuide(true);
        }
    }, [prompt]);

    return (
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
                    <button onClick={promptToInstall}>インストール！！</button>
                )}
            </div>
        </section>
    );
};
