import { useState } from "react";

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clickPositions, setClickPositions] = useState([]);

  return (
    <>
      <div className="trackerInfo">
        현재 위치 x: {position.x}, y: {position.y}
      </div>

      <div
        className="trackerArea"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();

          const offsetX = e.clientX - rect.left;
          const offsetY = e.clientY - rect.top;

          setPosition({
            x: offsetX,
            y: offsetY,
          });
        }}
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();

          const offsetX = e.clientX - rect.left;
          const offsetY = e.clientY - rect.top;

          setClickPositions([
            ...clickPositions,
            { x: offsetX, y: offsetY },
          ]);
        }}
      >
        마우스 트래킹 하는 공간

        <div
          className="trackerBall"
          style={{
            top: position.y,
            left: position.x,
          }}
        />

        {clickPositions.map((clickedPosition, index) => {
          return (
            <div
              key={index}
              className="clickBall"
              style={{
                top: clickedPosition.y,
                left: clickedPosition.x,
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default MouseTracker;