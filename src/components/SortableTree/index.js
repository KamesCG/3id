import React from 'react';
import idx from 'idx'
import 'react-sortable-tree/style.css'; // This only needs to be imported once in your app
import SortableTree, { toggleExpandedForAll, addNodeUnderParent, removeNodeAtPath, changeNodeAtPath } from 'react-sortable-tree';
import './style.css'

import { Box, ButtonFlat, Flex, Heading } from 'atoms'


const maxDepth = 5;

 class Tree extends React.Component {
  constructor(props) {
    super(props);
 
  this.state = {
    searchString: '',
    searchFocusIndex: 0,
    searchFoundCount: null,
    templateName: undefined,
    templateDescription: undefined,
    treeData: [],
  }

  this.addBranchNode = this.addBranchNode.bind(this)
  this.addClaimNode = this.addClaimNode.bind(this)
  this.updateNode = this.updateNode.bind(this)
  this.removeNode = this.removeNode.bind(this)
  
  this.updateTitle = this.updateTitle.bind(this)
  this.updateDescription = this.updateDescription.bind(this)
  this.submitTemplate = this.submitTemplate.bind(this)
}

updateTitle(e) {
  this.setState({
    templateName: e.target.value
  })
}

updateDescription(e) {
  this.setState({
    templateDescription: e.target.value
  })
}

async submitTemplate(values) {
  const Template = {
    name: this.state.templateName,
    description: this.state.templateDescription,
    fields: ConverTreetoTemplate(this.state.treeData)
  }

  const endpoint = 'http://dapp.rapid-mesh.com/v1/vc/template'
  window.fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhmYTY3ZGRlOTgzNDZkNjAzM2YzZGEwYjE1N2I3MGZlODQzNGE0OGNlIiwibmFtZSI6InRlc3RuYW1lIiwiaWF0IjoxNTY3MDAyMjc1LCJleHAiOjE1NjgyMTE4NzUsImF1ZCI6Imh0dHA6Ly9kYXBwLnJhcGlkLW1lc2guY29tIiwiaXNzIjoiUmFwaWQiLCJzdWIiOiIweGZhNjdkZGU5ODM0NmQ2MDMzZjNkYTBiMTU3YjcwZmU4NDM0YTQ4Y2UifQ.NSEU_N93egm91HyeZgHO1wZHZW_Zx3gR-G9W61VLd9s',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Template)
  })
  .then( async res => {
    console.log(res.headers)
    const json = await res.json()
    console.log(json)
  })
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
            <div className="bar-wrapper">
              <Flex between>
                <button onClick={this.toggleNodeExpansion.bind(this, true)}>
                  Expand all
                </button>
                <button
                  className="collapse"
                  onClick={this.toggleNodeExpansion.bind(this, false)}
                >
                  Collapse all
                </button>
              </Flex>
            </div>
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
            <Box mb={25}>
              <Heading fontSize={[4]} fontWeight={500}>
                Create Template
              </Heading>
              <input type='text' placeholder='Name' onChange={this.updateTitle} />
              <input type='text' placeholder='Description' onChange={this.updateDescription} />
            </Box>
          <Flex column>
            <Flex between>
              <ButtonFlat
                onClick={this.addClaimNode}
                lg flex={1}
                palette='blue'>
                  Add Claim
              </ButtonFlat>
              <ButtonFlat
                  onClick={this.addBranchNode}
                  lg flex={1}
                  palette='blue'>
                  Add Branch
              </ButtonFlat>
            </Flex>
          <ButtonFlat
              onClick={this.submitTemplate}
              mt={25}
              lg palette='green'>
                Submit Template
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

const ConverTreetoTemplate = treeData => {

  return treeData.map( field => {
    if(field.title === 'Field') {
      return {
        key: field.meta.key,
        description: field.meta.description,
        type: field.meta.type,
      }
    }
    if(field.title === 'Branch') {
      return {
        key: field.meta.key,
        description: field.meta.description,
        type: field.meta.type,
        children: ConverTreetoTemplate(field.children)
      }
    }
  })

}


const ExampleTemplate = {
  "name": "KamesCredentialTwo",
  "description": "A Generic Kames Credential",
  "fields": [
    {
      "key": "name",
      "description": "The name of the receiver.",
      "type": "String"
    },
    {
      "key": "description",
      "description": "The name of the credential.",
      "type": "Object",
      "children": [
        {
          "key": "title",
          "description": "The Generic Credential title.",
          "type": "String"
        },
        {
          "key": "tagline",
          "description": "The Generic Credential tagline.",
          "type": "String"
        }
      ]
    }
  ]
}