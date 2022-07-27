import { it, expect,vi, beforeAll } from "vitest";
import { promises as fs } from 'fs';
import writeData,{getStoragePath } from "../../app/util/io";


it('should return a relative path to file', () => {
    const filename = "test.txt";
    var storagePath = getStoragePath(filename);
    expect(storagePath).toContain(filename);
});

it('should execute the writeData Fn', () => {

    const filename = "test.txt";
    const testData = "Test data";

    fs.writeFile = vi.fn();

    writeData(testData, filename);
    expect(fs.writeFile).toHaveBeenCalled();

    var storagePath = getStoragePath(filename);
    //
    expect(fs.writeFile).toHaveBeenCalledWith(storagePath, testData);

});
