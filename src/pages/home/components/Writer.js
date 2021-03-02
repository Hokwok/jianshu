import React, { PureComponent } from 'react';
import { WritterWrapper, WriterButton, SearchWritterTitle, SearchWriterSwitch, SearchWriterList, WriterFocus, ViewMore} from '../style';
import { connect } from 'react-redux';

class Writer extends PureComponent {
    render (){
        const { list } = this.props;
        return (
            <div>
            <WritterWrapper>
                <WriterButton>
                <SearchWritterTitle>
                    推荐作者
                </SearchWritterTitle>
                <SearchWriterSwitch>
                <span className="iconfont writer_spin">&#xe851;</span>
                    换一批
                </SearchWriterSwitch>
                </WriterButton>
                { list.map((item, index) => {
                        return (
                            <SearchWriterList key ={ index }>
                                <img className='writer_pic' src={ item.get('imgUrl') } alt=''/>
                                <h3 className='writer_title'>{ item.get('title') }</h3>
                                <p className='writer_desc'>{ item.get('desc') }</p>
                            <WriterFocus>+关注</WriterFocus>
                            </SearchWriterList>
                        )
                    }) }
                <ViewMore>查看更多</ViewMore>
            </WritterWrapper>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'writerList'])
})

export default connect(mapState, null)(Writer);