"use strict";
{
    const calculateShapeArea = (shapeArea) => {
        if (shapeArea.shape === "circle") {
            return parseFloat((Math.PI * shapeArea.radius * shapeArea.radius).toFixed(2));
        }
        else if (shapeArea.shape === "rectangle") {
            return shapeArea.height * shapeArea.width;
        }
        else {
            return 0;
        }
    };
}
