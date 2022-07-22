import { it, expect, describe, vi } from "vitest";
import { generateReportData } from '../app/data';

describe('generateReportData', () => {

    it('should execute logFn if provided', async () => {

        const logger = vi.fn();
        generateReportData(logger); 
        expect(logger).toBeCalled(); // expects logger Fn to have been called
    
    });

})

