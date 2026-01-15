import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Главная' },
    { id: 'about', label: 'О компании' },
    { id: 'services', label: 'Услуги' },
    { id: 'technology', label: 'Технологии' },
    { id: 'architecture', label: 'Архитектура' },
    { id: 'cases', label: 'Кейсы' },
    { id: 'team', label: 'Команда' },
    { id: 'api', label: 'API' },
    { id: 'contact', label: 'Контакты' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Network" size={28} className="text-primary" />
          <span className="text-xl font-bold">MeshNet</span>
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => scrollToSection(item.id)}
              className="text-sm hover:text-primary transition-colors"
            >
              {item.label}
            </Button>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
        </Button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="justify-start text-sm hover:text-primary transition-colors"
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
