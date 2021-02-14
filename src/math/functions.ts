import { Vector } from "../core/vector";
import { EPSILON } from "./constants";

export function equalApprox(a: number, b: number, epsilon = EPSILON) {
    return Math.abs(a - b) < epsilon;
}

export function angle(vec: Vector) {
    if (vec.dim < 2) {
        throw new Error("Must have at least 2 dimensions");
    }

    return Math.atan2(vec.get(1), vec.get(0));
}