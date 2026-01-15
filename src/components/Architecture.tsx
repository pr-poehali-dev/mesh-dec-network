import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Architecture = () => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const nodes = [
    { id: 1, x: 50, y: 20, type: 'gateway', label: 'Gateway' },
    { id: 2, x: 20, y: 50, type: 'node', label: 'Node 1' },
    { id: 3, x: 50, y: 50, type: 'node', label: 'Node 2' },
    { id: 4, x: 80, y: 50, type: 'node', label: 'Node 3' },
    { id: 5, x: 35, y: 80, type: 'client', label: 'Client 1' },
    { id: 6, x: 65, y: 80, type: 'client', label: 'Client 2' },
  ];

  const connections = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 6 },
  ];

  const layers = [
    {
      title: 'Физический уровень',
      icon: 'Radio',
      description: 'Wi-Fi 802.11ax, частоты 2.4/5 ГГц, mesh-роутеры',
    },
    {
      title: 'Канальный уровень',
      icon: 'Link',
      description: 'IEEE 802.11s, автоматическое обнаружение соседей',
    },
    {
      title: 'Сетевой уровень',
      icon: 'Route',
      description: 'B.A.T.M.A.N. маршрутизация, динамический выбор путей',
    },
    {
      title: 'Прикладной уровень',
      icon: 'Layers',
      description: 'REST API, WebSocket, пользовательские приложения',
    },
  ];

  return (
    <section id="architecture" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Сетевая архитектура</h2>
          <p className="text-xl text-muted-foreground">
            Многоуровневая структура для обеспечения надёжности и масштабируемости
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-8 text-center">Топология сети</h3>
              <div className="relative w-full aspect-square">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {connections.map((conn, idx) => {
                    const fromNode = nodes.find(n => n.id === conn.from)!;
                    const toNode = nodes.find(n => n.id === conn.to)!;
                    const isActive = hoveredNode === conn.from || hoveredNode === conn.to;
                    
                    return (
                      <line
                        key={idx}
                        x1={fromNode.x}
                        y1={fromNode.y}
                        x2={toNode.x}
                        y2={toNode.y}
                        stroke="currentColor"
                        className={isActive ? 'text-primary' : 'text-border'}
                        strokeWidth={isActive ? '0.5' : '0.3'}
                        opacity={isActive ? '1' : '0.4'}
                      />
                    );
                  })}

                  {nodes.map((node) => {
                    const isHovered = hoveredNode === node.id;
                    const size = node.type === 'gateway' ? 8 : node.type === 'node' ? 6 : 4;
                    
                    return (
                      <g
                        key={node.id}
                        onMouseEnter={() => setHoveredNode(node.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                        className="cursor-pointer"
                      >
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={size}
                          className={isHovered ? 'fill-primary' : 'fill-secondary'}
                          opacity={isHovered ? '1' : '0.8'}
                        />
                        {isHovered && (
                          <>
                            <circle
                              cx={node.x}
                              cy={node.y}
                              r={size + 2}
                              className="fill-primary"
                              opacity="0.2"
                              className="animate-pulse-slow"
                            />
                            <text
                              x={node.x}
                              y={node.y - size - 2}
                              textAnchor="middle"
                              className="fill-foreground text-[3px] font-semibold"
                            >
                              {node.label}
                            </text>
                          </>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>
              <div className="flex justify-center gap-6 mt-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-secondary"></div>
                  <span className="text-muted-foreground">Узлы</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Gateway</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {layers.map((layer, index) => (
              <Card
                key={layer.title}
                className="bg-background border-border hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={layer.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{layer.title}</h4>
                      <p className="text-sm text-muted-foreground">{layer.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Icon name="Zap" size={32} className="text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Автоматическая маршрутизация</h4>
                <p className="text-sm text-muted-foreground">Сеть сама находит оптимальные пути</p>
              </div>
              <div>
                <Icon name="RefreshCw" size={32} className="text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Самовосстановление</h4>
                <p className="text-sm text-muted-foreground">При отказе узла трафик перенаправляется</p>
              </div>
              <div>
                <Icon name="TrendingUp" size={32} className="text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Масштабируемость</h4>
                <p className="text-sm text-muted-foreground">Добавление новых узлов без настройки</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Architecture;
