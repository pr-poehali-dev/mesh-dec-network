import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Team = () => {
  const team = [
    {
      name: 'Алексей Иванов',
      role: 'CEO & Founder',
      initials: 'АИ',
      bio: '15 лет в сетевых технологиях, ex-CTO крупного ISP',
      color: 'bg-blue-500',
    },
    {
      name: 'Мария Петрова',
      role: 'CTO',
      initials: 'МП',
      bio: 'PhD в области распределённых систем, автор 20+ статей',
      color: 'bg-purple-500',
    },
    {
      name: 'Дмитрий Смирнов',
      role: 'Lead Network Engineer',
      initials: 'ДС',
      bio: 'Эксперт по протоколам маршрутизации, CCIE',
      color: 'bg-green-500',
    },
    {
      name: 'Екатерина Козлова',
      role: 'Security Lead',
      initials: 'ЕК',
      bio: 'Специалист по криптографии и сетевой безопасности',
      color: 'bg-orange-500',
    },
  ];

  return (
    <section id="team" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Команда</h2>
          <p className="text-xl text-muted-foreground">
            Эксперты с глубокими знаниями в сетевых технологиях
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <Card
              key={member.name}
              className="bg-background border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 text-center">
                <Avatar className={`w-24 h-24 mx-auto mb-4 ${member.color}`}>
                  <AvatarFallback className="text-white text-2xl font-bold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-3">Присоединяйтесь к команде</h3>
              <p className="text-muted-foreground">
                Мы постоянно ищем талантливых специалистов в области сетевых технологий
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Icon name="Users" size={32} className="text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Network Engineer</h4>
                <p className="text-sm text-muted-foreground">Full-time, Remote</p>
              </div>
              <div className="text-center">
                <Icon name="Code" size={32} className="text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Backend Developer</h4>
                <p className="text-sm text-muted-foreground">Full-time, Remote</p>
              </div>
              <div className="text-center">
                <Icon name="Shield" size={32} className="text-primary mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Security Engineer</h4>
                <p className="text-sm text-muted-foreground">Full-time, Remote</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Team;
