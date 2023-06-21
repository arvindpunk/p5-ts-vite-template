import * as p5 from 'p5';
import {setup, draw} from './main';  

const sketch = (p: p5) => {
    p.setup = () => setup(p)
    p.draw = () => draw(p)
}

new p5(sketch)