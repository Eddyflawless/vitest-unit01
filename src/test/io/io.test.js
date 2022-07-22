import { it, expect,vi, beforeAll } from "vitest";
import { promises as fs } from 'fs';
import writeData from "../../app/util/io";

// vi.mock('fs');
vi.mock('path',()=> {
    return {
        default: {
            join: () => {

            }
        }
    }
})

it('should execute the writeData Fn', () => {

    const filename = "test.txt";
    const testData = "Test data";
    // writeData(testData, filename)
    // // return expect(writeData(testData, filename)).resolves.toBeUndefined();
    // expect(fs.appendFile).toBeCalled();

});
