
import React from 'react';
import { ArrowLeft, AlertTriangle, Thermometer } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export const StatusAlert: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const statusData = [
    {
      title: 'Stasiun Monitoring Atambua Barat',
      location: 'Sungai Berdao',
      level: '145',
      status: 'Siaga 2',
      statusColor: 'bg-gradient-to-br from-orange-400 to-orange-500',
      time: '11:30',
      temp: '28°C'
    },
    {
      title: 'Stasiun Pemantauan Atambua Selatan',
      location: 'Sungai Talau',
      level: '132',
      status: 'Siaga 3',
      statusColor: 'bg-gradient-to-br from-yellow-400 to-yellow-500',
      time: '11:30',
      temp: '27°C'
    },
    {
      title: 'Stasiun Pengawasan Raihat',
      location: 'Sungai Noel Mina',
      level: '118',
      status: 'Siaga 3',
      statusColor: 'bg-gradient-to-br from-yellow-400 to-yellow-500',
      time: '11:30',
      temp: '26°C'
    },
    {
      title: 'Stasiun Observasi Raimanuk',
      location: 'Sungai Motumoru',
      level: '98',
      status: 'Normal',
      statusColor: 'bg-gradient-to-br from-green-400 to-green-500',
      time: '11:30',
      temp: '25°C'
    },
    {
      title: 'Stasiun Monitoring Lamaknen',
      location: 'Sungai Malibaka',
      level: '156',
      status: 'Siaga 2',
      statusColor: 'bg-gradient-to-br from-orange-400 to-orange-500',
      time: '11:30',
      temp: '29°C'
    },
    {
      title: 'Stasiun Pemantauan Tasifeto Barat',
      location: 'Sungai Baukama',
      level: '142',
      status: 'Normal',
      statusColor: 'bg-gradient-to-br from-green-400 to-green-500',
      time: '11:30',
      temp: '27°C'
    },
    {
      title: 'Stasiun Pengawasan Tasifeto Timur',
      location: 'Sungai Baukoek',
      level: '124',
      status: 'Siaga 3',
      statusColor: 'bg-gradient-to-br from-yellow-400 to-yellow-500',
      time: '11:30',
      temp: '26°C'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      <div className="p-6 text-white max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="sm" className="text-white p-2 hover:bg-white/20" onClick={onBack}>
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-xl font-bold">Status Siaga - Kabupaten Belu</h1>
        </div>

        {/* Status Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {statusData.map((item, index) => (
            <Card key={index} className={`${item.statusColor} text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs opacity-90 mb-2">{item.location}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle size={14} />
                      <span className="text-xs font-medium">{item.status}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Thermometer size={14} />
                      <span className="text-xs">{item.temp}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs opacity-75 mb-1">{item.time}</p>
                    <p className="text-2xl font-bold">{item.level}</p>
                    <p className="text-xs">cm {item.status === 'Normal' ? '↔' : '↑'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Alert Summary */}
        <Card className="bg-white/20 backdrop-blur-sm border-white/30 text-white shadow-xl mb-4 mt-6">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="font-bold text-lg mb-4">Ringkasan Status Wilayah</h3>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="bg-green-500/20 rounded-lg p-3">
                  <p className="font-semibold text-green-200 text-lg">2</p>
                  <p className="text-green-100">Normal</p>
                </div>
                <div className="bg-yellow-500/20 rounded-lg p-3">
                  <p className="font-semibold text-yellow-200 text-lg">3</p>
                  <p className="text-yellow-100">Siaga 3</p>
                </div>
                <div className="bg-orange-500/20 rounded-lg p-3">
                  <p className="font-semibold text-orange-200 text-lg">2</p>
                  <p className="text-orange-100">Siaga 2</p>
                </div>
              </div>
              <div className="mt-4 text-xs opacity-80">
                <p>Total: 7 Stasiun Pemantauan Aktif</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wave Pattern */}
        <div className="relative h-20 mt-8">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 400 100" preserveAspectRatio="none">
            <path d="M0,50 Q100,20 200,50 T400,50 L400,100 L0,100 Z" fill="rgba(255,255,255,0.1)" />
            <path d="M0,60 Q100,30 200,60 T400,60 L400,100 L0,100 Z" fill="rgba(255,255,255,0.05)" />
          </svg>
        </div>
      </div>
    </div>
  );
};
