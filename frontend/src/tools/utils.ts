export class Utils {
    static random(max = 1, previous = -1): number {
        const r = Math.floor(Math.random() * max);
        if (r === previous) return Utils.random(max, previous);
        return r;
    }

    static sleep(timeout: number) {
        return new Promise<void>((resolve) => {
            setTimeout(resolve, timeout);
        });
    }
}
