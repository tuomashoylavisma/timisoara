//Actions
export const SELECT_NODE = 'SELECT_NODE'

export const selectNode = (selectedNode) =>({
  type: SELECT_NODE,
  selectedNode
})

const TreeReducer = (state = {selectedNode: null}, action) => {

  switch (action.type) {
    case SELECT_NODE:
      return {
        ...state,
      selectedNode: action.selectedNode,
      }
      default:
        return state
      }
}

export default TreeReducer