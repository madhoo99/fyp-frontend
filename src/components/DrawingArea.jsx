import React, { useRef, useState } from 'react';

function DrawingArea() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);

  function handleTouchStart(e) {
    const touch = e.touches[0];
    setIsDrawing(true);
    setLastX(touch.clientX);
    setLastY(touch.clientY);
  }

  function handleTouchMove(e) {
    if (!isDrawing) return;
    const touch = e.touches[0];
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(touch.clientX, touch.clientY - 100);
    ctx.stroke();
    setLastX(touch.clientX);
    setLastY(touch.clientY - 100);
  }

  function handleTouchEnd() {
    setIsDrawing(false);
  }

  function handleSave() {
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL();
    const data = { image: dataUrl };

    // Send the data to the server using fetch or an AJAX request
    fetch('/save', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default DrawingArea;

// To save the drawing as an image and send it to a backend server, you can add a "Save" button to the component and define a function to handle the click event. 
// In this function, you can get the image data from the canvas using the toDataURL() method, which returns a base64-encoded data URL for the image, and send it to the 
// backend server using an AJAX request or the fetch API.

// import React, { useRef, useState } from 'react';
// import './DrawingBox.css';

// function DrawingBox() {
//   const canvasRef = useRef(null);
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [lastX, setLastX] = useState(0);
//   const [lastY, setLastY] = useState(0);

//   function handleMouseDown(e) {
//     setIsDrawing(true);
//     setLastX(e.nativeEvent.offsetX);
//     setLastY(e.nativeEvent.offsetY);
//   }

//   function handleMouseMove(e) {
//     if (!isDrawing) return;
//     const ctx = canvasRef.current.getContext('2d');
//     ctx.beginPath();
//     ctx.moveTo(lastX, lastY);
//     ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
//     ctx.stroke();
//     setLastX(e.nativeEvent.offsetX);
//     setLastY(e.nativeEvent.offsetY);
//   }

//   function handleMouseUp() {
//     setIsDrawing(false);
//   }

//   function handleSave() {
//     const canvas = canvasRef.current;
//     const dataUrl = canvas.toDataURL();
//     const data = { image: dataUrl };

//     // Send the data to the server using fetch or an AJAX request
//     fetch('/save', {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(response => {
//         console.log(response);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   return (
//     <div>
//       <canvas
//         ref={canvasRef}
//         width={400}
//         height={400}
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//       />
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// }

// export default DrawingBox;


// To implement the drawing box component for touch screens, you can use the onTouchStart, onTouchMove, and onTouchEnd event handlers 
// instead of the onMouseDown, onMouseMove, and onMouseUp handlers. The touch event handlers provide information about the touch points 
// on the screen, which you can use to update the position of the drawing on the canvas.

// import React, { useRef, useState } from 'react';
// import './DrawingBox.css';

// function DrawingBox() {
//   const canvasRef = useRef(null);
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [lastX, setLastX] = useState(0);
//   const [lastY, setLastY] = useState(0);

//   function handleTouchStart(e) {
//     const touch = e.touches[0];
//     setIsDrawing(true);
//     setLastX(touch.clientX);
//     setLastY(touch.clientY);
//   }

//   function handleTouchMove(e) {
//     if (!isDrawing) return;
//     const touch = e.touches[0];
//     const ctx = canvasRef.current.getContext('2d');
//     ctx.beginPath();
//     ctx.moveTo(lastX, lastY);
//     ctx.lineTo(touch.clientX, touch.clientY);
//     ctx.stroke();
//     setLastX(touch.clientX);
//     setLastY(touch.clientY);
//   }

//   function handleTouchEnd() {
//     setIsDrawing(false);
//   }

//   function handleSave() {
//     const canvas = canvasRef.current;
//     const dataUrl = canvas.toDataURL();
//     const data = { image: dataUrl };

//     // Send the data to the server using fetch or an AJAX request
//     fetch('/save', {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(response => {
//         console.log(response);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   return (
//     <div>
//       <canvas
//         ref={canvasRef}
//         width={400}
//         height={400}
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       />
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// }

// export default DrawingBox;