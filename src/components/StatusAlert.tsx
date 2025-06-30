
import React from 'react';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export const StatusAlert: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const statusData = [
    {
      title: 'Pompa Pasar Ikan',
      location: 'Laut',
      level: '216',
      status: 'Siaga 2',
      statusColor: 'bg-orange-400',
      time: '11:30'
    },
    {
      title: 'PS. Angka Hulu',
      location: 'Sungai',
      level: '216',
      status: 'Siaga 3',
      statusColor: 'bg-yellow-400',
      time: '11:30'
    },
    {
      title: 'Pompa Kali Duri (Kalijodo)',
      location: 'Kali Duri',
      level: '212',
      status: 'Siaga 3',
      statusColor: 'bg-yellow-400',
      time: '11:30'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-400 to-blue-500">
      <div className="p-4 text-white">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="sm" className="text-white p-2" onClick={onBack}>
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-lg font-bold">Status Siaga</h1>
        </div>

        {/* Status Cards */}
        <div className="space-y-3">
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
                    <p className="text-xs">cm ↓</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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
