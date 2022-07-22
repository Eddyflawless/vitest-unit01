import { it, expect } from "vitest";
import { generateTokenPromise } from "../app/util/jwt";

it('should generate a token value', async () => {

    const testUserEmail = "test@icloud.com";

    const token = await generateTokenPromise(testUserEmail);

    expect(token).toBeDefined();

});
