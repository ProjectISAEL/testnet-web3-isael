import { AppWrap, MotionWrap } from "../../wrapper"
import MainButton from '../Buttons/MainButton'
import Metamask from '../../assets/icons/Metamask'
import './styles.scss'

function Checking() {
  return (
    <section id='checking'>
      <div className="checking__text">
        <span className='checking-text'></span>
        <h4 className="instruction-mint">
        CHECK MY NFT: Here you can review all your NFT'S. They'll show up as a list, with teir current stats.
        <br />
        To select the NFT to check, you must go back to the "Mint section" and click either "Inquisitor" or "banners" to use the "Check my NFT'S" button
        <br />
        CHECK MY BASTION: This button allows you to check your current bastion's on your wallet.
        </h4>
      </div>
      <div className='checking'>
        <div className='checking__buttons'>
          <div>
            <MainButton id='nftData' text='Check my NFTs' icon={<Metamask />} />
          </div>
          <div>
            <MainButton id='bastionData' text='Check my Bastion NFT' icon={<Metamask />} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppWrap(
  MotionWrap(Checking, "app__about"),
  "checking"
)
