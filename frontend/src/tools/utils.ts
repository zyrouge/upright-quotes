export class Utils {
    static getUnrepeatedSecureRandomNumber(
        min = 0,
        max = 1,
        previous = -1
    ): number {
        const r = Math.floor(Utils.getSecureRandomNumber() * max) + min;
        if (r === previous)
            return Utils.getUnrepeatedSecureRandomNumber(max, previous);
        return r;
    }

    static getSecureRandomNumber() {
        return crypto.getRandomValues(new Uint8Array(1))[0] / 256;
    }

    static sleep(timeout: number) {
        return new Promise<void>((resolve) => {
            setTimeout(resolve, timeout);
        });
    }
}
