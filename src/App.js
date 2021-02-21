import { Header } from './header';
import { AboutMe } from './aboutMe';
import { MyResume } from './myResume';
import { Skills } from './skills';
import { MyServices } from './myServices';
import { Works } from './works';
import { News } from './news';
import { ContactUs } from './contactUs';
import { Footer } from './footer';
import { ArrowButton } from './arrowButton';

export const App = () => {

    return (
        <>
           <div className="fh5co-loader"></div>
	
            <div id="page">	
              <Header/>

              <AboutMe />

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
