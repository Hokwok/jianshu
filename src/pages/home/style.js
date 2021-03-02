import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;


export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    float: right;
    width: 280px;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;
        float: left;
        width:32px;
        height:32px;
        margin-right: 10px;
    }
`;

export const TopicItemOther = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    font-size: 14px;
    color: #000;
    border-radius: 4px;
    .hotfont {
        font-size: 10px;
        margin-left: 5px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid  #dcdcdc;
    .pic {
        display: block;
        float: right;
        width: 125px;
        height: 100px;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const RecommedWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommedItem = styled.div`
    width: 280px;
    height: 50px;
    margin: 5px 0;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;

export const WritterWrapper = styled.div`
    over-float: hidden;
    width: 278px;
    border-radius: 3px;
    height: 500px;
    line-height: 300px;
`;

export const WriterButton = styled.div`
    display: block;
    over-float: hidden;
    width: 100%;
    height: 30px;
`;

export const SearchWritterTitle = styled.div`
    float: left;
    margin-top: 15px;
    margin-bottom: 20px;
    line-height: 10px;
    font-size: 14px;
    color: #969696;
`;

export const SearchWriterSwitch = styled.div`
    float: right;
    margin-top: 15px;
    margin-bottom: 20px;
    line-height: 10px;
    font-size: 14px;
    color: #969696;
    cursor: pointer;
    .writer_spin {
        font-size: 13px;
    }
`;

export const SearchWriterList = styled.div`
    display: block;
    width: 270px;
    margin-top: 15px;
    line-height: 50px;
    .writer_pic {
        float: left;
        margin: 10px 10px;
        width: 50px;
        border-radius: 25px;
        background-size: contain;
    }
    .writer_title {
        padding-top: 15px;
        width: 180px;
        line-height: 20px;
        font-size: 14px;
        font-weight: bold;
        color: #333;
    }
    .writer_desc {
        line-height: 24px;
        font-size: 13px;
        color: #999; 
    }
`;

export const WriterFocus = styled.div`
    float: right;
    line-height: 20px; 
    font-size: 13px;
    cursor: pointer;
    color: #42c02e;
`;

export const ViewMore = styled.div`
    width: 270px;
    height: 30px;
    line-height: 30px;
    margin: 30px 0;
    background: #f7f7f7;
    text-align: center;
    border: 2px solid #dcdcdc;
    border-radius: 5px;
    color: #787878;
    cursor: pointer;
`;

export const DownloadScan = styled.div`
    overfloat: hidden;
    margin-top: 15px;
    margin-bottom: 10px;
    padding: 10px 22px;
    width: 232px;
    height: 80px;
    border: 2px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    .rec-pic {
        display: block;
        float: left;
        width:60px;
        height:60px;
        margin-top: 10px;
        margin-right: 10px;
    }
    .rec-title {
        margin-top: 10px;
        line-height: 27px;
        font-size: 15px;
        font-weight: 500;
        color: #333;
    }
    .recicon {
        font-size: 10px;
        margin-left: 5px;
    }
    .rec-desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
    cursor: pointer;
    .toTop_spin{
        font-size: 30px;
        color: #333;
    }
`;
