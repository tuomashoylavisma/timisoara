import React from 'react';
import PropTypes from 'prop-types'

const NodeRow = ({node}) => <div id={node.id} onClick={() => {alert(node.name + ' clicked')}}>{node.name}</div>

const DrawTree = ({branch}) => {

if (branch.children.length > 0) {

    return <div >
            <NodeRow id={branch.id} node={branch} />
            <div className="DrawBranch">
            {branch.children.map(branch => < DrawTree id={branch.id} branch={branch} />)}
            </div>
        </div>
}
    return <NodeRow node={branch} />
}

const TreeCustom = ({tree}) => {

    return (
       <div>
        {tree.map(branch => <DrawTree id={branch.id} branch={branch} />)}
       </div>
    )
}

TreeCustom.propTypes = {
    tree: PropTypes.array.isRequired,
}

export default TreeCustom