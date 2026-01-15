import Icon from '@/components/ui/icon';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Network" size={28} className="text-primary" />
              <span className="text-xl font-bold">MeshNet</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Децентрализованная сеть для устойчивого и свободного интернета
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              {['hero', 'about', 'services', 'technology'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {section === 'hero' ? 'Главная' : 
                     section === 'about' ? 'О компании' :
                     section === 'services' ? 'Услуги' : 'Технологии'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ресурсы</h4>
            <ul className="space-y-2">
              {['architecture', 'cases', 'team', 'api'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {section === 'architecture' ? 'Архитектура' :
                     section === 'cases' ? 'Кейсы' :
                     section === 'team' ? 'Команда' : 'API'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Mail" size={16} className="text-primary" />
                info@meshnet.io
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Phone" size={16} className="text-primary" />
                +7 (495) 123-45-67
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 MeshNet. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
