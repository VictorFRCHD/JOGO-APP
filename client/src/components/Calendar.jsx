import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, Users, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState('month'); // 'month' or 'list'

  // Mock events data
  const events = [
    {
      id: 1,
      title: 'Match Campus League',
      type: 'match',
      date: new Date(2024, 0, 15, 14, 30),
      location: 'Stade Central',
      participants: 10,
      color: 'blue'
    },
    {
      id: 2,
      title: 'Tournoi Arena',
      type: 'tournament',
      date: new Date(2024, 0, 18, 16, 0),
      location: 'Arena JOGO',
      participants: 32,
      color: 'purple'
    },
    {
      id: 3,
      title: 'Entraînement Équipe',
      type: 'training',
      date: new Date(2024, 0, 20, 18, 0),
      location: 'Terrain B',
      participants: 8,
      color: 'green'
    },
    {
      id: 4,
      title: 'Finale Corp League',
      type: 'match',
      date: new Date(2024, 0, 25, 19, 0),
      location: 'Stade Principal',
      participants: 12,
      color: 'red'
    }
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);

  const getEventsForDay = (day) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === day &&
             eventDate.getMonth() === currentDate.getMonth() &&
             eventDate.getFullYear() === currentDate.getFullYear();
    });
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const monthNames = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  const getEventTypeIcon = (type) => {
    switch(type) {
      case 'tournament': return <Trophy size={16} />;
      case 'match': return <CalendarIcon size={16} />;
      case 'training': return <Users size={16} />;
      default: return <CalendarIcon size={16} />;
    }
  };

  const getEventColor = (color) => {
    const colors = {
      blue: 'bg-blue-500',
      purple: 'bg-purple-500',
      green: 'bg-green-500',
      red: 'bg-red-500'
    };
    return colors[color] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4">
      {/* Header */}
      <div className="bg-gray-800 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <CalendarIcon className="text-purple-400" size={32} />
            <div>
              <h1 className="text-2xl font-bold text-white">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h1>
              <p className="text-gray-400 text-sm">Calendrier des événements</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={previousMonth}
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              <ChevronLeft className="text-white" size={20} />
            </button>
            <button
              onClick={nextMonth}
              className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              <ChevronRight className="text-white" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex mb-4 bg-gray-800 rounded-lg p-1">
        <button
          onClick={() => setView('month')}
          className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
            view === 'month' 
              ? 'bg-purple-500 text-white' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Vue Mensuelle
        </button>
        <button
          onClick={() => setView('list')}
          className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
            view === 'list' 
              ? 'bg-purple-500 text-white' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Vue Liste
        </button>
      </div>

      {view === 'month' ? (
        <div className="bg-gray-800 rounded-lg p-4">
          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {dayNames.map(day => (
              <div key={day} className="text-center text-gray-400 text-sm font-semibold py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Empty cells for days before month starts */}
            {Array.from({ length: startingDayOfWeek }).map((_, index) => (
              <div key={`empty-${index}`} className="aspect-square" />
            ))}

            {/* Days of the month */}
            {Array.from({ length: daysInMonth }).map((_, index) => {
              const day = index + 1;
              const dayEvents = getEventsForDay(day);
              const isToday = 
                day === new Date().getDate() &&
                currentDate.getMonth() === new Date().getMonth() &&
                currentDate.getFullYear() === new Date().getFullYear();

              return (
                <div
                  key={day}
                  className={`aspect-square bg-gray-700 rounded-lg p-2 ${
                    isToday ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  <div className={`text-sm font-semibold mb-1 ${
                    isToday ? 'text-purple-400' : 'text-white'
                  }`}>
                    {day}
                  </div>
                  <div className="space-y-1">
                    {dayEvents.slice(0, 2).map(event => (
                      <div
                        key={event.id}
                        className={`${getEventColor(event.color)} rounded px-1 py-0.5 text-xs text-white truncate`}
                      >
                        {event.title.split(' ')[0]}
                      </div>
                    ))}
                    {dayEvents.length > 2 && (
                      <div className="text-xs text-gray-400">+{dayEvents.length - 2}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {events.sort((a, b) => a.date - b.date).map(event => (
            <div key={event.id} className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-start space-x-4">
                <div className={`${getEventColor(event.color)} p-3 rounded-lg`}>
                  {getEventTypeIcon(event.type)}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg">{event.title}</h3>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock size={14} className="mr-2" />
                      {event.date.toLocaleDateString('fr-FR', { 
                        day: '2-digit', 
                        month: 'long', 
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin size={14} className="mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Users size={14} className="mr-2" />
                      {event.participants} participants
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition-colors">
                  Détails
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Calendar;
