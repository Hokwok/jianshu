import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore  } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store/index';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render (){
        const { list, getMoreList, page } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            // <a key={index} href='/detail'>
                            <Link key={index} to={'/detail/' + item.get('id')}>
                            <ListItem key={ index }>
                                <img
                                className='pic'
                                src={ item.get('imgUrl') } alt='tu'
                                />
                                <ListInfo>
                                    <h3 className='title'>{ item.get('title') }</h3>
                                    <p className='desc'>{ item.get('desc') }</p>
                                </ListInfo>
                            </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={ () => getMoreList(page) }>更多文字</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
})
export default connect(mapState, mapDispatch)(List);