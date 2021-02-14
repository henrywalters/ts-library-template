import { Vector } from "../core/vector";

export class VectorMath {
    public static add(a: Vector, b: Vector): Vector {
        const out = Vector.zero(a.dim);
        a.validateSameDim(b);
        for (let i = 0; i < a.dim; i++) {
            out.set(i, a.get(i) + b.get(i));
        }
        return out;
    }

    public static subtract(a: Vector, b: Vector): Vector {
        const out = Vector.zero(a.dim);
        a.validateSameDim(b);
        for (let i = 0; i < a.dim; i++) {
            out.set(i, a.get(i) - b.get(i));
        }
        return out;
    }

    public static mult(a: Vector, b: Vector): Vector {
        const out = Vector.zero(a.dim);
        a.validateSameDim(b);
        for (let i = 0; i < a.dim; i++) {
            out.set(i, a.get(i) * b.get(i));
        }
        return out;
    }

    public static multScalar(a: Vector, s: number): Vector {
        const out = Vector.zero(a.dim);
        for (let i = 0; i < a.dim; i++) {
            out.set(i, a.get(i) * s);
        }
        return out;
    }

    public static dot(a: Vector, b: Vector): number {
        let sum = 0;
        a.validateSameDim(b);
        for (let i = 0; i < a.dim; i++) {
            sum += a.get(i) * b.get(i);
        }
        return sum;
    }

    public static normalize(a: Vector): Vector {
        const mag = a.magnitude();
        return a.map(x => x/mag);
    }
}