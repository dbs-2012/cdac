import React, { useState } from 'react';
import Drawing from './Drawing';

const Triangle = () => {
    const [draw, setDraw] = useState(false);

    const [point1, setPoint1] = useState({ x: 1, y: 1 });
    const [point2, setPoint2] = useState({ x: 5, y: 8 });
    const [point3, setPoint3] = useState({ x: 2, y: 8 });
    const [y4, setY4] = useState(-2);

    const handlePointChange = (event, point) => {
        const { name, value } = event.target;
        console.log(name, value);
        let newPoint = { ...point1, [name]: Number(value) };

        console.log(newPoint)
        switch (point) {
            case 'point1':
                newPoint = { ...point1, [name]: Number(value) };
                setPoint1(newPoint);
                break;
            case 'point2':
                newPoint = { ...point2, [name]: Number(value) };
                setPoint2(newPoint);
                break;
            case 'point3':
                newPoint = { ...point3, [name]: Number(value) };
                setPoint3(newPoint);
                break;
            default:
                break;
        }
    };


    return (
        <div>
            <div className="left-sidebar" style={{ border: "1px solid black", float: "left", height: "100vh", width: "30%" }}>

            </div>
            <div className="middle" style={{ border: "1px solid black", float: "left", width: "39%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                {console.log(point1, point2, point3)}
                {draw && <Drawing x1={point1.x * 40} y1={point1.y * 40} x2={point2.x * 40} y2={point2.y * 40} x3={point3.x * 40} y3={point3.y * 40} y4={y4} />}
            </div>
            <div className="right-bar" style={{ border: "1px solid black", float: "right", height: "100vh", width: "30%" }}>
                <div style={{ height: "45%", border: "1px solid black" }}>

                </div>
                <div>
                    <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                        <label>
                            <div style={{ textAlign: "center", padding: "5px", fontFamily: "Open Sans", fontSize: "18px", fontWeight: "bold" }}> Point 1</div>
                            <div style={{ marginTop: "10px" }}>
                                <span style={{ margin: "0 10%", marginLeft: "15%" }}>
                                    <span style={{ marginRight: "7.5px", fontFamily: "Open Sans", }}>X</span>:
                                    <input type="number" name="x" min="0" max="10" value={point1.x} onChange={(e) => handlePointChange(e, 'point1')} style={{ marginLeft: "7.5px", padding: "2.5px", paddingLeft: "7px", borderRadius: "5px", fontFamily: "Open Sans" }} />
                                </span>
                                <span style={{ margin: "0 10%" }}>
                                    <span style={{ marginRight: "7.5px", fontFamily: "Open Sans", }}>Y</span>:
                                    <input type="number" name="y" min="0" max="10" value={point1.y} onChange={(e) => handlePointChange(e, 'point1')} style={{ marginLeft: "7.5px", padding: "2.5px", paddingLeft: "7px", borderRadius: "5px", fontFamily: "Open Sans" }} />
                                </span>
                            </div>
                        </label>
                    </div>
                    <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                        <label>
                            <div style={{ textAlign: "center", padding: "5px", fontFamily: "Open Sans", fontSize: "18px", fontWeight: "bold" }}> Point 2</div>
                            <div style={{ marginTop: "10px" }}>
                                <span style={{ margin: "0 10%", marginLeft: "15%" }}>
                                    <span style={{ marginRight: "7.5px", fontFamily: "Open Sans", }}>X</span>:
                                    <input type="number" name="x" min="0" max="10" value={point2.x} onChange={(e) => handlePointChange(e, 'point2')} style={{ marginLeft: "7.5px", padding: "2.5px", paddingLeft: "7px", borderRadius: "5px", fontFamily: "Open Sans" }} />
                                </span>
                                <span style={{ margin: "0 10%" }}>
                                    <span style={{ marginRight: "7.5px", fontFamily: "Open Sans", }}>Y</span>:
                                    <input type="number" name="y" min="0" max="10" value={point2.y} onChange={(e) => handlePointChange(e, 'point2')} style={{ marginLeft: "7.5px", padding: "2.5px", paddingLeft: "7px", borderRadius: "5px", fontFamily: "Open Sans" }} />
                                </span>
                            </div>
                        </label>
                    </div>
                    <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                        <label>
                            <div style={{ textAlign: "center", padding: "5px", fontFamily: "Open Sans", fontSize: "18px", fontWeight: "bold" }}> Point 3</div>
                            <div style={{ marginTop: "10px" }}>
                                <span style={{ margin: "0 10%", marginLeft: "15%" }}>
                                    <span style={{ marginRight: "7.5px", fontFamily: "Open Sans", }}>X</span>:
                                    <input type="number" name="x" min="0" max="10" value={point3.x} onChange={(e) => handlePointChange(e, 'point3')} style={{ marginLeft: "7.5px", padding: "2.5px", paddingLeft: "7px", borderRadius: "5px", fontFamily: "Open Sans" }} />
                                </span>
                                <span style={{ margin: "0 10%" }}>
                                    <span style={{ marginRight: "7.5px", fontFamily: "Open Sans", }}>Y</span>:
                                    <input type="number" name="y" min="0" max="10" value={point3.y} onChange={(e) => handlePointChange(e, 'point3')} style={{ marginLeft: "7.5px", padding: "2.5px", paddingLeft: "7px", borderRadius: "5px", fontFamily: "Open Sans" }} />
                                </span>
                            </div>
                        </label>
                    </div>
                    <div style={{ marginBottom: "10px", marginTop: "30px" }}>
                        <label>
                            <div style={{ marginTop: "10px" }}>
                                <span style={{ margin: "0 10%", marginLeft: "15%", fontWeight: "bold" }}>
                                    <span style={{ marginRight: "7.5px", fontFamily: "Open Sans", fontSize: "18px" }}>Line on Y Axis</span>:</span>
                                <span style={{ margin: "0 5%" }}>
                                    <span style={{ marginRight: "7.5px", fontFamily: "Open Sans", }}>Y</span>:
                                    <input type="number" name="y" min="0" max="10" value={y4} onChange={(e) => setY4(e.target.value)} style={{ marginLeft: "7.5px", padding: "2.5px", paddingLeft: "7px", borderRadius: "5px", fontFamily: "Open Sans" }} />
                                </span>
                            </div>
                        </label>
                    </div>
                    <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", }}>
                        <button onClick={() => setDraw(!draw)} style={{ padding: "8px 20px", borderRadius: "10px", fontSize: "20px", fontFamily: "Open Sans", cursor: "pointer", backgroundColor: "#0C2D48", color: "white", border: "none", boxShadow: "2px 5px 10px 2px grey" }}>Draw Triangle</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Triangle
