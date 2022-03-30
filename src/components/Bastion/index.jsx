import { BastionFooter } from './bastion-items'
import { AppWrap, MotionWrap } from "../../wrapper"
import './styles.scss'

function Bastion () {
  return (
    <section id='bastion'>
      <div className='app__text-bastion'>
        <span className='text-bastion'></span>
        <h4 className='instruction-mint'>
          Create Bastion, add inquisitor, banner or burn the bastion. 
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
