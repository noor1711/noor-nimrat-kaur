import React from "react";
import { SpriteAnimator } from "react-sprite-animator";

const Animator = ({ isActive, spriteSheetPath, dimensions }) => {
  return (
    <SpriteAnimator
      className="dog"
      sprite={spriteSheetPath || "/walkingDogSpriteSmall.png"}
      width={dimensions?.width || 100}
      height={dimensions?.height || 100}
      fps={2}
      shouldAnimate={isActive}
      direction={"horizontal"}
    />
  );
};

export default Animator;
