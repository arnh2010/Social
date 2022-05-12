import React from 'react';

class ProfileInfoStatus extends React.Component {
   state = {
        isStatusRedacting: false,
        StatusText: this.props.status
    }

    componentDidUpdate(prevProps,prevState){
        if (prevProps.status !== this.props.status){this.setState({ StatusText:this.props.status })}
        }

    statusRedactorOn = () => {
        this.setState({ isStatusRedacting: true })
    }

    statusRedactorOff = (e) => {
        this.setState({ isStatusRedacting: false })
        this.props.putUserStatus(e.currentTarget.value)
    }

    onStatusChange=(e)=>{
        this.setState({StatusText:e.currentTarget.value})}
            
        render() {
              return (
            <div>
            {!this.state.isStatusRedacting && <div onDoubleClick={this.statusRedactorOn} >Статус: {this.props.status}</div>}
            {this.state.isStatusRedacting && <input autoFocus={true} onBlur={this.statusRedactorOff} onChange={this.onStatusChange} value={this.state.StatusText}/>}
            </div>
        )
    }
}

export default ProfileInfoStatus;