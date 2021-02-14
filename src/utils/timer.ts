import { Clock } from "./clock";

export class Timer {
    private start: number;
    
    constructor() {
        this.reset();
    }

    public reset() {
        this.start = Clock.now();
    }

    public get duration(): number {
        return Clock.now() - this.start;
    }
}