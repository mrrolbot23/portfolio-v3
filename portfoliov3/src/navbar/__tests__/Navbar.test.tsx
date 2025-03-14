// @ts-ignore
import React from 'react';
import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import {Navbar} from "../Navbar";

describe('Navbar', () => {
    beforeEach(() => {
        render(<Navbar/>);
    });

    it('should display navbar', () => {
        expect(screen.getByLabelText("navbar")).toBeVisible();
    });

    it('should display logo', () => {
        expect(screen.getByLabelText("brand-logo")).toBeVisible();
    });

    it('should display home button', () => {
        expect(screen.getByRole("button", {name: "home-button"})).toBeVisible();
    });

    it('should display about me button', () => {
        expect(screen.getByRole("button", {name: "about-me"})).toBeVisible();
    });

    it('should display home button', () => {
        expect(screen.getByRole("button", {name: "work-button"})).toBeVisible();
    });

    it('should display home button', () => {
        expect(screen.getByRole("button", {name: "cve-button"})).toBeVisible();
    });

    it('should display home button', () => {
        expect(screen.getByRole("button", {name: "contact-button"})).toBeVisible();
    });
});