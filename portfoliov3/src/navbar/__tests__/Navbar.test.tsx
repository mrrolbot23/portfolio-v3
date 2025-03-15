// @ts-ignore
import React from 'react';
import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import Navbar from "../Navbar";

describe('Navbar', () => {
    beforeEach(() => {
        render(<Navbar/>);
    });

    it('should display navbar', () => {
        expect(screen.getByLabelText("navbar")).toBeVisible();
    });

    it('should display logo', () => {
        expect(screen.getByAltText("Brand Logo")).toBeVisible();
    });

    it('should display home button', () => {
        expect(screen.getByRole("button", {name: "Home-button"})).toBeVisible();
    });

    it('should display about me button', () => {
        expect(screen.getByRole("button", {name: "About Me-button"})).toBeVisible();
    });

    it('should display work button', () => {
        expect(screen.getByRole("button", {name: "Work-button"})).toBeVisible();
    });

    it('should display cve button', () => {
        expect(screen.getByRole("button", {name: "CVE-button"})).toBeVisible();
    });

    it('should display contact button', () => {
        expect(screen.getByRole("button", {name: "Let's Talk-button"})).toBeVisible();
    });
});