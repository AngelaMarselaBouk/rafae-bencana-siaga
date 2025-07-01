
import React from 'react';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export const StatusAlert: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const statusData = [
    {
      title: 'Stasiun Monitoring Benanain',
      location: 'Sungai Benanain',
      level: '145',
      status: 'Siaga 2',
      statusColor: 'bg-orange-400',
      time: '11:30'
    },
    {
      title: 'Stasiun Pemantauan Malibaca',
      location: 'Sungai Malibaca',
      level: '132',
      status: 'Siaga 3',
      statusColor: 'bg-yellow-400',
      time: '11:30'
    },
    {
      title: 'Stasiun Pengawasan Tafeto',
      location: 'Sungai Tafeto',
      level: '118',
      status: 'Siaga 3',
      statusColor: 'bg-yellow-400',
      time: '11:30'
    },
    {
      title: 'Stasiun Observasi Motaain',
      location: 'Sungai Motaain',
      level: '98',
      status: 'Normal',
      statusColor: 'bg-green-400',
      time: '11:30'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      <div className="p-6 text-white max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="sm" className="text-white p-2" onClick={onBack}>
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-xl font-bold">Status Siaga - Atambua</h1>
        </div>

        {/* Status Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {statusData.map((item, index) => (
            <Card key={index} className={`${item.statusColor} text-white shadow-lg`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs opacity-90">{item.location}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <AlertTriangle size={16} />
                      <span className="text-xs">{item.status}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs opacity-75">{item.time}</p>
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
          <CardContent className="p-4">
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2">Ringkasan Status</h3>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-green-200">Normal: 1</p>
                </div>
                <div>
                  <p className="font-semibold text-yellow-200">Siaga 3: 2</p>
                </div>
                <div>
                  <p className="font-semibold text-orange-200">Siaga 2: 1</p>
                </div>
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
