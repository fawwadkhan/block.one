import React, { Component } from 'react';
import arrow from '../../img/arrow.png';

class BlockInfo extends Component {

    constructor(props) {
        super(props);
        this.showBlockInfo = this.showBlockInfo.bind(this);
        this.state = {
            showBlockInfoContainer: false
        }
    }

    showBlockInfo() {
        this.setState({
            showBlockInfoContainer: !this.state.showBlockInfoContainer
        })
    }


    render() {

        const blockContainerFlag = this.state.showBlockInfoContainer;

        let blockContainerHTML;

        let styles = { backgroundColor: '#eff0f1', padding: '15px', margin: '10px 50px', width: '90%', fontSize: '14px' };

        if (blockContainerFlag) {
            blockContainerHTML = (
                <div style={styles}>
                    <div><span style={{ fontWeight: 'bold' }}>Id:</span></div><div><span>{this.props.information.id}</span></div>
                    <div><span style={{ fontWeight: 'bold' }}>Producer:</span></div><div><span>{this.props.information.producer}</span></div>
                    <div><span style={{ fontWeight: 'bold' }}>Block_num:</span></div><div><span>{this.props.information.block_num}</span></div>
                    <div><span style={{ fontWeight: 'bold' }}>Ref_block_prefix:</span></div><div><span>{this.props.information.ref_block_prefix}</span></div>
                    <div><span style={{ fontWeight: 'bold' }}>Timestamp:</span></div><div><span>{this.props.information.timestamp}</span></div>
                    <div><span style={{ fontWeight: 'bold' }}>Schedule_version:</span></div><div><span>{this.props.information.schedule_version}</span></div>
                    <div><span style={{ fontWeight: 'bold' }}>Action_mroot:</span></div><div><span>{this.props.information.action_mroot}</span></div>
                    <div><span style={{ fontWeight: 'bold' }}>Producer_signature:</span></div><div><span>{this.props.information.producer_signature}</span></div>
                    <div><span style={{ fontWeight: 'bold' }}>No. of Transactions:</span></div><div><span>{this.props.information.transactions.length}</span></div>
                </div>
            )
        }

        return (
            <div className="container" onClick={this.showBlockInfo}>
                <div className="row" style={{ cursor: 'pointer' }}>
                    <div className="col-sm-8"><img src={arrow} alt="Pointer" />{this.props.information.id}</div>
                    <div className="col-sm-2">{this.props.information.timestamp}</div>
                    <div className="col-sm-2">{this.props.information.transactions.length}</div>
                </div>
                <div className="row">
                    {blockContainerHTML}
                </div>
            </div>
        );
    }


}

export default BlockInfo;