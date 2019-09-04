import React from 'react';
import idx from 'idx'
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app
import SortableTree, { toggleExpandedForAll, addNodeUnderParent, removeNodeAtPath, changeNodeAtPath } from 'react-sortable-tree';
import './style.css'

import { Box, ButtonFlat, Flex } from 'atoms'


const maxDepth = 5;

 class Tree extends React.Component {
  constructor(props) {
    super(props);
 
  this.state = {
    searchString: '',
    searchFocusIndex: 0,
    searchFoundCount: null,
    treeData: [],
  }

  this.addBranchNode = this.addBranchNode.bind(this)
  this.addClaimNode = this.addClaimNode.bind(this)
  this.updateNode = this.updateNode.bind(this)
  
  this.removeNode = this.removeNode.bind(this)
}

  handleTreeOnChange = treeData => {
    console.log(treeData, 'treeData')
    this.setState({ treeData });
  };

  handleSearchOnChange = e => {
    this.setState({
      searchString: e.target.value,
    });
  };

  selectPrevMatch = () => {
    const { searchFocusIndex, searchFoundCount } = this.state;

    this.setState({
      searchFocusIndex:
        searchFocusIndex !== null
          ? (searchFoundCount + searchFocusIndex - 1) % searchFoundCount
          : searchFoundCount - 1,
    });
  };

  selectNextMatch = () => {
    const { searchFocusIndex, searchFoundCount } = this.state;

    this.setState({
      searchFocusIndex:
        searchFocusIndex !== null
          ? (searchFocusIndex + 1) % searchFoundCount
          : 0,
    });
  };

  toggleNodeExpansion = expanded => {
    this.setState(prevState => ({
      treeData: toggleExpandedForAll({
        treeData: prevState.treeData,
        expanded,
      }),
    }));
  };


  addBranchNode(rowInfo) {
    let NEW_NODE = {
      title: 'Branch',
      isDirectory: true,
      expanded: true 
    };

    const newTree = addNodeUnderParent({
      treeData: this.state.treeData,
      newNode: NEW_NODE,
      expandParent: true,
      parentKey: rowInfo ? rowInfo.treeIndex : undefined,
      getNodeKey: ({ treeIndex }) => treeIndex,
    });
    this.handleTreeOnChange(newTree.treeData);
  }
  
  addClaimNode(rowInfo) {
    let NEW_NODE = {
      title: 'Field',
      isDirectory: false,
      isClaim: true,
      expanded: true ,
      meta: {}
    };

    const newTree = addNodeUnderParent({
      treeData: this.state.treeData,
      newNode: NEW_NODE,
      expandParent: true,
      parentKey: rowInfo ? rowInfo.treeIndex : undefined,
      getNodeKey: ({ treeIndex }) => treeIndex,
    });
    this.handleTreeOnChange(newTree.treeData);
  }

  updateNode(key, event, row) {
    const NEW_NODE = {
      ...row.node,
      meta: {
        ...row.node.meta,
        [key]: event.target.value
      }
    };
    const newTree = changeNodeAtPath({
      treeData: this.state.treeData,
      path: row.path,
      newNode: NEW_NODE,
      // parentKey: rowInfo ? rowInfo.treeIndex : undefined,
      getNodeKey: ({ treeIndex }) => treeIndex,
      ignoreCollapsed: true
    })
    this.handleTreeOnChange(newTree);
  }
  
  removeNode(rowInfo) {
    const { path } = rowInfo;
    const newTree = removeNodeAtPath({
      treeData: this.state.treeData,
      path,
      getNodeKey: ({ treeIndex }) => treeIndex,
    });
    this.handleTreeOnChange(newTree);
  }

  render() {
    const {
      treeData,
      searchString,
      searchFocusIndex,
      searchFoundCount,
    } = this.state;
    return (
        <Flex between height='100%'>
        
        <Box flex={6}>
          <Box card height={'100%'}>
            <div className="tree-wrapper">
              <SortableTree
                treeData={treeData}
                onChange={this.handleTreeOnChange}
                canDrop={canDrop}
                onMoveNode={({ node, treeIndex, path }) =>
                  global.console.debug(
                    'node:',
                    node,
                    'treeIndex:',
                    treeIndex,
                    'path:',
                    path
                  )
                }
                maxDepth={maxDepth}
                searchQuery={searchString}
                searchFocusOffset={searchFocusIndex}
                canDrag={({ node }) => !node.noDragging}
                // canDrop={({ nextParent }) => !nextParent || !nextParent.noChildren}
                canDrop={canDrop}
                searchFinishCallback={matches =>
                  this.setState({
                    searchFoundCount: matches.length,
                    searchFocusIndex:
                      matches.length > 0 ? searchFocusIndex % matches.length : 0,
                  })
                }
                isVirtualized={true}
                generateNodeProps={rowInfo => {
                  console.log(rowInfo, 'rowInfo')
                  switch (rowInfo.node.title) {
                    case 'Branch':
                        return {
                          buttons: [
                            <input
                              placeholder='Key'
                              onChange={(event) => this.updateNode('key', event, rowInfo)}
                              />,
                            <input
                              placeholder='Description'
                              onChange={(event) => this.updateNode('description', event, rowInfo)}
                              style={{margin: '0 10px', width: 200}}
                            />,
                            <button
                              className="btn btn-outline-success"
                              style={{
                                verticalAlign: 'middle',
                              }}
                              onClick={() => this.addClaimNode(rowInfo)}
                            >
                              Add Claim
                            </button>,
                            <button
                              className="btn btn-outline-success"
                              style={{
                                verticalAlign: 'middle',
                              }}
                              onClick={() => this.addBranchNode(rowInfo)}
                            >
                              Add Branch
                            </button>,
                            <button
                              className="btn btn-outline-success"
                              style={{
                                verticalAlign: 'middle',
                              }}
                              onClick={() => this.removeNode(rowInfo)}
                            >
                              Remove Node
                            </button>,
                          ],
                        }
                      break;
                      case 'Field':
                        return {
                          buttons: [
                            <input
                              placeholder='Key'
                              onChange={(event) => this.updateNode('key', event, rowInfo)}
                              />,
                            <input
                              placeholder='Description'
                              onChange={(event) => this.updateNode('description', event, rowInfo)}
                              style={{margin: '0 10px', width: 200}}
                            />,
                            <select onChange={(event) => this.updateNode('type', event, rowInfo)}>
                              <option>Integer</option>
                              <option>Boolean</option>
                              <option>String</option>
                            </select>,
                            <button
                              className="btn btn-outline-success"
                              style={{
                                verticalAlign: 'middle',
                              }}
                              onClick={() => this.removeNode(rowInfo)}
                            >
                              Remove Node
                          </button>,
                          ]
                        }
                    default:
                      break;
                  }
                  return 
              }}
              />
            </div>
          </Box>
        </Box>
        <Box flex={3} ml={25}>
            <div className="bar-wrapper">
            <button onClick={this.toggleNodeExpansion.bind(this, true)}>
              Expand all
            </button>
            <button
              className="collapse"
              onClick={this.toggleNodeExpansion.bind(this, false)}
            >
              Collapse all
            </button>
            <label>Search: </label>
            <input onChange={this.handleSearchOnChange} />
            <button className="previous" onClick={this.selectPrevMatch}>
              Previous
            </button>
            <button className="next" onClick={this.selectNextMatch}>
              Next
            </button>
            <label>
              {searchFocusIndex} / {searchFoundCount}
            </label>
          </div>
          <Flex column>
            <ButtonFlat
              onClick={this.addClaimNode}
              lg palette='blue'>
                Add Claim Field
            </ButtonFlat>
          <ButtonFlat
              onClick={this.addBranchNode}
              mt={25}
              lg palette='green'>
                Add Branch Field
            </ButtonFlat>
          </Flex>
          </Box>
        </Flex>
    );
  }
}

export default Tree

const canDrop = ({ node, nextParent, prevPath, nextPath }) => {
  if (node.isClaim && nextParent && nextParent.isClaim) {
    return false;
  }

  const noKidsDepth = nextPath.indexOf('no-kids');
  if (noKidsDepth >= 0 && nextPath.length - noKidsDepth > 1) {
    return false;
  }

  return true;
};

const BranchMenu = {
  buttons: [
    <button
      className="btn btn-outline-success"
      style={{
        verticalAlign: 'middle',
      }}
      onClick={() => this.addClaimNode(rowInfo)}
    >
      Add Claim
    </button>,
    <button
      className="btn btn-outline-success"
      style={{
        verticalAlign: 'middle',
      }}
      onClick={() => this.addBranchNode(rowInfo)}
    >
      Add Branch
    </button>,
    <button
      className="btn btn-outline-success"
      style={{
        verticalAlign: 'middle',
      }}
      onClick={() => this.removeNode(rowInfo)}
    >
      Remove Node
    </button>,
  ],
}