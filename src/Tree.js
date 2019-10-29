import React from 'react';
import PropTypes from 'prop-types'

const NodeRow = ({node, selectNode}) => <div id={node.id} onClick={() => selectNode(node.name)}>{node.name}</div>

const DrawTree = ({branch, selectNode}) => {

if (branch.children.length > 0) {

    return <div >
            <NodeRow id={branch.id} node={branch} selectNode={selectNode}/>
            <div className="DrawBranch">
            {branch.children.map(branch => < DrawTree id={branch.id} branch={branch} selectNode={selectNode} />)}
            </div>
        </div>
}
    return <NodeRow node={branch} selectNode={selectNode} />
}

const Tree = ({selectNode, tree, selectedNode}) => {

    return (<div>
        {tree.map(branch => <DrawTree id={branch.id} branch={branch} selectNode={selectNode} />)}
        {selectedNode && <div style={{fontSize: '0.8em', paddingTop: '14px', color: 'yellow'}}>Selected: {selectedNode}</div>}
       </div>
    )
}

Tree.propTypes = {
    tree: PropTypes.array.isRequired,
}

export default Tree