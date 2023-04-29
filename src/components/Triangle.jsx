import React, { useRef, useEffect, useState } from 'react';
import Drawing from './Drawing';


const Triangle = () => {
const [draw,setDraw] = useState(false);

const [point1, setPoint1] = useState({ x: 1, y: 1 });
const [point2, setPoint2] = useState({ x: 5, y: 8 });
const [point3, setPoint3] = useState({ x: 2, y: 8 });
const [y4,setY4] = useState(-2);

const handlePointChange = (event, point) => {
const { name, value } = event.target;
console.log(name, value);
let newPoint = {...point1, [name] : Number(value) };

console.log(newPoint)
switch (point) {
case 'point1':
newPoint = {...point1, [name] : Number(value) };
setPoint1(newPoint);
break;
case 'point2':
newPoint = {...point2, [name] : Number(value) };
setPoint2(newPoint);
break;
case 'point3':
newPoint = {...point3, [name] : Number(value) };
setPoint3(newPoint);
break;
default:
break;
}
};



return (<div>
<div>
<label>
Point 1 - X:
<input type="number" name="x" min="0" max="10" value={point1.x} onChange={(e) => handlePointChange(e, 'point1')} />
Y:
<input type="number" name="y" min="0" max="10" value={point1.y} onChange={(e) => handlePointChange(e, 'point1')} />
</label>
<label>
Point 2 - X:
<input type="number" name="x" min="0" max="10" value={point2.x} onChange={(e) => handlePointChange(e, 'point2')} />
Y:
<input type="number" name="y" min="0" max="10" value={point2.y} onChange={(e) => handlePointChange(e, 'point2')} />
</label>
<label>
Point 3 - X:
<input type="number" name="x" min="0" max="10" value={point3.x} onChange={(e) => handlePointChange(e, 'point3')} />
Y:
<input type="number" name="y" min="0" max="10" value={point3.y} onChange={(e) => handlePointChange(e, 'point3')} />
</label>
<label>
line on y axis:
Y:
<input type="number" name="y" min="0" max="10" value={y4} onChange={(e) => setY4(e.target.value)} />
</label>
<button onClick={() => setDraw(!draw)}>Draw Triangle</button>
</div>
{console.log(point1, point2, point3)}
{draw && <Drawing x1={point1.x*40} y1={point1.y*40} x2={point2.x*40} y2={point2.y*40} x3={point3.x*40} y3={point3.y*40} y4={y4}/>}
</div>
);
};

export default Triangle