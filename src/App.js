import "./styles.css";
import React, { useState, useRef } from "react";

import ForceGraph2D from "react-force-graph-2d";
import ForceGraph3D from "react-force-graph-3d";

function genRandomTree(N = 9000, reverse = false) {
  return {
    nodes: [...Array(N).keys()].map((i) => ({ id: i })),
    links: [...Array(N).keys()]
      .filter((id) => id)
      .map((id) => ({
        [reverse ? "target" : "source"]: id,
        [reverse ? "source" : "target"]: Math.round(Math.random() * (id - 1))
      }))
  };
}

export default function App() {
  const { useRef } = React;

  const data = genRandomTree();
  const distance = 1900;

  const CameraOrbit = () => {
    const fgRef = useRef();

    return (
      <ForceGraph2D
        ref={fgRef}
        graphData={data}
        linkDirectionalParticleColor={() => "red"}
        linkDirectionalParticleWidth={6}
        linkHoverPrecision={10}
        onLinkClick={(link) => fgRef.current.emitParticle(link)}
      />
    );
  };

  return (
    <div className="App">
      <CameraOrbit />
    </div>
  );
}
