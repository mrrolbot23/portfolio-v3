import '@testing-library/jest-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
import {afterEach, expect} from 'vitest';
import {cleanup} from "@testing-library/react";

afterEach(() => {
    cleanup();
    vi.clearAllMocks();
})

expect.extend(matchers);