import { connect } from 'react-redux'
import { selectNode } from './TreeReducer'
import convertToTree from './treeConverter'
import data from './data'
import Tree from './Tree'

const mapStateToProps = (state) => ({
  tree: convertToTree(data),
  selectedNode: state.selectedNode,
})

export default connect(
  mapStateToProps,
  {selectNode}
)(Tree)