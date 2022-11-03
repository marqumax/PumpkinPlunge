import React, { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function WorldComponent() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "/unity-build/world.loader.js",
    dataUrl: "/unity-build/world.data",
    frameworkUrl: "/unity-build/world.framework.js",
    codeUrl: "/unity-build/world.wasm",
  });

  return (
    <>
      {loadingProgression !== 1 && (
        <h5 className="mt-5">Loading: {loadingProgression * 100}%</h5>
      )}
      <Unity unityProvider={unityProvider} className="w-full" />
    </>
  );
}

export default WorldComponent;
