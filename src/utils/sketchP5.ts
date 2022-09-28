

interface P5Obj {
  setup: () => void;
  draw: () => void;
  background: (x: number) => void;
  fill: (x: number) => void;
  createCanvas: (x: number, y:number) => void;
  ellipse: (x: number, y:number, z: number) => void;
  height: number;
  width: number;
}

export const p5Function = (p5Obj: P5Obj): void => {
  p5Obj.setup = () => {
    p5Obj.createCanvas(400,400)
    p5Obj.background(0)
  }

  p5Obj.draw = () => {
    p5Obj.fill(255)
    p5Obj.ellipse(p5Obj.width/2, p5Obj.height/2, 400)
  }
};