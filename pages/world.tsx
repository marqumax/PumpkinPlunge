import React, { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import dynamic from "next/dynamic";

const DynamicWorldComponent = dynamic(
  () => import("../components/world-component"),
  {
    ssr: false,
  }
);

function World() {
  return (
    <div className="flex h-screen w-screen flex-wrap justify-center">
      <DynamicWorldComponent />
    </div>
  );
}

export default World;
