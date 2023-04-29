import React, { useEffect, useRef } from 'react';

const Drawing = ({ x1, y1, x2, y2, x3, y3 ,y4}) => {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Translate origin to bottom left
        // ctx.translate(0, canvas.height);
        // ctx.scale(1, -1);

        // Draw grid background
        ctx.strokeStyle = "lightblue";
        ctx.lineWidth = 1;
        for (let i = 0; i <= canvas.width; i += 40) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, canvas.height);
            ctx.stroke();
        }
        for (let j = 0; j <= canvas.height; j += 40) {
            ctx.beginPath();
            ctx.moveTo(0, j);
            ctx.lineTo(canvas.width, j);
            ctx.stroke();
        }

        // Draw x and y axes
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, canvas.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(canvas.width, 0);
        ctx.stroke();

        ctx.fillStyle = 'black';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        const gridSize = 40;
        const gridMin = 0;
        const gridMax = 10 * gridSize;
        const axisOffset = gridSize;

        for (let i = 0; i <= 10; i++) {
            const x = axisOffset + i * gridSize;
            ctx.beginPath();
            ctx.moveTo(x, canvas.height - axisOffset - 5);
            ctx.lineTo(x, canvas.height - axisOffset + 5);
            ctx.stroke();

            ctx.fillText(i.toString(), x, canvas.height - axisOffset + 20);
        }

        // Draw the tick marks and labels for the y-axis
        for (let j = 0; j <= 10; j++) {
            const y = canvas.height - axisOffset - j * gridSize;
            ctx.beginPath();
            ctx.moveTo(axisOffset - 5, y);
            ctx.lineTo(axisOffset + 5, y);
            ctx.stroke();

            ctx.fillText(j.toString(), axisOffset - 20, y + 3);
        }

        // Find the matching x-axis and y-axis label values for the triangle points
        const x1Label = Math.round(x1 / gridSize);
        const y1Label = Math.round(y1 / gridSize);
        const x2Label = Math.round(x2 / gridSize);
        const y2Label = Math.round(y2 / gridSize);
        const x3Label = Math.round(x3 / gridSize);
        const y3Label = Math.round(y3 / gridSize);


        // Draw triangle points
        const pointRadius = 5;
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(x1Label * gridSize + axisOffset, canvas.height - (y1Label * gridSize + axisOffset), pointRadius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x2Label * gridSize + axisOffset, canvas.height - (y2Label * gridSize + axisOffset), pointRadius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x3Label * gridSize + axisOffset, canvas.height - (y3Label * gridSize + axisOffset), pointRadius, 0, 2 * Math.PI);
        ctx.fill();
        // Draw triangle lines
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1Label * gridSize + axisOffset, canvas.height - (y1Label * gridSize + axisOffset));
        ctx.lineTo(x2Label * gridSize + axisOffset, canvas.height - (y2Label * gridSize + axisOffset));
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x2Label * gridSize + axisOffset, canvas.height - (y2Label * gridSize + axisOffset));
        ctx.lineTo(x3Label * gridSize + axisOffset, canvas.height - (y3Label * gridSize + axisOffset));
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x3Label * gridSize + axisOffset, canvas.height - (y3Label * gridSize + axisOffset));
        ctx.lineTo(x1Label * gridSize + axisOffset, canvas.height - (y1Label * gridSize + axisOffset));
        ctx.stroke();
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(0* gridSize + axisOffset, canvas.height - (y4 * gridSize + axisOffset));
        ctx.lineTo(10* gridSize + axisOffset, canvas.height - (y4 * gridSize + axisOffset));
        ctx.stroke();
    }, [x1, y1, x2, y2, x3, y3,y4]);

    //
    return (
        <canvas
            ref={canvasRef}
            width={480}
            height={480}
            style={{ marginLeft: "500px", border: "1px solid black" }}
        />
    );

};

export default Drawing;