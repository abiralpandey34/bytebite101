'use client'

import React, { useCallback } from 'react';

import { addEdge, Background, Controls, MiniMap, NodeResizer, NodeToolbar, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';


export default function Roadmap({ params }: { params: { id: string } }) {

  const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  ];
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2', animated:true }];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params:any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );


  return (
      <div className='flex mx-auto p-10'>
        <div style={{ width: '80vw', height: '80vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <Controls />
          <Background gap={12} size={1} />
          <Controls/>
          {/* <NodeToolbar/> */}
          <NodeResizer/>
        </ReactFlow>
    </div>
      </div>
  );
}
