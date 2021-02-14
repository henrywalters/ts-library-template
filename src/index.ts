import { Bot } from './core/bot';
import { Canvas } from './core/canvas';
import { Collisions } from './core/collisions';
import { Component } from './core/component';
import { Game } from './core/game';
import { GameObject } from './core/gameObject';
import { Matrix } from './core/matrix';
import { Vector } from './core/vector';
import { DEG2RAD, RAD2DEG } from './math/constants';
import { angle } from './math/functions';
import { VectorMath } from './math/vectorMath';
import { Circle } from './renderables/circle';
import { Line } from './renderables/line';

const ML2D = {
    DEG2RAD: DEG2RAD,
    RAD2DEG: RAD2DEG,
    Renderables: {
        Line: Line,
        Circle: Circle,
    },
    Physics: {
        Collisions: Collisions,
    },
    Math: {
        angle: angle,
    },
    Game: Game,
    Canvas: Canvas,
    Vector: Vector,
    VectorMath: VectorMath,
    Matrix: Matrix,
    Bot: Bot,
    GameObject: GameObject,
    Component: Component,
}

export default ML2D;