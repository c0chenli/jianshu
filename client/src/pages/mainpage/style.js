import styled from "styled-components";
import backgroundPic from '../../statics/background_lg.png';

export const MainPageWrapper = styled.div`
    overflow: hidden;
    margin: 0 auto;
`;

export const UpWrapper = styled.div`
    z-index: -1;
    overflow: hidden;
    max-width: 100%;
    height: 600px;
    margin: 0 auto;
    background: url(${backgroundPic});
    background-repeat: no-repeat;
    background-position: center;
    opacity: 1;
    &.start {
        color: #fff;
        background: #ec6149;
        padding-left: 50px;
    }
`;

export const Button = styled.div`
    float: left;
    margin-top: 30px;
    margin-left: 20%;
    padding: 0 20px;
    line-height:38px;
    border-radius: 19px;
    border: 1px solid #eb6f5a;
    font-size: 14px;
    &.start {
        color: #fff;
        background: #eb6f5a;
    }
`;

export const Title = styled.div`
    z-index: 0;
    margin: 80px 0 0 20%;
    @media (min-width: 768px) {  
        font-size: 50px;
    }
    @media (max-width: 768px) {
        font-size: 30px;
    }
    color: #eb6f5a;
    font-weight: bold;
`;

export const Description = styled.div`
    margin: 30px 0 0 20%;
    @media (min-width: 768px) {  
        font-size: 20px;
    }
    @media (max-width: 768px) {
        font-size: 13px;
    }
    color: white;
    line-height: 1.6;
`;
export const Logan = styled.div`
    margin: 30px 0 0 20%;
    @media (min-width: 768px) {  
        font-size: 22px;
    }
    @media (max-width: 768px) {
        font-size: 14px;
    }
    color: #eb6f5a;
    line-height: 1.6;
    font-weight: bold;
`;

export const FeatureWrapper = styled.div`
    width: 100%;
    height: 240px;
    margin: 0 auto;
    //border: 1px solid black;
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap; /* Safari 6.1+ */
    
`;

export const FeatureItem = styled.div`
    //flex: 1;
    //-webkit-flex: 1;  /* Safari 6.1+ */
    //-ms-flex: 1;  /* IE 10 */
    width: 25%;
    height: 260px;
`;

export const Desc = styled.div`
    padding: 15px;
    text-align: center;
    color: #eb6f5a;
    @media (min-width: 768px) {  
        font-size: 12px;
        line-height: 1.6;
    }
    @media (max-width: 768px) {
        font-size: 10px;
        line-height: 1.2;
    }
`;

export const ImgWrapper = styled.div`

    @media (min-width: 768px) { 
        width: 90px;
        height: 90px;
        .image{
            margin-top: 10px;
            width: 64px;
            height: 64px;
        }
    }
    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
        .image{
            margin-top: 5px;
            width: 32px;
            height: 32px;
        }
    }
    position: relative;
    margin: auto;
    text-align: center;
    display: block;
    background: #eb6f5a;
    border-radius: 45px;
    //padding-top: 10px;
`;

export const FeatureHeader = styled.div`
    padding: 15px;
    text-align: center;
    
    @media (min-width: 768px) {  
        font-size: 23px;
    }
    @media (max-width: 768px) {
        font-size: 14px;
    }
    font-weight: bold;
    color: #eb6f5a;
`;

export const ExpertsWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 30px;
    margin: 0 auto;
    text-align: center;
    background: #eb6f5a;
    color: white;
    padding: 20px;
    @media (min-width: 768px) {  
        font-size: 25px;
    }
    @media (max-width: 768px) {
        font-size: 15px;
    }
    font-weight: bold;
`;

export const RapWrapper = styled.div`
    width: 100%;
    @media (min-width: 768px) {  
        height: 360px;
    }
    @media (max-width: 768px) {
        height: 300px;
    }
    margin: 0 auto;
    //border: 1px solid black;
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap; /* Safari 6.1+ */
    
`;

export const ProfileWrapper = styled.div`

    position: relative;
    margin: 15px auto;
    text-align: center;
    display: block;
    //background: #eb6f5a;
    border-radius: 75px;
    //padding-top: 10px;
    @media (min-width: 768px) {  
        height: 150px;
        .image{
            //margin-top: 10px;
            border-radius: 75px;
            width: 150px;
            height: 150px;
        }
    }
    @media (max-width: 768px) {
        height: 75px;
        .image{
            border-radius: 35px;
            width: 75px;
            height: 75px;
        }
    }
`;

export const DownWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 100px;
    margin: 0 auto;
    text-align: center;
    background: #eb6f5a;
    color: white;
    padding: 20px;
    @media (min-width: 768px) {  
        font-size: 25px;
    }
    @media (max-width: 768px) {
        font-size: 15px;
    }
    font-weight: bold;
`;

export const ButtonDown = styled.div`
    width: 150px;
    margin: 30px auto;
    padding: 0 20px;
    line-height:38px;
    border-radius: 19px;
    border: 1px solid #eb6f5a;
    font-size: 16px;
    &.bottom {
        color: #eb6f5a;
        background: #fff;
    }
`;