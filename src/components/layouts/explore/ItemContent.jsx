import React , { useState , Fragment } from 'react'
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import { Table } from 'antd';
import CardModal from '../CardModal';

const ItemContent = () => {
    const [dataTab] = useState(
        [
            {
                id: 1,
                title: "Live Creations",
            },
            {
                id: 2,
                title: "Alerts",
            },
            {
                id: 3,
                title: "Red Wallets",
            },
            {
                id: 4,
                title: "Manual Picks",
            },
        ]
    )
    const [dataPanel] = useState(
        [
            {
                id: 1,
                dataContent: [
                    {
                        id: 120,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 121,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 122,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 123,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 124,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 125,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 126,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },              
                ]
            },
            {
                id: 2,
                dataContent: [
                    {
                        id: 120,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 121,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 122,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 123,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 124,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 125,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 126,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },              
                ]
            },
            {
                id: 3,
                dataContent: [
                    {
                        id: 120,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 121,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 122,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 123,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 124,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 125,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 126,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },              
                ]
            },
            {
                id: 4,
                dataContent: [
                    {
                        id: 120,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 121,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 122,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 123,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 124,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 125,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },   
                    {
                        id: 126,
                        datetime: "10/2/24 10:00:23",
                        deployer: "0xF23dkow0320330234900de23",
                        address: "0xF23dkow0320330234900de23",
                        tName: "satoshiETH",
                        tSymbol: "ETH",
                        review: "Etherscan",
                    },              
                ]
            },
        ]
    )
    const dataColumns = [
        {
          title: 'No',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Date / Time',
          dataIndex: 'datetime',
          key: 'datetime',
        },
        {
          title: 'Deployer',
          dataIndex: 'deployer',
          key: 'deployer',
        },
        {
          title: 'Contract Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Token Name',
          dataIndex: 'tName',
          key: 'tName',
        },
        {
          title: 'Token Symbol',
          dataIndex: 'tSymbol',
          key: 'tSymbol',
        },
        {
          title: 'Review',
          dataIndex: 'review',
          key: 'review',
        },
      ];
    const [modalShow, setModalShow] = useState(false);
  return (
    <Fragment>
        <div className="flat-tabs items">
            <Tabs >
                <TabList>
                    {
                        dataTab.map(data=> (
                            <Tab key={data.id} >{data.title}</Tab>
                        ))
                    }
                </TabList>
                {
                    dataPanel.map(data =>(
                        <TabPanel key={data.id}>
                            <Table dataSource={data.dataContent} columns={dataColumns} className="custom-header"></Table>
                        </TabPanel>
                    ))
                }
            </Tabs>
        </div>
        <CardModal
        show={modalShow}
        onHide={() => setModalShow(false)}
         />
        
    </Fragment>
  )
}

export default ItemContent