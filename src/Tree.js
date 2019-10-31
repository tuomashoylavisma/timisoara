import React, {useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import convertToTree from './treeConverter'

const TREE_URL = `https://grim-spider-21894.herokuapp.com/`

const NodeRow = ({node, selectNode}) => <div id={node.id} onClick={() => selectNode(node)}>{node.name}</div>

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

const Tree = ({}) => {

    const [selectedNode, selectNode] = useState(null);
    const [tree, setTree] = useState([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch(TREE_URL)
          .then(res => res.json())
          .then(response => {
              setTree(convertToTree(response))
              setLoading(false)
          })
          .catch(error => console.log(error));
      }, [])

    return (<div>
        {isLoading && <p>Loading....</p>}
        {tree.map(branch => <DrawTree id={branch.id} branch={branch} selectNode={selectNode} />)}
        {selectedNode && <div style={{fontSize: '0.8em', paddingTop: '14px', color: 'yellow'}}>Selected: {selectedNode.name}</div>}
       </div>
    )
}

Tree.propTypes = {
    tree: PropTypes.array.isRequired,
}

export default Tree