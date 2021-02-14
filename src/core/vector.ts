import { VectorMath } from "../math/vectorMath";
import HCore from 'hcore';

export class Vector {
    public readonly raw: number[];
    public readonly dim: number;

    constructor(components: number[]) {
        this.dim = components.length;
        this.raw = components;
    }

    public static zero(size: number) {
        let zeros: number[] = [];
        for (let i = 0; i < size; i++) {
            zeros.push(0);
        }
        return new Vector(zeros);
    }

    public static random(size: number, min: number, max: number) {
        return Vector.zero(size).map(x => HCore.Random.float(min, max));
    }

    public copy(): Vector {
        return this.map((x) => x);
    }

    public validateIdx(idx: number) {
        if (idx < 0 || idx >= this.dim) {
            throw new Error("Index must be between 0 and " + this.dim);
        }
    }

    public validateSameDim(vec: Vector) {
        if (this.dim !== vec.dim) {
            throw new Error(`Invalid vector dimensions: ${this.dim} and ${vec.dim}`);
        }
    }

    public get(idx: number): number {
        this.validateIdx(idx);
        return this.raw[idx];
    } 

    public setAll(vec: Vector): void {
        this.validateSameDim(vec);
        for (let i = 0; i < this.dim; i++) {
            this.set(i, vec.get(i));
        }
    }

    public set(idx: number, val: number): void {
        this.validateIdx(idx);
        this.raw[idx] = val;
    }

    public map(mapping: (x: number) => number): Vector {
        const y = Vector.zero(this.dim);
        for (let i = 0; i < this.dim; i++) {
            y.set(i, mapping(this.get(i)));
        }
        return y;
    }

    public sum(vec: Vector): number {
        let sum = 0;
        for (const item of vec.raw) {
            sum += item;
        }
        return sum;
    }

    public mean(vec: Vector): number {
        return this.sum(vec) / vec.dim;
    }

    public magnitude(): number {
        let sum = 0;
        for (let i = 0; i < this.dim; i++) {
            sum += this.get(i) * this.get(i);
        }
        return Math.sqrt(sum);
    }

    public add(b: Vector) {
        this.validateSameDim(b);
        for (let i = 0; i < this.dim; i++) {
            this.set(i, this.get(i) + b.get(i));
        }
        return this;
    }

    public subtract(b: Vector) {
        this.validateSameDim(b);
        for (let i = 0; i < this.dim; i++) {
            this.set(i, this.get(i) - b.get(i));
        }
        return this;
    }

    public mult(b: Vector) {
        this.validateSameDim(b);
        for (let i = 0; i < this.dim; i++) {
            this.set(i, this.get(i) * b.get(i));
        }
        return this;
    }

    public multScalar(s: number) {
        for (let i = 0; i < this.dim; i++) {
            this.set(i, this.get(i) * s);
        }
        return this;
    }

    public dot(b: Vector): number {
        return VectorMath.dot(this, b);
    }

    public normalized() {
        return VectorMath.normalize(this);
    }

    public normalize() {
        const mag = this.magnitude();
        for (let i = 0; i < this.dim; i++) {
            this.set(i, this.get(i) / mag);
        }
        return this;
    }

    public get x() {
        return this.get(0)
    }

    public get y() {
        return this.get(1);
    }

    public get z() {
        return this.get(2);
    }

    public set x(val: number) {
        this.set(0, val);
    }

    public set y(val: number) {
        this.set(1, val);
    }

    public set z(val: number) {
        this.set(2, val);
    }

    public get w() {
        return this.get(3);
    }

    public set w(val: number) {
        this.set(3, val);
    }

    public toString(precision: number = 3): string {
        return `[${this.raw.map(x => x.toFixed(precision)).join(', ')}]`;
    }
}

export class Vector2D extends Vector {
    constructor(x: number, y: number) {
        super([x, y]);
    }

    public get x() {
        return this.get(0)
    }

    public get y() {
        return this.get(1);
    }

    public set x(val: number) {
        this.set(0, val);
    }

    public set y(val: number) {
        this.set(1, val);
    }
}

export class Vector3D extends Vector {
    constructor(x: number, y: number, z: number) {
        super([x, y, z]);
    }

    public get x() {
        return this.get(0)
    }

    public get y() {
        return this.get(1);
    }

    public get z() {
        return this.get(2);
    }

    public set x(val: number) {
        this.set(0, val);
    }

    public set y(val: number) {
        this.set(1, val);
    }

    public set z(val: number) {
        this.set(2, val);
    }
}