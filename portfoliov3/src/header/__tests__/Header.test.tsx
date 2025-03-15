// @ts-ignore
import React from 'react';
import {render, screen} from "@testing-library/react"
import {Header} from "../Header";
import {describe, expect, it} from "vitest";

describe('Header', () => {
    it('should display header title', () => {
        render(<Header/>);
        expect(screen.getByText("EDWIN")).toBeVisible();
        expect(screen.getByText("ROLDAN")).toBeVisible();
        expect(screen.getByText("Developing Since 2021")).toBeVisible();
        expect(screen.getByText("I'm Edwin Roldan - an experienced Software Engineer Building innovative products and a seamless user experience.")).toBeVisible();
    });
});