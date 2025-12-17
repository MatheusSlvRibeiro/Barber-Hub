import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-barbershop.jpg";
import styles from "./Herosection.module.scss";

const Herosection = () => {
    const navigate = useNavigate();

    const scrollToAbout = () => {
        const element = document.getElementById("sobre");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className={styles.container}>
            <div
                className={styles.backgroundImage}
                style={{ backgroundImage: `url(${heroImage})` }}
            />

            <div className={styles.backgroundOverlay} />

            <div className={styles.heroContent}>
                <div>
                    <p className={styles.title}>Tradição & Estilo</p>
                    <h1 className={styles.subtitle}>
                        A Arte de Ser <br />
                        <span className={styles.spanGradient}> Cavalheiro</span>
                    </h1>

                    <p className={styles.paragraph}>
                        Experiência premium em barbearia. Cortes precisos, barba
                        impecável e um ambiente que celebra a masculinidade
                        clássica.
                    </p>

                    <div className={styles.heroButton}>
                        <button
                            className={styles.scheduleButton}
                            onClick={() => navigate("/agendar")}
                        >
                            Agendar Horário
                        </button>

                        <button
                            className={styles.knowButton}
                            onClick={scrollToAbout}
                        >
                            Saiba Mais
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Herosection;
