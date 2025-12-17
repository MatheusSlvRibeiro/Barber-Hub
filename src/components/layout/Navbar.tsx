import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Scissors } from "lucide-react";

import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__content}>
                    {/* Logo */}
                    <Link to="/" className={styles.header__logo}>
                        <Scissors className={styles.header__logoIcon} />
                        <span className={styles.header__logoText}>
                            Barbearia Elite 
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className={styles.header__nav}>
                        <button 
                            className={styles.header__NavButton}
                            onClick={() => scrollToSection("sobre")}>
                            Sobre
                        </button>
                        <button 
                            className={styles.header__NavButton}
                            onClick={() => scrollToSection("servicos")}>
                            Serviços
                        </button>
                        <button 
                            className={styles.header__NavButton}
                            onClick={() => scrollToSection("avaliacoes")}>
                            Avaliações
                        </button>
                        <button 
                            className={styles.header__NavButton}
                            onClick={() => scrollToSection("localizacao")}>
                            Localização
                        </button>
                    </nav>

                    {/* CTA */}
                    <div >
                        <button 
                            className={styles.header__cta}
                            onClick={() => navigate("/agendar")}>
                            Agendar Horário
                        </button>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className={styles.header__menuIcon}
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                    <div className={`${styles.header__mobileMenu} ${isMenuOpen ? styles.isOpen : ""}`}>
                        <nav className={styles.header__mobileNav}>
                            <button 
                                className={styles.header__NavButton}
                                onClick={() => scrollToSection("sobre")}>
                                Sobre
                            </button>
                            <button 
                                className={styles.header__NavButton}
                                onClick={() => scrollToSection("servicos")}>
                                Serviços
                            </button>
                            <button
                                className={styles.header__NavButton}
                                onClick={() => scrollToSection("avaliacoes")}
                            >
                                Avaliações
                            </button>
                            <button
                                className={styles.header__NavButton}
                                onClick={() => scrollToSection("localizacao")}
                            >
                                Localização
                            </button>

                            <button 
                                className={styles.scheduleButton}
                                onClick={() => navigate("/agendar")}>
                                Agendar Horário
                            </button>
                        </nav>
                    </div>
            </div>
        </header>
    );
};

export default Navbar;
