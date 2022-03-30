import ReactTooltip from 'react-tooltip'
import Input from "../../container/Input"
import MainButton from '../Buttons/MainButton'
import ImageBastion from '../../assets/banner/icon_bastion.png'
import { MdHealthAndSafety } from 'react-icons/md'
import { AiOutlineUserAdd, AiFillFire } from 'react-icons/ai'
import { BsBoxSeam } from 'react-icons/bs'

const inputsBastion = [
  {
    id: 'tokenIdsOfBanner',
    label: 'Banner'
  },
  {
    id: 'tokenIdsOfInquisitors',
    label: 'inquisitors'
  }
]

const inputsBanner = [
  {
    id: 'addBanners',
    label: 'Add Banners',
  },
  {
    id: 'AddBanners',
    label: 'Token Id',
  }
]

const inputsInquisitors = [
  {
    id: 'addInquisitors',
    label: 'Add Inquisitor'
  },
  {
    id: 'tokenIdBastionINQ',
    label: 'Token id'
  },
]

export const BastionFooter = () => {
  return (
    <div className='bastion__footer'>
      <div className='bastion__img'>
        <img src={ImageBastion} alt='Bastion Illustration' />
      </div>
      <div className='app__input'>
        <div className='input__bastion' style={{ marginBottom: '20px' }}>
          {inputsBastion.map((items,i) => (
            <Input id={items.id} label={items.label} key={i} />
          ))}
          <MainButton id='mintBastion' text='Mint Bastion' color='rgb(225 15 15)' icon={<BsBoxSeam color='rgb(225 15 15)' size={24} />} />
	  <ReactTooltip data-id data-for='mintBastion'>First line. Add the token ID of the Inquisitors or Banners on their respective boxes, then just click "Mint Bastion"</ReactTooltip>
        </div>

        <div className='input__bastion'>
          {inputsBanner.map((items,i) => (
            <Input id={items.id} label={items.label} key={i} />
          ))}
          <MainButton id='addBannersBTN' text='Add Banners' icon={<AiOutlineUserAdd color='#ff8e00' size={24} />} />
	  <ReactTooltip data-id data-for='addBannersBTN'>To add more, inquisitors or banners to your current bastion. Add the Token ID of the Inquisitor (Add Banner box) or banner (Add Inquisitor Box). And the Bastion ID at the "Token ID" box.</ReactTooltip>
        </div>

        <div className='input__inquisitors'>
          {inputsInquisitors.map((items, i) => (
            <Input id={items.id} label={items.label} key={i} />
          ))}
          <MainButton id='addInquisitorsBTN' text='Add Inquisitors' icon={<AiOutlineUserAdd color='#ff8e00' size={24} />} />
	  <ReactTooltip data-id data-for='addInquisitorsBTN'>To add more, inquisitors or banners to your current bastion. Add the Token ID of the Inquisitor (Add Banner box) or banner (Add Inquisitor Box). And the Bastion ID at the "Token ID" box.</ReactTooltip>
        </div>

        <div className='input__health'>
          <Input id='tokenIdofBastionToBurn' label='Token Bastion' />
          <MainButton
	          id='burnBastion' 
	          color='#f04005' 
	          text='Burn Bastion' 
	          icon={<AiFillFire color='#f04005' size={24} />}
            />
	 <ReactTooltip data-id data-for='burnBastion'>To burn a bastion, Put the ID at the "Token Bastion" and click "Burn Bastion"</ReactTooltip>
        </div>
      </div>
  </div>
  )
}
