import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const amenities = [
    { icon: "Wifi", title: "Wi-Fi", desc: "Высокоскоростной интернет" },
    { icon: "Droplets", title: "Чан с подогревом", desc: "Купель под открытым небом" },
    { icon: "Trees", title: "Терраса", desc: "Панорамный вид на лес" },
    { icon: "Car", title: "Парковка", desc: "Бесплатная парковка" },
    { icon: "Utensils", title: "Кухня", desc: "Полностью оборудована" },
    { icon: "Flame", title: "Мангал", desc: "Зона для барбекю" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img 
            src="https://cdn.poehali.dev/files/c6f67cff-a341-4532-860b-2d8d1b29bea9.PNG" 
            alt="НаВысоте" 
            className="h-16 md:h-20"
          />
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Главная
            </a>
            <a href="#amenities" className="text-foreground hover:text-primary transition-colors">
              Удобства
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
              Цены
            </a>
            <a href="#location" className="text-foreground hover:text-primary transition-colors">
              Расположение
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </div>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => setShowBooking(true)}
          >
            Забронировать
          </Button>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative pt-20"
        data-animate
      >
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isVisible["home"] ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src="https://cdn.poehali.dev/projects/91dff6c9-c539-4cb8-a7c1-a31a640d5be8/files/398406fc-363d-4106-ac6b-b7a1225e0356.jpg"
            alt="Eco House"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div
          className={`container mx-auto px-4 text-center relative z-10 transition-all duration-1000 ${
            isVisible["home"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Уединение в природе
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Аренда загородного дома посуточно в окружении соснового леса
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
            onClick={() => setShowBooking(true)}
          >
            Забронировать дом
          </Button>
        </div>
      </section>

      <section id="amenities" className="py-24 bg-card" data-animate>
        <div className="container mx-auto px-4">
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-16 text-foreground transition-all duration-700 ${
              isVisible["amenities"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Удобства
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((item, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-500 bg-background border-border ${
                  isVisible["amenities"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name={item.icon} size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-background" data-animate>
        <div className="container mx-auto px-4">
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-16 text-foreground transition-all duration-700 ${
              isVisible["pricing"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Цены
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card
              className={`hover:scale-105 transition-all duration-500 bg-card border-border ${
                isVisible["pricing"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Будни</h3>
                <div className="text-4xl font-bold text-primary mb-4">8 000 ₽</div>
                <p className="text-muted-foreground mb-6">за сутки</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-accent" />
                    До 6 человек
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-accent" />
                    Все удобства
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-accent" />
                    Баня включена
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className={`hover:scale-105 transition-all duration-500 border-2 border-accent bg-accent/5 ${
                isVisible["pricing"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <CardContent className="p-8">
                <div className="text-sm font-semibold text-accent mb-2">ПОПУЛЯРНОЕ</div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Выходные</h3>
                <div className="text-4xl font-bold text-accent mb-4">12 000 ₽</div>
                <p className="text-muted-foreground mb-6">за сутки</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-accent" />
                    До 8 человек
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-accent" />
                    Все удобства
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-accent" />
                    Баня + барбекю
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-accent" />
                    Ранний заезд
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className={`hover:scale-105 transition-all duration-500 bg-card border-border ${
                isVisible["pricing"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Неделя</h3>
                <div className="text-4xl font-bold text-primary mb-4">50 000 ₽</div>
                <p className="text-muted-foreground mb-6">7 суток</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-accent" />
                    До 8 человек
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-accent" />
                    Все включено
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-accent" />
                    Скидка 15%
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-accent" />
                    Уборка включена
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="location" className="py-24 bg-card" data-animate>
        <div className="container mx-auto px-4">
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-16 text-foreground transition-all duration-700 ${
              isVisible["location"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Расположение
          </h2>
          <div
            className={`max-w-4xl mx-auto transition-all duration-700 ${
              isVisible["location"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-background rounded-lg p-8 mb-8 border border-border">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Как добраться</h3>
                  <div className="space-y-4 text-foreground">
                    <div className="flex items-start gap-3">
                      <Icon name="Car" size={24} className="text-accent mt-1" />
                      <div>
                        <p className="font-semibold">На автомобиле</p>
                        <p className="text-muted-foreground">50 км от МКАД, 40 минут езды</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Train" size={24} className="text-accent mt-1" />
                      <div>
                        <p className="font-semibold">На электричке</p>
                        <p className="text-muted-foreground">Станция "Лесная", далее 5 км</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Рядом</h3>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="TreePine" size={20} className="text-accent" />
                      Сосновый лес — 100 м
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Waves" size={20} className="text-accent" />
                      Озеро — 500 м
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="ShoppingCart" size={20} className="text-accent" />
                      Магазин — 2 км
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="UtensilsCrossed" size={20} className="text-accent" />
                      Ресторан — 3 км
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-muted h-96 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Здесь будет карта</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-background" data-animate>
        <div className="container mx-auto px-4">
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-16 text-foreground transition-all duration-700 ${
              isVisible["contact"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Контакты
          </h2>
          <div
            className={`max-w-2xl mx-auto transition-all duration-700 ${
              isVisible["contact"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Телефон</p>
                      <a href="tel:+79001234567" className="text-xl font-semibold text-foreground hover:text-accent transition-colors">
                        +7 (900) 123-45-67
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:info@ecohouse.ru" className="text-xl font-semibold text-foreground hover:text-accent transition-colors">
                        info@ecohouse.ru
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="MessageCircle" size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Telegram</p>
                      <a href="https://t.me/ecohouse" className="text-xl font-semibold text-foreground hover:text-accent transition-colors">
                        @ecohouse
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-border">
                  <Button 
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90" 
                    size="lg"
                    onClick={() => setShowBooking(true)}
                  >
                    Забронировать сейчас
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <img 
            src="https://cdn.poehali.dev/files/c6f67cff-a341-4532-860b-2d8d1b29bea9.PNG" 
            alt="НаВысоте" 
            className="h-20 md:h-24 mx-auto mb-4 brightness-0 invert"
          />
          <p className="text-lg">© 2024 НаВысоте. Все права защищены.</p>
        </div>
      </footer>

      {showBooking && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowBooking(false)}
        >
          <Card 
            className="max-w-md w-full bg-card border-border animate-fade-in-scale"
            onClick={(e) => e.stopPropagation()}
          >
            <CardContent className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-foreground">Забронировать</h3>
                <button 
                  onClick={() => setShowBooking(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name="X" size={24} />
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Позвонить</p>
                    <a 
                      href="tel:+79001234567" 
                      className="text-xl font-semibold text-foreground hover:text-accent transition-colors"
                    >
                      +7 (900) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="MessageCircle" size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Написать в Telegram</p>
                    <a 
                      href="https://t.me/ecohouse" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-semibold text-foreground hover:text-accent transition-colors"
                    >
                      @ecohouse
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground text-center mt-6">
                Выберите удобный способ связи для бронирования
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;