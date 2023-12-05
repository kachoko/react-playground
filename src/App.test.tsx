import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

// window.matchMedia用のmock
// 参考: https://github.com/facebook/create-react-app/issues/10126
Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: any) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    }),
});

test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Hello React Playground!!/i);
    expect(linkElement).toBeInTheDocument();
});
