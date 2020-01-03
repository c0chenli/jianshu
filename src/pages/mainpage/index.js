import React, { Component } from 'react';
import {
    MainPageWrapper,
    UpWrapper,
    Title,
    Description,
    Logan,
    FeatureWrapper,
    FeatureItem,
    Desc,
    ImgWrapper,
    FeatureHeader,
    ExpertsWrapper,
    RapWrapper,
    ProfileWrapper,
    DownWrapper,
    ButtonDown
} from './style';
import {Button} from "../../pages/mainpage/style";
import {Link} from "react-router-dom";
import bars from '../../statics/bars.png';

class MainPage extends Component{

    render() {
        return(
            <MainPageWrapper>
                <UpWrapper>
                    <Title>硅谷创客</Title>
                    <Logan>
                        让创业从一开始就与硅谷无缝连接<br/>
                    </Logan>
                    <Description>
                        在这创立并分享您的创业创意<br/>
                        您将收获来自美国硅谷顶级的资源<br/>
                        投资人、创业导师和合伙人、创业服务
                    </Description>
                    <Link to='/login'>
                        <Button className='start'>
                            加入创客
                        </Button>
                    </Link>
                </UpWrapper>
                <br/><br/>
                <FeatureWrapper>
                    <FeatureItem>
                        <ImgWrapper>
                            <img className="image" alt="" src="https://res.cloudinary.com/jijuncai/image/upload/v1570489668/startups-space/mainpage/connect_kzel7i.png"/>
                        </ImgWrapper>
                        <FeatureHeader>连接</FeatureHeader>
                        <Desc>拥有这个生态里的资源, 创业公司更容易成功</Desc>
                    </FeatureItem>
                    <FeatureItem>
                        <ImgWrapper>
                            <img className="image" src="https://res.cloudinary.com/jijuncai/image/upload/v1570490115/startups-space/mainpage/innovation_kh8kgx.png" alt="" />
                        </ImgWrapper>
                        <FeatureHeader>激发</FeatureHeader>
                        <Desc>生态里的力量激发企业的自我增长</Desc>
                    </FeatureItem>
                    <FeatureItem>
                        <ImgWrapper>
                            <img className="image" src="https://res.cloudinary.com/jijuncai/image/upload/v1570490479/startups-space/mainpage/deal_t70ysg.png" alt="" />
                        </ImgWrapper>
                        <FeatureHeader>协作</FeatureHeader>
                        <Desc>创业导师和专业的创业服务让你的创业公司健康成长</Desc>
                    </FeatureItem>
                    <FeatureItem>
                        <ImgWrapper>
                            <img className="image" src={bars} alt="" />
                            {/*<img src="https://res.cloudinary.com/jijuncai/image/upload/v1570490580/startups-space/mainpage/bars_rci3gp.png" alt="" />*/}
                        </ImgWrapper>
                        <FeatureHeader>增长</FeatureHeader>
                        <Desc>尖端技术的生态系统有效提升公司的战略和策略</Desc>
                    </FeatureItem>
                </FeatureWrapper>
                <ExpertsWrapper>
                    我们的投资人、创业导师顾问代表
                </ExpertsWrapper>
                <br/><br/>
                <RapWrapper>
                    <FeatureItem>
                        <ProfileWrapper>
                            <img className="image" alt="" src="https://res.cloudinary.com/jijuncai/image/upload/v1570663393/startups-space/mainpage/hongmiao_ebezsn.png"/>
                        </ProfileWrapper>
                        <FeatureHeader>洪淼</FeatureHeader>
                        <Desc>美国硅谷未来资本创始合伙人，主要投资人工智能和生命科学领域</Desc>
                    </FeatureItem>
                    <FeatureItem>
                        <ProfileWrapper>
                            <img className="image" src="https://res.cloudinary.com/jijuncai/image/upload/v1570664426/startups-space/mainpage/dinah_pev5tg.png" alt="" />
                        </ProfileWrapper>
                        <FeatureHeader>黛娜</FeatureHeader>
                        <Desc>硅谷创投合伙人，拥有国内高端人脉，投资了多家填补国内空白的高科技项目</Desc>
                    </FeatureItem>
                    <FeatureItem>
                        <ProfileWrapper>
                            <img className="image" src="https://res.cloudinary.com/jijuncai/image/upload/v1570665582/startups-space/mainpage/lamoshi_qe58hz.png" alt="" />
                        </ProfileWrapper>
                        <FeatureHeader>拉莫斯</FeatureHeader>
                        <Desc>创业导师，硅谷，德国，西班牙，法国，瑞典，丹麦和象牙海岸等初创公司的导师</Desc>
                    </FeatureItem>
                    <FeatureItem>
                        <ProfileWrapper>
                            <img src="https://res.cloudinary.com/jijuncai/image/upload/v1570666384/startups-space/mainpage/lym_poi9rw.png" alt="" />
                        </ProfileWrapper>
                        <FeatureHeader>李亦明</FeatureHeader>
                        <Desc>中国泛海美国控股有限公司首席执行官,主要投资金融、保险等领域</Desc>
                    </FeatureItem>
                </RapWrapper>
                <br/>
                <DownWrapper>
                    <div>只需要轻松的几步，加快你的创业保障和步伐</div>
                    <Link to='/login'>
                        <ButtonDown className='bottom'>
                            加入创客
                        </ButtonDown>
                    </Link>
                </DownWrapper>


            </MainPageWrapper>
        )
    }
}

export default MainPage;