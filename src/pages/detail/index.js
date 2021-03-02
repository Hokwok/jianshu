import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, Header, Content } from './style';
import { actionCreators } from './store/index';


class Detail extends PureComponent {
    render (){
        return (
            <DetailWrapper>
                <Header>{ this.props.title }</Header>
                <Content
                  dangerouslySetInnerHTML={{__html: this.props.content }}
                //   保证不被content转义
                />
            </DetailWrapper>
        )
    }

    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}



const mapState = (state) =>({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail','content'])
});

const mapDispatch = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapState, mapDispatch)(Detail);