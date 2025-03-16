import {render, screen} from "@testing-library/react";
import {expect} from "vitest";
import {About} from "../About.tsx";

describe('About Section', () => {
    it('should display about me content', () => {
        render(<About/>);
        expect(screen.getByRole("heading", {name: "about-me-header"})).toBeVisible();
        expect(screen.getByRole("paragraph", {name: "introduction"})).toBeVisible();
        expect(screen.getByText(/I’m a Software Engineer and Systems Developer/i)).toBeVisible();
    });
});