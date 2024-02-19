import React from 'react';
import { Flex, Input, Typography, Button} from 'antd';

const SideBar = () => {
    const colorStyle = {
        background: '#5142fc', 
        color :'white', 
        border: '1px solid black',
        fontWeight: 'bold',
        margin: '0px 5px',
        fontSize: '10px'
    };
    return (
        <div id="side-bar" className="side-bar style-3 item">
            <div className="widget widget-filter style-1 mgbt-0">
                <div className="header-widget-filter">
                    <h4 className="title-widget">Filter</h4>
                </div>
            </div>    
            <div className="divider"></div>    
            <div className="wrap-category mt-5">
                <div className="widget widget-category boder-bt explore">
                    <h4 className="title-widget">ERC-20</h4>
                    <Flex vertical gap={16}>
                        <div>
                            <Typography.Title level={5} style={{color :'#8a8aa0'}}>Token Name</Typography.Title>
                            <Input
                                size="small"
                                placeholder="satoshiEVM"
                            />
                        </div>
                        <div>
                            <Typography.Title level={5} style={{color :'#8a8aa0'}}>Token Symbol</Typography.Title>
                            <Input
                                size="small"
                                placeholder="SEVM"
                            />
                        </div>
                        <div>
                            <Typography.Title level={5} style={{color :'#8a8aa0'}}>Telegram x</Typography.Title>
                        </div>
                        
                    </Flex>
                </div>
                <div className='d-flex flex-row-reverse'>
                    <Button style={colorStyle} size="small">CREATE ALERT</Button>  
                    <Button style={colorStyle} size="small">RESET</Button>
                </div>
            </div>
        </div>
    );
}

export default SideBar;