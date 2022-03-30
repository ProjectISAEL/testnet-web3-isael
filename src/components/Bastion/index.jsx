import { BastionFooter } from './bastion-items'
import { AppWrap, MotionWrap } from "../../wrapper"
import './styles.scss'

function Bastion() {
  return (
    <section id='bastion'>
      <div className='app__text-bastion'>
        <span className='text-bastion'></span>
        <h4 className='instruction-mint'>
          Create Bastion, add inquisitor, banner or burn the bastion. <br />
          Create: First line. Add the token ID of the Inquisitors or Banners on their respective boxes, then just click "Mint Bastion"
          <br />
          Addition: To add more, inquisitors or banners to your current bastion. Add the Token ID of the Inquisitor (Add Banner box) or banner (Add Inquisitor Box). And the Bastion ID at the "Token ID" box.
          <br />
          Burn: To burn a bastion, Put the ID at the "Token Bastion" and click "Burn Bastion"
        </h4>
      </div>
      <BastionFooter />
    </section>
  )
}

export default AppWrap(
  MotionWrap(Bastion, "app__about"),
  "bastion"
)
