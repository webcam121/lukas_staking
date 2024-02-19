import Home from "./Home";
import Explore from "./Explore";
import WalletConnect from "./WalletConnect";


const routes = [
  { path: '/', component: <Home />},
  { path: '/explore', component: <Explore />},
  { path: '/wallet-connect', component: <WalletConnect />},
]

export default routes;