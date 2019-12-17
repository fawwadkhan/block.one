import React, { Component } from 'react';
import { JsonRpc } from 'eosjs';
import endpoint from '../../endpoint/endpoint';
import BlockInfo from '../commons/BlockInfo';
import Spinner from '../commons/Spinner';
import { setInterval } from 'timers';

class Landing extends Component {

  isComponentMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      maxLimit: 10,
      currLimit: 0,
      blockContainer: [],
      errors: '',
      block: {},
      rpcConnection: ''
    }
    this.getLatestBlocks = this.getLatestBlocks.bind(this);
    this.getBlocks = this.getBlocks.bind(this);
    this.loadLatestBlock = this.loadLatestBlock.bind(this);
    this.intervalOBJ = null;
  }

  loadLatestBlock() {
    this.setState({
      currLimit: 0,
      blockContainer: [],
      block: {}
    });

    this.getLatestBlocks();
  }

  getBlocks() {
    if (this.state.currLimit === this.state.maxLimit) {
      clearInterval(this.intervalOBJ._id);
    } else {
      let rpc = this.state.rpcConnection;
      rpc.get_info().then(data => {
        if (data.head_block_num) {
          if (!this.state.block[data.head_block_num] && this.isComponentMounted) {
            this.setState(() => ({
              block: {
                ...this.state.block,
                [data.head_block_num]: data.head_block_num,
              }
            }));
            rpc.get_block(data.head_block_num).then(block_data => {
              if (block_data && this.isComponentMounted) {
                this.setState({ blockContainer: [...this.state.blockContainer, block_data] })
              }
              if(this.isComponentMounted){
                this.setState({
                  currLimit: this.state.currLimit + 1
                })
              }
              
            }).catch(err => {
              if(this.isComponentMounted){
                this.setState({ errors: 'Failed to fetch block, ' + err })
              }
              
            })
          }
        }
      }).catch(err => {
        if(this.isComponentMounted){
          this.setState({ errors: 'Failed to fetch info, ' + err })
        }
        
      });
    }

  }

  getLatestBlocks() {
    this.intervalOBJ = setInterval(this.getBlocks, 800)
  }

  componentDidMount() {
    this.isComponentMounted = true;
    this.setState({ rpcConnection: new JsonRpc(endpoint) });
    this.getLatestBlocks();
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  render() {

    const { blockContainer } = this.state;

    let blockHeadContainer;

    let submitButtonContainer;

    if (blockContainer.length === 10) {
      blockHeadContainer = blockContainer.map(block => (
        <BlockInfo key={block.block_num} information={block} />
      ))
      submitButtonContainer = (
        <div style={{ margin: '0 auto' }}>
          <input type="submit" value="Load latest blocks" onClick={this.loadLatestBlock} className="btn btn-info btn-block mt-4" />
        </div>
      )
    } else {
      blockHeadContainer = <Spinner count={this.state.currLimit} />
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Latest Blocks</h3>
            <hr />
          </div>
          <div className="col-sm-8"><p className="lead font-weight-bold">BlockID</p></div>
          <div className="col-sm-2"><p className="lead font-weight-bold">Timestamp</p></div>
          <div className="col-sm-2"><p className="lead font-weight-bold">Transactions</p></div>
          {blockHeadContainer}
          {submitButtonContainer}
        </div>
      </div>
    )
  }
}

export default Landing;
