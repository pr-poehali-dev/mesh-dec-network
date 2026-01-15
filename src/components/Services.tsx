import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      icon: 'Server',
      title: 'Развёртывание узлов',
      description: 'Установка и настройка узлов mesh-сети для вашей организации',
      features: ['Консультация', 'Установка оборудования', 'Настройка ПО', 'Техподдержка'],
    },
    {
      icon: 'Layers',
      title: 'Сетевая интеграция',
      description: 'Интеграция mesh-сети с существующей инфраструктурой',
      features: ['Анализ текущей сети', 'Планирование', 'Безопасная миграция', 'Мониторинг'],
    },
    {
      icon: 'Code',
      title: 'API и SDK',
      description: 'Инструменты для разработчиков для создания приложений на базе mesh-сети',
      features: ['REST API', 'WebSocket API', 'SDK для JS/Python', 'Документация'],
    },
    {
      icon: 'Headphones',
      title: 'Консалтинг',
      description: 'Экспертная поддержка в построении децентрализованной инфраструктуры',
      features: ['Анализ потребностей', 'Архитектура решения', 'Обучение команды', 'Поддержка 24/7'],
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Услуги</h2>
          <p className="text-xl text-muted-foreground">
            Полный спектр решений для построения и эксплуатации mesh-сети
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name={service.icon as any} size={28} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group">
                  Узнать подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
