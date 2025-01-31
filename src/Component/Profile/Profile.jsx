
import './Profile.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
// import Categories from '../Categories/Categories';


const Profile = () => {
const navigate = useNavigate()

  return (
    <div className='Profilebody'>
      <div className='Profilemain'>
        <Header />
        <div className='Profilecontainer'>
          <article className='Profilecontainerheader'>
            <h3 className='Profilecontainerheaderptag'>Expense</h3>
            <main className='Profilecontainermain'>
              <button className='Profilecontainermainbut' onClick={() => navigate("/")}>Log out</button>
            </main>
          </article>
          <article className='Profilecontainerdiv2'>
            <p className='Profilecontainerdiv2text'>
              Financial services companies spend 50% less time on expense
              management with Expensify
            </p>
            <div className='Profilecontainerdiv2card' onClick={() => navigate("/food")}>
            <span className='Profilespanbut'>
                    <button className='Profilebutton'></button>
                    </span>
                    <img src = "public/Premium Vector _ Illustration of a pink piggy bank with a golden coin_ 1.png" className='Profileimage'/>
                    <h3 className='profilemaintext'>Control expenses for food, Travelling and also entertainment</h3>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Profile;
