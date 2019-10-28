import { isArray } from 'util';

const addLeaves = (tree, branch) => {
  
    if (isArray(tree)) {

      tree.forEach(node => {
        if (node.id === branch.parent) { 
          
          node.children.push(branch)

        } else {
          addLeaves(node, branch)
        }
      })
    } else {
      addLeaves(tree.children, branch)
    }
  }

const convertToTree = (nodes) => {

  let tree = []

  nodes.forEach(branch => {

    branch.children = []

    if (! branch.parent) {
      tree.push(branch)
    } else {
      addLeaves(tree, branch)
    }
  })

  return tree
}

export default convertToTree