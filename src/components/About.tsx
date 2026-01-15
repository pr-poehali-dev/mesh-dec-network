import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const features = [
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Шифрование end-to-end и полная приватность данных',
    },
    {
      icon: 'Zap',
      title: 'Скорость',
      description: 'Прямое соединение между узлами без посредников',
    },
    {
      icon: 'Network',
      title: 'Надёжность',
      description: 'Автоматическая маршрутизация при отказе узлов',
    },
    {
      icon: 'Users',
      title: 'Децентрализация',
      description: 'Нет единой точки отказа или контроля',
    },
  ];

  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании</h2>
          <p className="text-xl text-muted-foreground">
            Мы создаём инфраструктуру для действительно свободного и устойчивого интернета. 
            Наша mesh-сеть позволяет устройствам обмениваться данными напрямую, 
            формируя децентрализованную сеть без единого центра управления.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="bg-background border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon name={feature.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Globe" size={48} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Наша миссия</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Предоставить каждому возможность участвовать в построении открытой, 
                    устойчивой и приватной сети. Мы верим, что интернет должен принадлежать 
                    пользователям, а не корпорациям или правительствам.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
