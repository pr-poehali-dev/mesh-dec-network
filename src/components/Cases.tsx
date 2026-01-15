import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Cases = () => {
  const cases = [
    {
      icon: 'Building2',
      title: 'Корпоративный кампус',
      client: 'TechCorp Inc.',
      challenge: 'Необходима устойчивая сеть для 15 зданий без прокладки кабелей',
      solution: '45 mesh-узлов, автоматическая маршрутизация, покрытие 100%',
      results: [
        { label: 'Uptime', value: '99.8%' },
        { label: 'Экономия', value: '60%' },
        { label: 'Развёртывание', value: '2 недели' },
      ],
      tags: ['B2B', 'Масштаб'],
    },
    {
      icon: 'Home',
      title: 'Умный район',
      client: 'SmartCity Project',
      challenge: 'Интернет для жителей в районе с плохой инфраструктурой',
      solution: 'Mesh-сеть на базе роутеров жителей, общий шлюз',
      results: [
        { label: 'Жителей', value: '500+' },
        { label: 'Узлов', value: '120' },
        { label: 'Стоимость', value: '$5/мес' },
      ],
      tags: ['B2C', 'Сообщество'],
    },
    {
      icon: 'Waves',
      title: 'Экстренная связь',
      client: 'Служба ЧС',
      challenge: 'Связь в зоне бедствия при отказе инфраструктуры',
      solution: 'Мобильные mesh-узлы, быстрое развёртывание',
      results: [
        { label: 'Развёртывание', value: '30 мин' },
        { label: 'Покрытие', value: '5 км²' },
        { label: 'Пользователей', value: '200+' },
      ],
      tags: ['ЧС', 'Мобильность'],
    },
  ];

  return (
    <section id="cases" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Кейсы и примеры решений</h2>
          <p className="text-xl text-muted-foreground">
            Реальные проекты с измеримыми результатами
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <Card
              key={item.title}
              className="bg-background border-border hover:border-primary/50 transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name={item.icon as any} size={28} className="text-primary" />
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <p className="text-sm text-muted-foreground font-medium">{item.client}</p>
              </CardHeader>

              <CardContent className="flex-grow flex flex-col">
                <div className="mb-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Задача:</h4>
                    <p className="text-sm text-muted-foreground">{item.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Решение:</h4>
                    <p className="text-sm text-muted-foreground">{item.solution}</p>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold mb-3">Результаты:</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {item.results.map((result) => (
                      <div key={result.label} className="text-center">
                        <div className="text-lg font-bold text-primary mb-1">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
