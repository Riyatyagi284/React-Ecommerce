import { clients } from "../constants";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';   
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
    <OwlCarousel items={4}  
         className="owl-theme" loop={true} nav={false} margin={22} dots={false} autoplay={true} autoplayTimeout={3000}
         responsive={{
          0: {
          items: 1
        },
        766: {
          items: 3
        },
        1000: {
          items: 4
        },
        1200: {
          items: 5
        }

      }}>  
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5 item`}>
          <img src={client.logo} alt="client_logo" loading="lazy" className="sm:w-[192px] w-[100px] object-contain"  style={{width:"100%", height:"260px"}} />
        </div>
      ))}
      </OwlCarousel>
    </div>
  </section>
);

export default Clients;
