import {Link} from 'react-router-dom'
import testimage1 from '../assets/images/anime.jpg';
import {Helmet} from 'react-helmet-async'

const Register = () => {
  return (
    <>
    <Helmet>
        <title>Manga Swipe - Register Page</title>
        <link rel="canonical" href="/register" />
        <meta name="description" content="website for reading latest manga" />
    </Helmet>
    <section className="page__section mb-[100px]">
      <div className="page__div">
        <div className="w-[300px] my-8">
          <h1 className="mangaHead border-[#EFC416]">
            <span className="text-2xl font-bold">Hello !</span> My Fellow Otaku
          </h1>
          <p>
            Heared you like Reading Manga. Dive in to the world of all Manga and
            Manhwa!
          </p>
        </div>
        <form className="form__style">
          <input type="text" placeholder="Name" className="form__input" />

          <input type="text" placeholder="LastName" className="form__input" />

          <input type="text" placeholder="Email" className="form__input" />

          <input type="text" placeholder="Password" className="form__input" />

          <input type="text" placeholder="Confirm Password" className="form__input" />

          <div className="mt-4 space-y-3 space-x-2">
            <button className="form__btn1">
              Sign Up
            </button>
            <Link to="/login">
              <button className="form__btn2">
                Sign in ?
              </button>
            </Link>
            <Link to="/reset">
              <p className="mt-4 cursor-pointer">Forgot Password?</p>
            </Link>
          </div>
        </form>
      </div>

      <div className="hidden lg:flex w-[500px] bg-[#EFC416]">
        <img src={testimage1} alt="Register-page" className="opacity-[0.5] rounded-r-2xl"/>
      </div>
    </section>
    </>
  );
};

export default Register;
