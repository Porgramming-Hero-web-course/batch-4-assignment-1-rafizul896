{
    
    type Circle = {
        shape: 'circle';
        radius: number;
    }

    type Rectangle = {
        shape: 'rectangle';
        width: number;
        height: number
    }


    const calculateShapeArea = (shapeArea: Circle | Rectangle): number => {
        if (shapeArea.shape === "circle") {
            return parseFloat((Math.PI * shapeArea.radius * shapeArea.radius).toFixed(2));
        } else if (shapeArea.shape === "rectangle") {
            return shapeArea.height * shapeArea.width
        } else {
            return 0;
        }
    }

}