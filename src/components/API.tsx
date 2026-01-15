import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const API = () => {
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);

  const copyToClipboard = (text: string, endpoint: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const endpoints = [
    {
      method: 'GET',
      path: '/api/v1/nodes',
      description: 'Получить список всех активных узлов в сети',
      example: `curl -X GET https://api.meshnet.io/v1/nodes \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
      response: `{
  "nodes": [
    {
      "id": "node_abc123",
      "status": "active",
      "location": {"lat": 55.7558, "lon": 37.6173},
      "connections": 4,
      "uptime": 99.8
    }
  ]
}`,
    },
    {
      method: 'POST',
      path: '/api/v1/nodes',
      description: 'Зарегистрировать новый узел в mesh-сети',
      example: `curl -X POST https://api.meshnet.io/v1/nodes \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "office-node-1",
    "location": {"lat": 55.7558, "lon": 37.6173}
  }'`,
      response: `{
  "id": "node_abc123",
  "status": "registered",
  "api_key": "node_key_xyz789"
}`,
    },
    {
      method: 'GET',
      path: '/api/v1/routes',
      description: 'Получить оптимальные маршруты между узлами',
      example: `curl -X GET https://api.meshnet.io/v1/routes?from=node_abc&to=node_xyz \\
  -H "Authorization: Bearer YOUR_API_KEY"`,
      response: `{
  "routes": [
    {
      "hops": ["node_abc", "node_def", "node_xyz"],
      "latency_ms": 45,
      "quality": 0.92
    }
  ]
}`,
    },
  ];

  const sdks = [
    {
      lang: 'JavaScript',
      icon: 'Code2',
      code: `import MeshNet from '@meshnet/sdk';

const client = new MeshNet({
  apiKey: 'YOUR_API_KEY'
});

const nodes = await client.nodes.list();
console.log(nodes);`,
    },
    {
      lang: 'Python',
      icon: 'FileCode',
      code: `from meshnet import Client

client = Client(api_key='YOUR_API_KEY')

nodes = client.nodes.list()
print(nodes)`,
    },
  ];

  return (
    <section id="api" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">API для разработчиков</h2>
          <p className="text-xl text-muted-foreground">
            Простая интеграция с вашими приложениями и сервисами
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          <Card className="bg-background border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Icon name="Key" size={24} className="text-primary" />
                Быстрый старт
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">1.</span>
                  <span>Зарегистрируйтесь на платформе и получите API ключ</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <span>Установите SDK для вашего языка программирования</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">3.</span>
                  <span>Используйте API для управления узлами и маршрутами</span>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Tabs defaultValue="endpoints" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="endpoints">REST API</TabsTrigger>
              <TabsTrigger value="sdk">SDK примеры</TabsTrigger>
            </TabsList>

            <TabsContent value="endpoints" className="space-y-6 mt-6">
              {endpoints.map((endpoint, idx) => (
                <Card key={idx} className="bg-background border-border">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded text-xs font-bold ${
                        endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm text-primary">{endpoint.path}</code>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{endpoint.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-semibold">Пример запроса:</h4>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(endpoint.example, `req-${idx}`)}
                        >
                          <Icon name={copiedEndpoint === `req-${idx}` ? 'Check' : 'Copy'} size={16} />
                        </Button>
                      </div>
                      <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto">
                        <code>{endpoint.example}</code>
                      </pre>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-semibold">Ответ:</h4>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(endpoint.response, `res-${idx}`)}
                        >
                          <Icon name={copiedEndpoint === `res-${idx}` ? 'Check' : 'Copy'} size={16} />
                        </Button>
                      </div>
                      <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto">
                        <code>{endpoint.response}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="sdk" className="space-y-6 mt-6">
              {sdks.map((sdk, idx) => (
                <Card key={idx} className="bg-background border-border">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon name={sdk.icon as any} size={24} className="text-primary" />
                      <CardTitle>{sdk.lang}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-semibold">Пример использования:</h4>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(sdk.code, `sdk-${idx}`)}
                      >
                        <Icon name={copiedEndpoint === `sdk-${idx}` ? 'Check' : 'Copy'} size={16} />
                      </Button>
                    </div>
                    <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                      <code>{sdk.code}</code>
                    </pre>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <Icon name="BookOpen" size={48} className="text-primary flex-shrink-0" />
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2">Полная документация</h3>
                  <p className="text-muted-foreground">
                    Изучите все возможности API в нашей подробной документации
                  </p>
                </div>
                <Button size="lg" className="flex-shrink-0">
                  Открыть документацию
                  <Icon name="ExternalLink" size={18} className="ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default API;
