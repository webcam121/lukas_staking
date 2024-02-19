import React , { useState , Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import Countdown from "react-countdown";
import CardModal from '../CardModal';

const ItemContent = () => {
    const [dataTab] = useState(
        [
            {
                id: 1,
                title: "Contracts",
            },
            {
                id: 2,
                title: "Watchlist",
            },
        ]
    )
    const [dataPanel] = useState(
        [
            {
                id: 1,
                dataContent: [
                    {
                        id: 1,
                        title: "USDT",
                        tags: "ETH",
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 2,
                        title: "USDT",
                        tags: "ETH",
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 3,
                        title: "USDT",
                        tags: "bsc",
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 4,
                        title: "USDT",
                        tags: "bsc",
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 5,
                        title: "USDT",
                        tags: "bsc",
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 6,
                        title: "USDT",
                        tags: "bsc",
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 7,
                        title: "USDT",
                        tags: "bsc",
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 8,
                        title: "USDT",
                        tags: "bsc",
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 9,
                        title: "USDT",
                        tags: "bsc",
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 10,
                        title: "USDT",
                        tags: "bsc",
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 11,
                        title: "USDT",
                        tags: "bsc",
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 12,
                        title: "USDT",
                        tags: "bsc",
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 13,
                        title: "USDT",
                        tags: "bsc",
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 14,
                        title: "USDT",
                        tags: "bsc",
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 15,
                        title: "USDT",
                        tags: "bsc",
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },               
                ]
            },
            {
                id: 2,
                dataContent: [
                    {
                        id: 1,
                        title: "USDC",
                        tags: "ETH",
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 2,
                        title: "USDC",
                        tags: "ETH",
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 3,
                        title: "USDC",
                        tags: "ETH",
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 4,
                        title: "USDC",
                        tags: "ETH",
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 5,
                        title: "USDC",
                        tags: "ETH",
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 6,
                        title: "USDC",
                        tags: "ETH",
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                ]
            },
        ]
    )

    const [visible , setVisible] = useState(15);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 5);
    }

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
                            <div className="option">
                                <h2 className="title text-warning">Contract Address's</h2>
                            </div>
                            <div className="content-item2 open">
                                {
                                    data.dataContent.slice(0,visible).map((item,index)=> (
                                    <div key={index} className="col-item">
                                        <div className="sc-card-product menu_card style-h7">
                                            <div className="card-title">
                                                <p>Token Name</p>
                                                <h4><Link to="/item-details-01">{item.title}</Link></h4>
                                            </div>
                                            <div className="meta-info style">
                                                <p>Token Symbol</p>
                                                <div className="author">
                                                    <div className="info">
                                                        <h4> <Link to="author02.html">{item.nameAuthor}</Link> </h4>
                                                    </div>
                                                </div>
                                            </div>     
                                            <div className="countdown">
                                                <p>Age</p>
                                                <div className="featured-countdown">
                                                    <span className="slogan"></span>
                                                    <Countdown date={Date.now() + 500000000}>
                                                        <span>You are good to go!</span>
                                                    </Countdown>
                                                </div>
                                            </div>
                                            <div className="wrap-tag">
                                                <div className="tags">{item.tags}</div>
                                            </div>
                                            <div className="wrap-hear">
                                                <button className="wishlist-button heart"><span className="number-like"> {item.wishlist}</span></button>
                                            </div>
                                            <div className="button-place-bid">
                                                <button onClick={() => setModalShow(true)} data-toggle="modal" data-target="#popup_bid" className="sc-button style-place-bid style bag fl-button pri-3"><span>Save</span></button>
                                            </div>
                                            <div className="button-place-bid ml-5">
                                                <button onClick={() => setModalShow(true)} data-toggle="modal" data-target="#popup_bid" className="sc-button style-place-bid style bag fl-button pri-3"><span>Open</span></button>
                                            </div>
                                        </div>   
                                    </div>
                                    ))
                                }
                                {
                                    visible < data.dataContent.length && 
                                    <div className="col-md-12 wrap-inner load-more text-center btn-auction item center">
                                        <Link to="#" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                                    </div>
                                }
                            </div>
                            
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