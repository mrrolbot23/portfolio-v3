// @ts-ignore
import React from 'react';
import {render, screen} from "@testing-library/react"
import {Header} from "../Header";
import { describe, expect, it } from "vitest";

describe('Header', () => {
    it('should display header title', () => {
        render(<Header/>);
        expect(screen.getByText("My Header")).toBeVisible();
    });
});