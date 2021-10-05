import DescriptionSharpIcon from '@material-ui/icons/DescriptionSharp';
import './SayHello.scss';

// @assets
import handshake from '../../assets/handshake.svg';

const SayHello = () => {
  return (
    <div className='sayhello container'>
      <div className='sayhello__container'>
        <div className='sayhello__img'>
          <img src={handshake} alt='handshake' />
        </div>
        <div className='sayhello__text'>
          <div className='sayhello__bio'>
            <h2>got work for me?</h2>
            <h3>
              you may have heard of my infectious awesomeness and want to say
              hello. you can find me here:
            </h3>
          </div>

          <div className='sayhello__resume'>
            <a
              href='https://drive.google.com/file/d/1j84xgppUd3bbSQNtGXe-vjuKKP6_KkFC/view?usp=sharing'
              target='__blank'
            >
              <DescriptionSharpIcon /> <span>resume(dot)pdf</span>
            </a>
          </div>

          <div className='sayhello__links'>
            <div className='sayhello__email'>
              <a href='mailto:adekyte@gmail.com' target='__blank'>
                <p>adekyte@gmail.com</p>
              </a>
            </div>

            <div className='sayhello__socials'>
              <a href='https://github.com/sambabib' target='__blank'>
                <p>github</p>
              </a>
              <a
                href='https://www.linkedin.com/in/emmanuel-akala-8768871b1/'
                target='__blank'
              >
                <p>linkedIn</p>
              </a>
              <a href='https://twitter.com/__kitts' target='__blank'>
                <p>twitter</p>
              </a>
              <a href='https://www.instagram.com/__kitts/' target='__blank'>
                <p>instagram</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SayHello;
