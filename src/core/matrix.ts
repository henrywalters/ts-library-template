import { VectorMath } from "../math/vectorMath";
import { Vector, Vector2D } from "./vector";

export class Matrix {
    private rows: Vector[];
    
    public m: number;
    public n: number;

    constructor(rows: number[][]) {

        this.rows = [];
        this.m = rows.length;
        
        if (this.m === 0) {
            this.n = 0;
        } else {

            this.n = rows[0].length;

            for (let i = 0; i < this.m; i++) {
                console.log(rows[i])
                const vec = new Vector(rows[i]);
                if (this.n !== vec.dim) {
                    throw new Error("Inconsistent matrix row lengths");
                }
                this.rows.push(vec);
            }
        }
    }

    public size(): Vector2D {
        return new Vector2D(this.m, this.n);
    }

    public toString(precision: number): string {
        let out = [];
        for (const row of this.rows) {
            console.log(row);
            out.push(row.toString(precision));
        }
        return out.join('\n');
    }

    public static zero(size: Vector2D): Matrix {
        const rows = [];
        for (let i = 0; i < size.get(0); i++) {
            const row = [];
            for (let j = 0; j < size.get(1); j++) {
                row.push(0);
            }
            rows.push(row);
        }
        return new Matrix(rows);
    }

    public static identity(size: number): Matrix {
        const rows = [];
        for (let i = 0; i < size; i++) {
            const row = [];
            for (let j = 0; j < size; j++) {
                row.push(i === j ? 1 : 0);
            }
            rows.push(row);
        }
        return new Matrix(rows);
    }

}