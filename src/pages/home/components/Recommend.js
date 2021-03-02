import React, { PureComponent } from 'react';
import { RecommedWrapper, RecommedItem, DownloadScan } from '../style';
import { connect } from 'react-redux';

class Recommend extends PureComponent {
    render (){
        return (
                <RecommedWrapper>
                    { 
                        this.props.list.map((item) => {
                            return <RecommedItem imgUrl={item.get('imgUrl')} key={ item.get('id') }/>
                        })
                    }
                    <DownloadScan>
                        <img className='rec-pic' src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png' alt=''/>
                        <h3 className='rec-title'>
                            下载简书手机App
                            <span className="iconfont recicon">&#xe618;</span>
                        </h3>
                        <p className='rec-desc'>随时随地发现和创作内容</p>
                    </DownloadScan>
                </RecommedWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend);