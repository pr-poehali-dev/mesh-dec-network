import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Technology = () => {
  const technologies = [
    {
      name: 'B.A.T.M.A.N.',
      description: 'Better Approach To Mobile Ad-hoc Networking — протокол динамической маршрутизации для mesh-сетей',
      pros: ['Автоматическое обнаружение узлов', 'Оптимизация маршрутов', 'Устойчивость к отказам'],
    },
    {
      name: 'OLSR',
      description: 'Optimized Link State Routing — проактивный протокол маршрутизации с оптимизацией топологии',
      pros: ['Низкая задержка', 'Масштабируемость', 'MPR оптимизация'],
    },
    {
      name: 'IEEE 802.11s',
      description: 'Стандарт Wi-Fi для mesh-сетей с автоматической маршрутизацией и самоконфигурацией',
      pros: ['Стандартизация', 'Интеграция с Wi-Fi', 'Поддержка оборудования'],
    },
  ];

  const protocols = [
    { icon: 'Lock', name: 'WPA3', desc: 'Шифрование трафика' },
    { icon: 'Route', name: 'HWMP', desc: 'Гибридная маршрутизация' },
    { icon: 'Radio', name: '802.11ax', desc: 'Wi-Fi 6 поддержка' },
    { icon: 'Shield', name: 'IPsec', desc: 'Защита данных' },
  ];

  return (
    <section id="technology" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Используемые технологии</h2>
          <p className="text-xl text-muted-foreground">
            Современные протоколы и стандарты для надёжной mesh-сети
          </p>
        </div>

        <Tabs defaultValue="batman" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="batman">B.A.T.M.A.N.</TabsTrigger>
            <TabsTrigger value="olsr">OLSR</TabsTrigger>
            <TabsTrigger value="ieee">IEEE 802.11s</TabsTrigger>
          </TabsList>

          {technologies.map((tech, index) => (
            <TabsContent key={tech.name} value={tech.name.toLowerCase().split('.')[0]} className="animate-fade-in">
              <Card className="bg-background border-primary/30">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Cpu" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{tech.name}</h3>
                      <p className="text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Преимущества:</h4>
                    {tech.pros.map((pro) => (
                      <div key={pro} className="flex items-center gap-3">
                        <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0" />
                        <span>{pro}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {protocols.map((protocol, index) => (
            <Card 
              key={protocol.name}
              className="bg-background border-border hover:border-primary/50 transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 text-center">
                <Icon name={protocol.icon as any} size={32} className="text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-1">{protocol.name}</h4>
                <p className="text-sm text-muted-foreground">{protocol.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
