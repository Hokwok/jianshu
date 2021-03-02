import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem, TopicItemOther } from '../style';

class Topic extends PureComponent {
    render (){
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) => (
                        <TopicItem key={ item.get('id') }>
                            <img
                                className='topic-pic'
                                src={ item.get('imgUrl') } alt='tu'
                            />
                            { item.get('title') }
                        </TopicItem>
                    ))
                }
                <TopicItemOther>
                    更多热门专题
                    <span className="iconfont hotfont">&#xe618;</span>
                </TopicItemOther>
            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'topicList'])
});

export default connect(mapState, null)(Topic);