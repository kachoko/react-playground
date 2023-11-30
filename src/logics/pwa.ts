const OsName = {
    ANDROID: "Android",
    IOS: "iOS",
    IPADOS: "iPadOS",
};

export const getOsType = () => {
    const UA = navigator.userAgent;
    switch (true) {
        case /android/i.test(UA):
            return OsName.ANDROID;
        case /iphone/i.test(UA):
            return OsName.IOS;
        case /macintosh/i.test(UA) && navigator.maxTouchPoints > 0:
            return OsName.IPADOS;
        default:
            return UA;
    }
};
