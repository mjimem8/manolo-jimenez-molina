import { Header } from './components/header';
import { AboutMe } from './components/aboutMe';
import { MyResume } from './components/myResume';
import { Skills } from './components/skills';
import { MyServices } from './components/myServices';
import { Works } from './components/works';
import { News } from './components/news';
import { ContactUs } from './components/contactUs';
import { Footer } from './components/footer';
import { ArrowButton } from './components/arrowButton';
import { infoPersonal } from '../../data';

export const Main = () => {

    return (
        <>
           {/* <div className="fh5co-loader"></div> */}
	
            <div id="page">	
              <Header name={ infoPersonal.name } profession={ infoPersonal.profession } urlLinkedin={ infoPersonal.urlLinkedin }/>

              <AboutMe infoPersonal={ infoPersonal }/>

              <MyResume />             

              <MyServices />

              <Skills />

              <Works />

              <News />     

              <ContactUs />     

            </div>

            <Footer />

            <ArrowButton />
        </>
    )
}
